import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PermissionStore } from './pics-event/@core/permissions/permission.store';
import { DataStoreService } from './pics-event/@core/service/data-store.service';
import { RBACINFO } from './pics-event/@core/urls/event-scheduler-url.config';
import * as i0 from "@angular/core";
export declare class EventComponent implements OnInit {
    private permissionStore;
    private _storeservice;
    RBACORG?: RBACINFO;
    PERMISSION?: any;
    schedulerEvent: Observable<any>;
    constructor(permissionStore: PermissionStore, _storeservice: DataStoreService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EventComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EventComponent, "event", never, { "RBACORG": { "alias": "RBACORG"; "required": false; }; "PERMISSION": { "alias": "PERMISSION"; "required": false; }; "schedulerEvent": { "alias": "schedulerEvent"; "required": false; }; }, {}, never, never, false, never>;
}
