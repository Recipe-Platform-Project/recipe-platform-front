import { SignInRequestDto, SignUpRequestDto } from "./request/auth";
import { SignInResponseDto, SignUpResponseDto } from "./response/auth";
import { GetSignInUserResponseDto, GetUserResponseDto, PatchNicknameResponseDto } from "./response/user";
import { PatchNicknameRequestDto } from "./request/user";
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

// description: Authorization Header //
const authorization = (token: string) => {
    return { headers : {Authorization: `Bearer ${token}`}};
};

// description: sign up API end point //
const SIGN_UP_URL = () => `${API_DOMAIN}/auth/signUp`;

// description: sign in API end point //
const SIGN_IN_URL = () => `${API_DOMAIN}/auth/signIn`;

// description: sign up request //
export const signUpRequest = async (requestBody: SignUpRequestDto) => {
    const result = await axios.post(SIGN_UP_URL(), requestBody)
        .then(response => {
            const responseBody: SignUpResponseDto = response.data;
            const { code } = responseBody;
            return code;
        })
        .catch(error => {
            const responseBody: ResponseDto = error.response.data;
            const { code } = responseBody;
            return code;
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
