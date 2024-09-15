export class SecurityChain {
    jwtTokenKey: string;
    aesAUserKey: string;
    otpSecret: string;
    guestName: string;
    guestSecret: string;
    confirmationUrl: string;
    tokenExpire: number;
    serverPort: number;

    constructor(
        jwtTokenKey: string,
        aesAUserKey: string,
        otpSecret: string,
        guestName: string,
        guestSecret: string,
        confirmationUrl: string,
        tokenExpire: number,
        serverPort: number,
    ) {
        this.jwtTokenKey = jwtTokenKey;
        this.aesAUserKey = aesAUserKey;
        this.otpSecret = otpSecret;
        this.guestName = guestName;
        this.guestSecret = guestSecret;
        this.confirmationUrl = confirmationUrl;
        this.tokenExpire = tokenExpire;
        this.serverPort = serverPort;
    }
}
