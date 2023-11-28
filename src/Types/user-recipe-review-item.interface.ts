export default interface UserRecipeReviewItem {
    boardNumber: number;
    title: string;
    rating: string;
    boardMainImage: string; 
    writeDatetime: string;
    contents: string;
    commentImage: string | null;
}