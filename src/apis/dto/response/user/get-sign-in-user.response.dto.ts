import { LoginUser } from "Types";
import ResponseDto from "..";

export default interface GetSignInUserResponseDto extends ResponseDto, LoginUser{
    
}