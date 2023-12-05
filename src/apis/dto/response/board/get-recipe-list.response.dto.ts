import { SearchItem } from "Types";
import ResponseDto from "..";

export default interface GetRecipeListResponseDto extends ResponseDto{
        searchList: SearchItem[];
}