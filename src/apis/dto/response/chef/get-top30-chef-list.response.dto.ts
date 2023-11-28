import { ChefInfoItem } from "Types";
import ResponseDto from "..";

export default interface GetTop30ChefListResponseDto extends ResponseDto{

    chefList: ChefInfoItem[];
}