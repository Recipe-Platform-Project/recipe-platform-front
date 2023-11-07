import ResponseDto from ".";

export default interface GetPopulerListResponseDto extends ResponseDto{
    popularWordList: string[];
}