import axios from 'axios';
import ResponseDto from './dto/response';
import { GetChefListResponseDto, GetChefRankingResponseDto, GetChefSearchListResponseDto } from './dto/response/chef';
import { GetSignInUserRecipeResponseDto, GetSignInUserResponseDto, GetUserRecipeResponseDto, GetUserRecipeSearchList, GetUserRepleCommentResponseDto, GetUserResponseDto, GetUserReviewListResponseDto, GetUserWriteRepleCommentResponseDto, GetUserWritingRecipeListREsponseDto, PatchProfileCommentResponseDto } from './dto/response/userPage';
import { PatchProfileCommentRequestDto } from './dto/request';
import GetUserWriteReviewListResponseDto from './dto/response/userPage/get-user-write-review-list.response.dto';

// description: Domain URL //
const DOMAIN = 'http://localhost:4000';

// description: API Domain 주소 //
const API_DOMAIN = `${DOMAIN}/api/v1`;
// description: Authorizaition Header //
const authorization = (token: string) => {
    return { headers: { Authorization: `Bearer ${token}` } };
};

const GET_CHEF_LIST_URL = () => `${API_DOMAIN}/chef/list`;
const GET_CHEF_RANKINT_LIST_URL = () => `${API_DOMAIN}/chef`;
const GET_CHEF_SEARCH_LIST_URL = (searchNickname: string) => `${API_DOMAIN}/chef/{searchNickname}`

// description: get chef list request //
export const getChefListRequest = async () => {
    const result = await axios.get(GET_CHEF_LIST_URL())
        .then(response => {
            const responseBody: GetChefListResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        });
    return result;
};

// description: get chef ranking list request //
export const getChefRankingListRequest = async () => {
    const result = await axios.get(GET_CHEF_RANKINT_LIST_URL())
        .then(response => {
            const responseBody: GetChefRankingResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        });
    return result;
};

// description: get chef search list request //
export const getChefSearchListRequest = async (searchNickname: string) => {
    const result = await axios.get(GET_CHEF_SEARCH_LIST_URL(searchNickname))
        .then(response => {
            const responseBody: GetChefSearchListResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        });
    return result;
};


const GET_SIGN_IN_USER_URL = () => `${API_DOMAIN}/user`
const GET_USER_URL = (email: string) => `{API_DOMAIN}/user/{email}`
const GET_SIGN_IN_USER_RECIPE_URL = () => `${API_DOMAIN}/recipe-list`
const GET_USER_RECIPE_URL = (email: string) => `${API_DOMAIN}/user/{email}/recipe-list`
const GET_USER_WRITING_RECIPE_LIST_URL = () => `${API_DOMAIN}/user/user-writing-recipe-list`
const GET_USER_REVIEW_LIST_URL = () => `${API_DOMAIN}/user-recipe-review-list`
const GET_USER_WRITE_REVIEW_LIST_URL = () => `${API_DOMAIN}/user-write-recipe-review-list`
const GET_USER_REPLE_COMMENT_URL = () => `${API_DOMAIN}/user/user-comment-list`
const GET_USER_WRITE_REPLE_COMMENT_URL = () => `${API_DOMAIN}/user/user-write-comment-list`

const GET_USER_RECIPE_SEARCH_LIST_URL = (searchWord: string) => `${API_DOMAIN}` 

const PATH_PROFILE_COMMENT_URL = () => `${API_DOMAIN}/introduction`

// description: get sign in user request //
export const getSignInUserRequest = async (token: string) => {
    const result = await axios.get(GET_SIGN_IN_USER_URL(), authorization(token))
        .then((response) => {
            const responseBody: GetSignInUserResponseDto = response.data;
            return responseBody;
        })
        .catch((error) => {
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        });
    return result;
}

// description: get user request //
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

// description: get sign in user recipe request //
export const getSignInUserRecipeRequest = async (token: string) => {
    const result = await axios.get(GET_SIGN_IN_USER_RECIPE_URL(), authorization(token))
        .then(response => {
            const responseBody: GetSignInUserRecipeResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        });
    return result;
};

// description: get user recipe request //
export const getUserRecipeRequest = async (email: string) => {
    const result = await axios.get(GET_USER_RECIPE_URL(email))
        .then(response => {
            const responseBody: GetUserRecipeResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        });
    return result;
};

// description: get user writing recipe list request //
export const getUserWritingRecipeListRequest = async (token: string) => {
    const result = await axios.get(GET_USER_WRITING_RECIPE_LIST_URL(), authorization(token))
        .then(response => {
            const responseBody: GetUserWritingRecipeListREsponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        });
};

// description: get user review list request //
export const getUserReviewListRequest = async (token: string) => {
    const result = await axios.get(GET_USER_REVIEW_LIST_URL(), authorization(token))
        .then(response => {
            const responseBody: GetUserReviewListResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        });
    return result;
};

// description: get user write review list request //
export const getUserWriteReviewListRequest = async (token: string) => {
    const result = await axios.get(GET_USER_WRITE_REVIEW_LIST_URL(), authorization(token))
        .then(response => {
            const responseBody: GetUserWriteReviewListResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        });
    return result;
};

// description: get user reple comment request //
export const getUserRepleCommentRequest = async (token: string) => {
    const result = await axios.get(GET_USER_REPLE_COMMENT_URL(), authorization(token))
        .then(response => {
            const responseBody: GetUserRepleCommentResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        });
    return result;
};

// description: get user write reple comment request //
export const getUserWriteRepleCommentRequest = async (token: string) => {
    const result = await axios.get(GET_USER_WRITE_REPLE_COMMENT_URL(), authorization(token))
        .then(response => {
            const responseBody: GetUserWriteRepleCommentResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        });
    return result;
};

// description: get user recipe search list request //
export const getUserRecipeSearchListRequest = async (searchWord: string) => {
    const result = await axios.get(GET_USER_RECIPE_SEARCH_LIST_URL(searchWord))
        .then(response => {
            const responseBody: GetUserRecipeSearchList = response.data;
            return responseBody;
        })
        .catch(error => {
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        });
    return result;
};

// description: path profile comment request //
export const patchProfileCommentRequest = async (requestBody: PatchProfileCommentRequestDto, token: string) => {
    const result = await axios.patch(PATH_PROFILE_COMMENT_URL(), requestBody, authorization(token))
        .then(response => {
            const responseBody: PatchProfileCommentResponseDto = response.data;
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