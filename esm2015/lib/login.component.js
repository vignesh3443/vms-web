import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RBACINFO } from './pics-login/@core/urls/rbac-url.config';
import * as i0 from "@angular/core";
import * as i1 from "./pics-login/@core/permissions/permission.store";
import * as i2 from "./pics-login/@core/service/data-store.service";
import * as i3 from "@angular/platform-browser";
import * as i4 from "./pics-login/login/login.component";
export class LoginComponent {
    constructor(permissionStore, _storeservice, sanitizer) {
        this.permissionStore = permissionStore;
        this._storeservice = _storeservice;
        this.sanitizer = sanitizer;
        this.RBACORG = new RBACINFO();
        this.libOnPasswordExpired = new EventEmitter();
        this.libOnLoginSuccessful = new EventEmitter();
        this.libOnVerifyingOtp = new EventEmitter();
    }
    ngOnInit() {
        this.loginEvent.subscribe((val) => {
            const payload = Object.assign({}, val.LOGININFO);
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
}
LoginComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LoginComponent, deps: [{ token: i1.PermissionStore }, { token: i2.DataStoreService }, { token: i3.DomSanitizer }], target: i0.ɵɵFactoryTarget.Component });
LoginComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: LoginComponent, selector: "login", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", LOGININFO: "LOGININFO", loginEvent: "loginEvent" }, outputs: { libOnPasswordExpired: "libOnPasswordExpired", libOnLoginSuccessful: "libOnLoginSuccessful", libOnVerifyingOtp: "libOnVerifyingOtp" }, ngImport: i0, template: `
   <lib-login [RBACORG]="RBACORG" [LOGININFO]="LOGININFO" (passwordExpired)="onPasswordExpired($event)" (loginSuccessful)="onLoginSuccessful($event)" (verifyingOtp)="onVerifyingOtp($event)"></lib-login>
  `, isInline: true, components: [{ type: i4.LoginComponent, selector: "lib-login", inputs: ["LOGININFO", "RBACORG"], outputs: ["passwordExpired", "loginSuccessful", "verifyingOtp"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LoginComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'login',
                    template: `
   <lib-login [RBACORG]="RBACORG" [LOGININFO]="LOGININFO" (passwordExpired)="onPasswordExpired($event)" (loginSuccessful)="onLoginSuccessful($event)" (verifyingOtp)="onVerifyingOtp($event)"></lib-login>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1.PermissionStore }, { type: i2.DataStoreService }, { type: i3.DomSanitizer }]; }, propDecorators: { RBACORG: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2xvZ2luL3NyYy9saWIvbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUMsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7Ozs7QUFhbkUsTUFBTSxPQUFPLGNBQWM7SUFRekIsWUFDVSxlQUFnQyxFQUNoQyxhQUErQixFQUMvQixTQUF1QjtRQUZ2QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQy9CLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFWakIsWUFBTyxHQUFjLElBQUksUUFBUSxFQUFFLENBQUM7UUFJMUMseUJBQW9CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMxQyx5QkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzFDLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFNakQsQ0FBQztJQUNELFFBQVE7UUFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQ3RDLE1BQU0sT0FBTyxxQkFBTyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbkMsT0FBTyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNwRixPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztZQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztZQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxpQkFBaUIsQ0FBQyxNQUFNO1FBQ3RCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELGlCQUFpQixDQUFDLE1BQU07UUFDdEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsY0FBYyxDQUFDLE1BQU07UUFDbkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs0R0FsQ1UsY0FBYztnR0FBZCxjQUFjLDBTQU5mOztHQUVUOzRGQUlVLGNBQWM7a0JBUjFCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLE9BQU87b0JBQ2pCLFFBQVEsRUFBRTs7R0FFVDtvQkFDRCxNQUFNLEVBQUUsRUFDUDtpQkFDRjtnS0FFaUIsT0FBTztzQkFBdEIsS0FBSztnQkFDVSxVQUFVO3NCQUF6QixLQUFLO2dCQUNVLFNBQVM7c0JBQXhCLEtBQUs7Z0JBQ1UsVUFBVTtzQkFBekIsS0FBSztnQkFDSSxvQkFBb0I7c0JBQTdCLE1BQU07Z0JBQ0csb0JBQW9CO3NCQUE3QixNQUFNO2dCQUNHLGlCQUFpQjtzQkFBMUIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSQkFDSU5GTyB9IGZyb20gJy4vcGljcy1sb2dpbi9AY29yZS91cmxzL3JiYWMtdXJsLmNvbmZpZyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgUGVybWlzc2lvblN0b3JlIH0gZnJvbSAnLi9waWNzLWxvZ2luL0Bjb3JlL3Blcm1pc3Npb25zL3Blcm1pc3Npb24uc3RvcmUnO1xyXG5pbXBvcnQgeyBEYXRhU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi9waWNzLWxvZ2luL0Bjb3JlL3NlcnZpY2UvZGF0YS1zdG9yZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xvZ2luJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICA8bGliLWxvZ2luIFtSQkFDT1JHXT1cIlJCQUNPUkdcIiBbTE9HSU5JTkZPXT1cIkxPR0lOSU5GT1wiIChwYXNzd29yZEV4cGlyZWQpPVwib25QYXNzd29yZEV4cGlyZWQoJGV2ZW50KVwiIChsb2dpblN1Y2Nlc3NmdWwpPVwib25Mb2dpblN1Y2Nlc3NmdWwoJGV2ZW50KVwiICh2ZXJpZnlpbmdPdHApPVwib25WZXJpZnlpbmdPdHAoJGV2ZW50KVwiPjwvbGliLWxvZ2luPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBSQkFDT1JHPzogUkJBQ0lORk8gPSBuZXcgUkJBQ0lORk8oKTtcclxuICBASW5wdXQoKSBwdWJsaWMgUEVSTUlTU0lPTj86IGFueTtcclxuICBASW5wdXQoKSBwdWJsaWMgTE9HSU5JTkZPPzogYW55O1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBsb2dpbkV2ZW50ITogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gIEBPdXRwdXQoKSBsaWJPblBhc3N3b3JkRXhwaXJlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgbGliT25Mb2dpblN1Y2Nlc3NmdWwgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGxpYk9uVmVyaWZ5aW5nT3RwID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBwZXJtaXNzaW9uU3RvcmU6IFBlcm1pc3Npb25TdG9yZSxcclxuICAgIHByaXZhdGUgX3N0b3Jlc2VydmljZTogRGF0YVN0b3JlU2VydmljZSxcclxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXJcclxuICApIHtcclxuICB9XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAgdGhpcy5sb2dpbkV2ZW50LnN1YnNjcmliZSgodmFsOiBhbnkpID0+IHtcclxuICAgICAgY29uc3QgcGF5bG9hZCA9IHsuLi52YWwuTE9HSU5JTkZPfTtcclxuICAgICAgcGF5bG9hZC5CQU5ORVJfVElUTEUgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChwYXlsb2FkLkJBTk5FUl9USVRMRSk7XHJcbiAgICAgIHBheWxvYWQuVElUTEUgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChwYXlsb2FkLlRJVExFKTtcclxuICAgICAgdGhpcy5SQkFDT1JHID0gdmFsLlJCQUNPUkc7XHJcbiAgICAgIHRoaXMuUEVSTUlTU0lPTiA9IHBheWxvYWQ7XHJcbiAgICAgIHRoaXMuTE9HSU5JTkZPID0gcGF5bG9hZDtcclxuICAgICAgdGhpcy5fc3RvcmVzZXJ2aWNlLnNldERhdGEoJ1JCQUNPUkcnLCB0aGlzLlJCQUNPUkcpO1xyXG4gICAgICB0aGlzLnBlcm1pc3Npb25TdG9yZS5zZXRTdG9yZSh0aGlzLlBFUk1JU1NJT04pO1xyXG4gICAgfSlcclxuICB9XHJcbiAgb25QYXNzd29yZEV4cGlyZWQoJGV2ZW50KSB7XHJcbiAgICB0aGlzLmxpYk9uUGFzc3dvcmRFeHBpcmVkLmVtaXQoJGV2ZW50KTtcclxuICB9XHJcbiAgb25Mb2dpblN1Y2Nlc3NmdWwoJGV2ZW50KSB7XHJcbiAgICB0aGlzLmxpYk9uTG9naW5TdWNjZXNzZnVsLmVtaXQoJGV2ZW50KTtcclxuICB9XHJcbiAgb25WZXJpZnlpbmdPdHAoJGV2ZW50KSB7XHJcbiAgICB0aGlzLmxpYk9uVmVyaWZ5aW5nT3RwLmVtaXQoJGV2ZW50KTtcclxuICB9XHJcbn0iXX0=