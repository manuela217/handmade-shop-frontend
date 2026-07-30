import { UserType } from "../enums/user-type";

export class JwtClient {
    constructor (public id:number,public token: string,public userType: UserType) {}
}
