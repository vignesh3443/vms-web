import { Injector, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { AuthState } from '../@core/constants/common.entities';
import { LocalService } from '../@core/service/local.service';
import { ProfileService } from '../@core/service/profile.service';
import { AppService } from '../@core/service/app.service';
import { AppState } from '../@core/service/core.state';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PrimeNGConfig } from 'primeng/api';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from '../@core/service/alert.service';
import { AuthService } from '../@core/service/auth.service';
import { HttpService } from '../@core/service/http.service';
import * as i0 from "@angular/core";
interface City {
    name: string;
    code: string;
}
export declare class LoginComponent implements OnInit {
    private store$;
    private _router;
    private fb;
    private modalService;
    private alertService;
    private authService;
    private route;
    private httpServie;
    input: any;
    LOGININFO?: any;
    RBACORG?: any;
    passwordExpired: EventEmitter<any>;
    loginSuccessful: EventEmitter<any>;
    verifyingOtp: EventEmitter<any>;
    value3: string;
    cities: City[];
    selectedCity1: City;
    loginForm: FormGroup;
    otpForm: FormGroup;
    show: boolean;
    disabledLoginPage: boolean;
    submitStatus: string;
    submitSecretStatus: string;
    errorStatus?: string;
    destory$: Subject<void>;
    closeResult: string;
    isAuthenticated$: Observable<AuthState>;
    localstorage: LocalService;
    primengConfig: PrimeNGConfig;
    isOtpSent: boolean;
    profileService: ProfileService;
    appService: AppService;
    private DEFAULT_PASSWORD_RESET;
    isOTP: boolean;
    enterOTP: string;
    userEmail: any;
    constructor(injector: Injector, store$: Store<AppState>, _router: Router, fb: FormBuilder, modalService: NgbModal, alertService: AlertService, authService: AuthService, route: ActivatedRoute, httpServie: HttpService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    initializeForm(): void;
    initializeOtpForm(): void;
    open(content: any): void;
    private getDismissReason;
    login(otp?: string): void;
    verifyOtp(): void;
    sendOtp(): void;
    toggleShow(): void;
    routeToChangePassword(): void;
    getUserInfo(): void;
    routeToDynamicPage(landingPage: any): void;
    conditionAuthorisedPages(authorisedPages: any): void;
    gotoRegistrationPage(): void;
    getSessionDetails(): void;
    generateLoginUrl(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoginComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LoginComponent, "lib-login", never, { "LOGININFO": "LOGININFO"; "RBACORG": "RBACORG"; }, { "passwordExpired": "passwordExpired"; "loginSuccessful": "loginSuccessful"; "verifyingOtp": "verifyingOtp"; }, never, never>;
}
export {};
