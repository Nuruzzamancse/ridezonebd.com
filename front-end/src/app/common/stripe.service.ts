import {Injectable} from "@angular/core";
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { environment } from "../../environments/environment";

@Injectable()
export class StripeService {
  constructor(private http: Http) {}

  confirmPayment(stripeEmail, stripeToken) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers});

    let body = {
      stripeEmail: stripeEmail,
      stripeToken: stripeToken
    };
    console.log('In conform payment');
    return this.http.post(`http://localhost:3000/stripe/charge`, JSON.stringify(body), options)
      .map((response: Response) => response)
      .catch(this.handleError);
  }

  private handleError(error?: Response) {
    if (error) {
      console.log(error);
      return Observable.throw(error.json().error || 'Server Error');
    } else {
      console.log('Unknown err');
    }
  }
}
