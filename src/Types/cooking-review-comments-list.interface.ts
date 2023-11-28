export default interface CookingReviewCommentsListItem {

    commentNumber: number;
    userEmail: string;
    profileImage: string;
    nickname: string;
    boardNumber: number;    
    contents: string;
    writeDatetime: string;
    parentCommentNumber: number | null;
    rating: number;
    recipeCommentImage: string | null;

}