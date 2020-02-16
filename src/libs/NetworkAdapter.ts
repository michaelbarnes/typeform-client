import fetch from 'node-fetch';
import { INetworkProperties } from "../interfaces";

export class NetworkAdapter {
    public networkProperties : INetworkProperties;

    constructor(properties: INetworkProperties) {
        this.networkProperties = properties;
    }

    public async Get<T> (path: string, request?: T) {
        const options = {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${this.networkProperties.token}`,
                "Content-Type": "application/json"
            }
        } as any;

        if(request) {
            options["body"] = request;
        };

        const url = `${this.networkProperties.base_url}/${path}`
        const networkResponse = await fetch(url, options);
        if(networkResponse && networkResponse.status === 200) {
            const data = await networkResponse.json() as T;
            return data;
        } else {
            throw new Error(`Network request failed to TypeForm with status ${networkResponse.status}`);
        }
    }

    public async Delete (path: string) {
        const options = {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${this.networkProperties.token}`,
                "Content-Type": "application/json"
            }
        };
        const url = `${this.networkProperties.base_url}/${path}`
        const networkResponse = await fetch(url, options);
        if(networkResponse && networkResponse.status !== 200) {
            throw new Error(`Network request failed to TypeForm with status ${networkResponse.status}`);
        }
    }
}