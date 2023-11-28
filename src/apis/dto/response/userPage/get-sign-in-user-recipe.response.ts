import { UserRecipeItem } from "Types";
import ResponseDto from "..";

export default interface GetSignInUserRecipeResponseDto extends ResponseDto {
    userRecipeList: UserRecipeItem[];
}