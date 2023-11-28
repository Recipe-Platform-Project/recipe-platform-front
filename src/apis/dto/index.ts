import { error } from "console";
import { GetRankingBoardListResponseDto, GetRecipeListResponseDto } from "./response/board";
import axios from "axios";
import ResponseDto from "./response";
import { GetPopulerListResponseDto } from "./response/search";
import { SignInRequestDto } from "./request/auth";
import { SignInResponseDto } from "./response/auth";
import { GetSignInUserResponseDto, GetUserResponseDto, PatchNicknameResponseDto } from "./response/user";
import PatchNicknameRequestDto from "./response/user/patch-nickname.response.dto";

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
const GET_RANKING_BOARD_LIST_URL = () => `${API_DOMAIN}/board/ranking/board-list`;
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

// description: sign in request //
export const signInRequest = async (requestBody: SignInRequestDto) => {
    const result = await axios.post(SIGN_IN_URL(), requestBody)
        .then(response => {
            const responseBody: SignInResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        });
    return result;
};

// description: get sign in user API end point //
const GET_SIGN_IN_USER_URL = () => `${API_DOMAIN}/user`;

// description: get user API end point //
const GET_USER_URL = (email: string) => `${API_DOMAIN}/user/${email}`;

// description: patch nickname API end point //
const PATCH_NICKNAME_URL = () => `${API_DOMAIN}/user/nickname`;

// description: patch profile image API end point //
const PATCH_PROFILE_IMAGE_URL = () => `${API_DOMAIN}/user/profile-image`;

// description: get sign in user request //
export const getSignInUserRequest = async (token: string) => {
    const result = await axios.get(GET_SIGN_IN_USER_URL(), authorization(token))
        .then(response => {
            const responseBody: GetSignInUserResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        });
    return result;
};

export const getUserRequest = async (email: string) => {
    const result = await axios.get(GET_USER_URL(email))
        .then(response => {
            const responseBody: GetUserResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        });
    return result;
};

export const patchNicknameRequest = async (requestBody: PatchNicknameRequestDto, token: string) => {
    const result = await axios.patch(PATCH_NICKNAME_URL(), requestBody, authorization(token))
        .then(response => {
            const responseBody: PatchNicknameResponseDto = response.data;
            const { code } = responseBody;
            return code;
        })
        .catch(error => {
            const responseBody: ResponseDto = error.response.data;
            const { code } = responseBody;
            return code;
        });
    return result;
}
