import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, of } from 'rxjs';
import { AuthURL } from '../urls/rbac-url.config';
import { AlertService } from './alert.service';
import { DynamicTabPageService } from './dynamic-tab-page-service';
import { PageHeaderService } from './page-header.service';
import { mergeMap, tap } from 'rxjs/operators';
import { AppConstants } from '../constants/app-constants';
import * as i0 from "@angular/core";
import * as i1 from "./http.service";
import * as i2 from "./auth.store";
import * as i3 from "@angular/router";
import * as i4 from "./credentials.service";
import * as i5 from "./local.service";
export class AuthService {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthService, deps: [{ token: i0.Injector }, { token: i1.HttpService }, { token: i2.AuthStore }, { token: i3.Router }, { token: i4.CredentialsService }, { token: i5.LocalService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.HttpService }, { type: i2.AuthStore }, { type: i3.Router }, { type: i4.CredentialsService }, { type: i5.LocalService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2xvZ2luL3NyYy9saWIvcGljcy1sb2dpbi9AY29yZS9zZXJ2aWNlL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBRXJELE9BQU8sRUFBRSxlQUFlLEVBQWMsUUFBUSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBSTFELE9BQU8sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7Ozs7O0FBTzFELE1BQU0sT0FBTyxXQUFXO0lBT1o7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQVZWLFVBQVUsQ0FBTTtJQUNoQixZQUFZLENBQWU7SUFDM0IscUJBQXFCLENBQXdCO0lBQzdDLGlCQUFpQixDQUFvQjtJQUNyQyxZQUNFLFFBQWtCLEVBQ1YsV0FBd0IsRUFDeEIsS0FBZ0IsRUFDaEIsT0FBZSxFQUNmLGtCQUFzQyxFQUN0QyxVQUF3QjtRQUp4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixVQUFLLEdBQUwsS0FBSyxDQUFXO1FBQ2hCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLGVBQVUsR0FBVixVQUFVLENBQWM7UUFFaEMs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QUMsV0FBVyxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFDRCxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0lBQzNFLENBQUM7d0dBL1FVLFdBQVc7NEdBQVgsV0FBVyxjQUhWLE1BQU07OzRGQUdQLFdBQVc7a0JBTHZCLFVBQVU7bUJBQ1g7b0JBQ0UsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBmb3JrSm9pbiwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQXV0aFVSTCB9IGZyb20gJy4uL3VybHMvcmJhYy11cmwuY29uZmlnJztcclxuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi9hbGVydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tICcuL2h0dHAuc2VydmljZSc7XHJcbmltcG9ydCB7IER5bmFtaWNUYWJQYWdlU2VydmljZSB9IGZyb20gJy4vZHluYW1pYy10YWItcGFnZS1zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGFnZUhlYWRlclNlcnZpY2UgfSBmcm9tICcuL3BhZ2UtaGVhZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBdXRoU3RvcmUgfSBmcm9tICcuL2F1dGguc3RvcmUnO1xyXG5pbXBvcnQgeyBDcmVkZW50aWFsc1NlcnZpY2UgfSBmcm9tICcuL2NyZWRlbnRpYWxzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2NhbFNlcnZpY2UgfSBmcm9tICcuL2xvY2FsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBtZXJnZU1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBBcHBDb25zdGFudHMgfSBmcm9tICcuLi9jb25zdGFudHMvYXBwLWNvbnN0YW50cyc7XHJcblxyXG5ASW5qZWN0YWJsZShcclxue1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59XHJcbilcclxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuICBzaGFyZWRJbmZvOiBhbnk7XHJcbiAgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2U7XHJcbiAgZHluYW1pY1RhYlBhZ2VTZXJ2aWNlOiBEeW5hbWljVGFiUGFnZVNlcnZpY2U7XHJcbiAgcGFnZUhlYWRlclNlcnZpY2U6IFBhZ2VIZWFkZXJTZXJ2aWNlO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICAgcHJpdmF0ZSBodHRwU2VydmljZTogSHR0cFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHN0b3JlOiBBdXRoU3RvcmUsXHJcbiAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgY3JlZGVudGlhbHNTZXJ2aWNlOiBDcmVkZW50aWFsc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGxvY2Fsc3RvcmU6IExvY2FsU2VydmljZVxyXG4gICkge1xyXG4gICAgdGhpcy5hbGVydFNlcnZpY2UgPSBpbmplY3Rvci5nZXQ8QWxlcnRTZXJ2aWNlPihBbGVydFNlcnZpY2UpO1xyXG4gICAgdGhpcy5keW5hbWljVGFiUGFnZVNlcnZpY2UgPSBpbmplY3Rvci5nZXQ8RHluYW1pY1RhYlBhZ2VTZXJ2aWNlPihEeW5hbWljVGFiUGFnZVNlcnZpY2UpO1xyXG4gICAgdGhpcy5wYWdlSGVhZGVyU2VydmljZSA9IGluamVjdG9yLmdldDxQYWdlSGVhZGVyU2VydmljZT4oUGFnZUhlYWRlclNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9yZ0luZm8gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4oJycpO1xyXG4gIGN1cnJlbnRPcmdJbmZvID0gdGhpcy5vcmdJbmZvLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBwdWJsaWMgY3VycmVudE1lbnUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4oJycpO1xyXG4gIGN1cnJlbnRNZW51SW5mbyA9IHRoaXMuY3VycmVudE1lbnUuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIGZlZWRPcmdJbmZvKGRhdGE6IGFueSkge1xyXG4gICAgdGhpcy5vcmdJbmZvLm5leHQoZGF0YSk7XHJcbiAgfVxyXG4gIGdldEN1cnJlbnRNZW51KGRhdGE6IGFueSkge1xyXG4gICAgdGhpcy5jdXJyZW50TWVudS5uZXh0KGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlck9yZ0xpc3QoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoQXV0aFVSTC5FbmRQb2ludHMuYXV0aC51c2VyLm9yZ0xpc3QpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VW5Ob3RpZmllZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChBdXRoVVJMLkVuZFBvaW50cy5hdXRoLnVzZXIubm90aWZpY2F0aW9uKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVVuTm90aWZpZWQoZGF0YSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdChBdXRoVVJMLkVuZFBvaW50cy5hdXRoLnVzZXIubm90aWZpY2F0aW9uLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVdvcmtlckF2YWlsYWJpbGl0eShkYXRhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wYXRjaChBdXRoVVJMLkVuZFBvaW50cy5hdXRoLnVzZXIud29ya2VyQXZhaWxhYmlsaXR5LCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGdldFdvcmtlckF2YWlsYWJpbGl0eSgpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChBdXRoVVJMLkVuZFBvaW50cy5hdXRoLnVzZXIuZ2V0V29ya2VyQXZhaWxhYmlsaXR5KTtcclxuICB9XHJcblxyXG4gIGdldE1zdHJUb2tlbigpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChBdXRoVVJMLkVuZFBvaW50cy5hdXRoLm1pY3Jvc3RyYXRlZ3kubG9naW4pLnBpcGUocmVzID0+IHtcclxuICAgICAgcmV0dXJuIHJlcztcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvZ2luKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIG90cDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICBzZWNyZXQ6IG90cCA/IG90cCA6ICcnXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdChBdXRoVVJMLkVuZFBvaW50cy5hdXRoLnVzZXIubG9naW4sIGJvZHkpLnBpcGUoXHJcbiAgICAgIG1lcmdlTWFwKChyZXM6IGFueSk6IE9ic2VydmFibGU8W2FueV0+ID0+IHtcclxuICAgICAgICBpZiAocmVzWydkYXRhJ10gPT09ICdNRkFfQ09ERV9TRU5EJykge1xyXG4gICAgICAgICAgcmV0dXJuIG9mKHJlc1snZGF0YSddKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFtBcHBDb25zdGFudHMudGVtcFBhc3N3b3JkUmVzZXQsIEFwcENvbnN0YW50cy5wYXNzd29yZEV4cGlyZWRdLmluY2x1ZGVzKHJlcz8uZGF0YT8uYWN0aW9uKSkge1xyXG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnZW1haWwnLCByZXMuZGF0YS51c2VyPy5lbWFpbCk7XHJcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdpZCcsIHJlcy5kYXRhLnVzZXI/LmlkKTtcclxuICAgICAgICAgIHJldHVybiBvZihyZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNyZWRlbnRpYWxzU2VydmljZS5zZXRDcmVkZW50aWFscyhyZXNbJ2RhdGEnXS5pZFRva2VuLmp3dFRva2VuKTtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdyZWZyZXNoVG9rZW4nLCByZXNbJ2RhdGEnXS5yZWZyZXNoVG9rZW4udG9rZW4pO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2VtYWlsJywgcmVzWydkYXRhJ10uaWRUb2tlbi5wYXlsb2FkWydlbWFpbCddKTtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdpZCcsIHJlc1snZGF0YSddLmlkVG9rZW4ucGF5bG9hZFsnY3VzdG9tOmlkJ10pO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3VzZXJuYW1lJywgcmVzWydkYXRhJ10uaWRUb2tlbi5wYXlsb2FkWyduYW1lJ10pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFVzZXJJbmZvKCk7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlZnJlc2hUb2tlbihwbGF0Zm9ybSA9ICdhd3MnKSB7XHJcbiAgICBjb25zdCBlbWFpbCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2VtYWlsJyk7XHJcbiAgICBjb25zdCByZWZyZXNoVG9rZW4gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdyZWZyZXNoVG9rZW4nKTtcclxuICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgIGVtYWlsLFxyXG4gICAgICByZWZyZXNoVG9rZW5cclxuICAgIH07XHJcbiAgICBpZihwbGF0Zm9ybSA9PT0gJ2F3cycpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdChBdXRoVVJMLkVuZFBvaW50cy5hdXRoLnVzZXIucmVmcmVzaFRva2VuLCBib2R5KS5waXBlKFxyXG4gICAgICAgIG1lcmdlTWFwKChyZXM6IGFueSk6IGFueSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmNyZWRlbnRpYWxzU2VydmljZS5zZXRDcmVkZW50aWFscyhyZXNbJ2RhdGEnXS5pZFRva2VuLmp3dFRva2VuKTtcclxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3JlZnJlc2hUb2tlbicsIHJlc1snZGF0YSddLnJlZnJlc2hUb2tlbi50b2tlbik7XHJcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdlbWFpbCcsIHJlc1snZGF0YSddLmlkVG9rZW4ucGF5bG9hZFsnZW1haWwnXSk7XHJcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdpZCcsIHJlc1snZGF0YSddLmlkVG9rZW4ucGF5bG9hZFsnY3VzdG9tOmlkJ10pO1xyXG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndXNlcm5hbWUnLCByZXNbJ2RhdGEnXS5pZFRva2VuLnBheWxvYWRbJ25hbWUnXSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnbmV3IHRva2VuIGdlbmVyYXRlZC4uLicsIHJlc1snZGF0YSddLmlkVG9rZW4uand0VG9rZW4pO1xyXG4gICAgICAgICAgcmV0dXJuIFtyZXNbJ2RhdGEnXS5pZFRva2VuLmp3dFRva2VuXTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoQXV0aFVSTC5FbmRQb2ludHMuYXV0aC51c2VyLnJlZnJlc2hUb2tlbiwgYm9keSkucGlwZShcclxuICAgICAgICBtZXJnZU1hcCgocmVzOiBhbnkpOiBhbnkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jcmVkZW50aWFsc1NlcnZpY2Uuc2V0Q3JlZGVudGlhbHMocmVzWydkYXRhJ10udG9rZW4pO1xyXG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgncmVmcmVzaFRva2VuJywgcmVzWydkYXRhJ10ucmVmcmVzaFRva2VuKTtcclxuICAgICAgICAgIHJldHVybiBbcmVzWydkYXRhJ10udG9rZW5dO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVzZXRMb2dnZWRJbigpIHtcclxuICAgIHRoaXMuaHR0cFNlcnZpY2VcclxuICAgICAgLnBvc3QoQXV0aFVSTC5FbmRQb2ludHMuYXV0aC51c2VyLmxvZ291dCwge1xyXG4gICAgICAgIGVtYWlsOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdlbWFpbCcpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdMb2dnZWQgaW4gZmxhZyByZXNldCBzdWNjZXNzZnVsLicpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2dvdXQoKSB7XHJcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0VXNlckluZm8oKTogT2JzZXJ2YWJsZTxbYW55XT4ge1xyXG4gICAgcmV0dXJuIGZvcmtKb2luKFt0aGlzLmh0dHBTZXJ2aWNlLmdldChBdXRoVVJMLkVuZFBvaW50cy5hdXRoLnVzZXIudXNlckluZm8pXSkucGlwZShcclxuICAgICAgdGFwKChbdXNlcl0pID0+IHtcclxuICAgICAgICB0aGlzLnN0b3JlLmFkZEF1dGhJbmZvKHVzZXJbJ2RhdGEnXSk7XHJcbiAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFVzZXJSb2xlKGlkKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChBdXRoVVJMLkVuZFBvaW50cy5hdXRoLnVzZXIudXNlclJvbGUucmVwbGFjZSgne2lkfScsIGlkKSkucGlwZShyZXMgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcm91dGVUb0R5bmFtaWNQYWdlKG9yZ2lkKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlXHJcbiAgICAgIC5nZXQoQXV0aFVSTC5FbmRQb2ludHMuYXV0aC51c2VyLnJvdXRlVG9EeW5hbWljUGFnZS5yZXBsYWNlKCd7b3JnaWR9Jywgb3JnaWQpKVxyXG4gICAgICAucGlwZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldEF1dGhNZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChBdXRoVVJMLkVuZFBvaW50cy5hdXRoLnVzZXIuYXV0aE1lKTtcclxuICB9XHJcblxyXG4gIFJlc2V0UGFzc3dvcmQoZGF0YTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wb3N0KEF1dGhVUkwuRW5kUG9pbnRzLmF1dGgudXNlci5yZXNldFBhc3N3b3JkLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRSb2xlS2V5KCkge1xyXG4gICAgY29uc3QgdXNlciA9IHRoaXMubG9jYWxzdG9yZS5nZXRPYmooJ3VzZXInKTtcclxuICAgIGlmICh1c2VyICYmIHVzZXIucm9sZSkge1xyXG4gICAgICByZXR1cm4gdXNlci5yb2xlLnJvbGVrZXk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNBZG1pbigpIHtcclxuICAgIHJldHVybiAnQURNJyA9PT0gdGhpcy5nZXRSb2xlS2V5KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0T3JnSUQoKSB7XHJcbiAgICBjb25zdCB1c2VyID0gdGhpcy5sb2NhbHN0b3JlLmdldE9iaigndXNlcicpO1xyXG4gICAgaWYgKHVzZXIgJiYgdXNlci51c2VyV29ya0luZm8gJiYgdXNlci51c2VyV29ya0luZm8ub3JnYW5pemF0aW9uICYmIHVzZXIudXNlcldvcmtJbmZvLm9yZ2FuaXphdGlvbi5pZCkge1xyXG4gICAgICByZXR1cm4gdXNlci51c2VyV29ya0luZm8ub3JnYW5pemF0aW9uLmlkO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uZm9ybU1haWwoZGF0YSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdChBdXRoVVJMLkVuZFBvaW50cy5hdXRoLnVzZXIuY29uZm9ybU1haWwsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlUGFzc3dvcmQoZGF0YSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdChBdXRoVVJMLkVuZFBvaW50cy5hdXRoLnVzZXIuY2hhbmdlUGFzc3dvcmQsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgc2V0U2hhcmVkTWVzc2FnZShkYXRhKSB7XHJcbiAgICB0aGlzLnNoYXJlZEluZm8gPSBkYXRhO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2hhcmVkTWVzc2FnZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnNoYXJlZEluZm87XHJcbiAgfVxyXG5cclxuICBhc3luYyBjaGVja0R5bmFtaWNQYWdlUGVybWlzc2lvbihwYWdlSWQ6IGFueSkge1xyXG4gICAgY29uc3QgZHluYW1pY1BhZ2VzID0gYXdhaXQgdGhpcy5nZXRBdXRob3JpemVkUGFnZXMoKTtcclxuICAgIGlmIChwYWdlSWQpIHtcclxuICAgICAgdGhpcy5keW5hbWljVGFiUGFnZVNlcnZpY2UuZ2V0UGFnZUJ5SWQocGFnZUlkKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICBpZiAoZHluYW1pY1BhZ2VzLnNvbWUocGFnZSA9PiBwYWdlLmlkID09PSByZXNbJ2RhdGEnXVswXS5hY3RpdmVWZXJzaW9uLmlkKSkge1xyXG4gICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtgcGFnZXMvZHluYW1pYy1zZWFyY2gvc2VhcmNoLyR7cmVzWydkYXRhJ11bMF0uYWN0aXZlVmVyc2lvbi5pZH1gXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLmVycm9yKFxyXG4gICAgICAgICAgICBgWW91IGRvbid0IGhhdmUgcGVybWlzc2lvbnMgZm9yICR7cmVzWydkYXRhJ11bMF0uYWN0aXZlVmVyc2lvbi5wYWdlbmFtZX0gLiBQbGVhc2UgQ29udGFjdCBBZG1pbmlzdHJhdG9yYFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hbGVydFNlcnZpY2UuZXJyb3IoXHJcbiAgICAgICAgJ1lvdSBkb25cXCd0IGhhdmUgcGVybWlzc2lvbnMgdG8gcGVyZm9ybSB0aGUgZm9sbG93aW5nIG9wZXJhdGlvbnMgLlBsZWFzZSBDb250YWN0IEFkbWluaXN0cmF0b3InXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRDdXJyZW50T3JnKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0VXNlck9yZ0xpc3QoKVxyXG4gICAgICAudG9Qcm9taXNlKClcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZVsnZGF0YSddWzBdLmlkO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldEF1dGhvcml6ZWRQYWdlcygpIHtcclxuICAgIGNvbnN0IG9yZ0lkID0gYXdhaXQgdGhpcy5nZXRDdXJyZW50T3JnKCk7XHJcbiAgICByZXR1cm4gdGhpcy5wYWdlSGVhZGVyU2VydmljZVxyXG4gICAgICAuZ2V0QXV0aG9yaXplZFBhZ2VzKG9yZ0lkKVxyXG4gICAgICAudG9Qcm9taXNlKClcclxuICAgICAgLnRoZW4oXHJcbiAgICAgICAgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZHluYW1pY1BhZ2UgPSByZXNwb25zZVsnZGF0YSddLmZpbHRlcihwYWdlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICBwYWdlLmFjdGl2ZVZlcnNpb24gJiZcclxuICAgICAgICAgICAgICAocGFnZS5hY3RpdmVWZXJzaW9uLmdyaWRjb25maWcgfHwgcGFnZS5hY3RpdmVWZXJzaW9uLnRlbXBsYXRlanNvbiB8fCB0aGlzLmdldEN1c3RvbVBhZ2UocGFnZSkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJldHVybiBkeW5hbWljUGFnZS5tYXAocGFnZSA9PiAoe1xyXG4gICAgICAgICAgICBpZDogcGFnZS5hY3RpdmVWZXJzaW9uLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiBwYWdlLmFjdGl2ZVZlcnNpb24ucGFnZW5hbWUsXHJcbiAgICAgICAgICAgIGFjdGl2ZVZlcnNpb246IHBhZ2UuYWN0aXZlVmVyc2lvblxyXG4gICAgICAgICAgfSkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgX2Vycm9yID0+IHRoaXMuYWxlcnRTZXJ2aWNlLmVycm9yKEFwcENvbnN0YW50cy5lcnJvck1lc3NhZ2UpXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXRDdXN0b21QYWdlKHBhZ2UpIHtcclxuICAgIGlmIChwYWdlLmFjdGl2ZVZlcnNpb24udGFiY29uZmlnKSB7XHJcbiAgICAgIGNvbnN0IHJvdXRpbmdUYWIgPSBKU09OLnBhcnNlKHBhZ2UuYWN0aXZlVmVyc2lvbi50YWJjb25maWcpLmZpbHRlcih4ID0+IHgudHlwZSA9PT0gJ1JPVVRJTkcnKTtcclxuICAgICAgcmV0dXJuIHJvdXRpbmdUYWIubGVuZ3RoICYmIHBhZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHB1YmxpYyB2YWxpZGF0ZVRva2VuKHRva2VuOiBzdHJpbmcscmVxdWVzdE9iamVjdDogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHRoaXMuY3JlZGVudGlhbHNTZXJ2aWNlLnNldENyZWRlbnRpYWxzKHRva2VuKTtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldEF1dGhBY2Nlc3NLZXkoQXV0aFVSTC5FbmRQb2ludHMuYXV0aC51c2VyLmdldFRva2VuVmFsaWRhdGlvblVybCxyZXF1ZXN0T2JqZWN0KS5waXBlKFxyXG4gICAgICBtZXJnZU1hcCgocmVzOiBhbnkpOiBPYnNlcnZhYmxlPFthbnldPiA9PiB7XHJcbiAgICAgICAgaWYgKHJlc1snZGF0YSddID09PSAnTUZBX0NPREVfU0VORCcpIHtcclxuICAgICAgICAgIHJldHVybiBvZihyZXNbJ2RhdGEnXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3JlZGVudGlhbHNTZXJ2aWNlLnNldENyZWRlbnRpYWxzKHJlc1snZGF0YSddLnRva2VuKTtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdyZWZyZXNoVG9rZW4nLCByZXNbJ2RhdGEnXS5yZWZyZXNoVG9rZW4pO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2VtYWlsJywgcmVzWydkYXRhJ10uZW1haWwpO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2lkJywgcmVzWydkYXRhJ10uaWQpO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3VzZXJuYW1lJywgcmVzWydkYXRhJ10ubmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VXNlckluZm8oKTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG4gIGdlbmVyYXRlTG9naW5VcmwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoQXV0aFVSTC5FbmRQb2ludHMuYXV0aC51c2VyLmdlbmVyYXRlTG9naW5VcmwpXHJcbiAgfVxyXG59XHJcbiJdfQ==