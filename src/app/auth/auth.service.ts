import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

export interface AuthResponseData{
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({ providedIn: "root"})
export class AuthService{
    constructor(private http: HttpClient) {}

    signup(email: string, password: string){
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDPbZiEi1MOnX_CWQ1b3YhG9zbEHmZv1Is',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(catchError(this.handleError));
    }

    login(email: string, password: string){
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDPbZiEi1MOnX_CWQ1b3YhG9zbEHmZv1Is',
            {
                email: email,
                password: password,
                returnToSecure: true
            }
        ).pipe(catchError(this.handleError));
    }

    private handleError(errorRes: HttpErrorResponse){
        let errorMsg = 'An unknown error occurred!';
            if(!errorRes.error || !errorRes.error.error){
                return throwError(errorMsg);
            }
            switch(errorRes.error.error.message){
                case 'EMAIL_NOT_FOUND':
                    errorMsg = 'Email not found! Try signing up';
                    break;
                case 'INVALID_PASSWORD':
                    errorMsg = 'Password invalid!';
                    break;
                case 'USER_DISABLED':
                    errorMsg = 'Account has been disabled. Contact the Admin';
                    break;
                case 'EMAIL_EXISTS':
                    errorMsg = 'Email exists already! Try signing in';
                    break;
                case 'OPERATION_NOT_ALLOWED':
                    errorMsg = 'Password sign-in is disabled';
                    break;
                case 'TOO_MANY_ATTEMPTS_TRY_LATER':
                    errorMsg = 'We have blocked all requests from this device due to unusual activity. Try again later.';
            } 
        return throwError(errorMsg);    
    }
}