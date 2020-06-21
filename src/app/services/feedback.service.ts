import { Injectable } from '@angular/core';
import { Feedback } from '../shared/feedback';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { baseURL } from '../shared/baseurl';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  submitFeedback(feedback: Feedback): Observable<Feedback>{
    const HttpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'//incoming request format
      })
    };
    return this.http.post<Feedback>(baseURL + 'feedback/', feedback, HttpOptions)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
