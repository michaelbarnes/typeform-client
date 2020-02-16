import { IAnswer } from "./IAnswer";
import { ICalculated } from './ICalculated';
import { IField } from "./IField";
import { IMetadata } from "./IMetadata";

export interface IItem {
    landing_id: string;
    response_id: string;
    token: string;
    landed_at: string;
    submitted_at: string;
    metadata: IMetadata;
    hidden: boolean;
    definition: IField;
    answers: IAnswer[]
    calculated: ICalculated;
}