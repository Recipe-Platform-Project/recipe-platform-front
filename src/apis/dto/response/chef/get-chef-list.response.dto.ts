import { ChefItem } from "Types";
import ResponseDto from "..";

export default interface GetChefListResponseDto extends ResponseDto {
    chefList: ChefItem[];
}