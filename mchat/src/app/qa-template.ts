export interface QaTemplate {
    QNumber: number;
    Question: string;
    ExpectedAnswer: Answers;
    ResponseAnswer: Answers;
}

export enum Answers {
    Yes=1,
    No=0,
    Undefined=-1
}

