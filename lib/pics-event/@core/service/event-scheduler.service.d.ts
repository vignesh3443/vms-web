import { HttpService } from './http.service';
import * as i0 from "@angular/core";
export declare class EventSchedulerService {
    private http;
    constructor(http: HttpService);
    youthEventSearch(searchText: any): import("rxjs").Observable<Object>;
    getLabels(categoryname: any): import("rxjs").Observable<Object>;
    createEvent(modal: any): import("rxjs").Observable<Object>;
    updateEvent(id: any, modal: any): import("rxjs").Observable<Object>;
    deleteEvent(id: any): import("rxjs").Observable<Object>;
    getListEvents(): import("rxjs").Observable<Object>;
    getListUsers(orgid: any): import("rxjs").Observable<Object>;
    getEventType(eventType: any): import("rxjs").Observable<Object>;
    completeEvent(id: any, modal: any): import("rxjs").Observable<Object>;
    getEventInfo(eventId: any): import("rxjs").Observable<Object>;
    addEventOutcome(modal: any): import("rxjs").Observable<Object>;
    createEventAttachement(modal: any): import("rxjs").Observable<Object>;
    uploadKey(objparams: any): import("rxjs").Observable<Object>;
    deleteEventAttachment(eventId: any): import("rxjs").Observable<Object>;
    updateEventOutcome(id: any, modal: any): import("rxjs").Observable<Object>;
    createYouthEvent(objparams: any): import("rxjs").Observable<Object>;
    upadateEventWithYouthid(id: any, modal: any): import("rxjs").Observable<Object>;
    getEventByYouthId(youthId: any): import("rxjs").Observable<Object>;
    getCategoryLookup(name: any): import("rxjs").Observable<Object>;
    getHolidayList(): import("rxjs").Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EventSchedulerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EventSchedulerService>;
}
