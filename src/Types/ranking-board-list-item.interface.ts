export default interface RankingItem{
    boardNumber : number;
    boardTitleImage: string | null;
    title: string;
    viewCount: number,
    writerNickname: string;
    favoriteCount: number;
    starRating: number;
}