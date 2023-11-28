export default interface BestBoardItem {
    boardNumber: number;
    title: string;
    boardMainImage: string;
    introduce: string;
    writerNickname: string;
    writerProfileImage: string;
    viewCount: number;
    commentCount: number;
    favoriteCount: number;
    tags: string | undefined;

}
