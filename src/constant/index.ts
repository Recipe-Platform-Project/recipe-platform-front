export const MAIN_PATH = "/";
export const SIGN_IN_PATH = "/sign-in";
export const SIGN_UP_PATH = "/sign-up";
export const USER_PATH = (email: string | null) => `/user/${email}`;
export const CHEF_LIST_PATH = `/chef/list`;
export const RECIPE_LIST_PATH = (word: string | null) => `/recipe/list/${word}`;
export const RANKING_PATH = "/ranking";
export const RECIPE_DETAIL_PATH = (noticeNumber: number | string) => `/recipe/detail/${noticeNumber}`;
export const RECIPE_WRITE_PATH =  `/recipe/write`;
export const RECIPE_UPDATE_PATH = (noticeNumber: number | string) => `/recipe/update/${noticeNumber}`;