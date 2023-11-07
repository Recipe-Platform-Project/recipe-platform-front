
export const AUTH_PATH = '/auth';
export const USER_RECIPE = (email:string) => `/user/${email}`;
export const USER_WRITING_RECIPE = (email:string) => `/user/${email}/writing_recipe`;
export const CHEF_PATH = '/chef';
export const SEARCH_PATH = (word: string) => `/search/${word}`
export const CHEF_SEARCH_PATH = (word:string) => `/chef/${word}`;
export const USER_SEARCH_RECIPE = (email:string | undefined) => (word:string) => `/user/${email}/${word}`
export const MAIN_PATH = "/";
export const SIGN_IN_PATH = "/SignIn";
export const SIGN_UP_PATH = "/SignUp";
export const USER_UPDATE_PATH = "/UserUpdate";
export const PASSWORD_UPDATE_PATH = "/PasswordUpdate";
export const USER_FOUND_PATH = "/UserFound";
export const USER_PATH = (email: string | null) => `/user/${email}`;
export const CHEF_LIST_PATH = `/chef/list`;
export const RECIPE_LIST_PATH = (word: string) => `/recipe/list/${word}`;
export const RANKING_PATH = "/ranking";
export const RECIPE_DETAIL_PATH = (noticeNumber: number | string) => `/recipe/detail/${noticeNumber}`;
export const RECIPE_WRITE_PATH =  `/recipe/write`;
export const RECIPE_UPDATE_PATH = (noticeNumber: number | string) => `/recipe/update/${noticeNumber}`;
export const POPULER_WORD = (word: string) => `/recipe/list/${word}`;
export const MEMBERSHIP_WITHDRAWAL_PATH = "/MembershipWithdrawal";
