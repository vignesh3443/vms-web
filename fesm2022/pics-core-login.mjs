import * as i0 from '@angular/core';
import { Injectable, Component, EventEmitter, ViewChild, Input, Output, Directive, NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BehaviorSubject, of, Subject, forkJoin } from 'rxjs';
import * as i3$1 from '@angular/platform-browser';
import * as i3 from '@angular/forms';
import { Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i1 from '@angular/common/http';
import { HttpHeaders, HttpClientModule, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { throwError } from 'rxjs/internal/observable/throwError';
import { map, tap, mergeMap, takeUntil, filter } from 'rxjs/operators';
import * as i1$2 from '@ngrx/store';
import { createAction, props, createReducer, on, INIT, UPDATE, createFeatureSelector, createSelector, select } from '@ngrx/store';
import { PrimeNGConfig, MessageService, ConfirmationService } from 'primeng/api';
import * as i4 from '@ng-bootstrap/ng-bootstrap';
import { ModalDismissReasons, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { routerReducer } from '@ngrx/router-store';
import * as i2 from '@angular/router';
import { NavigationStart } from '@angular/router';
import * as i1$1 from 'ngxf-uploader';
import * as i8 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i9 from 'primeng/checkbox';
import { CheckboxModule } from 'primeng/checkbox';
import * as i10 from 'primeng/button';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KnobModule } from 'primeng/knob';
import { MessageModule } from 'primeng/message';
import { MultiSelectModule } from 'primeng/multiselect';
import { OrderListModule } from 'primeng/orderlist';
import { PasswordModule } from 'primeng/password';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { SpeedDialModule } from 'primeng/speeddial';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { TreeSelectModule } from 'primeng/treeselect';

class LoginService {
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LoginService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LoginService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LoginService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class RoleConfig {
    static EndPoint = {
        role: {
            getAllUserRole: '/access-control/role',
            createRole: '/access-control/role/create',
            getLandingPage: '/platform/menu/application',
            addPolicyGroup: '/access-control/role',
            getAllOrgRole: '/access-control/role/organization/{orgid}',
            dossier: '/dossier'
        }
    };
}
class UserConfig {
    static EndPoint = {
        User: {
            getAllUserList: '/org/user',
            getAllUserActiveInactive: '/org/user?includeInactiveUsers=true',
            getUserConfig: '/org/user/getUserPreference/USER_THEME_PREFERENCES/{id}',
            activateUser: '/org/user/activate',
            createUser: '/org/user/create',
            userRole: '/org/user/role',
            managementgroup: '/org/team/managementgroup',
            getAllUserOrgList: '/org/user/organization/',
            saveUserConfig: '/user/saveUserPreference'
        },
        Provider: {
            getProviderList: '/ref/provider',
            searchProviderList: '/ref/provider/search',
            addProviderUser: '/ref/provider/create/account'
        }
    };
}
class AttachmentConfig {
    static EndPoint = {
        Attachments: {
            GetAttachmentReferral: '/ref/attachment/referral',
            GetCategoryLookup: '/platform/master/lookup/lookupbycategoryname',
            UploadKey: '/common/files/upload-key',
            DownloadKey: '/common/files/download-key',
            PostAttachment: '/ref/attachment/create',
            PutAttachment: '/ref/attachment'
        }
    };
}
class PolicyGroupConfig {
    static EndPoint = {
        policyGroup: {
            getPolicyGroupList: '/platform/page-designer/policyGroup',
            getAllPolicyGroupList: '/platform/page-designer/policyGroup/all',
            createPolicyGroup: '/platform/page-designer/policyGroup',
            getOrgPolicyGroups: '/platform/page-designer/policyGroup/organization/{organizationid}'
        }
    };
}
class PermissionsURL {
    static EndPoints = {
        permission: {
            permissionRoleById: '/access-control/permission/role/{id}',
            pagePermission: '/access-control/permission/page',
            getPermission: '/access-control/permission/{id}',
            createPermission: '/access-control/permission/create',
            updateDeletePermission: '/access-control/permission/{permissionid}',
            getPermissionTree: '/access-control/permission/page/{pageid}/{parentid}',
            getPermissionTypes: '/access-control/permission/type/{applicationid}',
            applicationPermissionsTree: '/access-control/permission/application/{applicationid}'
        },
        page: {
            createPage: '/platform/menu/create',
            updateDeletePage: '/platform/menu/{pageid}',
            AllPageTree: '/platform/menu/tree/{applicationid}'
        }
    };
}
let AccessManagementConfig$1 = class AccessManagementConfig {
    static EndPoint = {
        Organization: {
            getOrganizationList: '/org/organization/all',
            getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
        }
    };
};
class MasterURL {
    static EndPoints = {
        lookup: {
            createCategory: '/platform/master/lookup/category',
            updateDeleteCategory: '/platform/master/lookup/category/{id}',
            lookup: '/platform/master/lookup/{id}',
            createLookup: '/platform/master/lookup',
            getPermissionRoleById: '/access-control/permission/role/{id}',
            getAllCategoryTree: '/platform/master/lookup/category/tree/{applicationid}',
            getLookupTree: '/platform/master/lookup/tree/{categoryid}',
            getPermissionsTree: '/access-control/permission/application/{applicationid}'
        }
    };
}
class AuthURL {
    static EndPoints = {
        auth: {
            user: {
                conformMail: '/org/auth/forgot-password',
                changePassword: '/org/auth/forgot-password-verification',
                login: '/org/auth/login',
                refreshToken: '/org/auth/refresh-token',
                logout: '/org/auth/logout',
                userInfo: '/org/user/page/list',
                userRole: '/org/user/{id}',
                routeToDynamicPage: '/platform/page-designer/page/organization/{orgid}?returnUserPage=true&excludeNoActiveVersionPages=true',
                authMe: '/org/auth/me',
                resetPassword: '/org/user/reset-password',
                orgList: '/org/management-group/organization/tree',
                notification: '/worker/notification',
                workerAvailability: '/worker/updateAvailablity',
                getWorkerAvailability: '/worker/getByCurrentUser',
                userValidate: '/org/auth/user-validate',
                generateLoginUrl: '/org/auth/get-login-url',
                getTokenValidationUrl: '/org/auth/token-validation',
            },
            permission: {
                permissionRoleById: '/access-control/permission/role/{id}',
                pagePermission: '/access-control/permission/page',
                pageLookupPermission: '/access-control/permission/page/lookup'
            },
            microstrategy: {
                login: '/platform/microstrategy/login',
                getLibrary: '/platform/microstrategy/library'
            }
        }
    };
}
class RBACINFO {
    apiHost = '';
    tokenKey = '';
    others;
    orgID;
    environment;
}
class Environment {
    mstrUsername;
    mstrPassword;
    mstrURL;
    mstrProjectID;
    applicationid;
    priority;
}

class Store {
    state$;
    _state$;
    constructor(initialState) {
        this._state$ = new BehaviorSubject(initialState);
        this.state$ = this._state$.asObservable();
    }
    get state() {
        return this._state$.getValue();
    }
    setState(nextState) {
        this._state$.next(nextState);
    }
}

class PermissionStore extends Store {
    constructor() {
        super({});
    }
    setStore(data) {
        if (data) {
            this.setState({ ...this.state, ...data });
        }
    }
    getStore(type = 'P') {
        if (type === 'P')
            return of(this.state);
        else
            return of(this.state);
    }
    flat(array) {
        let result = [];
        if (array) {
            array.forEach(item => {
                result.push(item);
                if (item && Array.isArray(item)) {
                    result = result.concat(this.flat(item));
                }
            });
        }
        return result;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionStore, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionStore });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionStore, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class DataStoreService {
    currentStoreSubject = new BehaviorSubject({});
    currentStore = this.currentStoreSubject.asObservable();
    constructor() {
        // test code
    }
    setData(key, value) {
        const currentStore = this.getCurrentStore();
        currentStore[key] = value;
        this.currentStoreSubject.next(currentStore);
    }
    setObject(value) {
        this.currentStoreSubject.next(value);
    }
    getData(key) {
        const currentStore = this.getCurrentStore();
        return currentStore[key];
    }
    clearStore() {
        const currentStore = this.getCurrentStore();
        Object.keys(currentStore).forEach((key) => {
            delete currentStore[key];
        });
        this.currentStoreSubject.next(currentStore);
    }
    getCurrentStore() {
        return this.currentStoreSubject.value;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataStoreService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataStoreService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataStoreService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class StorageService {
    Storage;
    constructor(Storage) {
        this.Storage = Storage;
    }
    getItem(key) {
        return this.Storage.getItem(key);
    }
    setItem(key, item) {
        return this.Storage.setItem(key, item);
    }
    getObj(key, safe = true) {
        try {
            const item = this.getItem(key);
            return JSON.parse(item);
        }
        catch (e) {
            if (!safe) {
                throw e;
            }
        }
    }
    setObj(key, item) {
        return this.setItem(key, JSON.stringify(item));
    }
    removeItem(key) {
        this.Storage.removeItem(key);
    }
    clear() {
        this.Storage.clear();
    }
}

class LocalService extends StorageService {
    constructor() {
        super(window.sessionStorage);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LocalService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LocalService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LocalService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

const themeList = [
    {
        name: 'Default',
        image: '/assets/images/skin_default.svg',
        key: 'default',
        properties: {
            '--background-color': '#f3f3f3',
            '--header-bg': '#464185',
            '--navigation': '#fff',
            '--primary': '#3e397e',
            '--checkbox-border': '#3e397e',
            '--text-dark': '#000',
            '--label-text': '#2c2863',
            '--hover-text': '#fff',
            '--bg-light': '#fff',
            '--forms': '#fff',
            '--nav-text': '#000',
            '--light-gray': '#696969',
            '--material-icons': '#2c2863',
            '--highlight-list': '#E3F2FD',
            '--table-header': '#f9f9f9',
            '--table-odd': '#f7f7f7',
            '--table-border': '#ddd',
            '--table-hover': '#f6f5ff',
            '--btn': '#3e397e',
            '--menu-panel': '#2c2863',
            '--border-trans': 'transparent',
            '--btn-hover': '#2c2863',
            '--btn-dark': '#2c2863',
            '--dropdown-list': '#fff',
            '--btncancel': '#3e397e',
            '--primary-light': '#6e6b93',
            '--primary-dark': '#282462 ',
            '--light-d-light': '#fff',
            '--ldl-text': '#fff',
            '--light-d-accent': '#fff',
            '--readonly-bg': 'rgb(229 229 229 / 45%)',
            '--var-icon-font': '"FILL" 0, "wght" 200, "GRAD" 0, "opsz" 48',
            '--rocket-icon': '/assets/images/rocket-ship.svg'
        }
    },
    {
        name: 'Light',
        image: '/assets/images/skin_light.svg',
        key: 'light',
        properties: {
            '--background-color': '#f3f3f3',
            '--header-bg': '#f3f3f3',
            '--navigation': '#fff',
            '--primary': '#343344',
            '--checkbox-border': '#343344',
            '--text-dark': '#000',
            '--label-text': '#000',
            '--hover-text': '#fff',
            '--bg-light': '#fff',
            '--forms': '#fff',
            '--nav-text': '#000',
            '--light-gray': '#696969',
            '--material-icons': '#2c2863',
            '--highlight-list': '#E3F2FD',
            '--table-header': '#f9f9f9',
            '--table-odd': '#fff',
            '--table-border': '#ddd',
            '--table-hover': '#f5f5f5',
            '--btn': '#343344',
            '--menu-panel': '#fff',
            '--border-trans': 'transparent',
            '--btn-hover': '#2c2863',
            '--btn-dark': '#343344',
            '--dropdown-list': '#fff',
            '--btncancel': '#343344',
            '--primary-light': '#6e6b93',
            '--primary-dark': '#f5f5f5',
            '--light-d-light': '#343344',
            '--ldl-text': '#000',
            '--light-d-accent': '#343344',
            '--readonly-bg': 'rgb(229 229 229 / 45%)',
            '--var-icon-font': '"FILL" 0, "wght" 500, "GRAD" 0, "opsz" 48',
            '--rocket-icon': '/assets/images/rocket-ship.svg'
        }
    },
    {
        name: 'Dark',
        image: '/assets/images/skin_dark.svg',
        key: 'dark',
        properties: {
            '--background-color': '#1a2035',
            '--header-bg': '#1a2035',
            '--navigation': '#272e46',
            '--nav-text': '#fff',
            '--light-gray': '#a3a3a3',
            '--primary': '#f3266b',
            '--checkbox-border': '#8b8989',
            '--text-dark': '#ddd',
            '--label-text': '#fff',
            '--hover-text': '#fff',
            '--bg-light': '#272e46',
            '--material-icons': '#fff',
            '--forms': '#272e46',
            '--highlight-list': '#364060',
            '--table-header': '#364060',
            '--table-odd': '#2f364c',
            '--table-border': '#3e414c',
            '--table-hover': '#3f465e',
            '--btn': '#f3266b',
            '--menu-panel': '#272e46',
            '--border-trans': 'transparent',
            '--btn-hover': '#f3266b',
            '--btn-dark': '#2c2863',
            '--dropdown-list': '#29314a',
            '--btncancel': 'transparent',
            '--primary-light': '#a75872',
            '--primary-dark': '#202534',
            '--light-d-light': '#fff',
            '--ldl-text': '#fff',
            '--light-d-accent': '#a75872',
            '--readonly-bg': 'rgb(96 96 96 / 45%)',
            '--var-icon-font': '"FILL" 0, "wght" 200, "GRAD" 0, "opsz" 48',
            '--rocket-icon': '/assets/images/rocket-ship_light.svg'
        }
    }
];
const FontSetList = [
    {
        name: 'Medium',
        key: 'medium',
        properties: {
            '--base-font-size': '13px',
            '--font-11': '11px',
            '--font-12': '12px',
            '--font-13': '13px',
            '--font-14': '14px',
            '--font-15': '15px',
            '--font-16': '16px',
            '--font-17': '17px',
            '--font-18': '18px',
            '--font-19': '19px',
            '--font-20': '20px',
            '--font-21': '21px',
            '--font-22': '22px',
            '--font-24': '24px',
            '--font-26': '26px'
        }
    },
    {
        name: 'Large',
        key: 'large',
        properties: {
            '--base-font-size': '15px',
            '--font-11': '13px',
            '--font-12': '14px',
            '--font-13': '15px',
            '--font-14': '16px',
            '--font-15': '17px',
            '--font-16': '18px',
            '--font-17': '19px',
            '--font-18': '20px',
            '--font-19': '21px',
            '--font-20': '22px',
            '--font-21': '23px',
            '--font-24': '28px',
            '--font-26': '30px'
        }
    }
];
const fontRangeSetList = [
    {
        name: '13',
        key: '13',
        properties: {
            '--base-font-size': '13px',
        }
    },
    {
        name: '14',
        key: '14',
        properties: {
            '--base-font-size': '14px',
            '--font-14': '15px',
            '--font-12': '13px',
            '--font-18': '19px',
        }
    },
    {
        name: '15',
        key: '15',
        properties: {
            '--base-font-size': '15px',
            '--font-14': '16px',
            '--font-12': '14px',
            '--font-18': '20px',
        }
    },
    {
        name: '16',
        key: '16',
        properties: {
            '--base-font-size': '16px',
            '--font-14': '17px',
            '--font-12': '15px',
            '--font-18': '21px',
        }
    },
    {
        name: '17',
        key: '17',
        properties: {
            '--base-font-size': '17px',
            '--font-14': '18px',
            '--font-12': '16px',
            '--font-18': '22px',
        }
    },
    {
        name: '18',
        key: '18',
        properties: {
            '--base-font-size': '18px',
            '--font-14': '19px',
            '--font-12': '17px',
            '--font-18': '23px',
        }
    },
    {
        name: '19',
        key: '19',
        properties: {
            '--base-font-size': '19px',
            '--font-14': '20px',
            '--font-12': '18px',
            '--font-18': '24px',
        }
    },
    {
        name: '20',
        key: '20',
        properties: {
            '--base-font-size': '20px',
            '--font-14': '21px',
            '--font-18': '24px',
        }
    }
];

class HttpService {
    http;
    _storeservice;
    RBACORG;
    overrideUrl = true;
    errorData;
    baseUrl = '';
    tokenKey;
    headers = new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .set('role', 'role=CP_PUBLIC');
    showSpinner = new BehaviorSubject(false);
    outsideShowSpinner = new BehaviorSubject(false);
    url1;
    url;
    constructor(http, _storeservice) {
        this.http = http;
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res['RBACORG'] && res['RBACORG'] !== '') {
                this.RBACORG = res['RBACORG'];
                this.url = this.RBACORG['apiHost'] ? this.RBACORG['apiHost'] : 'http://localhost:3000/api';
                this.tokenKey = this.RBACORG['tokenKey'];
            }
        });
        this.url1 = '';
    }
    get(apiRoute) {
        return this.http.get(`${this.url + apiRoute}`, {
            headers: this.getHttpNewHeaders()
        });
    }
    post(apiRoute, body) {
        return this.http.post(`${this.url + apiRoute}`, body, {
            headers: this.getHttpNewHeaders()
        });
    }
    put(apiRoute, body) {
        return this.http.put(`${this.url + apiRoute}`, body, {
            headers: this.getHttpNewHeaders()
        });
    }
    patch(apiRoute, body) {
        return this.http.patch(`${this.url + apiRoute}`, body, {
            headers: this.getHttpNewHeaders()
        });
    }
    delete(apiRoute) {
        return this.http.delete(`${this.url + apiRoute}`, {
            headers: this.getHttpNewHeaders()
        });
    }
    getHttpHeaders() {
        return new HttpHeaders().set('key', 'value');
    }
    getHttpNewHeaders() {
        return this.headers.set('Authorization', `Bearer ${this.getToken()}`);
    }
    getAttachmentHttpHeaders(contentType) {
        return new HttpHeaders().set('Content-Type', contentType).set('x-ms-blob-type', 'BlockBlob');
    }
    putUpload(apiRoute, body, contentType) {
        return this.http.put(`${this.url1 + apiRoute}`, body, { headers: this.getAttachmentHttpHeaders(contentType) });
    }
    getAuthValidation(apiRoute, token) {
        return this.http.get(`${this.url + apiRoute}`, {
            headers: this.getHttpNewHeaders()
        });
    }
    getAuthAccessKey(apiRoute, body) {
        return this.http.post(`${this.url + apiRoute}`, body, {
            headers: this.getHttpNewHeaders()
        });
    }
    putupload2(apiRoute, body, contenttype) {
        return this.http
            .put(`${this.url1 + apiRoute}`, body, {
            headers: this.getAttachmentHttpHeaders(contenttype),
            observe: 'response'
        })
            .pipe(map(data => {
            return data;
        }));
    }
    /**
     *
     * @param apiRoute
     * This function will download the stream file from the API service.
     * No HTTP required for this stream. So used Window.location.href to download the file
     */
    getFormDownloaded(apiRoute) {
        window.location.href = `${this.url + apiRoute}`;
    }
    //common http service(optional)
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Client-side errors
            errorMessage = `Error: ${error.error.message}`;
        }
        else {
            // Server-side errors
            errorMessage = `Error Code: ${error.status}\nMessage: ${error?.error?.message ? error?.error?.message : error.message}`;
        }
        return throwError(errorMessage);
    }
    getToken() {
        const token = this.tokenKey ? this.tokenKey : 'jwt-token';
        return sessionStorage.getItem(token);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HttpService, deps: [{ token: i1.HttpClient }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HttpService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HttpService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: DataStoreService }]; } });

class ThemeService {
    active;
    activeFont;
    constructor() {
        // This is intentional
    }
    setActiveTheme(theme) {
        this.active = theme;
        Object.keys(this.active.properties).forEach(property => {
            document.documentElement.style.setProperty(property, this.active.properties[property]);
        });
    }
    setActiveFont(Fontset) {
        this.activeFont = Fontset;
        if (this.activeFont) {
            Object.keys(this.activeFont.properties).forEach(property => {
                document.documentElement.style.setProperty(property, this.activeFont.properties[property]);
            });
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ThemeService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ThemeService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ThemeService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class ProfileService {
    httpService;
    themeService;
    localstorage;
    profileImage = new Subject();
    constructor(httpService, themeService, localstorage) {
        this.httpService = httpService;
        this.themeService = themeService;
        this.localstorage = localstorage;
    }
    setUserPreference() {
        const user_id = this.localstorage.getItem('id');
        if (user_id) {
            this.getUserPreference(user_id).subscribe((res) => {
                if (res.data && res.data?.config) {
                    const configArray = JSON.parse(res.data.config);
                    this.setTheme(configArray.theme);
                    this.setFont(configArray.font);
                }
            });
        }
    }
    setTheme(event) {
        this.localstorage.setItem('SELECTED_THEME', event);
        const selectedTheme = themeList.filter(theme => theme.key === event)[0];
        this.themeService.setActiveTheme(selectedTheme);
        console.log('Selected Theme:', selectedTheme.key);
    }
    setFont(event) {
        this.localstorage.setItem('SELECTED_FONT', event);
        const selectedFont = FontSetList.filter(fontSet => fontSet.key === event)[0];
        this.themeService.setActiveFont(selectedFont);
    }
    getProfile(img) {
        this.profileImage.next(img);
    }
    getAllUserList(key) {
        return this.httpService.get(`${UserConfig.EndPoint.User.getAllUserList}/${key}`);
    }
    getAllUserOrgList(orgid) {
        return this.httpService.get(UserConfig.EndPoint.User.getAllUserOrgList + orgid);
    }
    getUserPreference(id) {
        return this.httpService.get(UserConfig.EndPoint.User.getUserConfig.replace('{id}', id));
    }
    updateUser(data, userid) {
        return this.httpService.patch(`${UserConfig.EndPoint.User.getAllUserList}/${userid}/updateUserDetails`, data);
    }
    saveUserPreference(data) {
        return this.httpService.post(UserConfig.EndPoint.User.saveUserConfig, data);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProfileService, deps: [{ token: HttpService }, { token: ThemeService }, { token: LocalService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProfileService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProfileService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: HttpService }, { type: ThemeService }, { type: LocalService }]; } });

class AppService {
    currentState = new Subject();
    currentValue = new BehaviorSubject({});
    getValue = this.currentValue.asObservable();
    addValue(key, value) {
        this.currentState.next({ key, value });
    }
    setValue(key, value) {
        this.currentValue.next({ key, value });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AppService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AppService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AppService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

const authLogout = createAction('[Auth] Logout');
const authLogin = createAction('[Auth] Login', props());
const authLoginSuccess = createAction('[Auth] Login Success', props());
const authLoginFailure = createAction('[Auth] Login Failure', props());

const initialState = {
    isAuthenticated: false,
    pages: []
};
const reducer = createReducer(initialState, on(authLogin, state => ({
    ...state,
    loading: true,
    error: null,
    isAuthenticated: false
})), on(authLoginSuccess, (state, { isAuthenticated }) => {
    console.log(isAuthenticated);
    return {
        ...state,
        loading: false,
        isAuthenticated,
        error: null
    };
}), on(authLoginFailure, (state, { isAuthenticated, error }) => ({
    ...state,
    loading: false,
    isAuthenticated,
    error
})), on(authLogout, state => ({
    ...state,
    loading: false,
    error: null,
    isAuthenticated: false
})));
function authReducer(state, action) {
    return reducer(state, action);
}

const APP_PREFIX = 'GAMED-';
class LocalStorageService {
    constructor() {
        // This is intentional
    }
    static loadInitialState() {
        return Object.keys(localStorage).reduce((state, storageKey) => {
            if (storageKey.includes(APP_PREFIX)) {
                const stateKeys = storageKey
                    .replace(APP_PREFIX, '')
                    .toLowerCase()
                    .split('.')
                    .map(key => key
                    .split('-')
                    .map((token, index) => (index === 0 ? token : token.charAt(0).toUpperCase() + token.slice(1)))
                    .join(''));
                let currentStateRef = state;
                stateKeys.forEach((key, index) => {
                    if (index === stateKeys.length - 1) {
                        currentStateRef[key] = JSON.parse(localStorage.getItem(storageKey) || '');
                        return;
                    }
                    currentStateRef[key] = currentStateRef[key] || {};
                    currentStateRef = currentStateRef[key];
                });
            }
            return state;
        }, {});
    }
    setItem(key, value) {
        localStorage.setItem(`${APP_PREFIX}${key}`, JSON.stringify(value));
    }
    getItem(key) {
        return localStorage.getItem(`${APP_PREFIX}${key}`) || '';
    }
    removeItem(key) {
        localStorage.removeItem(`${APP_PREFIX}${key}`);
    }
    /** Tests that localStorage exists, can be written to, and read from. */
    testLocalStorage() {
        const testValue = 'testValue';
        const testKey = 'testKey';
        const errorMessage = 'localStorage did not return expected value';
        this.setItem(testKey, testValue);
        const retrievedValue = this.getItem(testKey);
        this.removeItem(testKey);
        if (retrievedValue !== testValue) {
            throw new Error(errorMessage);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LocalStorageService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LocalStorageService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LocalStorageService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

function initStateFromLocalStorage(reducer) {
    return function (state, action) {
        const newState = reducer(state, action);
        if ([INIT.toString(), UPDATE.toString()].includes(action.type)) {
            return { ...newState, ...LocalStorageService.loadInitialState() };
        }
        return newState;
    };
}

function debug(reducer) {
    return function (state, action) {
        const newState = reducer(state, action);
        console.log(`[DEBUG] action: ${action.type}`, {
            payload: action.payload,
            oldState: state,
            newState
        });
        return newState;
    };
}

const reducers = {
    auth: authReducer,
    router: routerReducer
};
const metaReducers = [initStateFromLocalStorage];
// if (environment['production']) {
metaReducers.unshift(debug);
// }
const selectAuthState = createFeatureSelector('auth');
const selectRouterState = createFeatureSelector('router');

const selectAuth = createSelector(selectAuthState, (state) => state);

class AppConstants {
    static errorMessage = 'Something went wrong!';
    static regexEmail = '^[0-9a-zA-Z.-_+-]+[@][0-9a-zA-Z.-_+]+[.][0-9a-zA-Z]{2,}$';
    static tempPasswordReset = 'TEMP_PASSWORD_RESET';
    static passwordExpired = 'PASSWORD_EXPIRED';
    static errorList = [
        'Have at least one (1) number',
        'Have at least one (1) special character',
        'Have at least one (1) upper case letter',
        'Have at least one (1) lower case letter',
        'Contain a minimum of fourteen (14) characters'
    ];
}

class AlertService {
    router;
    subject = new Subject();
    keepAfterRouteChange = false;
    constructor(router) {
        this.router = router;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert messages
                    this.clear();
                }
            }
        });
    }
    getAlert() {
        return this.subject.asObservable();
    }
    success(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Success, message, keepAfterRouteChange);
    }
    error(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Error, message, keepAfterRouteChange);
    }
    info(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Info, message, keepAfterRouteChange);
    }
    warn(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Warning, message, keepAfterRouteChange);
    }
    alert(type, message, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: type, message: message });
    }
    clear() {
        // clear alerts
        this.subject.next({});
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertService, deps: [{ token: i2.Router }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i2.Router }]; } });
var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));
class Alert {
    type;
    message;
}
class UserGroupDto {
    id;
    name;
    description;
    constructor(data) {
        Object.assign(this, data);
    }
}
class UserRolePageDto {
    id;
    name;
    route;
    icon;
    order;
    ismenu;
    constructor(data) {
        Object.assign(this, data);
    }
}
class UserRoleDto {
    id;
    name;
    description;
    priority;
    order;
    defaultpage;
    defaultpageid;
    parentid;
    parent;
    constructor(data) {
        Object.assign(this, data);
    }
}
class UserDto {
    id;
    name;
    description;
    priority;
    order;
    defaultpage;
    defaultpageid;
    parentid;
    parent;
    constructor(data) {
        Object.assign(this, data);
    }
}
class AccessManagementConfig {
    static EndPoint = {
        Organization: {
            getOrganizationList: '/org/organization/all',
            getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
        }
    };
}

class DynamicTabPageConfig {
    static EndPoint = {
        Page: {
            getActivePage: '/pageversion/{id}',
            getPage: '/page',
            getPageById: '/platform/page-designer/page/{id}',
            getResponseByPageId: '/app/formresponse/{responseId}/getByPageId/{pageId}',
            createFormResponse: '/app/formresponse/create',
            patchFormResponse: '/app/formresponse',
            updateFormResponse: '/pagedata/'
        },
        Narrative: {
            getIncidentListById: '/incident/listBySourceId/{id}'
        },
        Notification: {
            createSurveyConfig: '/surveyconfig/usersurvey/{id}/{status}/{pagedataid}'
        },
        Finance: {
            exportDocument: '/integrated/exportDocuments/',
            uploadDocument: 'document/upload',
            getUniqueId: '/uniqueIdLogic/'
        },
        Attachments: {
            createAttachment: '/app/formresponseattachment/create'
        }
    };
}

class DynamicTabPageService {
    uploadService;
    httpService;
    isPageDesign = new BehaviorSubject(false);
    observePage = this.isPageDesign.asObservable();
    constructor(uploadService, httpService) {
        this.uploadService = uploadService;
        this.httpService = httpService;
    }
    getActivePage(tabPageId, permission) {
        return this.httpService.get(`${DynamicTabPageConfig.EndPoint.Page.getActivePage.replace('{id}', tabPageId)}${permission ? '?applyPermissions=true' : ''}`);
    }
    getDynamicPage(pageId) {
        return this.httpService.get(`${DynamicTabPageConfig.EndPoint.Page.getPage}/${pageId}`);
    }
    getPageById(pageId) {
        return this.httpService.get(DynamicTabPageConfig.EndPoint.Page.getPageById.replace('{id}', pageId));
    }
    getListBySourceId(sourceId) {
        return this.httpService.get(DynamicTabPageConfig.EndPoint.Narrative.getIncidentListById.replace('{id}', sourceId));
    }
    getResponseByPageId(responseId, pageId) {
        return this.httpService.get(DynamicTabPageConfig.EndPoint.Page.getResponseByPageId
            .replace('{responseId}', responseId)
            .replace('{pageId}', pageId));
    }
    createFormResponse(id, requestData) {
        return this.httpService.post(id
            ? DynamicTabPageConfig.EndPoint.Page.updateFormResponse
            : DynamicTabPageConfig.EndPoint.Page.createFormResponse, requestData);
    }
    createUserSurvey(history, Id) {
        return this.httpService.post(DynamicTabPageConfig.EndPoint.Notification.createSurveyConfig
            .replace('{id}', history?.state?.usersurveyid)
            .replace('{status}', 'Completed')
            .replace('{pagedataid}', Id), {});
    }
    updateFormResponse(id, requestData) {
        return this.httpService.patch(`${DynamicTabPageConfig.EndPoint.Page.patchFormResponse}/${id}`, requestData);
    }
    exportReport(data) {
        return this.httpService.post(DynamicTabPageConfig.EndPoint.Finance.exportDocument, data);
    }
    uploadFile(file) {
        return this.uploadService.upload({
            url: this.httpService.baseUrl + '/' + DynamicTabPageConfig.EndPoint.Finance.uploadDocument,
            headers: new HttpHeaders()
                .set('ctype', 'file')
                .set('uniqueid', '6b61ac1e-221a-495c-957b-ad85f65be25a')
                .set('role', 'role=CP_PUBLIC'),
            files: file,
            process: true
        });
    }
    getUniqueId(api) {
        return this.httpService.get(DynamicTabPageConfig.EndPoint.Finance.getUniqueId + api);
    }
    changePage(page) {
        this.isPageDesign.next(page);
    }
    createFormResponseAttachment(data) {
        return this.httpService.post(DynamicTabPageConfig.EndPoint.Attachments.createAttachment, data);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabPageService, deps: [{ token: i1$1.NgxfUploaderService }, { token: HttpService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabPageService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabPageService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1$1.NgxfUploaderService }, { type: HttpService }]; } });

class PageHeaderURL {
    static EndPoints = {
        page: {
            getAuthorizedPages: '/platform/page-designer/page/organization/{orgid}?returnUserPage=true&excludeNoActiveVersionPages=true'
        }
    };
}

class PageHeaderService {
    httpService;
    constructor(httpService) {
        this.httpService = httpService;
    }
    getAuthorizedPages(orgid) {
        return this.httpService.get(PageHeaderURL.EndPoints.page.getAuthorizedPages.replace('{orgid}', orgid));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageHeaderService, deps: [{ token: HttpService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageHeaderService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageHeaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: HttpService }]; } });

class AuthState {
    user;
}

class AuthStore extends Store {
    httpService;
    constructor(httpService) {
        super(new AuthState());
        this.httpService = httpService;
    }
    addAuthInfo(user) {
        this.setState({ ...this.state, user });
    }
    getAuthInfo() {
        console.log(this.state);
        if (this.state.user) {
            return of(this.state.user);
        }
        else {
            return forkJoin([this.httpService.get(AuthURL.EndPoints.auth.user.userInfo)]).pipe(tap(([user]) => {
                return user;
            }));
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthStore, deps: [{ token: HttpService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthStore });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthStore, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: HttpService }]; } });

const credentialsKey = 'jwt-token';
/**
 * Provides storage for authentication credentials.
 * The Credentials interface should be replaced with proper implementation.
 */
class CredentialsService {
    token = null;
    constructor() {
        const savedCredentials = sessionStorage.getItem(credentialsKey);
        if (savedCredentials) {
            this.token = savedCredentials;
        }
    }
    /**
     * Checks is the user is authenticated.
     * @return True if the user is authenticated.
     */
    isAuthenticated() {
        return !!this.credentials;
    }
    /**
     * Gets the user credentials.
     * @return The user credentials or null if the user is not authenticated.
     */
    get credentials() {
        return this.token;
    }
    /**
     * Sets the user credentials.
     * The credentials may be persisted across sessions by setting the `remember` parameter to true.
     * Otherwise, the credentials are only persisted for the current session.
     * @param credentials The user credentials.
     * @param remember True to remember credentials across sessions.
     */
    setCredentials(credentials) {
        this.token = credentials || null;
        if (credentials) {
            sessionStorage.setItem(credentialsKey, credentials);
        }
        else {
            sessionStorage.clear();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CredentialsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CredentialsService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CredentialsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class AuthService {
    httpService;
    store;
    _router;
    credentialsService;
    localstore;
    sharedInfo;
    alertService;
    dynamicTabPageService;
    pageHeaderService;
    constructor(injector, httpService, store, _router, credentialsService, localstore) {
        this.httpService = httpService;
        this.store = store;
        this._router = _router;
        this.credentialsService = credentialsService;
        this.localstore = localstore;
        this.alertService = injector.get(AlertService);
        this.dynamicTabPageService = injector.get(DynamicTabPageService);
        this.pageHeaderService = injector.get(PageHeaderService);
    }
    orgInfo = new BehaviorSubject('');
    currentOrgInfo = this.orgInfo.asObservable();
    currentMenu = new BehaviorSubject('');
    currentMenuInfo = this.currentMenu.asObservable();
    feedOrgInfo(data) {
        this.orgInfo.next(data);
    }
    getCurrentMenu(data) {
        this.currentMenu.next(data);
    }
    getUserOrgList() {
        return this.httpService.get(AuthURL.EndPoints.auth.user.orgList);
    }
    getUnNotified() {
        return this.httpService.get(AuthURL.EndPoints.auth.user.notification);
    }
    updateUnNotified(data) {
        return this.httpService.post(AuthURL.EndPoints.auth.user.notification, data);
    }
    updateWorkerAvailability(data) {
        return this.httpService.patch(AuthURL.EndPoints.auth.user.workerAvailability, data);
    }
    getWorkerAvailability() {
        return this.httpService.get(AuthURL.EndPoints.auth.user.getWorkerAvailability);
    }
    getMstrToken() {
        return this.httpService.get(AuthURL.EndPoints.auth.microstrategy.login).pipe(res => {
            return res;
        });
    }
    login(email, password, otp) {
        const body = {
            email: email,
            password: password,
            secret: otp ? otp : ''
        };
        return this.httpService.post(AuthURL.EndPoints.auth.user.login, body).pipe(mergeMap((res) => {
            if (res['data'] === 'MFA_CODE_SEND') {
                return of(res['data']);
            }
            if ([AppConstants.tempPasswordReset, AppConstants.passwordExpired].includes(res?.data?.action)) {
                sessionStorage.setItem('email', res.data.user?.email);
                sessionStorage.setItem('id', res.data.user?.id);
                return of(res);
            }
            this.credentialsService.setCredentials(res['data'].idToken.jwtToken);
            sessionStorage.setItem('refreshToken', res['data'].refreshToken.token);
            sessionStorage.setItem('email', res['data'].idToken.payload['email']);
            sessionStorage.setItem('id', res['data'].idToken.payload['custom:id']);
            sessionStorage.setItem('username', res['data'].idToken.payload['name']);
            return this.getUserInfo();
        }));
    }
    refreshToken(platform = 'aws') {
        const email = sessionStorage.getItem('email');
        const refreshToken = sessionStorage.getItem('refreshToken');
        const body = {
            email,
            refreshToken
        };
        if (platform === 'aws') {
            return this.httpService.post(AuthURL.EndPoints.auth.user.refreshToken, body).pipe(mergeMap((res) => {
                this.credentialsService.setCredentials(res['data'].idToken.jwtToken);
                sessionStorage.setItem('refreshToken', res['data'].refreshToken.token);
                sessionStorage.setItem('email', res['data'].idToken.payload['email']);
                sessionStorage.setItem('id', res['data'].idToken.payload['custom:id']);
                sessionStorage.setItem('username', res['data'].idToken.payload['name']);
                console.log('new token generated...', res['data'].idToken.jwtToken);
                return [res['data'].idToken.jwtToken];
            }));
        }
        else {
            return this.httpService.post(AuthURL.EndPoints.auth.user.refreshToken, body).pipe(mergeMap((res) => {
                this.credentialsService.setCredentials(res['data'].token);
                sessionStorage.setItem('refreshToken', res['data'].refreshToken);
                return [res['data'].token];
            }));
        }
    }
    resetLoggedIn() {
        this.httpService
            .post(AuthURL.EndPoints.auth.user.logout, {
            email: sessionStorage.getItem('email')
        })
            .subscribe(() => {
            console.log('Logged in flag reset successful.');
        });
    }
    logout() {
        this._router.navigate(['/login']);
        sessionStorage.clear();
        localStorage.clear();
    }
    getUserInfo() {
        return forkJoin([this.httpService.get(AuthURL.EndPoints.auth.user.userInfo)]).pipe(tap(([user]) => {
            this.store.addAuthInfo(user['data']);
            return user;
        }));
    }
    getUserRole(id) {
        return this.httpService.get(AuthURL.EndPoints.auth.user.userRole.replace('{id}', id)).pipe(res => {
            return res;
        });
    }
    routeToDynamicPage(orgid) {
        return this.httpService
            .get(AuthURL.EndPoints.auth.user.routeToDynamicPage.replace('{orgid}', orgid))
            .pipe((res) => {
            return res;
        });
    }
    getAuthMe() {
        return this.httpService.get(AuthURL.EndPoints.auth.user.authMe);
    }
    ResetPassword(data) {
        return this.httpService.post(AuthURL.EndPoints.auth.user.resetPassword, data);
    }
    getRoleKey() {
        const user = this.localstore.getObj('user');
        if (user && user.role) {
            return user.role.rolekey;
        }
    }
    isAdmin() {
        return 'ADM' === this.getRoleKey();
    }
    getOrgID() {
        const user = this.localstore.getObj('user');
        if (user && user.userWorkInfo && user.userWorkInfo.organization && user.userWorkInfo.organization.id) {
            return user.userWorkInfo.organization.id;
        }
        else {
            return '';
        }
    }
    conformMail(data) {
        return this.httpService.post(AuthURL.EndPoints.auth.user.conformMail, data);
    }
    changePassword(data) {
        return this.httpService.post(AuthURL.EndPoints.auth.user.changePassword, data);
    }
    setSharedMessage(data) {
        this.sharedInfo = data;
    }
    getSharedMessage() {
        return this.sharedInfo;
    }
    async checkDynamicPagePermission(pageId) {
        const dynamicPages = await this.getAuthorizedPages();
        if (pageId) {
            this.dynamicTabPageService.getPageById(pageId).subscribe(res => {
                if (dynamicPages.some(page => page.id === res['data'][0].activeVersion.id)) {
                    this._router.navigate([`pages/dynamic-search/search/${res['data'][0].activeVersion.id}`]);
                }
                else {
                    this.alertService.error(`You don't have permissions for ${res['data'][0].activeVersion.pagename} . Please Contact Administrator`);
                }
            });
        }
        else {
            this.alertService.error('You don\'t have permissions to perform the following operations .Please Contact Administrator');
        }
    }
    getCurrentOrg() {
        return this.getUserOrgList()
            .toPromise()
            .then(response => {
            return response['data'][0].id;
        });
    }
    async getAuthorizedPages() {
        const orgId = await this.getCurrentOrg();
        return this.pageHeaderService
            .getAuthorizedPages(orgId)
            .toPromise()
            .then(response => {
            const dynamicPage = response['data'].filter(page => {
                return (page.activeVersion &&
                    (page.activeVersion.gridconfig || page.activeVersion.templatejson || this.getCustomPage(page)));
            });
            return dynamicPage.map(page => ({
                id: page.activeVersion.id,
                name: page.activeVersion.pagename,
                activeVersion: page.activeVersion
            }));
        }, _error => this.alertService.error(AppConstants.errorMessage));
    }
    getCustomPage(page) {
        if (page.activeVersion.tabconfig) {
            const routingTab = JSON.parse(page.activeVersion.tabconfig).filter(x => x.type === 'ROUTING');
            return routingTab.length && page;
        }
    }
    validateToken(token, requestObject) {
        this.credentialsService.setCredentials(token);
        return this.httpService.getAuthAccessKey(AuthURL.EndPoints.auth.user.getTokenValidationUrl, requestObject).pipe(mergeMap((res) => {
            if (res['data'] === 'MFA_CODE_SEND') {
                return of(res['data']);
            }
            this.credentialsService.setCredentials(res['data'].token);
            sessionStorage.setItem('refreshToken', res['data'].refreshToken);
            sessionStorage.setItem('email', res['data'].email);
            sessionStorage.setItem('id', res['data'].id);
            sessionStorage.setItem('username', res['data'].name);
            return this.getUserInfo();
        }));
    }
    generateLoginUrl() {
        return this.httpService.get(AuthURL.EndPoints.auth.user.generateLoginUrl);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthService, deps: [{ token: i0.Injector }, { token: HttpService }, { token: AuthStore }, { token: i2.Router }, { token: CredentialsService }, { token: LocalService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: HttpService }, { type: AuthStore }, { type: i2.Router }, { type: CredentialsService }, { type: LocalService }]; } });

const DISPLAY_IN_SECONDS = 8;
class AlertComponent {
    alertService;
    alerts = [];
    constructor(alertService) {
        this.alertService = alertService;
    }
    ngOnInit() {
        this.alertService.getAlert().subscribe((alert) => {
            if (!alert) {
                // clear alerts when an empty alert is received
                this.alerts = [];
                return;
            }
            // add alert to array
            this.alerts.push(alert);
            // remove alert after 5 seconds
            setTimeout(() => this.removeAlert(alert), DISPLAY_IN_SECONDS * 1000);
        });
    }
    removeAlert(alert) {
        this.alerts = this.alerts.filter(x => x !== alert);
    }
    cssClass(alert) {
        if (!alert) {
            return;
        }
        // return css class based on alert type
        switch (alert.type) {
            case AlertType.Success:
                return 'alert alert-success';
            case AlertType.Error:
                return 'alert alert-danger';
            case AlertType.Info:
                return 'alert alert-info';
            case AlertType.Warning:
                return 'alert alert-warning';
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertComponent, deps: [{ token: AlertService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AlertComponent, selector: "app-alert", ngImport: i0, template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"], dependencies: [{ kind: "directive", type: i8.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-alert', template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"] }]
        }], ctorParameters: function () { return [{ type: AlertService }]; } });

let LoginComponent$1 = class LoginComponent {
    store$;
    _router;
    fb;
    modalService;
    alertService;
    authService;
    route;
    httpServie;
    input;
    LOGININFO;
    RBACORG;
    passwordExpired = new EventEmitter();
    loginSuccessful = new EventEmitter();
    verifyingOtp = new EventEmitter();
    value3;
    cities = [];
    selectedCity1;
    loginForm;
    otpForm;
    show;
    disabledLoginPage;
    submitStatus;
    submitSecretStatus;
    errorStatus;
    destory$ = new Subject();
    closeResult = '';
    isAuthenticated$;
    localstorage;
    primengConfig;
    isOtpSent;
    profileService;
    appService;
    DEFAULT_PASSWORD_RESET = 'TEMP_PASSWORD_RESET';
    isOTP = false;
    enterOTP;
    userEmail;
    constructor(injector, store$, _router, fb, modalService, alertService, authService, route, httpServie) {
        this.store$ = store$;
        this._router = _router;
        this.fb = fb;
        this.modalService = modalService;
        this.alertService = alertService;
        this.authService = authService;
        this.route = route;
        this.httpServie = httpServie;
        this.profileService = injector.get(ProfileService);
        this.localstorage = injector.get(LocalService);
        this.primengConfig = injector.get(PrimeNGConfig);
        this.appService = injector.get(AppService);
        this.submitStatus = 'LOGIN';
        this.disabledLoginPage = false;
    }
    ngOnInit() {
        sessionStorage.clear();
        localStorage.clear();
        this.initializeForm();
        this.getSessionDetails();
        this.primengConfig.ripple = true;
        this.isAuthenticated$ = this.store$.pipe(select(selectAuth));
        this.isAuthenticated$.subscribe((res) => {
            if (res.isAuthenticated) {
                const routeToAdmin = res.pages.some(a => a.name === 'Application Management');
                if (res?.action === this.DEFAULT_PASSWORD_RESET) {
                    const query = {
                        queryParams: {
                            isTempPassword: res.action === this.DEFAULT_PASSWORD_RESET,
                            email: this.loginForm.value.email.trim()
                        }
                    };
                    this._router.navigate(['/auth/change-password', query]);
                }
                else if (routeToAdmin) {
                    this._router.navigate(['/pages/rbac']);
                }
                else {
                    this._router.navigate(['/pages/page-design/list']);
                }
            }
        }, err => {
            console.log(err);
            if (err.error) {
                if (err?.error?.errors?.code === 'NotAuthorizedException' || err?.error?.errors?.email === 'notFound') {
                    this.alertService.error('Invalid Credentials');
                }
                else {
                    this.alertService.error('System Error, Please try after sometime');
                }
            }
            this.submitStatus = 'LOGIN';
            this.submitSecretStatus = 'Submit Secret Code';
        });
        this.route.queryParams.pipe(takeUntil(this.destory$), filter((params) => !!params.email)).subscribe((params) => {
            this.loginForm.patchValue({
                email: params.email,
            });
        });
    }
    ngOnDestroy() {
        this.destory$.next();
        this.destory$.complete();
    }
    initializeForm() {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.pattern(AppConstants.regexEmail)]],
            password: ['', Validators.required],
            conditions: ['', Validators.required]
        });
    }
    initializeOtpForm() {
        this.otpForm = this.fb.group({
            otp: ['', Validators.required]
        });
    }
    open(content) {
        this.modalService.open(content, { size: 'lg', backdrop: 'static' }).result.then(result => {
            this.closeResult = `Closed with: ${result}`;
        }, reason => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    login(otp) {
        this.submitStatus = 'Please wait ...';
        this.submitSecretStatus = 'Please wait ...';
        this.errorStatus = '';
        const loginform = this.loginForm.getRawValue();
        this.authService.login(loginform.email, loginform.password, otp).subscribe((res) => {
            if (res) {
                console.log(res);
                if (res === 'MFA_CODE_SEND') {
                    console.log('Request MFA Code...');
                    this.isOtpSent = true;
                    this.initializeOtpForm();
                    this.submitSecretStatus = 'Submit Secret Code';
                    return;
                }
                else if (res?.data?.action === AppConstants.tempPasswordReset) {
                    const queryParams = {
                        isTempPassword: true,
                    };
                    this._router.navigate(['/change-password'], { queryParams });
                }
                else if (res?.data?.action === AppConstants.passwordExpired) {
                    this.passwordExpired.emit('change-password');
                    this._router.navigate(['/change-password']);
                }
                else {
                    if (this.LOGININFO.DONT_GET_USERINFO) {
                        if (this.LOGININFO['ENABLE_MFA']) {
                            this.isOTP = true;
                            this.loginSuccessful.emit(res[0]);
                        }
                    }
                    else {
                        this.getUserInfo();
                    }
                }
            }
        }, error => {
            console.log(error);
            if (error.error) {
                if (error?.error?.errors?.code === 'NotAuthorizedException' || error?.error?.errors?.email === 'Not Found') {
                    this.alertService.error(error?.error?.message || 'Invalid Email or Password');
                }
                else
                    this.alertService.error(error?.error?.error || 'Invalid Email or Password');
            }
            else {
                this.alertService.error(error?.error?.error || 'Invalid Email or Password');
            }
            this.submitStatus = 'LOGIN';
        });
    }
    verifyOtp() {
        this.verifyingOtp.emit(this.enterOTP);
    }
    sendOtp() {
        const otpFormDetails = this.otpForm.getRawValue();
        this.login(otpFormDetails.otp);
    }
    toggleShow() {
        this.show = !this.show;
        if (this.show) {
            this.input.nativeElement.type = 'text';
        }
        else {
            this.input.nativeElement.type = 'password';
        }
    }
    routeToChangePassword() {
        this._router.navigate(['/forgot-password']);
    }
    getUserInfo() {
        this.authService.getAuthMe().subscribe((res) => {
            if (res.data) {
                sessionStorage.setItem('orgid', res.data.organizationid);
                this.authService.getUserRole(res.data.id).subscribe(userInfo => {
                    if (this.LOGININFO['ENABLE_MFA']) {
                        this.isOTP = true;
                        this.userEmail = userInfo?.data;
                        this.httpServie.post('/verify-otp/sendotp', { email: userInfo?.data?.email }).subscribe();
                    }
                    else {
                        this.isOTP = false;
                        this.profileService.setUserPreference();
                        sessionStorage.setItem('user', JSON.stringify(userInfo.data));
                        const landingPage = userInfo.data.userroles[0].defaultpage;
                        sessionStorage.setItem('currentPage', JSON.stringify(landingPage));
                        this.appService.addValue('currentPage', landingPage);
                        this.routeToDynamicPage(landingPage);
                    }
                });
            }
        }, error => {
            console.log(error);
        });
    }
    routeToDynamicPage(landingPage) {
        const orgid = sessionStorage.getItem('orgid');
        if (landingPage.route.includes('dynamic-search/search')) {
            const pageId = landingPage.route.split('/')[4];
            if (pageId) {
                this.authService.checkDynamicPagePermission(pageId);
            }
            else {
                this.authService.routeToDynamicPage(orgid).subscribe(res => {
                    if (res && res.data.length) {
                        const authorisedPages = res?.data?.filter(a => a?.activeVersion?.gridconfig);
                        this.localstorage.setItem('selectedDynamicPage', authorisedPages[0]?.activeVersion?.id);
                        this.conditionAuthorisedPages(authorisedPages);
                    }
                    else {
                        this.alertService.error('You don\'t have permissions to perform the following operations .Please Contact Administrator');
                    }
                });
            }
        }
        else {
            const landingPageRoute = `pages${landingPage?.route}`;
            this._router.navigate([landingPageRoute]);
            this.localstorage.setItem('dashboardRoute', landingPageRoute);
        }
    }
    conditionAuthorisedPages(authorisedPages) {
        if (authorisedPages && authorisedPages.length && authorisedPages[0]?.activeVersion?.gridconfig) {
            const gridPageRoute = `pages/dynamic-search/search/${authorisedPages[0]?.activeVersion?.id}`;
            this._router.navigate([gridPageRoute]);
            this.localstorage.setItem('dashboardRoute', gridPageRoute);
        }
    }
    gotoRegistrationPage() {
        window.open(this.LOGININFO['PARTICIPANT_REGISTRATION_LINK'], '_blank');
    }
    getSessionDetails() {
        let getToken = window.location.hash;
        if (getToken.includes('#state=')) {
            const currentUrl = new URL(window.location.href.replace(/#/g, "?"));
            const stateKey = currentUrl.searchParams.get("state");
            const authCode = currentUrl.searchParams.get("code");
            const token = currentUrl.searchParams.get("id_token");
            let requestObject = {
                key: stateKey,
                code: authCode
            };
            this.authService.validateToken(token, requestObject).subscribe((res) => {
                if (res) {
                    this.getUserInfo();
                }
            }, error => {
                if (error.error) {
                    if (error?.error?.errors?.code === 'NotAuthorizedException' || error?.error?.errors?.email === 'notFound') {
                        this.alertService.error(AppConstants.regexEmail);
                    }
                    else
                        this.alertService.error(error?.error?.error || AppConstants.errorMessage);
                }
                this.submitStatus = 'LOGIN';
            });
        }
    }
    generateLoginUrl() {
        this.authService.generateLoginUrl().subscribe((res) => {
            window.open(res?.data, '_self');
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LoginComponent, deps: [{ token: i0.Injector }, { token: i1$2.Store }, { token: i2.Router }, { token: i3.FormBuilder }, { token: i4.NgbModal }, { token: AlertService }, { token: AuthService }, { token: i2.ActivatedRoute }, { token: HttpService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: LoginComponent, selector: "lib-login", inputs: { LOGININFO: "LOGININFO", RBACORG: "RBACORG" }, outputs: { passwordExpired: "passwordExpired", loginSuccessful: "loginSuccessful", verifyingOtp: "verifyingOtp" }, providers: [MessageService], viewQueries: [{ propertyName: "input", first: true, predicate: ["showhideinput"], descendants: true }], ngImport: i0, template: "<app-alert></app-alert>\r\n<div class=\"row login\" id=\"back\">\r\n  <div class=\"d-none d-lg-flex flex-column col-lg-7 align-i p-0 banner-sec justify-content-center container-image\"\r\n    [style.background-image]=\"'url(' + (LOGININFO['BACKGROUND_IMAGE'] ? LOGININFO['BACKGROUND_IMAGE'] :'assets/images/indiana/indiana-login-banner.png') + ')'\">\r\n    <div class=\"bannerCont clearfix\">\r\n      <img [src]=\"LOGININFO['BANNER_LOGO'] || 'assets/images/ga-brain/ga-brain-spinal-logo.png'\">\r\n      <div *ngIf=\"LOGININFO['BANNER_TITLE']\" [innerHTML]=\"LOGININFO['BANNER_TITLE']\"></div>\r\n      <h2 *ngIf=\"!LOGININFO['BANNER_TITLE']\">BRAIN and SPINAL INJURY TRUST FUND COMMISSION</h2>\r\n    </div>\r\n  </div>\r\n  <div class=\"d-flex col-lg-5 d-flex justify-content-center align-items-center rightLoginSet\">\r\n    <div class=\"col-12 col-sm-12 shadow col-lg-9 px-2\">\r\n      <div class=\"text-left logo-group lg-mb-50\">\r\n        <div class=\"form-group mb-4\">\r\n          <div class=\"logo-group\">\r\n            <span class=\"logo-img\">\r\n              <img [attr.src]=\"LOGININFO['BANNER'] ? LOGININFO['BANNER'] :'assets/images/indiana/indiana-logo-2.png'\"\r\n                class=\"cfaLogoTop logo-img cfaLogoTopSmall\" width=\"300\" alt=\"Indiana Department of Health\" />\r\n              <div *ngIf=\"LOGININFO['TITLE']\" [innerHTML]=\"LOGININFO['TITLE']\" class=\"mt-3 mb-3\">\r\n              </div>\r\n              <h5 class=\"mt-3 mb-3 font-weight-bold\" *ngIf=\"!LOGININFO['TITLE']\">{{ 'Maternal and Child Health Data System'}}</h5>\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"loginBottomSet clearfix\">\r\n        <div class=\"login-content mb-3\">\r\n          <form (ngSubmit)=\"login()\" novalidate [formGroup]=\"loginForm\">\r\n            <div class=\"clearfix\" *ngIf=\"!isOTP\">\r\n              <div class=\"form-group mb-3\">\r\n                <label aria-labelledby=\"username\" for=\"username\" class=\"intake-form-labels\">Email</label>\r\n                <input class=\"Inputs\" autofocus type=\"mail\" formControlName=\"email\" placeholder=\"Email\" name=\"email\"\r\n                  id=\"username\" tabindex=\"0\" required />\r\n              </div>\r\n              <div class=\"form-group no-mar mb-3\">\r\n                <label aria-labelledby=\"password\" for=\"password\" class=\"intake-form-labels w-100\">Password</label>\r\n                <div class=\"position-relative\">\r\n                  <input class=\"Inputs password\" #showhideinput formControlName=\"password\" type=\"password\"\r\n                    placeholder=\"Password\" name=\"password\" id=\"password\" tabindex=\"0\" required />\r\n                  <em class=\"pi\" [ngClass]=\"{ 'pi-eye': show, 'pi-eye-slash': !show }\" aria-hidden=\"true\"\r\n                    (click)=\"toggleShow()\"></em>\r\n                </div>\r\n                <!-- <i class=\"fa fa-eye\" aria-hidden=\"true\" (click)=\"toggleShow()\"></i> -->\r\n                <div class=\"text-right\" *ngIf=\"LOGININFO['ENABLE_FORGOT_PASSWORD']\">\r\n                  <a href=\"javascript:void(0)\" (click)=\"routeToChangePassword()\" class=\"btn-link forget\">\r\n                    Forgot Password?</a>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group clearfix mb-30 clsMin-23 pt-10\">\r\n                <div class=\"checkbox\">\r\n                  <p-checkbox class=\"checklabelbox\" name=\"conditions\" formControlName=\"conditions\" value=\"yes\"\r\n                    inputId=\"ch\" aria-checked=\"false\">\r\n                  </p-checkbox>\r\n                  <label class=\"checklabel\" for=\"ch\">I accept the <a href=\"javascript:void(0)\"\r\n                      (click)=\"open(content)\">terms &amp; conditions</a></label>\r\n                </div>\r\n              </div>\r\n              <div class=\"clearfix text-center col-md-12 col-12 mt-4\">\r\n                <p-button role=\"button\" type=\"submit\" title=\"Login\" [disabled]=\"!loginForm.valid\"\r\n                  styleClass=\"w-100 align-items-center justify-content-center d-block mb-2\" class=\"loginbutton w-100\"\r\n                  tabindex=\"0\">{{ submitStatus }}</p-button>\r\n                <!-- <div class=\"\">\r\n                  <p>Participant Register?<a href=\"javascript:void(0);\" class=\"text-primary pl-10\"\r\n                      *ngIf=\"LOGININFO['REGISTRATION_ENABLE'] ? LOGININFO['REGISTRATION_ENABLE'] : false\"\r\n                      style=\"text-decoration: none;\" (click)=\"gotoRegistrationPage()\">Click here</a></p>\r\n                </div> -->\r\n                <div class=\"\">\r\n                  <p>Applicant Register?<a href=\"javascript:void(0);\" class=\"text-primary pl-10\"\r\n                      style=\"text-decoration: none;\" routerLink=\"/registration\">Click here</a></p>\r\n                </div>\r\n              </div>\r\n              <div class=\"mar-btm-20 picslogin\"\r\n                *ngIf=\"LOGININFO['LOGINWITH_AZURE'] ? LOGININFO['LOGINWITH_AZURE'] : false\"><span>Or</span></div>\r\n              <div class=\"clearfix text-center col-md-12 col-12 mt-2\"\r\n                *ngIf=\"LOGININFO['LOGINWITH_AZURE'] ? LOGININFO['LOGINWITH_AZURE'] : false\">\r\n                <p-button role=\"button\" type=\"button\" title=\"Login with Azure\" class=\"loginbutton\" tabindex=\"0\"\r\n                  (click)=\"generateLoginUrl()\">Login with Azure</p-button>\r\n              </div>\r\n            </div>\r\n            <div class=\"clearfix\" *ngIf=\"LOGININFO['ENABLE_MFA'] && isOTP\">\r\n              <div class=\"form-group\">\r\n                <label aria-labelledby=\" \" for=\"otp\" class=\"intake-form-labels\">One Time Password</label>\r\n                <input\r\n                  class=\"Inputs\"\r\n                  autofocus\r\n                  type=\"text\" \r\n                  [ngModelOptions]=\"{ standalone: true }\"\r\n                  [(ngModel)]=\"enterOTP\"\r\n                  placeholder=\"Enter OTP\"\r\n                  name=\"otp\"\r\n                  id=\"otp\"\r\n                  tabindex=\"0\"\r\n                  required />\r\n              </div>\r\n              <div class=\"clearfix text-center col-12 mt-4\">\r\n                <p-button\r\n                  role=\"button\"\r\n                  type=\"button\"\r\n                  title=\"Login\" \r\n                  [disabled]=\"!enterOTP\" \r\n                  (click)=\"verifyOtp()\"\r\n                  styleClass=\"w-100 d-block mb-2\"\r\n                  class=\"loginbutton w-100\"\r\n                  tabindex=\"0\"\r\n                  >Submit</p-button>\r\n                </div>\r\n            </div> \r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"powered\">\r\n      <p class=\"clsInfo-text mt-0 text-center\">\r\n        <span style=\"font-size: 13px\"> Powered by </span>\r\n        <a href=\"https://www.cardinality.ai/\" rel=\"noopener\" role=\"link\" target=\"_blank\" tabindex=\"0\">\r\n          <img alt=\"cardinality\" class=\"Cardinality_logo\" src=\"assets/images/cardinality-logo_text.svg\" width=\"120\" />\r\n        </a>\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #content let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">\r\n      BRAIN and SPINAL INJURY TRUST FUND COMMISSIONS Terms &amp; conditions\r\n    </h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body termscondition\">\r\n    <p class=\"mb-2\">\r\n      These Terms and Conditions constitute a legally binding agreement (\u201CAgreement\u201D) made between you, whether\r\n      personally as a professional, or on behalf of an entity you represent (\u201CYou\u201D or \u201CCustomer\u201D) and Cardinality.AI\r\n      whose principal place of business is U.S.A, (\u201CCardinality\u201D, \u201Cwe,\u201D \u201Cus\u201D or \u201Cour\u201D), concerning your access to\r\n      and contracting a PICS offering (\u201CProduct\u201D).\r\n    </p>\r\n    <p class=\"mb-2\">\r\n      You agree that by contracting our Product, you have read, understood, and agree to be bound by these Terms and\r\n      Conditions, which may be executed via electronic signature, electronic online communications, or via emailed\r\n      PDF-format document.\r\n    </p>\r\n    <p class=\"mb-2\">\r\n      You confirm that you are fully able and entitled to accept these Terms and Conditions governing the purchase of\r\n      the Product and are authorized to do so on behalf of the Customer. This service is only available for\r\n      professionals and companies, and you represent that you are not a consumer or a minor.\r\n    </p>\r\n    <p class=\"mt-4 mb-2\">\r\n      <strong>CONFIDENTIALITY AGREEMENT</strong>\r\n    </p>\r\n    <p class=\"mb-2\">\r\n      You agree that you shall maintain strictly confidential, and shall not reveal nor by any means transfer to a third\r\n      party, or use any and all information related to the Services, products, materials, and prototypes, and any\r\n      technical documentation that forms part of the Know-how of Product, or that it has received from third parties, or\r\n      any other information to which you have access by virtue of accepting these terms.\r\n    </p>\r\n    <p class=\"mb-2\">\r\n      You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service,\r\n      violate any laws in your jurisdiction (including but not limited to copyright laws).\r\n    </p>\r\n    <p class=\"mt-4 mb-2\">\r\n      <strong>DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY</strong>\r\n    </p>\r\n    <p class=\"mb-2\">\r\n      We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or\r\n      error-free.\r\n    </p>\r\n    <p class=\"mb-2\">\r\n      We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.\r\n    </p>\r\n    <p class=\"mb-2\">\r\n      You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at\r\n      any time, without notice to you.\r\n    </p>\r\n    <p class=\"mb-2\">\r\n      You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all\r\n      products and services delivered to you through the service are (except as expressly stated by us) provided \u2018as is\u2019\r\n      and \u2018as available\u2019 for your use, without any representation, warranties or conditions of any kind, either express\r\n      or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a\r\n      particular purpose, durability, title, and non-infringement.\r\n    </p>\r\n    <p class=\"mt-4 mb-2\">\r\n      <strong>INDEMNIFICATION</strong>\r\n    </p>\r\n    <p class=\"mb-2\">\r\n      You agree to indemnify, defend and hold harmless Cardinality.AI and our parent, subsidiaries, affiliates,\r\n      partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers,\r\n      interns and employees, harmless from any claim or demand, including reasonable attorneys\u2019 fees, made by any\r\n      third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by\r\n      reference or your violation of any law or the rights of a third-party.\r\n    </p>\r\n    <p class=\"mt-4 mb-2\">\r\n      <strong>SEVERABILITY</strong>\r\n    </p>\r\n    <p class=\"mb-2\">\r\n      If any provision of these Terms of Service is determined to be unlawful, void, or unenforceable, such provision\r\n      shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion\r\n      shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and\r\n      enforceability of any other remaining provisions.\r\n    </p>\r\n    <p class=\"mt-4 mb-2\"><strong>GOVERNING LAW</strong></p>\r\n    <p class=\"mb-2\">\r\n      These Terms shall be governed and construed in accordance with the laws of United States, without regard\r\n      to its conflict of law provisions.\r\n    </p>\r\n    <p class=\"mb-2\">\r\n      Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If\r\n      any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these\r\n      Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and\r\n      supersede and replace any prior agreements we might have had between us regarding the Service.\r\n    </p>\r\n    <p class=\"mt-4 mb-2\"><strong>CHANGES</strong></p>\r\n    <p class=\"mb-2\">\r\n      We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is\r\n      material we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material\r\n      change will be determined at our sole discretion.\r\n    </p>\r\n    <p class=\"mb-2\">\r\n      By continuing to access or use our Service after any revisions become effective, you agree to be bound by the\r\n      revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.\r\n    </p>\r\n\r\n    <p class=\"mt-4 mb-2\"><strong>CONTACT US</strong></p>\r\n    <p class=\"mb-2\">If you have any questions about these Terms, please contact us.</p>\r\n  </div>\r\n</ng-template>", styles: ["body{height:100%;overflow:hidden;width:100%!important;box-sizing:border-box;position:relative}.login#back{margin:auto;width:100%;position:relative;overflow:hidden;height:100vh}.login .h2,.login h2{font-size:20px;color:var(--text-dark);font-family:Roboto,sans-serif!important;font-weight:700;padding-top:8px}.login .login-content h2,.login .login-content h4{font-weight:700;color:#333!important;font-size:26px;margin:10px 0 30px}.login .login-content .btn-login{background-color:var(--btn);padding:10px;border:0}.login .mar-btm-40{margin-bottom:40px}.login .mar-btm-20{margin-bottom:20px}.login .form-group{position:relative}.login .form-group .fa-eye{position:absolute;right:25px;top:13px;color:var(--primary);font-size:15px;cursor:pointer}.login .form-group input[type=text]+.fa-eye:before{content:\"\\f070\"}.login .form-group .leftIcon{position:absolute;top:12px;left:12px;font-size:15px;color:#666}.login .form-group input{padding:0 10px;color:var(--text-dark)!important;background:var(--bg-light)!important;border:1px solid var(--table-border)!important;border-radius:5px}.login .form-group input:focus{border:1px solid var(--table-border)!important}.login .form-group .password{padding-right:40px}.login .form-control,.login input:focus,.login input:hover{border:1px solid var(--table-border)!important;box-shadow:none}.login .login-content input.form-control{padding:8px 12px 8px 0;background:transparent}.login .topWarmingContent{width:100%;padding-top:10px}.login .warmingIMg{width:75px;display:block}.login .warningContentP{width:100%;padding-top:10px;padding-right:20px}.login .warningContentP p{font-size:14px;padding:10px 0 0;color:var(--text-dark);line-height:1.6;margin:0}.login .loginBottomSet{padding-top:0}.login .login-content{width:100%;margin:0 auto}.login .btn-link{font-size:var(--font-13);font-weight:500;color:var(--text-dark);text-decoration:none;margin-top:3px;padding:0}.login .LogIn{margin-top:5px}.login .login-content h4{margin-bottom:10px}.login .Inputs{outline:none;padding:5px 10px;background-color:var(--bg-light);width:100%;height:36px;box-shadow:none;border:none}.login .btn-secondary{background-color:var(--btncancel);border:1px solid var(--primary);color:var(--primary);padding:8px 25px}.login .logo-group .logo-title{color:var(--text-dark);font-size:15px}.login .logo-group .logo-subtitle{color:var(--text-dark);font-size:13px;font-weight:400;letter-spacing:1.7px}.login .cfaLogoTop{display:block}.login .cfaLogoLeft{width:100%}.login .checkbox{float:left}.login .checkbox label{color:var(--text-dark);cursor:pointer}.login .clsPowered{position:absolute;bottom:40px;left:0;right:0;margin:0 auto;text-align:center}.login label{font-size:var(--font-13);font-weight:500!important}.login .clsMin-23{min-height:23px}.login .clsTopLogo{position:absolute;top:30px;left:0;right:0;margin:0 auto;text-align:center}.login .clsTopLogo h2{font-weight:700;color:#333!important;font-size:26px;margin:20px 0}.login .hero-gallery-inner{display:flex;flex-wrap:wrap}.login .fa-eye:before{content:\"\\f06e\";color:var(--primary);position:absolute;margin-top:27px;margin-left:-24px}.login .forget{font-size:var(--font-13);color:var(--text-dark);text-decoration:none}.login .checklabel{font-size:var(--font-13);margin-bottom:0}.login .Cardinality_logo{margin-top:-5px}.login h4#modal-basic-title{font-size:15px}.login .rightLoginSet{background:var(--bg-light)}.login .rightLoginSet .intake-form-labels{color:var(--text-dark)}.powered{position:absolute;bottom:0;left:0;right:0}.powered p,.powered span{color:var(--text-dark)}@media screen and (min-width: 991px) and (max-width: 1024px){.login .rightLoginSet{padding:0!important}.logo-img h5{font-size:var(--font-15)!important}.cfaLogoTopSmall{height:80px!important;width:80px!important}}@media screen and (min-width: 1401px) and (max-width: 1500px){.logo-img h5{font-size:var(--font-19)!important}}@media screen and (min-width: 1200px) and (max-width: 1400px){.logo-img h5{font-size:var(--font-18)!important}}@media screen and (max-width: 1281px){.carousel-item{max-width:65%!important}}.banner-sec{background:#3e397e;background-position:bottom;background-repeat:no-repeat;background-size:cover;border-radius:0;height:100%;position:relative}.banner-sec .bannerCont{position:absolute;z-index:99;top:50%;left:50%;transform:translate(-50%,-50%);width:80%;display:flex;justify-content:flex-start}.banner-sec .bannerCont img{height:60px;object-fit:cover}.banner-sec .bannerCont h2{font-size:30px;color:#000;font-weight:600;line-height:1.6}.logo-img h5{font-size:22px;text-align:center}.login-content .registration-group::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);background-color:#f5f5f5}.login-content .registration-group::-webkit-scrollbar{width:10px;background-color:#f5f5f5}.login-content .registration-group::-webkit-scrollbar-thumb{background-color:#146a5d;background-image:-webkit-gradient(linear,0 0,0 100%,color-stop(.5,rgba(255,255,255,.2)),color-stop(.5,transparent),to(transparent))}.goto-register{border-bottom:1px solid #146A5D}.picslogin{border-bottom:solid 1px #ccc;margin-top:25px}.picslogin span{position:absolute;text-align:center;margin-top:-13px;left:43%;background:#fff;padding:0 10px;font-size:14px}.pi{position:absolute;right:15px;top:50%;transform:translateY(-50%);cursor:pointer;font-size:15px}input[type=password]::-ms-reveal,input[type=password]::-ms-clear{display:none}.cfaLogoTopSmall{height:100px;width:100px;text-align:center;margin:30px auto}@media screen and (min-width: 768px) and (max-width: 1280px) and (orientation: portrait){.logo-img h5{font-size:14px}}.pl-10{padding-left:10px}\n"], dependencies: [{ kind: "directive", type: i8.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i8.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i3.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i3.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i3.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: i2.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "component", type: i9.Checkbox, selector: "p-checkbox", inputs: ["value", "name", "disabled", "binary", "label", "ariaLabelledBy", "ariaLabel", "tabindex", "inputId", "style", "styleClass", "labelStyleClass", "formControl", "checkboxIcon", "readonly", "required", "trueValue", "falseValue"], outputs: ["onChange"] }, { kind: "component", type: i10.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "size", "style", "styleClass", "badgeClass", "ariaLabel"], outputs: ["onClick", "onFocus", "onBlur"] }, { kind: "component", type: AlertComponent, selector: "app-alert" }] });
};
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LoginComponent$1, decorators: [{
            type: Component,
            args: [{ selector: 'lib-login', providers: [MessageService], template: "<app-alert></app-alert>\r\n<div class=\"row login\" id=\"back\">\r\n  <div class=\"d-none d-lg-flex flex-column col-lg-7 align-i p-0 banner-sec justify-content-center container-image\"\r\n    [style.background-image]=\"'url(' + (LOGININFO['BACKGROUND_IMAGE'] ? LOGININFO['BACKGROUND_IMAGE'] :'assets/images/indiana/indiana-login-banner.png') + ')'\">\r\n    <div class=\"bannerCont clearfix\">\r\n      <img [src]=\"LOGININFO['BANNER_LOGO'] || 'assets/images/ga-brain/ga-brain-spinal-logo.png'\">\r\n      <div *ngIf=\"LOGININFO['BANNER_TITLE']\" [innerHTML]=\"LOGININFO['BANNER_TITLE']\"></div>\r\n      <h2 *ngIf=\"!LOGININFO['BANNER_TITLE']\">BRAIN and SPINAL INJURY TRUST FUND COMMISSION</h2>\r\n    </div>\r\n  </div>\r\n  <div class=\"d-flex col-lg-5 d-flex justify-content-center align-items-center rightLoginSet\">\r\n    <div class=\"col-12 col-sm-12 shadow col-lg-9 px-2\">\r\n      <div class=\"text-left logo-group lg-mb-50\">\r\n        <div class=\"form-group mb-4\">\r\n          <div class=\"logo-group\">\r\n            <span class=\"logo-img\">\r\n              <img [attr.src]=\"LOGININFO['BANNER'] ? LOGININFO['BANNER'] :'assets/images/indiana/indiana-logo-2.png'\"\r\n                class=\"cfaLogoTop logo-img cfaLogoTopSmall\" width=\"300\" alt=\"Indiana Department of Health\" />\r\n              <div *ngIf=\"LOGININFO['TITLE']\" [innerHTML]=\"LOGININFO['TITLE']\" class=\"mt-3 mb-3\">\r\n              </div>\r\n              <h5 class=\"mt-3 mb-3 font-weight-bold\" *ngIf=\"!LOGININFO['TITLE']\">{{ 'Maternal and Child Health Data System'}}</h5>\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"loginBottomSet clearfix\">\r\n        <div class=\"login-content mb-3\">\r\n          <form (ngSubmit)=\"login()\" novalidate [formGroup]=\"loginForm\">\r\n            <div class=\"clearfix\" *ngIf=\"!isOTP\">\r\n              <div class=\"form-group mb-3\">\r\n                <label aria-labelledby=\"username\" for=\"username\" class=\"intake-form-labels\">Email</label>\r\n                <input class=\"Inputs\" autofocus type=\"mail\" formControlName=\"email\" placeholder=\"Email\" name=\"email\"\r\n                  id=\"username\" tabindex=\"0\" required />\r\n              </div>\r\n              <div class=\"form-group no-mar mb-3\">\r\n                <label aria-labelledby=\"password\" for=\"password\" class=\"intake-form-labels w-100\">Password</label>\r\n                <div class=\"position-relative\">\r\n                  <input class=\"Inputs password\" #showhideinput formControlName=\"password\" type=\"password\"\r\n                    placeholder=\"Password\" name=\"password\" id=\"password\" tabindex=\"0\" required />\r\n                  <em class=\"pi\" [ngClass]=\"{ 'pi-eye': show, 'pi-eye-slash': !show }\" aria-hidden=\"true\"\r\n                    (click)=\"toggleShow()\"></em>\r\n                </div>\r\n                <!-- <i class=\"fa fa-eye\" aria-hidden=\"true\" (click)=\"toggleShow()\"></i> -->\r\n                <div class=\"text-right\" *ngIf=\"LOGININFO['ENABLE_FORGOT_PASSWORD']\">\r\n                  <a href=\"javascript:void(0)\" (click)=\"routeToChangePassword()\" class=\"btn-link forget\">\r\n                    Forgot Password?</a>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group clearfix mb-30 clsMin-23 pt-10\">\r\n                <div class=\"checkbox\">\r\n                  <p-checkbox class=\"checklabelbox\" name=\"conditions\" formControlName=\"conditions\" value=\"yes\"\r\n                    inputId=\"ch\" aria-checked=\"false\">\r\n                  </p-checkbox>\r\n                  <label class=\"checklabel\" for=\"ch\">I accept the <a href=\"javascript:void(0)\"\r\n                      (click)=\"open(content)\">terms &amp; conditions</a></label>\r\n                </div>\r\n              </div>\r\n              <div class=\"clearfix text-center col-md-12 col-12 mt-4\">\r\n                <p-button role=\"button\" type=\"submit\" title=\"Login\" [disabled]=\"!loginForm.valid\"\r\n                  styleClass=\"w-100 align-items-center justify-content-center d-block mb-2\" class=\"loginbutton w-100\"\r\n                  tabindex=\"0\">{{ submitStatus }}</p-button>\r\n                <!-- <div class=\"\">\r\n                  <p>Participant Register?<a href=\"javascript:void(0);\" class=\"text-primary pl-10\"\r\n                      *ngIf=\"LOGININFO['REGISTRATION_ENABLE'] ? LOGININFO['REGISTRATION_ENABLE'] : false\"\r\n                      style=\"text-decoration: none;\" (click)=\"gotoRegistrationPage()\">Click here</a></p>\r\n                </div> -->\r\n                <div class=\"\">\r\n                  <p>Applicant Register?<a href=\"javascript:void(0);\" class=\"text-primary pl-10\"\r\n                      style=\"text-decoration: none;\" routerLink=\"/registration\">Click here</a></p>\r\n                </div>\r\n              </div>\r\n              <div class=\"mar-btm-20 picslogin\"\r\n                *ngIf=\"LOGININFO['LOGINWITH_AZURE'] ? LOGININFO['LOGINWITH_AZURE'] : false\"><span>Or</span></div>\r\n              <div class=\"clearfix text-center col-md-12 col-12 mt-2\"\r\n                *ngIf=\"LOGININFO['LOGINWITH_AZURE'] ? LOGININFO['LOGINWITH_AZURE'] : false\">\r\n                <p-button role=\"button\" type=\"button\" title=\"Login with Azure\" class=\"loginbutton\" tabindex=\"0\"\r\n                  (click)=\"generateLoginUrl()\">Login with Azure</p-button>\r\n              </div>\r\n            </div>\r\n            <div class=\"clearfix\" *ngIf=\"LOGININFO['ENABLE_MFA'] && isOTP\">\r\n              <div class=\"form-group\">\r\n                <label aria-labelledby=\" \" for=\"otp\" class=\"intake-form-labels\">One Time Password</label>\r\n                <input\r\n                  class=\"Inputs\"\r\n                  autofocus\r\n                  type=\"text\" \r\n                  [ngModelOptions]=\"{ standalone: true }\"\r\n                  [(ngModel)]=\"enterOTP\"\r\n                  placeholder=\"Enter OTP\"\r\n                  name=\"otp\"\r\n                  id=\"otp\"\r\n                  tabindex=\"0\"\r\n                  required />\r\n              </div>\r\n              <div class=\"clearfix text-center col-12 mt-4\">\r\n                <p-button\r\n                  role=\"button\"\r\n                  type=\"button\"\r\n                  title=\"Login\" \r\n                  [disabled]=\"!enterOTP\" \r\n                  (click)=\"verifyOtp()\"\r\n                  styleClass=\"w-100 d-block mb-2\"\r\n                  class=\"loginbutton w-100\"\r\n                  tabindex=\"0\"\r\n                  >Submit</p-button>\r\n                </div>\r\n            </div> \r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"powered\">\r\n      <p class=\"clsInfo-text mt-0 text-center\">\r\n        <span style=\"font-size: 13px\"> Powered by </span>\r\n        <a href=\"https://www.cardinality.ai/\" rel=\"noopener\" role=\"link\" target=\"_blank\" tabindex=\"0\">\r\n          <img alt=\"cardinality\" class=\"Cardinality_logo\" src=\"assets/images/cardinality-logo_text.svg\" width=\"120\" />\r\n        </a>\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #content let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">\r\n      BRAIN and SPINAL INJURY TRUST FUND COMMISSIONS Terms &amp; conditions\r\n    </h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body termscondition\">\r\n    <p class=\"mb-2\">\r\n      These Terms and Conditions constitute a legally binding agreement (\u201CAgreement\u201D) made between you, whether\r\n      personally as a professional, or on behalf of an entity you represent (\u201CYou\u201D or \u201CCustomer\u201D) and Cardinality.AI\r\n      whose principal place of business is U.S.A, (\u201CCardinality\u201D, \u201Cwe,\u201D \u201Cus\u201D or \u201Cour\u201D), concerning your access to\r\n      and contracting a PICS offering (\u201CProduct\u201D).\r\n    </p>\r\n    <p class=\"mb-2\">\r\n      You agree that by contracting our Product, you have read, understood, and agree to be bound by these Terms and\r\n      Conditions, which may be executed via electronic signature, electronic online communications, or via emailed\r\n      PDF-format document.\r\n    </p>\r\n    <p class=\"mb-2\">\r\n      You confirm that you are fully able and entitled to accept these Terms and Conditions governing the purchase of\r\n      the Product and are authorized to do so on behalf of the Customer. This service is only available for\r\n      professionals and companies, and you represent that you are not a consumer or a minor.\r\n    </p>\r\n    <p class=\"mt-4 mb-2\">\r\n      <strong>CONFIDENTIALITY AGREEMENT</strong>\r\n    </p>\r\n    <p class=\"mb-2\">\r\n      You agree that you shall maintain strictly confidential, and shall not reveal nor by any means transfer to a third\r\n      party, or use any and all information related to the Services, products, materials, and prototypes, and any\r\n      technical documentation that forms part of the Know-how of Product, or that it has received from third parties, or\r\n      any other information to which you have access by virtue of accepting these terms.\r\n    </p>\r\n    <p class=\"mb-2\">\r\n      You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service,\r\n      violate any laws in your jurisdiction (including but not limited to copyright laws).\r\n    </p>\r\n    <p class=\"mt-4 mb-2\">\r\n      <strong>DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY</strong>\r\n    </p>\r\n    <p class=\"mb-2\">\r\n      We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or\r\n      error-free.\r\n    </p>\r\n    <p class=\"mb-2\">\r\n      We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.\r\n    </p>\r\n    <p class=\"mb-2\">\r\n      You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at\r\n      any time, without notice to you.\r\n    </p>\r\n    <p class=\"mb-2\">\r\n      You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all\r\n      products and services delivered to you through the service are (except as expressly stated by us) provided \u2018as is\u2019\r\n      and \u2018as available\u2019 for your use, without any representation, warranties or conditions of any kind, either express\r\n      or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a\r\n      particular purpose, durability, title, and non-infringement.\r\n    </p>\r\n    <p class=\"mt-4 mb-2\">\r\n      <strong>INDEMNIFICATION</strong>\r\n    </p>\r\n    <p class=\"mb-2\">\r\n      You agree to indemnify, defend and hold harmless Cardinality.AI and our parent, subsidiaries, affiliates,\r\n      partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers,\r\n      interns and employees, harmless from any claim or demand, including reasonable attorneys\u2019 fees, made by any\r\n      third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by\r\n      reference or your violation of any law or the rights of a third-party.\r\n    </p>\r\n    <p class=\"mt-4 mb-2\">\r\n      <strong>SEVERABILITY</strong>\r\n    </p>\r\n    <p class=\"mb-2\">\r\n      If any provision of these Terms of Service is determined to be unlawful, void, or unenforceable, such provision\r\n      shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion\r\n      shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and\r\n      enforceability of any other remaining provisions.\r\n    </p>\r\n    <p class=\"mt-4 mb-2\"><strong>GOVERNING LAW</strong></p>\r\n    <p class=\"mb-2\">\r\n      These Terms shall be governed and construed in accordance with the laws of United States, without regard\r\n      to its conflict of law provisions.\r\n    </p>\r\n    <p class=\"mb-2\">\r\n      Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If\r\n      any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these\r\n      Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and\r\n      supersede and replace any prior agreements we might have had between us regarding the Service.\r\n    </p>\r\n    <p class=\"mt-4 mb-2\"><strong>CHANGES</strong></p>\r\n    <p class=\"mb-2\">\r\n      We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is\r\n      material we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material\r\n      change will be determined at our sole discretion.\r\n    </p>\r\n    <p class=\"mb-2\">\r\n      By continuing to access or use our Service after any revisions become effective, you agree to be bound by the\r\n      revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.\r\n    </p>\r\n\r\n    <p class=\"mt-4 mb-2\"><strong>CONTACT US</strong></p>\r\n    <p class=\"mb-2\">If you have any questions about these Terms, please contact us.</p>\r\n  </div>\r\n</ng-template>", styles: ["body{height:100%;overflow:hidden;width:100%!important;box-sizing:border-box;position:relative}.login#back{margin:auto;width:100%;position:relative;overflow:hidden;height:100vh}.login .h2,.login h2{font-size:20px;color:var(--text-dark);font-family:Roboto,sans-serif!important;font-weight:700;padding-top:8px}.login .login-content h2,.login .login-content h4{font-weight:700;color:#333!important;font-size:26px;margin:10px 0 30px}.login .login-content .btn-login{background-color:var(--btn);padding:10px;border:0}.login .mar-btm-40{margin-bottom:40px}.login .mar-btm-20{margin-bottom:20px}.login .form-group{position:relative}.login .form-group .fa-eye{position:absolute;right:25px;top:13px;color:var(--primary);font-size:15px;cursor:pointer}.login .form-group input[type=text]+.fa-eye:before{content:\"\\f070\"}.login .form-group .leftIcon{position:absolute;top:12px;left:12px;font-size:15px;color:#666}.login .form-group input{padding:0 10px;color:var(--text-dark)!important;background:var(--bg-light)!important;border:1px solid var(--table-border)!important;border-radius:5px}.login .form-group input:focus{border:1px solid var(--table-border)!important}.login .form-group .password{padding-right:40px}.login .form-control,.login input:focus,.login input:hover{border:1px solid var(--table-border)!important;box-shadow:none}.login .login-content input.form-control{padding:8px 12px 8px 0;background:transparent}.login .topWarmingContent{width:100%;padding-top:10px}.login .warmingIMg{width:75px;display:block}.login .warningContentP{width:100%;padding-top:10px;padding-right:20px}.login .warningContentP p{font-size:14px;padding:10px 0 0;color:var(--text-dark);line-height:1.6;margin:0}.login .loginBottomSet{padding-top:0}.login .login-content{width:100%;margin:0 auto}.login .btn-link{font-size:var(--font-13);font-weight:500;color:var(--text-dark);text-decoration:none;margin-top:3px;padding:0}.login .LogIn{margin-top:5px}.login .login-content h4{margin-bottom:10px}.login .Inputs{outline:none;padding:5px 10px;background-color:var(--bg-light);width:100%;height:36px;box-shadow:none;border:none}.login .btn-secondary{background-color:var(--btncancel);border:1px solid var(--primary);color:var(--primary);padding:8px 25px}.login .logo-group .logo-title{color:var(--text-dark);font-size:15px}.login .logo-group .logo-subtitle{color:var(--text-dark);font-size:13px;font-weight:400;letter-spacing:1.7px}.login .cfaLogoTop{display:block}.login .cfaLogoLeft{width:100%}.login .checkbox{float:left}.login .checkbox label{color:var(--text-dark);cursor:pointer}.login .clsPowered{position:absolute;bottom:40px;left:0;right:0;margin:0 auto;text-align:center}.login label{font-size:var(--font-13);font-weight:500!important}.login .clsMin-23{min-height:23px}.login .clsTopLogo{position:absolute;top:30px;left:0;right:0;margin:0 auto;text-align:center}.login .clsTopLogo h2{font-weight:700;color:#333!important;font-size:26px;margin:20px 0}.login .hero-gallery-inner{display:flex;flex-wrap:wrap}.login .fa-eye:before{content:\"\\f06e\";color:var(--primary);position:absolute;margin-top:27px;margin-left:-24px}.login .forget{font-size:var(--font-13);color:var(--text-dark);text-decoration:none}.login .checklabel{font-size:var(--font-13);margin-bottom:0}.login .Cardinality_logo{margin-top:-5px}.login h4#modal-basic-title{font-size:15px}.login .rightLoginSet{background:var(--bg-light)}.login .rightLoginSet .intake-form-labels{color:var(--text-dark)}.powered{position:absolute;bottom:0;left:0;right:0}.powered p,.powered span{color:var(--text-dark)}@media screen and (min-width: 991px) and (max-width: 1024px){.login .rightLoginSet{padding:0!important}.logo-img h5{font-size:var(--font-15)!important}.cfaLogoTopSmall{height:80px!important;width:80px!important}}@media screen and (min-width: 1401px) and (max-width: 1500px){.logo-img h5{font-size:var(--font-19)!important}}@media screen and (min-width: 1200px) and (max-width: 1400px){.logo-img h5{font-size:var(--font-18)!important}}@media screen and (max-width: 1281px){.carousel-item{max-width:65%!important}}.banner-sec{background:#3e397e;background-position:bottom;background-repeat:no-repeat;background-size:cover;border-radius:0;height:100%;position:relative}.banner-sec .bannerCont{position:absolute;z-index:99;top:50%;left:50%;transform:translate(-50%,-50%);width:80%;display:flex;justify-content:flex-start}.banner-sec .bannerCont img{height:60px;object-fit:cover}.banner-sec .bannerCont h2{font-size:30px;color:#000;font-weight:600;line-height:1.6}.logo-img h5{font-size:22px;text-align:center}.login-content .registration-group::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);background-color:#f5f5f5}.login-content .registration-group::-webkit-scrollbar{width:10px;background-color:#f5f5f5}.login-content .registration-group::-webkit-scrollbar-thumb{background-color:#146a5d;background-image:-webkit-gradient(linear,0 0,0 100%,color-stop(.5,rgba(255,255,255,.2)),color-stop(.5,transparent),to(transparent))}.goto-register{border-bottom:1px solid #146A5D}.picslogin{border-bottom:solid 1px #ccc;margin-top:25px}.picslogin span{position:absolute;text-align:center;margin-top:-13px;left:43%;background:#fff;padding:0 10px;font-size:14px}.pi{position:absolute;right:15px;top:50%;transform:translateY(-50%);cursor:pointer;font-size:15px}input[type=password]::-ms-reveal,input[type=password]::-ms-clear{display:none}.cfaLogoTopSmall{height:100px;width:100px;text-align:center;margin:30px auto}@media screen and (min-width: 768px) and (max-width: 1280px) and (orientation: portrait){.logo-img h5{font-size:14px}}.pl-10{padding-left:10px}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1$2.Store }, { type: i2.Router }, { type: i3.FormBuilder }, { type: i4.NgbModal }, { type: AlertService }, { type: AuthService }, { type: i2.ActivatedRoute }, { type: HttpService }]; }, propDecorators: { input: [{
                type: ViewChild,
                args: ['showhideinput']
            }], LOGININFO: [{
                type: Input
            }], RBACORG: [{
                type: Input
            }], passwordExpired: [{
                type: Output
            }], loginSuccessful: [{
                type: Output
            }], verifyingOtp: [{
                type: Output
            }] } });

class LoginComponent {
    permissionStore;
    _storeservice;
    sanitizer;
    RBACORG = new RBACINFO();
    PERMISSION;
    LOGININFO;
    loginEvent;
    libOnPasswordExpired = new EventEmitter();
    libOnLoginSuccessful = new EventEmitter();
    libOnVerifyingOtp = new EventEmitter();
    constructor(permissionStore, _storeservice, sanitizer) {
        this.permissionStore = permissionStore;
        this._storeservice = _storeservice;
        this.sanitizer = sanitizer;
    }
    ngOnInit() {
        this.loginEvent.subscribe((val) => {
            const payload = { ...val.LOGININFO };
            payload.BANNER_TITLE = this.sanitizer.bypassSecurityTrustHtml(payload.BANNER_TITLE);
            payload.TITLE = this.sanitizer.bypassSecurityTrustHtml(payload.TITLE);
            this.RBACORG = val.RBACORG;
            this.PERMISSION = payload;
            this.LOGININFO = payload;
            this._storeservice.setData('RBACORG', this.RBACORG);
            this.permissionStore.setStore(this.PERMISSION);
        });
    }
    onPasswordExpired($event) {
        this.libOnPasswordExpired.emit($event);
    }
    onLoginSuccessful($event) {
        this.libOnLoginSuccessful.emit($event);
    }
    onVerifyingOtp($event) {
        this.libOnVerifyingOtp.emit($event);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LoginComponent, deps: [{ token: PermissionStore }, { token: DataStoreService }, { token: i3$1.DomSanitizer }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: LoginComponent, selector: "login", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", LOGININFO: "LOGININFO", loginEvent: "loginEvent" }, outputs: { libOnPasswordExpired: "libOnPasswordExpired", libOnLoginSuccessful: "libOnLoginSuccessful", libOnVerifyingOtp: "libOnVerifyingOtp" }, ngImport: i0, template: `
   <lib-login [RBACORG]="RBACORG" [LOGININFO]="LOGININFO" (passwordExpired)="onPasswordExpired($event)" (loginSuccessful)="onLoginSuccessful($event)" (verifyingOtp)="onVerifyingOtp($event)"></lib-login>
  `, isInline: true, dependencies: [{ kind: "component", type: LoginComponent$1, selector: "lib-login", inputs: ["LOGININFO", "RBACORG"], outputs: ["passwordExpired", "loginSuccessful", "verifyingOtp"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LoginComponent, decorators: [{
            type: Component,
            args: [{ selector: 'login', template: `
   <lib-login [RBACORG]="RBACORG" [LOGININFO]="LOGININFO" (passwordExpired)="onPasswordExpired($event)" (loginSuccessful)="onLoginSuccessful($event)" (verifyingOtp)="onVerifyingOtp($event)"></lib-login>
  ` }]
        }], ctorParameters: function () { return [{ type: PermissionStore }, { type: DataStoreService }, { type: i3$1.DomSanitizer }]; }, propDecorators: { RBACORG: [{
                type: Input
            }], PERMISSION: [{
                type: Input
            }], LOGININFO: [{
                type: Input
            }], loginEvent: [{
                type: Input
            }], libOnPasswordExpired: [{
                type: Output
            }], libOnLoginSuccessful: [{
                type: Output
            }], libOnVerifyingOtp: [{
                type: Output
            }] } });

class MicrostrategyService {
    http;
    alertService;
    permissionStore;
    _storeservice;
    dossierList;
    RBACORG;
    environment;
    constructor(http, alertService, permissionStore, _storeservice) {
        this.http = http;
        this.alertService = alertService;
        this.permissionStore = permissionStore;
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res['RBACORG'] && res['RBACORG'] !== '') {
                this.RBACORG = res['RBACORG'];
                this.environment = this.RBACORG['environment'] ? this.RBACORG['environment'] : '';
            }
        });
    }
    getAuthToken() {
        const body = {
            username: this.environment.mstrUsername,
            password: this.environment.mstrPassword,
            loginMode: 1
        };
        return this.http.post(`${this.environment.mstrURL}/api/auth/login`, body, {
            withCredentials: true,
            headers: { 'Content-type': 'application/json' },
            observe: 'response'
        });
    }
    getDossier(projectId, dossierId, pageNo) {
        const permissions = this.permissionStore.state;
        const projectUrl = `${this.environment.mstrURL}/app/${projectId}`;
        const dossierUrl = `${projectUrl}/${dossierId}/${pageNo}`;
        microstrategy.dossier
            .create({
            placeholder: document.getElementById('dossierContainer'),
            url: dossierUrl,
            navigationBar: {
                enabled: true,
                gotoLibrary: permissions?.ANA_LIBRARY,
                title: true,
                toc: true,
                reset: true,
                reprompt: true,
                share: true,
                comment: true,
                notification: true,
                filter: true,
                options: true,
                search: true,
                bookmark: true
            },
            enableCustomAuthentication: true,
            enableResponsive: false,
            containerWidth: 400,
            containerHeight: 400,
            customAuthenticationType: microstrategy.dossier.CustomAuthenticationType.AUTH_TOKEN,
            getLoginToken: async () => {
                const response = await this.getAuthToken().toPromise();
                return response.headers.get('x-mstr-authtoken');
            }
        })
            .catch((_err) => this.alertService.error(`Failed to connect ${this.environment.mstrURL}`));
    }
    async getLibraryDetails() {
        const token = await this.getAuthToken().toPromise();
        const authtoken = token.headers.get('x-mstr-authtoken');
        const headerInfo = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-MSTR-AuthToken': authtoken ? authtoken : '',
            'X-MSTR-ProjectID': this.environment.mstrProjectID
        };
        return this.http
            .get(`${this.environment.mstrURL}/api/library`, {
            withCredentials: true,
            headers: headerInfo
        })
            .toPromise()
            .then((response) => {
            return response.map((mstr) => ({
                id: mstr.target.id,
                projectId: mstr.projectId,
                name: mstr.target.name
            }));
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MicrostrategyService, deps: [{ token: i1.HttpClient }, { token: AlertService }, { token: PermissionStore }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MicrostrategyService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MicrostrategyService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: AlertService }, { type: PermissionStore }, { type: DataStoreService }]; } });

class PermissionDirective {
    renderer;
    elementRef;
    dataStore;
    fieldKey;
    permissions;
    constructor(renderer, elementRef, dataStore) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.dataStore = dataStore;
    }
    ngAfterViewInit() {
        const permissions = this.dataStore.state;
        if (permissions) {
            if (!permissions[this.fieldKey]) {
                const template = this.elementRef.nativeElement;
                if (template.tagName === 'A') {
                    if (template) {
                        const r = document.createElement(this.elementRef.nativeElement.tagName.toLowerCase());
                        r.innerHTML = template.innerHTML;
                        r.href = 'javascript:void(0);';
                        r['disabled'] = true;
                        r.className = template.className;
                        this.elementRef.nativeElement.parentNode.replaceChild(r, template);
                    }
                }
                else if (template.tagName === 'P-MULTISELECT' ||
                    template.tagName === 'P-DROPDOWN' ||
                    template.tagName === 'P-CHECKBOX' ||
                    template.tagName === 'P-TREESELECT' ||
                    template.tagName === 'P-RADIOBUTTON' ||
                    template.tagName === 'P-CALENDAR') {
                    if (template) {
                        const r = document.createElement(this.elementRef.nativeElement.tagName.toLowerCase());
                        r.innerHTML = template.innerHTML;
                        r.className = template.className;
                        r.className += ' p-disabled';
                        this.elementRef.nativeElement.parentNode.replaceChild(r, template);
                    }
                }
                else {
                    this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', 'true');
                    const childInputNodes = this.elementRef.nativeElement.querySelectorAll('input, select, textarea, button, a, ng-select, div, lable');
                    childInputNodes.forEach((elem) => {
                        this.renderer.setAttribute(elem, 'disabled', 'true');
                    });
                }
            }
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: PermissionStore }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: PermissionDirective, selector: "[fieldKey]", inputs: { fieldKey: "fieldKey" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[fieldKey]'
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: PermissionStore }]; }, propDecorators: { fieldKey: [{
                type: Input
            }] } });

class ShowFieldDirective {
    templateRef;
    viewContainer;
    dataStore;
    showField;
    constructor(templateRef, viewContainer, dataStore) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.dataStore = dataStore;
    }
    ngOnInit() {
        const permissions = this.dataStore.state;
        if (!permissions || !permissions[this.showField]) {
            this.viewContainer.clear();
        }
        else {
            this.viewContainer.createEmbeddedView(this.templateRef);
            const lookupIds = sessionStorage.getItem('LOOKUP_IDS');
            if (lookupIds) {
                const lookupIdArray = lookupIds.split(',');
                Object.entries(permissions)
                    .filter(item => item[0].startsWith('GALKP_'))
                    .forEach(([key, value]) => {
                    for (const _value of value) {
                        const _key = key.replace('GALKP_', '');
                        if (_key === this.showField &&
                            lookupIdArray.includes(String(_value['lookupid'])) &&
                            _value['action'] === 'H') {
                            this.viewContainer.clear();
                        }
                    }
                });
            }
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ShowFieldDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: PermissionStore }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: ShowFieldDirective, selector: "[showField]", inputs: { showField: "showField" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ShowFieldDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[showField]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: PermissionStore }]; }, propDecorators: { showField: [{
                type: Input
            }] } });

class DirectivesModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DirectivesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: DirectivesModule, declarations: [PermissionDirective, ShowFieldDirective], imports: [CommonModule], exports: [PermissionDirective, ShowFieldDirective] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DirectivesModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DirectivesModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [PermissionDirective, ShowFieldDirective],
                    imports: [CommonModule],
                    exports: [PermissionDirective, ShowFieldDirective]
                }]
        }] });

class AlertModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: AlertModule, declarations: [AlertComponent], imports: [CommonModule], exports: [AlertComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [AlertComponent],
                    exports: [AlertComponent]
                }]
        }] });

class PicsLoginModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsLoginModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: PicsLoginModule, declarations: [LoginComponent$1], imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule,
            NgbModule,
            TabMenuModule,
            TabViewModule,
            TreeSelectModule,
            HttpClientModule,
            CheckboxModule,
            DropdownModule,
            CardModule,
            ConfirmDialogModule,
            AccordionModule,
            MessageModule,
            TableModule,
            InputTextModule,
            CalendarModule,
            EditorModule,
            FieldsetModule,
            ButtonModule,
            RadioButtonModule,
            InputTextareaModule,
            InputMaskModule,
            StepsModule,
            ToastModule,
            RippleModule,
            AvatarModule,
            BadgeModule,
            MultiSelectModule,
            InputSwitchModule,
            ProgressSpinnerModule,
            SpeedDialModule,
            OrderListModule,
            FileUploadModule,
            DialogModule,
            PasswordModule,
            KnobModule,
            SidebarModule,
            ContextMenuModule,
            ConfirmPopupModule,
            DirectivesModule,
            AlertModule], exports: [LoginComponent$1] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsLoginModule, imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule,
            NgbModule,
            TabMenuModule,
            TabViewModule,
            TreeSelectModule,
            HttpClientModule,
            CheckboxModule,
            DropdownModule,
            CardModule,
            ConfirmDialogModule,
            AccordionModule,
            MessageModule,
            TableModule,
            InputTextModule,
            CalendarModule,
            EditorModule,
            FieldsetModule,
            ButtonModule,
            RadioButtonModule,
            InputTextareaModule,
            InputMaskModule,
            StepsModule,
            ToastModule,
            RippleModule,
            AvatarModule,
            BadgeModule,
            MultiSelectModule,
            InputSwitchModule,
            ProgressSpinnerModule,
            SpeedDialModule,
            OrderListModule,
            FileUploadModule,
            DialogModule,
            PasswordModule,
            KnobModule,
            SidebarModule,
            ContextMenuModule,
            ConfirmPopupModule,
            DirectivesModule,
            AlertModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsLoginModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        LoginComponent$1
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NgbModule,
                        TabMenuModule,
                        TabViewModule,
                        TreeSelectModule,
                        HttpClientModule,
                        CheckboxModule,
                        DropdownModule,
                        CardModule,
                        ConfirmDialogModule,
                        AccordionModule,
                        MessageModule,
                        TableModule,
                        InputTextModule,
                        CalendarModule,
                        EditorModule,
                        FieldsetModule,
                        ButtonModule,
                        RadioButtonModule,
                        InputTextareaModule,
                        InputMaskModule,
                        StepsModule,
                        ToastModule,
                        RippleModule,
                        AvatarModule,
                        BadgeModule,
                        MultiSelectModule,
                        InputSwitchModule,
                        ProgressSpinnerModule,
                        SpeedDialModule,
                        OrderListModule,
                        FileUploadModule,
                        DialogModule,
                        PasswordModule,
                        KnobModule,
                        SidebarModule,
                        ContextMenuModule,
                        ConfirmPopupModule,
                        DirectivesModule,
                        AlertModule
                    ],
                    exports: [
                        LoginComponent$1
                    ],
                    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
                }]
        }] });

/**
 * Simple logger system with the possibility of registering custom outputs.
 *
 * 4 different log levels are provided, with corresponding methods:
 * - debug   : for debug information
 * - info    : for informative status of the application (success, ...)
 * - warning : for non-critical errors that do not prevent normal application behavior
 * - error   : for critical errors that prevent normal application behavior
 *
 * Example usage:
 * ```
 * import { Logger } from 'app/core/logger.service';
 *
 * const log = new Logger('myFile');
 * ...
 * log.debug('something happened');
 * ```
 *
 * To disable debug and info logs in production, add this snippet to your root component:
 * ```
 * export class AppComponent implements OnInit {
 *   ngOnInit() {
 *     if (environment.production) {
 *       Logger.enableProductionMode();
 *     }
 *     ...
 *   }
 * }
 *
 * If you want to process logs through other outputs than console, you can add LogOutput functions to Logger.outputs.
 */
/**
 * The possible log levels.
 * LogLevel.Off is never emitted and only used with Logger.level property to disable logs.
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Off"] = 0] = "Off";
    LogLevel[LogLevel["Error"] = 1] = "Error";
    LogLevel[LogLevel["Warning"] = 2] = "Warning";
    LogLevel[LogLevel["Info"] = 3] = "Info";
    LogLevel[LogLevel["Debug"] = 4] = "Debug";
})(LogLevel || (LogLevel = {}));
class Logger {
    source;
    /**
     * Current logging level.
     * Set it to LogLevel.Off to disable logs completely.
     */
    static level = LogLevel.Debug;
    /**
     * Additional log outputs.
     */
    static outputs = [];
    /**
     * Enables production mode.
     * Sets logging level to LogLevel.Warning.
     */
    static enableProductionMode() {
        Logger.level = LogLevel.Warning;
    }
    constructor(source) {
        this.source = source;
    }
    /**
     * Logs messages or objects  with the debug level.
     * Works the same as console.log().
     */
    debug(...objects) {
        this.log(console.log, LogLevel.Debug, objects);
    }
    /**
     * Logs messages or objects  with the info level.
     * Works the same as console.log().
     */
    info(...objects) {
        this.log(console.info, LogLevel.Info, objects);
    }
    /**
     * Logs messages or objects  with the warning level.
     * Works the same as console.log().
     */
    warn(...objects) {
        this.log(console.warn, LogLevel.Warning, objects);
    }
    /**
     * Logs messages or objects  with the error level.
     * Works the same as console.log().
     */
    error(...objects) {
        this.log(console.error, LogLevel.Error, objects);
    }
    log(func, level, objects) {
        if (level <= Logger.level) {
            const log = this.source ? ['[' + this.source + ']'].concat(objects) : objects;
            func.apply(console, log);
            Logger.outputs.forEach(output => output.apply(output, [this.source, level, ...objects]));
        }
    }
}

const log = new Logger('AuthenticationGuard');
class AuthGuard {
    router;
    credentialsService;
    constructor(router, credentialsService) {
        this.router = router;
        this.credentialsService = credentialsService;
    }
    canActivate(_route, _state) {
        if (this.credentialsService.isAuthenticated()) {
            return true;
        }
        log.debug('Not authenticated, redirecting and adding redirect url...');
        this.router.navigate(['/login']);
        return false;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthGuard, deps: [{ token: i2.Router }, { token: CredentialsService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthGuard, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i2.Router }, { type: CredentialsService }]; } });

class CardiLoginModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardiLoginModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: CardiLoginModule, declarations: [LoginComponent], imports: [PicsLoginModule], exports: [LoginComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardiLoginModule, providers: [
            AuthService,
            AuthStore,
            AuthGuard,
            ProfileService,
            AppService,
            CredentialsService,
            DynamicTabPageService,
            LocalStorageService,
            LocalService,
            MicrostrategyService,
            PageHeaderService,
            ThemeService,
            HttpClient,
            HttpService,
            AlertService,
            ConfirmationService,
            PermissionStore,
            DataStoreService
        ], imports: [PicsLoginModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardiLoginModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        LoginComponent
                    ],
                    imports: [
                        PicsLoginModule
                    ],
                    exports: [
                        LoginComponent
                    ],
                    providers: [
                        AuthService,
                        AuthStore,
                        AuthGuard,
                        ProfileService,
                        AppService,
                        CredentialsService,
                        DynamicTabPageService,
                        LocalStorageService,
                        LocalService,
                        MicrostrategyService,
                        PageHeaderService,
                        ThemeService,
                        HttpClient,
                        HttpService,
                        AlertService,
                        ConfirmationService,
                        PermissionStore,
                        DataStoreService
                    ]
                }]
        }] });

/*
 * Public API Surface of login
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CardiLoginModule, LoginComponent, LoginService };
//# sourceMappingURL=pics-core-login.mjs.map
