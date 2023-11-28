import { UserCommentItem } from "Types";
import ResponseDto from "..";

export default interface GetUserRepleCommentResponseDto extends ResponseDto {
    userRepleComment: UserCommentItem[];
}