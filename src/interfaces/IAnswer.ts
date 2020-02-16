import { IAnswerField } from './IAnswerField';
import { IChoice } from './IChoice';
import { IChoices } from './IChoices';
import { IPayment } from './IPayment';

export interface IAnswer {
    field: IAnswerField;
    type: string;
    choice: IChoice;
    choices: IChoices;
    date: string;
    email: string;
    file_url: string;
    number: number;
    boolean: boolean;
    text: string;
    url: string;
    payment: IPayment;
}