import axios from "axios";
import ResponseDto from "./response";
import GetBest3BoardListResponseDto from "./response/board/get-best3-board-list.response.dto";
import { GetCategoryCommendBoardListResponseDto, GetNewBoardListResponseDto } from "./response/board";
import GetTop30ChefListResponseDto from "./response/chef/get-top30-chef-list.response.dto";

// description: Domain URL //
const DOMAIN = "http://localhost:4000";

// description: API Domain 주소 //
const API_DOMAIN = `${DOMAIN}/api/v1`;

// description: get best3 board list API end point //
const GET_BEST3_BOARD_LIST_URL = () => `${API_DOMAIN}/board/best-3`;
// description: get best3 board list API end point //
const GET_NEW_BOARD_LIST_URL = () => `${API_DOMAIN}/board/new-list`;
// description: get category commend board list API end point //
const GET_CATEGORY_COMMEND_BOARD_LIST_URL = (category: string) =>
  `${API_DOMAIN}/board/category/${category}`;

// description: get best3 board list request //
export const getBest3BoardListRequest = async () => {
    const result = await axios
      .get(GET_BEST3_BOARD_LIST_URL())
      .then((response) => {
        const responseBody: GetBest3BoardListResponseDto = response.data;
        return responseBody;
      })
      .catch((error) => {
        const responseBody: ResponseDto = error.response.data;
        return responseBody;
      });
    return result;
  };

// description: get new board list request //
export const getNewBoardListRequest = async () => {
  const result = await axios
    .get(GET_NEW_BOARD_LIST_URL())
    .then((response) => {
      const responseBody: GetNewBoardListResponseDto = response.data;
      return responseBody;
    })
    .catch((error) => {
      const responseBody: ResponseDto = error.response.data;
      return responseBody;
    });
  return result;
};

// description: get category commend board list request //
export const getCategoryCommendBoardListRequest = async (category: string) => {
  const result = await axios
    .get(GET_CATEGORY_COMMEND_BOARD_LIST_URL(category))
    .then((response) => {
      const responseBody: GetCategoryCommendBoardListResponseDto = response.data;
      return responseBody;
    })
    .catch((error) => {
      const responseBody: ResponseDto = error.response.data;
      return responseBody;
    });
  return result;
};

// description: get top30 chef list API end point //
const GET_TOP30_CHEF_LIST_URL = () => `${API_DOMAIN}/chef/top30-chef`;

// description: get top30 chef list request //
export const getTop30ChefListRequest = async () => {
  const result = await axios
    .get(GET_TOP30_CHEF_LIST_URL())
    .then((response) => {
      const responseBody: GetTop30ChefListResponseDto = response.data;
      return responseBody;
    })
    .catch((error) => {
      const responseBody: ResponseDto = error.response.data;
      return responseBody;
    });
  return result;
};