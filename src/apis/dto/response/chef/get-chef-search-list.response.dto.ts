import { ChefItem } from "Types";
import ResponseDto from "..";

export default interface GetChefSearchListResponseDto extends ResponseDto {
    chefSearchList: ChefItem[];
}