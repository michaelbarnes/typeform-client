import { IItem } from "./IItem";
import { ILink } from './ILink';

export interface IResponse {
    total_items: number;
    page_count: number;
    _links: ILink;
    items: IItem[];
}