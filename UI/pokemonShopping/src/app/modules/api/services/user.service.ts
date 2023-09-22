/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AuthResponseApiResult } from '../models/auth-response-api-result';
import { BooleanApiResult } from '../models/boolean-api-result';
import { CreateUserDto } from '../models/create-user-dto';
import { GoogleCredentialDto } from '../models/google-credential-dto';
import { LoginDto } from '../models/login-dto';
import { RecoveryPasswordDto } from '../models/recovery-password-dto';
import { UserDtoApiResult } from '../models/user-dto-api-result';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiUserCreateUserPost
   */
  static readonly ApiUserCreateUserPostPath = '/api/User/CreateUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserCreateUserPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserCreateUserPost$Plain$Response(params?: {
    body?: CreateUserDto
  }): Observable<StrictHttpResponse<UserDtoApiResult>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserCreateUserPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserDtoApiResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserCreateUserPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserCreateUserPost$Plain(params?: {
    body?: CreateUserDto
  }): Observable<UserDtoApiResult> {

    return this.apiUserCreateUserPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UserDtoApiResult>) => r.body as UserDtoApiResult)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserCreateUserPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserCreateUserPost$Json$Response(params?: {
    body?: CreateUserDto
  }): Observable<StrictHttpResponse<UserDtoApiResult>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserCreateUserPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserDtoApiResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserCreateUserPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserCreateUserPost$Json(params?: {
    body?: CreateUserDto
  }): Observable<UserDtoApiResult> {

    return this.apiUserCreateUserPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<UserDtoApiResult>) => r.body as UserDtoApiResult)
    );
  }

  /**
   * Path part for operation apiUserLoginPost
   */
  static readonly ApiUserLoginPostPath = '/api/User/Login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserLoginPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserLoginPost$Plain$Response(params?: {
    body?: LoginDto
  }): Observable<StrictHttpResponse<AuthResponseApiResult>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserLoginPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AuthResponseApiResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserLoginPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserLoginPost$Plain(params?: {
    body?: LoginDto
  }): Observable<AuthResponseApiResult> {

    return this.apiUserLoginPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AuthResponseApiResult>) => r.body as AuthResponseApiResult)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserLoginPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserLoginPost$Json$Response(params?: {
    body?: LoginDto
  }): Observable<StrictHttpResponse<AuthResponseApiResult>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserLoginPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AuthResponseApiResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserLoginPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserLoginPost$Json(params?: {
    body?: LoginDto
  }): Observable<AuthResponseApiResult> {

    return this.apiUserLoginPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<AuthResponseApiResult>) => r.body as AuthResponseApiResult)
    );
  }

  /**
   * Path part for operation apiUserAuthenticateWithGooglePost
   */
  static readonly ApiUserAuthenticateWithGooglePostPath = '/api/User/authenticateWithGoogle';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserAuthenticateWithGooglePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserAuthenticateWithGooglePost$Plain$Response(params?: {
    body?: GoogleCredentialDto
  }): Observable<StrictHttpResponse<AuthResponseApiResult>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserAuthenticateWithGooglePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AuthResponseApiResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserAuthenticateWithGooglePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserAuthenticateWithGooglePost$Plain(params?: {
    body?: GoogleCredentialDto
  }): Observable<AuthResponseApiResult> {

    return this.apiUserAuthenticateWithGooglePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AuthResponseApiResult>) => r.body as AuthResponseApiResult)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserAuthenticateWithGooglePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserAuthenticateWithGooglePost$Json$Response(params?: {
    body?: GoogleCredentialDto
  }): Observable<StrictHttpResponse<AuthResponseApiResult>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserAuthenticateWithGooglePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AuthResponseApiResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserAuthenticateWithGooglePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserAuthenticateWithGooglePost$Json(params?: {
    body?: GoogleCredentialDto
  }): Observable<AuthResponseApiResult> {

    return this.apiUserAuthenticateWithGooglePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<AuthResponseApiResult>) => r.body as AuthResponseApiResult)
    );
  }

  /**
   * Path part for operation apiUserRecoveryPasswordPost
   */
  static readonly ApiUserRecoveryPasswordPostPath = '/api/User/RecoveryPassword';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserRecoveryPasswordPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserRecoveryPasswordPost$Plain$Response(params?: {
    body?: RecoveryPasswordDto
  }): Observable<StrictHttpResponse<BooleanApiResult>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserRecoveryPasswordPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BooleanApiResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserRecoveryPasswordPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserRecoveryPasswordPost$Plain(params?: {
    body?: RecoveryPasswordDto
  }): Observable<BooleanApiResult> {

    return this.apiUserRecoveryPasswordPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanApiResult>) => r.body as BooleanApiResult)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserRecoveryPasswordPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserRecoveryPasswordPost$Json$Response(params?: {
    body?: RecoveryPasswordDto
  }): Observable<StrictHttpResponse<BooleanApiResult>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserRecoveryPasswordPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BooleanApiResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserRecoveryPasswordPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserRecoveryPasswordPost$Json(params?: {
    body?: RecoveryPasswordDto
  }): Observable<BooleanApiResult> {

    return this.apiUserRecoveryPasswordPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanApiResult>) => r.body as BooleanApiResult)
    );
  }

}
