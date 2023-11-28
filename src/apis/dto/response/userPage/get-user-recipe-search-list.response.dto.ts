import { UserRecipeItem } from "Types";
import ResponseDto from "..";

export default interface GetUserRecipeSearchList extends ResponseDto {
    userRecipeSearchList: UserRecipeItem[];
}