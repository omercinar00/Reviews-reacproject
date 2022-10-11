import React from "react";
import Card from "./component/card/Card";
import Header from "./component/header/Header";
import data from "./helper/data";

function App() {

  return (
    <>
      <Header />
      <Card data={data}/>
    </>
  );
}

export default App;
