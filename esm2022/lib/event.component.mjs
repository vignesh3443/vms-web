import { Component, Input } from '@angular/core';
import { RBACINFO } from './pics-event/@core/urls/event-scheduler-url.config';
import * as i0 from "@angular/core";
import * as i1 from "./pics-event/@core/permissions/permission.store";
import * as i2 from "./pics-event/@core/service/data-store.service";
import * as i3 from "./pics-event/events/events.component";
export class EventComponent {
    permissionStore;
    _storeservice;
    RBACORG = new RBACINFO();
    PERMISSION;
    schedulerEvent;
    constructor(permissionStore, _storeservice) {
        this.permissionStore = permissionStore;
        this._storeservice = _storeservice;
    }
    ngOnInit() {
        this.schedulerEvent.subscribe((val) => {
            this.RBACORG = val.RBACORG;
            this.PERMISSION = val.PERMISSION;
            this._storeservice.setData('RBACORG', this.RBACORG);
            this.permissionStore.setStore(this.PERMISSION);
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: EventComponent, deps: [{ token: i1.PermissionStore }, { token: i2.DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: EventComponent, selector: "event", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", schedulerEvent: "schedulerEvent" }, ngImport: i0, template: `
        <event-scheduler></event-scheduler>
  `, isInline: true, dependencies: [{ kind: "component", type: i3.EventsComponent, selector: "event-scheduler" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: EventComponent, decorators: [{
            type: Component,
            args: [{ selector: 'event', template: `
        <event-scheduler></event-scheduler>
  ` }]
        }], ctorParameters: function () { return [{ type: i1.PermissionStore }, { type: i2.DataStoreService }]; }, propDecorators: { RBACORG: [{
                type: Input
            }], PERMISSION: [{
                type: Input
            }], schedulerEvent: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1tb2R1bGUvZXZlbnQvc3JjL2xpYi9ldmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFJekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9EQUFvRCxDQUFDOzs7OztBQVU5RSxNQUFNLE9BQU8sY0FBYztJQVFmO0lBQ0E7SUFOTSxPQUFPLEdBQWMsSUFBSSxRQUFRLEVBQUUsQ0FBQztJQUNwQyxVQUFVLENBQU87SUFDakIsY0FBYyxDQUFtQjtJQUVqRCxZQUNVLGVBQWdDLEVBQ2hDLGFBQStCO1FBRC9CLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7SUFFekMsQ0FBQztJQUNELFFBQVE7UUFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUM7WUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO3dHQW5CVSxjQUFjOzRGQUFkLGNBQWMseUlBTmY7O0dBRVQ7OzRGQUlVLGNBQWM7a0JBUjFCLFNBQVM7K0JBQ0UsT0FBTyxZQUNQOztHQUVUO3FJQU9lLE9BQU87c0JBQXRCLEtBQUs7Z0JBQ1UsVUFBVTtzQkFBekIsS0FBSztnQkFDVSxjQUFjO3NCQUE3QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgUGVybWlzc2lvblN0b3JlIH0gZnJvbSAnLi9waWNzLWV2ZW50L0Bjb3JlL3Blcm1pc3Npb25zL3Blcm1pc3Npb24uc3RvcmUnO1xyXG5pbXBvcnQgeyBEYXRhU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi9waWNzLWV2ZW50L0Bjb3JlL3NlcnZpY2UvZGF0YS1zdG9yZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUkJBQ0lORk8gfSBmcm9tICcuL3BpY3MtZXZlbnQvQGNvcmUvdXJscy9ldmVudC1zY2hlZHVsZXItdXJsLmNvbmZpZyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2V2ZW50JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxldmVudC1zY2hlZHVsZXI+PC9ldmVudC1zY2hlZHVsZXI+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFdmVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgUkJBQ09SRz86IFJCQUNJTkZPID0gbmV3IFJCQUNJTkZPKCk7XHJcbiAgQElucHV0KCkgcHVibGljIFBFUk1JU1NJT04/OiBhbnk7XHJcbiAgQElucHV0KCkgcHVibGljIHNjaGVkdWxlckV2ZW50ITogT2JzZXJ2YWJsZTxhbnk+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcGVybWlzc2lvblN0b3JlOiBQZXJtaXNzaW9uU3RvcmUsXHJcbiAgICBwcml2YXRlIF9zdG9yZXNlcnZpY2U6IERhdGFTdG9yZVNlcnZpY2VcclxuICApIHtcclxuICB9XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAgdGhpcy5zY2hlZHVsZXJFdmVudC5zdWJzY3JpYmUoKHZhbDogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMuUkJBQ09SRyA9IHZhbC5SQkFDT1JHO1xyXG4gICAgICB0aGlzLlBFUk1JU1NJT04gPSB2YWwuUEVSTUlTU0lPTjtcclxuICAgICAgdGhpcy5fc3RvcmVzZXJ2aWNlLnNldERhdGEoJ1JCQUNPUkcnLCB0aGlzLlJCQUNPUkcpO1xyXG4gICAgICB0aGlzLnBlcm1pc3Npb25TdG9yZS5zZXRTdG9yZSh0aGlzLlBFUk1JU1NJT04pO1xyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIl19