export interface IEmail {
  to: string | string[];
  cc?: string | string[] | undefined;
  bcc?: string | string[] | undefined;
  subject: string;
  html: string;
}

interface ISMSRecipient {
  msisdn: number;
}

export interface ISMS {
  sender: string;
  message: string
  recipients: ISMSRecipient[];
}

export interface IMessage<T extends IEmail | ISMS> {
  entity: T;
}
