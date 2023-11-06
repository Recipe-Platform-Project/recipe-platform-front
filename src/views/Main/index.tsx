import React, { useEffect, useState, useRef, forwardRef } from "react";
import "./style.css";
import LatelyRecipe from "components/LatelyListItem";
import ChefList2 from "components/ChefListItem copy";
import BestBoardList from "components/BestBoardListItem";
import NewBoardList from "components/NewBoardListItem";
import KeywordBoardList from "components/KeywordBoardListItem";

//					component: 메인 페이지 					//
export default function Main() {
  
  //					render: 메인 페이지 렌더링					//
  return (
    <div id="main-page">
      <BestBoardList />
      <ChefList2 />
      <NewBoardList />
      <KeywordBoardList />
      <LatelyRecipe />
    </div>
  );
}
