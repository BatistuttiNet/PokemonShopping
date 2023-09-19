import { Injectable, OnDestroy } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthState } from './modules/+state/auth.reducer';
import { selectToken } from './modules/+state/auth.selector';

@Injectable()
export class JwtInterceptor implements HttpInterceptor, OnDestroy {

    public token: string | null | undefined;
    public subscription: Subscription;

    constructor(private store: Store<AuthState>) {
        this.subscription = this.store.select(selectToken).subscribe(t => {
            this.token = t;
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (this.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.token}`
                }
            });
        }

        return next.handle(request);
    }
}
