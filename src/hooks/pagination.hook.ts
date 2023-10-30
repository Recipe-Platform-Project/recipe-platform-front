import React, { useEffect, useState } from "react";
  
const useChefPagination = <T>(countPerPage: number) => {
    //					state: 현재 페이지 번호 상태					//
    const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
  
    //					state: 현재 섹션 번호 상태					//
    const [currentSectionNumber, setCurrentSectionNumber] = useState<number>(1);
  
    //					state: 보여줄 게시물 리스트 상태					//
    const [viewBoardList, setViewBoardList] = useState<T[]>([]);
  
    //					state: 전체 페이지 번호 상태					//
    const [totalPage, setTotalPage] = useState<number>(0);
  
    //					state: 전체 섹션 번호 상태					//
    const [totalSection, setTotalSection] = useState<number>(0);
  
    //					state: 전체 게시물 리스트 상태					//
    const [boardList, setBoardList] = useState<T[]>([]);
  
  
  
  //                    function: 보여줄 게시물 리스트 불러오기 함수                    //
  const setViewBoard = () => {
    const FIRST_INDEX = countPerPage * (currentPageNumber - 1);
    const LAST_INDEX = 30;
    const tmpList = boardList.filter(
      (item, index) => (index >= FIRST_INDEX && index < LAST_INDEX)
    );
    setViewBoardList(tmpList);
  };
  //					effect: 전체 게시물 리스트가 변경될 시 작업					//
  useEffect(() => {
    const totalPage = Math.floor((boardList.length - 1) / countPerPage) + 1;
    const totalSection = Math.floor((boardList.length - 1) / (countPerPage * 10)) + 1;
    setCurrentPageNumber(1);
    setCurrentSectionNumber(1);
    setTotalPage(totalPage);
    setTotalSection(totalSection);
    setViewBoard();
  }, [boardList]);

  //					effect: 현재 페이지가 변경될 시 보여줄 게시물 리스트 불러오기					//
  useEffect(() => {
    setViewBoard();
  }, [currentPageNumber]);
}

export default useChefPagination;