import { error } from "console";
import { GetRankingBoardListResponseDto, GetRecipeListResponseDto } from "./response/board";
import axios from "axios";
import ResponseDto from "./response";
import { GetPopulerListResponseDto } from "./response/search";

// description: Domain URL //
const DOMAIN = 'http://localhost:4000';

// description: API Domain 주소 //
const API_DOMAIN = `${DOMAIN}/api/v1`;
// description: Authorizaition Header //
const authorization = (token: string) => {
    return { headers: { Authorization: `Bearer ${token}` } };
};

// description: sign up API end point //
const SIGN_UP_URL = () => `${API_DOMAIN}/auth/sign-up`;
// description: sigin in API end point //
const SIGN_IN_URL = () => `${API_DOMAIN}/auth/sign-in`;

// description: get ranking board list API end point //
const GET_RANKING_BOARD_LIST_URL = () => `${API_DOMAIN}/ranking/board-list`;
// description: get recipe list API end point //
const GET_RECIPE_LIST_URL = (searchWord: string) => `${API_DOMAIN}/board/recipe-list/${searchWord}`

// description: get ranking board list request //
export const getRankingListRequest = async () => {
    const result = axios.get(GET_RANKING_BOARD_LIST_URL())
        .then(response => {
            const responseBody: GetRankingBoardListResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            const responseBody: ResponseDto = error.responsd.data;
            return responseBody;
        });
    return result;
};

// description: get recipe list request //
export const getRecipeListRequest = async (searchWord: string) => {
    const result = await axios.get(GET_RECIPE_LIST_URL(searchWord))
        .then(response => {
            const responseBody:GetRecipeListResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        });
    return result;
};

// description: get popular list API end point //
const GET_POPULAR_LIST_URL = () => `${API_DOMAIN}/board/recipe-list/populer-word`;

// description: get popular list request //
export const getPopulerListRequest = async () => {
    const result = await axios.get(GET_POPULAR_LIST_URL())
        .then(response => {
            const responseBody: GetPopulerListResponseDto = response.data;
            return responseBody;
        })
        .catch(error=> {
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        });
        return result;
};

