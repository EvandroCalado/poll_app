import { describe, expect, it } from 'vitest';
import { MissingParamError } from '../errors/missing-param-error';
import { SignupController } from './signup';

describe('Signup Controller', () => {
  it('should return 400 if no name is provided', () => {
    const sut = new SignupController();

    const httpRequest = {
      body: {
        email: 'any_email@email.com',
        password: 'any_password',
        passwordConfirmation: 'any_password',
      },
    };

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('name'));
  });

  it('should return 400 if no email is provided', () => {
    const sut = new SignupController();

    const httpRequest = {
      body: {
        name: 'name',
        password: 'any_password',
        passwordConfirmation: 'any_password',
      },
    };

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('email'));
  });

  it('should return 400 if no password is provided', () => {
    const sut = new SignupController();

    const httpRequest = {
      body: {
        name: 'name',
        email: 'any_email@email.com',
        passwordConfirmation: 'any_password',
      },
    };

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('password'));
  });
});
