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

import { AddToCartDto } from '../models/add-to-cart-dto';
import { BooleanApiResult } from '../models/boolean-api-result';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation addToCart
   */
  static readonly AddToCartPath = '/api/ShoppingCart/add';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addToCart$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  addToCart$Plain$Response(params?: {
    body?: AddToCartDto
  }): Observable<StrictHttpResponse<BooleanApiResult>> {

    const rb = new RequestBuilder(this.rootUrl, ShoppingCartService.AddToCartPath, 'post');
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
   * To access the full response (for headers, for example), `addToCart$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  addToCart$Plain(params?: {
    body?: AddToCartDto
  }): Observable<BooleanApiResult> {

    return this.addToCart$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanApiResult>) => r.body as BooleanApiResult)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addToCart$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  addToCart$Json$Response(params?: {
    body?: AddToCartDto
  }): Observable<StrictHttpResponse<BooleanApiResult>> {

    const rb = new RequestBuilder(this.rootUrl, ShoppingCartService.AddToCartPath, 'post');
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
   * To access the full response (for headers, for example), `addToCart$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  addToCart$Json(params?: {
    body?: AddToCartDto
  }): Observable<BooleanApiResult> {

    return this.addToCart$Json$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanApiResult>) => r.body as BooleanApiResult)
    );
  }

  /**
   * Path part for operation purchase
   */
  static readonly PurchasePath = '/api/ShoppingCart/purchase';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `purchase$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  purchase$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<BooleanApiResult>> {

    const rb = new RequestBuilder(this.rootUrl, ShoppingCartService.PurchasePath, 'post');
    if (params) {
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
   * To access the full response (for headers, for example), `purchase$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  purchase$Plain(params?: {
  }): Observable<BooleanApiResult> {

    return this.purchase$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanApiResult>) => r.body as BooleanApiResult)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `purchase$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  purchase$Json$Response(params?: {
  }): Observable<StrictHttpResponse<BooleanApiResult>> {

    const rb = new RequestBuilder(this.rootUrl, ShoppingCartService.PurchasePath, 'post');
    if (params) {
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
   * To access the full response (for headers, for example), `purchase$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  purchase$Json(params?: {
  }): Observable<BooleanApiResult> {

    return this.purchase$Json$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanApiResult>) => r.body as BooleanApiResult)
    );
  }

}
