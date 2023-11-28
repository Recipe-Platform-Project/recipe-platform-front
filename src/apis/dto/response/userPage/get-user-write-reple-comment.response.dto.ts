import { UserCommentItem } from "Types";
import ResponseDto from "..";

export default interface GetUserWriteRepleCommentResponseDto extends ResponseDto {
    userWriteRepleComment: UserCommentItem;
}