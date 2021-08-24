/* eslint-disable require-jsdoc */
export class SecurityChain {
    jwtTokenKey: string;
    aesAUserKey: string;
    otpSecret: string;
    guestName: string;
    guestSecret: string;
    confirmationUrl: string;
    tokenExpire: number;
    serverPort: number;
}
