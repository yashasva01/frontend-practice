import * as React from "react";
import "./mainBodyStyles.css";
import {
  GET_ALL_RECORDS,
  //BACKEND_URL,
  //GET_RECORD_BY_ID,
  //UPDATE_RECORDS,
} from "../../constants/beEndpoints";
import makeRequest from "../../utils/makeRequest";
// import NoDataPage from "../../pages";
import NoDataPage from "../../pages/noData";
import Card from "../../components/songCard";
//import HamburgerMenu from "../hamburgerMenu";
import hamburgerIcon from "../../assets/icon-genre.svg";
import gridIcon from "../../assets/icon-grid.svg";
import GenreFilter from "../GenreFilter";

function MainBody() {
  const [records, setRecords] = React.useState([]);
  const [isClicked, setIsClicked] = React.useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  React.useEffect(() => {
    makeRequest(GET_ALL_RECORDS).then((response) => {
      setRecords(response.data);
    });
  }, []);

  const genre = [
    ...new Set(
      records.map((record) => {
        return record.genre.name;
      })
    ),
  ];

  return (
    <div className="mainBody">
      {records && records.length > 0 ? (
        <div className="AllSongs">
          <div className="filterByGenre">
            <p id="allsongs">{isClicked ? "Genre" : "All Songs"}</p>
            <img
              src={isClicked ? gridIcon : hamburgerIcon}
              alt="THE Genre button"
              onClick={handleClick}
            />
          </div>
          {isClicked ? (
            <GenreFilter
              genre={genre}
              data={records}
              setRecords={() => {
                setRecords();
              }}
            />
          ) : (
            <div className="songCardContainer">
              {records.map((record) => {
                return <Card key={record.id} data={record} id={record.id} />;
              })}
            </div>
          )}
        </div>
      ) : (
        <NoDataPage />
      )}
    </div>
  );
}

export default MainBody;
