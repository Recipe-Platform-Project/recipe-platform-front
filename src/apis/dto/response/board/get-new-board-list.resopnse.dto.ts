import { BoardItem } from "Types";
import ResponseDto from "..";

export default interface GetNewBoardListResponseDto extends ResponseDto{

    newList: BoardItem[];
}