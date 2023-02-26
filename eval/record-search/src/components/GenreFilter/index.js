import * as React from "react";
import "./GenereFilterStyle.css";
import Card from "../songCard";

function GenreFilter({ genre, data, setRecords }) {
  const [genreImg, setGenreImg] = React.useState("Pop");
  const [filterdData, setFilterdData] = React.useState([]);
  React.useEffect(() => {
    setFilterdData(data.filter((record) => record.genre.name === genreImg));
  }, [genreImg, data]);
  const genreType = genre;
  function handleChange(e) {
    setGenreImg(e.target.value);
  }
  return (
    <div className="GenereFilter">
      <div className="filterContainer">
        <img
          className="genreImg"
          src={require(`../../assets/genre-${genreImg.toLowerCase()}.png`)}
          alt="Genre Filter"
        />
        <select
          name="Genre"
          id="Genre"
          className="genreSelector"
          onChange={handleChange}
        >
          {genreType.map((genre, index) => {
            return (
              <option value={genre} key={index}>
                {genre}
              </option>
            );
          })}
        </select>
      </div>
      <div className="songCardContainer">
        {filterdData.map((record) => {
          return <Card key={record.id} data={record} id={record.id} />;
        })}
      </div>
    </div>
  );
}

export default GenreFilter;
