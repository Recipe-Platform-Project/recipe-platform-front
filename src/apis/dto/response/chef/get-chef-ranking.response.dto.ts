import { ChefItem } from "Types";
import ResponseDto from "..";


export default interface GetChefRankingResponseDto extends ResponseDto {
    chefList: ChefItem[];
}