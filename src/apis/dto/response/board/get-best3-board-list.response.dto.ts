import { BestBoardItem } from "Types";
import ResponseDto from "..";

export default interface GetBest3BoardListResponseDto extends ResponseDto{

    best3List: BestBoardItem[];
}