import MaterailItem from "./material-item.interface";

export default interface BoardDetailItem {

    boardNumber: number;
    boardMainImage : string;
    writerProfileImage:	string | null;
    writerNickname:	string ;
    title: string ;
    introduce: string ;
    boardContent: string[];
    writeDateTime: string;
    viewCount: number;
    userEmail: string;
    commentCount: number;
    favoriteCount: number;
    videoLink: string  ;
    cookingTip: string  ;
    requiredTime: string  ;
    difficulty:	string  ;
    peopleCount: string ;
    imageURL: string[];
    subscirbe: string;
    cookingFinishImage: string[]

}