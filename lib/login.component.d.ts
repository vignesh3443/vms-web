import { EventEmitter, OnInit } from '@angular/core';
import { RBACINFO } from './pics-login/@core/urls/rbac-url.config';
import { Observable } from 'rxjs';
import { PermissionStore } from './pics-login/@core/permissions/permission.store';
import { DataStoreService } from './pics-login/@core/service/data-store.service';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class LoginComponent implements OnInit {
    private permissionStore;
    private _storeservice;
    private sanitizer;
    RBACORG?: RBACINFO;
    PERMISSION?: any;
    LOGININFO?: any;
    loginEvent: Observable<any>;
    libOnPasswordExpired: EventEmitter<any>;
    libOnLoginSuccessful: EventEmitter<any>;
    libOnVerifyingOtp: EventEmitter<any>;
    constructor(permissionStore: PermissionStore, _storeservice: DataStoreService, sanitizer: DomSanitizer);
    ngOnInit(): void;
    onPasswordExpired($event: any): void;
    onLoginSuccessful($event: any): void;
    onVerifyingOtp($event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoginComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LoginComponent, "login", never, { "RBACORG": "RBACORG"; "PERMISSION": "PERMISSION"; "LOGININFO": "LOGININFO"; "loginEvent": "loginEvent"; }, { "libOnPasswordExpired": "libOnPasswordExpired"; "libOnLoginSuccessful": "libOnLoginSuccessful"; "libOnVerifyingOtp": "libOnVerifyingOtp"; }, never, never>;
}
