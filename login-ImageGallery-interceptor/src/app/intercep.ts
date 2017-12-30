import {Injectable} from '@angular/core';

import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';



@Injectable()

export class Interceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const authReq = req.clone();

      console.log(authReq);

    return next.handle(authReq);

  }

}