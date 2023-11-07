export default interface UserCommentItem {
    boardNumber: number;
    title: string;
    writeNickname: string;
    recipeImage: string|null;

    commentNickname: string;
    commentContents: string;
    commentDatetime: string;
}