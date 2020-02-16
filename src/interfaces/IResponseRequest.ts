export interface ResponseRequest {
    page_size: number;
    since: string;
    until: string;
    after: string;
    included_response_ids: string;
    completed: boolean;
    sort: string;
    query: string;
    fields: string;
}