import * as React from "react";
// import { Header } from "../../components";
// import Header from "../../components/Header/index";
import "./noDataStyles.css";
import { useNavigate } from "react-router-dom";
import { home } from "../../constants";
const NoDataPage = () => {
  const navigate = useNavigate();
  return (
    <div className="NoDataPageBody">
      {/* <h1>no records</h1> */}
      <p>:((</p>
      <p> Seems a bit empty here</p>
      <button className="syncButton" onClick={navigate(home)}>
        {" "}
        sync{" "}
      </button>
    </div>
  );
};

export default NoDataPage;
