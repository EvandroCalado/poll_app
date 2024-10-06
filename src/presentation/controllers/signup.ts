import { MissingParamError } from '../errors/missing-param-error';
import { badRequest } from '../helpers/http-helper';
import { httpRequest, httpResponse } from '../protocols/http';

export class SignupController {
  handle(httpRequest: httpRequest): httpResponse {
    const requiredFilds = ['name', 'email'];

    for (const field of requiredFilds) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    return {
      statusCode: 200,
      body: 'Signup successful',
    };
  }
}
