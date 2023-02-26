import * as React from "react";
import "./songCardStyles.css";
import axios from "axios";
import UnLikeImg from "../../assets/heart-gray.svg";
import Likeimg from "../../assets/heart-red.svg";
import makeRequest from "../../utils/makeRequest";
import { GET_RECORD_BY_ID, UPDATE_RECORDS } from "../../constants/beEndpoints";

function SongCard(data, id) {
  // {
  //     "id": "cd3cc1e3-e1e0-4ccd-bc67-747648985838",
  //     "name": "Lost",
  //     "imageUrl": "https://i.scdn.co/image/ab67616d0000b27386a8ab515de4b7aef28cd631",
  //     "artist": {
  //         "id": "496b0a85-2bfa-45bc-8d0f-57fe0ce55708",
  //         "name": "Maroon 5"
  //     },
  //     "genre": {
  //         "id": "128aa7f8-c943-48ce-b352-7edd26fa4c6e",
  //         "name": "Pop"
  //     }
  // }
  const [likeNum, setLikeNum] = React.useState(0);
  const [isLiked, setIsLiked] = React.useState(false);
  React.useEffect(() => {
    makeRequest(GET_RECORD_BY_ID(data.data.id)).then((response) => {
      setLikeNum(response.data.count);
      setIsLiked(response.data.like);
    });
  }, [isLiked, likeNum]);
  async function likeHandler(id) {
    // makeRequest(
    //   UPDATE_RECORDS(id, {
    //     like: !isLiked,
    //   })
    // ).then((response) => {
    //   console.log(response);
    //   // setLikeNum(response.data.count);
    //   // setIsLiked(response.data.like);
    // });
    const response = await axios.patch(
      `http://localhost:8080/api/records/${id}/likes`,
      { like: !isLiked },
      { headers: { Authorization: "Bearer QWlzaHdhcnlhIE4=" } }
    );
    setLikeNum(response.data.count);
    setIsLiked(response.data.like);
  }
  return (
    <div className="songCard" id={data.data.id}>
      <img src={data.data.imageUrl} alt="Album art"></img>
      <div className="songDetails">
        <div className="songTitle">
          <p id="SongName">{data.data.name}</p>
          <p id="SingerName">
            <b> {data.data.artist.name} </b>
          </p>
        </div>
        <div className="liker">
          <img
            className="likeButton"
            src={isLiked ? Likeimg : UnLikeImg}
            alt="like"
            onClick={() => {
              likeHandler(data.data.id);
            }}
          ></img>
          <p className="likeCount"> {likeNum} </p>
        </div>
      </div>
    </div>
  );
}

export default SongCard;
