require('dotenv').config();
import { Form } from '../src';

describe('Form Tests', () => {
    it("Should Get Responses", async () => {
        const form = new Form({
            base_url: "https://api.typeform.com",
            token: process.env.API_TOKEN ? process.env.API_TOKEN : ""
        });
        const responses = await form.GetResponses("iqifaC");
        console.log(JSON.stringify(responses));
    });
});