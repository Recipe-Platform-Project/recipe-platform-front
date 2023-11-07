
export const AUTH_PATH = '/auth';
export const USER_RECIPE = (email:string) => `/user/${email}`;
export const USER_WRITING_RECIPE = (email:string) => `/user/${email}/writing_recipe`
export const RECIPE_DETAIL_PATH = (boardNumber: number | string) => `/board/detail/${boardNumber}`;
export const CHEF_PATH = '/chef';
export const SEARCH_PATH = (word: string) => `/search/${word}`
export const CHEF_SEARCH_PATH = (word:string) => `/chef/${word}`;
export const USER_SEARCH_RECIPE = (email:string | undefined) => (word:string) => `/user/${email}/${word}`