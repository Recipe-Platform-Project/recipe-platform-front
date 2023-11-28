import { BoardItem } from "Types";
import ResponseDto from "..";

export default interface GetCategoryCommendBoardListResponseDto extends ResponseDto{

    categoryCommendList: BoardItem[];
}