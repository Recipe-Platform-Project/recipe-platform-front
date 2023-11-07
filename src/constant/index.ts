
export const MAIN_PATH = "/";

export const SIGN_IN_PATH = "/signIn/";
export const SIGN_UP_PATH = "/signUp/";
export const USER_FOUND_PATH = "/userFound";
export const USER_UPDATE_PATH = "/userUpdate";
export const PASSWORD_UPDATE_PATH = "/passwordUpdate";
export const MEMBERSHIP_WITHDRAWAL_PATH = "/membershipWithdrawal";

export const USER_RECIPE = (email:string) => `/user/${email}`;
export const USER_SEARCH_RECIPE = (email:string | undefined) => (word:string) => `/user/${email}/${word}`

export const RANKING_PATH = "/ranking";

export const CHEF_PATH = '/chef';
export const CHEF_LIST_PATH = `/chef/list`; //asd
export const CHEF_SEARCH_PATH = (word:string | null) => `/chef/${word}`;

export const SEARCH_PATH = (word: string) => `/search/${word}` //asd
export const RECIPE_LIST_PATH = (word: string | null) => `/board/list/${word}`;
export const RECIPE_DETAIL_PATH = (boardNumber: number | string) => `/board/detail/${boardNumber}`;
export const RECIPE_WRITE_PATH =  `/board/write`;
export const RECIPE_UPDATE_PATH = (boardNumber: number | string) => `/board/update/${boardNumber}`;
