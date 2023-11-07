export default interface BestBoardItem {
    noticeNumber: number;
    title: string;
    imageUrl: string;
    content: string;
    writerNickname: string;
    writerProfileImage: string | null;
    viewCount: number;
    commentCount: number;
    favoriteCount: number;
    tags: string | undefined;

}
