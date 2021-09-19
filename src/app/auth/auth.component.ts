import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";

import { AuthResponseData, AuthService } from "./auth.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent{
    isLoginMode = true;
    isLoading = false;
    error!: string;    

    constructor(private authService: AuthService) {}

    onSwitchToLogin(){
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(authForm: NgForm){

        const mail = authForm.value.email;
        const password = authForm.value.password;

        let authObs: Observable<AuthResponseData>;

        this.isLoading = true;

        if(this.isLoginMode){
            authObs = this.authService.login(mail, password);
        }else{
            authObs = this.authService.signup(mail, password);
        }
        
        authObs.subscribe(
            resData => {
                console.log(resData);
                this.isLoading = false;
            },
            errorMsg => {
                console.log(errorMsg);
                this.error = errorMsg;
                this.isLoading = false;
            }
        );

        authForm.reset();
    }
}