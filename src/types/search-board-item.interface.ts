export default interface SearchItem{
    boardNumber: number,
    title: string,
    boardTitleImage: string | null,
    favoriteCount: number,
    viewCount: number,
    starRating: number,
    writeNickname: string,
    writeDatetime: string,
    writeProfileImage: string | null
}