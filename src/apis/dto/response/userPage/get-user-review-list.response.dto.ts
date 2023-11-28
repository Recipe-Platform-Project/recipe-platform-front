import { UserRecipeReviewItem } from "Types";
import ResponseDto from "..";

export default interface GetUserReviewListResponseDto extends ResponseDto {
    userReviewList: UserRecipeReviewItem[];
}