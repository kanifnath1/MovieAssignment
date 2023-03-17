import React from "react";
import { useParams } from "react-router-dom";

const Single = () => {
  const {id} = useParams(); //Get data from the url
  return<>
  <h1>hey id is{id}</h1>
  </>;
};

export default Single;
