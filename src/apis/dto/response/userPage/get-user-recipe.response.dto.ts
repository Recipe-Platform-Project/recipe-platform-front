import { UserRecipeItem } from "Types";
import ResponseDto from "..";

export default interface GetUserRecipeResponseDto extends ResponseDto {
    userRecipeList: UserRecipeItem[];
}