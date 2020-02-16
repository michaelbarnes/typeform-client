import { 
    INetworkProperties,
    IResponse,
    IResponseFileProperties,
    IReponseFile
} from './interfaces';
import { NetworkAdapter } from './libs/NetworkAdapter';

export class Form {
    public endpoint: string;
    public resource: string;
    private networkAdapter: NetworkAdapter;

    constructor (properties: INetworkProperties) {
        this.endpoint = "forms";
        this.resource = "responses";
        this.networkAdapter = new NetworkAdapter(properties);
    }

    async GetResponses (id: string) {
        try {
            const path = `${this.endpoint}/${id}/${this.resource}`
            const responses = this.networkAdapter.Get<IResponse>(path);
            return responses;
        } catch (error) {
            throw error;
        } 
    }

    async GetResponseFile (responseFileProperties: IResponseFileProperties) {
        try {
            const path = `${this.endpoint}/${responseFileProperties.form_id}/${this.resource}/${responseFileProperties.response_id}/fields/${responseFileProperties.field_id}/files/${responseFileProperties.filename}`
            const responses = this.networkAdapter.Get<IReponseFile>(path);
            return responses;
        } catch (error) {
            throw error;
        }
    }

    async DeleteResponse (id: string) {
        try {
            const path = `forms/${id}/responses`
            this.networkAdapter.Delete(path);
        } catch (error) {
            throw error;
        } 
    }
}