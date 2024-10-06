import { MissingParamError } from '../errors/missing-param-error';
import { badRequest } from '../helpers/http-helper';
import { Controller } from '../protocols/controller';
import { httpRequest, httpResponse } from '../protocols/http';

export class SignupController implements Controller {
  handle(httpRequest: httpRequest): httpResponse {
    const requiredFilds = ['name', 'email', 'password', 'passwordConfirmation'];

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
