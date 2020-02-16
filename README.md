# TypeForm JavaScript Client Library

This is the un-official JavaScript client library written in TypeScript. It is a simple wrapper of the [TypeForm RESTful API's](https://developer.typeform.com/get-started/).

![Node.js CI](https://github.com/michaelbarnes/typeform-client/workflows/Node.js%20CI/badge.svg)

# Usage

## Install

```
yarn add typeform-client
```

Or

```
npm install typeform-client
```

## Import and initialize
```
import { Form } from 'typeform-client';

const form = new Form();
```

## Methods

### Get Responses
Retreive responses that TypeForm has collected from users and date / time of form landing and submission.
The responses from this match the properties described in the official [documentation](https://developer.typeform.com/responses/reference/retrieve-responses/#retrieve-responses).

```
const responses = await form.GetResponses("My Form ID");
```

### Delete Response
Deletes a single response for a form. See the [official documentation](https://developer.typeform.com/responses/reference/delete-responses/) for more information.

```
const responses = await form.GetResponses("My Form ID");
```

### Get Response File
Get the file uploaded for an answer. See the [official documentation](https://developer.typeform.com/responses/reference/retrieve-response-file/#retrieve-response-file) for more information.

```
const responses = await form.GetResponseFile({
    form_id: "My Form ID",
    response_id: "A Response ID",
    field_id: "The field that was answered",
    filename: "The name of the file to donwload"
});
```
