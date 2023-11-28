import { UserRecipeReviewItem } from "Types";
import ResponseDto from "..";

export default interface GetUserWriteReviewListResponseDto extends ResponseDto {
    userWriteReviewList: UserRecipeReviewItem[];
}