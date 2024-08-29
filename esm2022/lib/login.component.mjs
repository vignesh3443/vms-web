import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RBACINFO } from './pics-login/@core/urls/rbac-url.config';
import * as i0 from "@angular/core";
import * as i1 from "./pics-login/@core/permissions/permission.store";
import * as i2 from "./pics-login/@core/service/data-store.service";
import * as i3 from "@angular/platform-browser";
import * as i4 from "./pics-login/login/login.component";
export class LoginComponent {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LoginComponent, deps: [{ token: i1.PermissionStore }, { token: i2.DataStoreService }, { token: i3.DomSanitizer }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: LoginComponent, selector: "login", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", LOGININFO: "LOGININFO", loginEvent: "loginEvent" }, outputs: { libOnPasswordExpired: "libOnPasswordExpired", libOnLoginSuccessful: "libOnLoginSuccessful", libOnVerifyingOtp: "libOnVerifyingOtp" }, ngImport: i0, template: `
   <lib-login [RBACORG]="RBACORG" [LOGININFO]="LOGININFO" (passwordExpired)="onPasswordExpired($event)" (loginSuccessful)="onLoginSuccessful($event)" (verifyingOtp)="onVerifyingOtp($event)"></lib-login>
  `, isInline: true, dependencies: [{ kind: "component", type: i4.LoginComponent, selector: "lib-login", inputs: ["LOGININFO", "RBACORG"], outputs: ["passwordExpired", "loginSuccessful", "verifyingOtp"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LoginComponent, decorators: [{
            type: Component,
            args: [{ selector: 'login', template: `
   <lib-login [RBACORG]="RBACORG" [LOGININFO]="LOGININFO" (passwordExpired)="onPasswordExpired($event)" (loginSuccessful)="onLoginSuccessful($event)" (verifyingOtp)="onVerifyingOtp($event)"></lib-login>
  ` }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2xvZ2luL3NyYy9saWIvbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUMsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7Ozs7QUFjbkUsTUFBTSxPQUFPLGNBQWM7SUFVZjtJQUNBO0lBQ0E7SUFYTSxPQUFPLEdBQWMsSUFBSSxRQUFRLEVBQUUsQ0FBQztJQUNwQyxVQUFVLENBQU87SUFDakIsU0FBUyxDQUFPO0lBQ2hCLFVBQVUsQ0FBbUI7SUFDbkMsb0JBQW9CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUMxQyxvQkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQzFDLGlCQUFpQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFakQsWUFDVSxlQUFnQyxFQUNoQyxhQUErQixFQUMvQixTQUF1QjtRQUZ2QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQy9CLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFFakMsQ0FBQztJQUNELFFBQVE7UUFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQ3RDLE1BQU0sT0FBTyxHQUFHLEVBQUMsR0FBRyxHQUFHLENBQUMsU0FBUyxFQUFDLENBQUM7WUFDbkMsT0FBTyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNwRixPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztZQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztZQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxpQkFBaUIsQ0FBQyxNQUFNO1FBQ3RCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELGlCQUFpQixDQUFDLE1BQU07UUFDdEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsY0FBYyxDQUFDLE1BQU07UUFDbkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QyxDQUFDO3dHQXJDVSxjQUFjOzRGQUFkLGNBQWMsMFNBTmY7O0dBRVQ7OzRGQUlVLGNBQWM7a0JBUjFCLFNBQVM7K0JBQ0UsT0FBTyxZQUNQOztHQUVUO2dLQUtlLE9BQU87c0JBQXRCLEtBQUs7Z0JBQ1UsVUFBVTtzQkFBekIsS0FBSztnQkFDVSxTQUFTO3NCQUF4QixLQUFLO2dCQUNVLFVBQVU7c0JBQXpCLEtBQUs7Z0JBQ0ksb0JBQW9CO3NCQUE3QixNQUFNO2dCQUNHLG9CQUFvQjtzQkFBN0IsTUFBTTtnQkFDRyxpQkFBaUI7c0JBQTFCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUkJBQ0lORk8gfSBmcm9tICcuL3BpY3MtbG9naW4vQGNvcmUvdXJscy9yYmFjLXVybC5jb25maWcnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFBlcm1pc3Npb25TdG9yZSB9IGZyb20gJy4vcGljcy1sb2dpbi9AY29yZS9wZXJtaXNzaW9ucy9wZXJtaXNzaW9uLnN0b3JlJztcclxuaW1wb3J0IHsgRGF0YVN0b3JlU2VydmljZSB9IGZyb20gJy4vcGljcy1sb2dpbi9AY29yZS9zZXJ2aWNlL2RhdGEtc3RvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbG9naW4nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgIDxsaWItbG9naW4gW1JCQUNPUkddPVwiUkJBQ09SR1wiIFtMT0dJTklORk9dPVwiTE9HSU5JTkZPXCIgKHBhc3N3b3JkRXhwaXJlZCk9XCJvblBhc3N3b3JkRXhwaXJlZCgkZXZlbnQpXCIgKGxvZ2luU3VjY2Vzc2Z1bCk9XCJvbkxvZ2luU3VjY2Vzc2Z1bCgkZXZlbnQpXCIgKHZlcmlmeWluZ090cCk9XCJvblZlcmlmeWluZ090cCgkZXZlbnQpXCI+PC9saWItbG9naW4+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgcHVibGljIFJCQUNPUkc/OiBSQkFDSU5GTyA9IG5ldyBSQkFDSU5GTygpO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBQRVJNSVNTSU9OPzogYW55O1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBMT0dJTklORk8/OiBhbnk7XHJcbiAgQElucHV0KCkgcHVibGljIGxvZ2luRXZlbnQhOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgQE91dHB1dCgpIGxpYk9uUGFzc3dvcmRFeHBpcmVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBsaWJPbkxvZ2luU3VjY2Vzc2Z1bCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgbGliT25WZXJpZnlpbmdPdHAgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBwZXJtaXNzaW9uU3RvcmU6IFBlcm1pc3Npb25TdG9yZSxcclxuICAgIHByaXZhdGUgX3N0b3Jlc2VydmljZTogRGF0YVN0b3JlU2VydmljZSxcclxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXJcclxuICApIHtcclxuICB9XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAgdGhpcy5sb2dpbkV2ZW50LnN1YnNjcmliZSgodmFsOiBhbnkpID0+IHtcclxuICAgICAgY29uc3QgcGF5bG9hZCA9IHsuLi52YWwuTE9HSU5JTkZPfTtcclxuICAgICAgcGF5bG9hZC5CQU5ORVJfVElUTEUgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChwYXlsb2FkLkJBTk5FUl9USVRMRSk7XHJcbiAgICAgIHBheWxvYWQuVElUTEUgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChwYXlsb2FkLlRJVExFKTtcclxuICAgICAgdGhpcy5SQkFDT1JHID0gdmFsLlJCQUNPUkc7XHJcbiAgICAgIHRoaXMuUEVSTUlTU0lPTiA9IHBheWxvYWQ7XHJcbiAgICAgIHRoaXMuTE9HSU5JTkZPID0gcGF5bG9hZDtcclxuICAgICAgdGhpcy5fc3RvcmVzZXJ2aWNlLnNldERhdGEoJ1JCQUNPUkcnLCB0aGlzLlJCQUNPUkcpO1xyXG4gICAgICB0aGlzLnBlcm1pc3Npb25TdG9yZS5zZXRTdG9yZSh0aGlzLlBFUk1JU1NJT04pO1xyXG4gICAgfSlcclxuICB9XHJcbiAgb25QYXNzd29yZEV4cGlyZWQoJGV2ZW50KSB7XHJcbiAgICB0aGlzLmxpYk9uUGFzc3dvcmRFeHBpcmVkLmVtaXQoJGV2ZW50KTtcclxuICB9XHJcblxyXG4gIG9uTG9naW5TdWNjZXNzZnVsKCRldmVudCkge1xyXG4gICAgdGhpcy5saWJPbkxvZ2luU3VjY2Vzc2Z1bC5lbWl0KCRldmVudCk7XHJcbiAgfVxyXG5cclxuICBvblZlcmlmeWluZ090cCgkZXZlbnQpIHtcclxuICAgIHRoaXMubGliT25WZXJpZnlpbmdPdHAuZW1pdCgkZXZlbnQpO1xyXG4gIH1cclxufVxyXG4iXX0=