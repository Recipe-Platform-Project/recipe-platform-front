import { RankingItem } from "Types";
import ResponseDto from "..";

export default interface GetRankingBoardListResponseDto extends ResponseDto{
    rankingList: RankingItem[];
}