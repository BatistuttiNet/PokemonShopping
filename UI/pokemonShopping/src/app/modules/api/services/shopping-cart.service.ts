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
import { PaymentRequestDto } from '../models/payment-request-dto';
import { PaymentResponseDtoApiResult } from '../models/payment-response-dto-api-result';
import { ShoppingCartDtoApiResult } from '../models/shopping-cart-dto-api-result';
import { ShoppingCartDtoiEnumerableApiResult } from '../models/shopping-cart-dtoi-enumerable-api-result';

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
   * Path part for operation apiShoppingCartGet
   */
  static readonly ApiShoppingCartGetPath = '/api/ShoppingCart';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiShoppingCartGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShoppingCartGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<ShoppingCartDtoApiResult>> {

    const rb = new RequestBuilder(this.rootUrl, ShoppingCartService.ApiShoppingCartGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ShoppingCartDtoApiResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiShoppingCartGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShoppingCartGet$Plain(params?: {
  }): Observable<ShoppingCartDtoApiResult> {

    return this.apiShoppingCartGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ShoppingCartDtoApiResult>) => r.body as ShoppingCartDtoApiResult)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiShoppingCartGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShoppingCartGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<ShoppingCartDtoApiResult>> {

    const rb = new RequestBuilder(this.rootUrl, ShoppingCartService.ApiShoppingCartGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ShoppingCartDtoApiResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiShoppingCartGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShoppingCartGet$Json(params?: {
  }): Observable<ShoppingCartDtoApiResult> {

    return this.apiShoppingCartGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ShoppingCartDtoApiResult>) => r.body as ShoppingCartDtoApiResult)
    );
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
  }): Observable<StrictHttpResponse<ShoppingCartDtoApiResult>> {

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
        return r as StrictHttpResponse<ShoppingCartDtoApiResult>;
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
  }): Observable<ShoppingCartDtoApiResult> {

    return this.addToCart$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ShoppingCartDtoApiResult>) => r.body as ShoppingCartDtoApiResult)
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
  }): Observable<StrictHttpResponse<ShoppingCartDtoApiResult>> {

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
        return r as StrictHttpResponse<ShoppingCartDtoApiResult>;
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
  }): Observable<ShoppingCartDtoApiResult> {

    return this.addToCart$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ShoppingCartDtoApiResult>) => r.body as ShoppingCartDtoApiResult)
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
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  purchase$Plain$Response(params?: {
    body?: PaymentRequestDto
  }): Observable<StrictHttpResponse<PaymentResponseDtoApiResult>> {

    const rb = new RequestBuilder(this.rootUrl, ShoppingCartService.PurchasePath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaymentResponseDtoApiResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `purchase$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  purchase$Plain(params?: {
    body?: PaymentRequestDto
  }): Observable<PaymentResponseDtoApiResult> {

    return this.purchase$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<PaymentResponseDtoApiResult>) => r.body as PaymentResponseDtoApiResult)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `purchase$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  purchase$Json$Response(params?: {
    body?: PaymentRequestDto
  }): Observable<StrictHttpResponse<PaymentResponseDtoApiResult>> {

    const rb = new RequestBuilder(this.rootUrl, ShoppingCartService.PurchasePath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaymentResponseDtoApiResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `purchase$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  purchase$Json(params?: {
    body?: PaymentRequestDto
  }): Observable<PaymentResponseDtoApiResult> {

    return this.purchase$Json$Response(params).pipe(
      map((r: StrictHttpResponse<PaymentResponseDtoApiResult>) => r.body as PaymentResponseDtoApiResult)
    );
  }

  /**
   * Path part for operation purchaseHistory
   */
  static readonly PurchaseHistoryPath = '/api/ShoppingCart/purchaseHistory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `purchaseHistory$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  purchaseHistory$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<ShoppingCartDtoiEnumerableApiResult>> {

    const rb = new RequestBuilder(this.rootUrl, ShoppingCartService.PurchaseHistoryPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ShoppingCartDtoiEnumerableApiResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `purchaseHistory$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  purchaseHistory$Plain(params?: {
  }): Observable<ShoppingCartDtoiEnumerableApiResult> {

    return this.purchaseHistory$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ShoppingCartDtoiEnumerableApiResult>) => r.body as ShoppingCartDtoiEnumerableApiResult)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `purchaseHistory$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  purchaseHistory$Json$Response(params?: {
  }): Observable<StrictHttpResponse<ShoppingCartDtoiEnumerableApiResult>> {

    const rb = new RequestBuilder(this.rootUrl, ShoppingCartService.PurchaseHistoryPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ShoppingCartDtoiEnumerableApiResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `purchaseHistory$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  purchaseHistory$Json(params?: {
  }): Observable<ShoppingCartDtoiEnumerableApiResult> {

    return this.purchaseHistory$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ShoppingCartDtoiEnumerableApiResult>) => r.body as ShoppingCartDtoiEnumerableApiResult)
    );
  }

}
