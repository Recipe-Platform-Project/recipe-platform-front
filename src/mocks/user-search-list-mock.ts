import { UserRecipeItem } from "Types";
import userRecipeListMock from "./user-recipe-list.mock";

const userSearchListMock = (word:string): UserRecipeItem[] => {
    const list = userRecipeListMock.filter(boardItem => boardItem.title.includes(word));
    return list;
}

export default userSearchListMock;