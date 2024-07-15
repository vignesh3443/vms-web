import * as i0 from '@angular/core';
import { Injectable, Directive, Input, Component, ViewChild, NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';
import interactionPlugin from '@fullcalendar/interaction';
import * as i7 from '@angular/common';
import { DatePipe, CommonModule } from '@angular/common';
import * as i1$1 from '@angular/forms';
import { Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as moment from 'moment';
import * as i1 from '@angular/common/http';
import { HttpHeaders, HttpClientModule, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { throwError } from 'rxjs/internal/observable/throwError';
import * as i5 from '@angular/router';
import { NavigationStart } from '@angular/router';
import * as i8 from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import * as i9 from 'primeng/tooltip';
import * as i10 from 'primeng/tabview';
import { TabViewModule } from 'primeng/tabview';
import * as i11 from 'primeng/dropdown';
import { DropdownModule } from 'primeng/dropdown';
import * as i12 from 'primeng/card';
import { CardModule } from 'primeng/card';
import * as i13 from 'primeng/inputtext';
import { InputTextModule } from 'primeng/inputtext';
import * as i14 from 'primeng/calendar';
import { CalendarModule } from 'primeng/calendar';
import * as i15 from 'primeng/editor';
import { EditorModule } from 'primeng/editor';
import * as i16 from 'primeng/radiobutton';
import { RadioButtonModule } from 'primeng/radiobutton';
import * as i17 from 'primeng/ripple';
import { RippleModule } from 'primeng/ripple';
import * as i18 from 'primeng/multiselect';
import { MultiSelectModule } from 'primeng/multiselect';
import * as i19 from 'primeng/dialog';
import { DialogModule } from 'primeng/dialog';
import * as i22 from '@fullcalendar/angular';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionModule } from 'primeng/accordion';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ContextMenuModule } from 'primeng/contextmenu';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KnobModule } from 'primeng/knob';
import { MessageModule } from 'primeng/message';
import { OrderListModule } from 'primeng/orderlist';
import { PasswordModule } from 'primeng/password';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SidebarModule } from 'primeng/sidebar';
import { SpeedDialModule } from 'primeng/speeddial';
import { StepsModule } from 'primeng/steps';
import { TabMenuModule } from 'primeng/tabmenu';
import { ToastModule } from 'primeng/toast';
import { TreeSelectModule } from 'primeng/treeselect';

class EventService {
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: EventService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: EventService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: EventService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class EventSchedulerConfig {
    static EndPoint = {
        Appointment: {
            getReferralSuggestions: '/ref/referral/referrals?search=',
            getLabels: '/platform/master/lookup/lookupbycategoryname/',
            createEvent: '/solution/calendar-workflow/event/create',
            updateEvent: '/solution/calendar-workflow/event/',
            deleteEvent: '/solution/calendar-workflow/event/',
            listEvents: '/solution/calendar-workflow/event/getByCurrentUser',
            ListUsers: '/org/user/organization/{orgid}?addAdditionalInfo=false&excludeCurrentuser=true',
            completeEvent1: '/solution/calendar-workflow/event/',
            completeEvent2: '/completeEvent',
            getEvent: '/solution/calendar-workflow/event/',
            addEventOutcome: '/solution/calendar-workflow/event/addEventOutcome',
            createEventAttachement: '/solution/calendar-workflow/event-attachment/create',
            UploadKey: '/common/files/upload-key',
            eventAttachment: '/solution/calendar-workflow/event-attachment/',
            updateEventOutcome1: '/solution/calendar-workflow/event/',
            updateEventOutcome2: '/updateEventOutcome',
            createEventYouth: '/solution/calendar-workflow/event-youth/create',
            youthEventSearch: '/solution/calendar-workflow/event-youth/youths?search=',
            updateEventYouth: '/solution/calendar-workflow/event-youth/',
            getEventByYouthId: '/solution/calendar-workflow/event/getByYouthId/',
            HolidayList: '/solution/calendar-workflow/event/getpublicholidays/'
        },
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

class AppConstants {
    static categoryname = 'REFERRAL_ATTACHMENTS';
    static changePasswordText = 'text';
    static changePasswordPassword = 'password';
    static regexEmail = '^[0-9a-zA-Z.-]+[@][0-9a-zA-Z.-]+[.][0-9a-zA-Z]{2,}$';
    static regexPhone = '^[2-9][0-9]{2}-[2-9][0-9]{2}-[0-9]{4}$';
    static regexName = '^[a-zA-Z]{2,}$';
    static regexZipcode = '^[3][0-9]{4}$';
    static regexSsn = '^(?!666|000|9\\d{2})\\d{3}-(?!00)\\d{2}-(?!0{4})\\d{4}$';
    static regexSsnDigits = /^(\d{3}-?\d{2}-?\d{4}|XXX-XX-XXXX)$/;
    static regexForPhone = '/^[()s-]*(d{8,12}|d{3}[)s-]*d{3}[s-]*d{4}|d{10})[()s-]*$/';
    static formatDate = 'MM/DD/YYYY';
    static camalize = '/[^a-zA-Z0-9]+(.)/g';
    static checSchemaExistQuery = '/(?<=(as|AS)s)("*[a-zA-Zs#~_]*"*)(?=,|(from|FROM))/g';
    static URLVALIDATE = '/(ftp|http|https)://(w+:{0,1}w*@)?(S+)(:[0-9]+)?(/|/([w#!:.?+=&%@!-/]))?/';
    static EventURLValidate;
    static RegexUrlConstant = '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/';
    static statusComments = '/<[^>]*>/g';
    static regexEmailType2 = '^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$';
    static errorMessage = 'Something went wrong!';
    static pages = [
        { page: 'admin', title: 'User Management' },
        { page: 'intake-worker', title: 'Dashboard' },
        { page: 'microstrategy', title: 'Analytics' },
        { page: 'form-builder', title: 'Low Code Configurator' },
        { page: 'tab-order', title: 'Low Code Configurator' },
        { page: 'workflow', title: 'Low Code Configurator' },
        { page: 'document-packetization', title: 'Document Packetization' },
        { page: 'email-template', title: 'Email Template' },
        { page: 'chat', title: 'Chat' },
        { page: 'help-desk', title: 'Help' },
        { page: 'ocr-validation', title: 'Referrals' },
        { page: 'event-scheduler', title: 'Event Scheduler' },
        { page: 'config-dashboard', title: 'Config Dashboard' },
        { page: 'forms', title: 'Forms ' },
        { page: 'page-design', title: 'Page Design' },
        { page: 'dashboard-design', title: 'Dashboard Design' },
        { page: 'main-notification', title: 'Notification' },
        { page: 'dynamicPages', title: '' }
    ];
    static errorList = [
        'Have at least one (1) number',
        'Have at least one (1) special character',
        'Have at least one (1) upper case letter',
        'Have at least one (1) lower case letter',
        'Contain a minimum of eight (8) characters'
    ];
    static referralSource = [
        { value: 'law enforcement', label: 'Law Enforcement' },
        { value: 'citizen complaint', label: 'Citizen Complaint' }
    ];
    static generateNumber() {
        const crypto = window.crypto;
        const array = new Uint32Array(1);
        crypto.getRandomValues(array);
        return array[0];
    }
}

class RegexConstants {
    static URLVALIDATE = new RegExp(AppConstants.EventURLValidate);
}
class RegexUrlConstants {
    static URLVALIDATE = AppConstants.URLVALIDATE;
}
class RegexUrlMultipleConstants {
    static URLVALIDATE = new RegExp(AppConstants.regexEmailType2);
}
function RegexValidator(reg) {
    return (control) => {
        if (control.value && !control.value.toString().match(reg)) {
            return { urlvalidate: true };
        }
        return null;
    };
}
function CommaSepEmail(_reg) {
    return (control) => {
        if (control.value) {
            const emails = control.value.split(',');
            const forbidden = emails.some((email) => {
                if (email) {
                    return !RegexUrlMultipleConstants.URLVALIDATE.test(email);
                }
                else {
                    return null;
                }
            });
            return forbidden ? { externalUrl: true } : null;
        }
        return null;
    };
}

const COLOR_LABELS = [
    { key: 'GENERAL', label: 'General', bullet: 'primary', checked: true },
    { key: 'SPECIAL_OR_EMERGENCY', label: 'Special or Emergency Meeting', bullet: 'danger', checked: true },
    { key: 'WORK_SESSION', label: 'Work Session', bullet: 'warning', checked: true },
    { key: 'PUBLIC_HOLIDAY', label: 'Public Holiday (Only Admins)', bullet: 'success', checked: true },
    { key: 'SEMINAR', label: 'Seminar', bullet: 'info', checked: true },
    { key: 'TRAINING', label: 'Training', bullet: 'training', checked: true },
    { key: 'INTERVIEW', label: 'Interview', bullet: 'interview', checked: true },
    { key: 'GUEST', label: 'Guest', bullet: 'guest', checked: true }
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

class EventSchedulerService {
    http;
    constructor(http) {
        this.http = http;
    }
    youthEventSearch(searchText) {
        return this.http.get(EventSchedulerConfig.EndPoint.Appointment.youthEventSearch + searchText);
    }
    getLabels(categoryname) {
        return this.http.get(EventSchedulerConfig.EndPoint.Appointment.getLabels + categoryname);
    }
    createEvent(modal) {
        return this.http.post(EventSchedulerConfig.EndPoint.Appointment.createEvent, modal);
    }
    updateEvent(id, modal) {
        return this.http.patch(EventSchedulerConfig.EndPoint.Appointment.updateEvent + id, modal);
    }
    deleteEvent(id) {
        return this.http.delete(EventSchedulerConfig.EndPoint.Appointment.deleteEvent + id);
    }
    getListEvents() {
        return this.http.get(EventSchedulerConfig.EndPoint.Appointment.listEvents);
    }
    getListUsers(orgid) {
        return this.http.get(EventSchedulerConfig.EndPoint.Appointment.ListUsers.replace('{orgid}', orgid));
    }
    getEventType(eventType) {
        return this.http.get(EventSchedulerConfig.EndPoint.Appointment.getLabels + eventType);
    }
    completeEvent(id, modal) {
        return this.http.patch(EventSchedulerConfig.EndPoint.Appointment.completeEvent1 +
            id +
            EventSchedulerConfig.EndPoint.Appointment.completeEvent2, modal);
    }
    getEventInfo(eventId) {
        return this.http.get(EventSchedulerConfig.EndPoint.Appointment.getEvent + eventId);
    }
    addEventOutcome(modal) {
        return this.http.post(EventSchedulerConfig.EndPoint.Appointment.addEventOutcome, modal);
    }
    createEventAttachement(modal) {
        return this.http.post(EventSchedulerConfig.EndPoint.Appointment.createEventAttachement, modal);
    }
    uploadKey(objparams) {
        return this.http.post(EventSchedulerConfig.EndPoint.Appointment.UploadKey, objparams);
    }
    deleteEventAttachment(eventId) {
        return this.http.delete(EventSchedulerConfig.EndPoint.Appointment.eventAttachment + eventId);
    }
    updateEventOutcome(id, modal) {
        return this.http.patch(EventSchedulerConfig.EndPoint.Appointment.updateEventOutcome1 +
            id +
            EventSchedulerConfig.EndPoint.Appointment.updateEventOutcome2, modal);
    }
    createYouthEvent(objparams) {
        return this.http.post(EventSchedulerConfig.EndPoint.Appointment.createEventYouth, objparams);
    }
    upadateEventWithYouthid(id, modal) {
        return this.http.patch(EventSchedulerConfig.EndPoint.Appointment.updateEventYouth + id, modal);
    }
    getEventByYouthId(youthId) {
        return this.http.get(EventSchedulerConfig.EndPoint.Appointment.getEventByYouthId + youthId);
    }
    getCategoryLookup(name) {
        return this.http.get(EventSchedulerConfig.EndPoint.Attachments.GetCategoryLookup + '/' + name);
    }
    getHolidayList() {
        return this.http.get(EventSchedulerConfig.EndPoint.Appointment.HolidayList);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: EventSchedulerService, deps: [{ token: HttpService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: EventSchedulerService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: EventSchedulerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: HttpService }]; } });

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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertService, deps: [{ token: i5.Router }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i5.Router }]; } });
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
        console.log(permissions, 'permissions event scheduler');
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AlertComponent, selector: "app-alert", ngImport: i0, template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"], dependencies: [{ kind: "directive", type: i7.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-alert', template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"] }]
        }], ctorParameters: function () { return [{ type: AlertService }]; } });

class EventsComponent {
    _formBuilder;
    _eventSchedulerService;
    _alertService;
    _httpService;
    _route;
    _router;
    _storeservice;
    calendarComponent;
    startDatePicker;
    endDatePicker;
    selectDate = Date;
    miniDate = new Date();
    eventForm;
    uploadedForm;
    calendarVisible = true;
    dynamicYouthId = '';
    eventList = [];
    visible;
    HolidayList = [];
    selectedlabel = [];
    isPublicHoliday;
    calendarOptions = {
        plugins: [interactionPlugin],
        headerToolbar: {
            left: 'prev,next today myCustomButton',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        },
        eventContent: this.renderEventContent,
        initialView: 'dayGridMonth',
        nowIndicator: true,
        weekends: true,
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        eventResizableFromStart: true,
        navLinks: true,
        timeZone: 'local',
        events: [],
        select: this.handleDateSelect.bind(this),
        eventClick: this.handleEventClick.bind(this),
        eventsSet: this.handleEvents.bind(this),
        eventAdd: this.handleEventAdd.bind(this),
        eventChange: this.handleEventChange.bind(this),
        eventRemove: this.handleEventRemove.bind(this),
        eventClassNames: this.eventClass.bind(this),
        dateClick: this.getAppointmentsForSpecificDate.bind(this)
        /* you can update a remote database when these fire:
        eventAdd:
        eventChange:
        eventRemove:
        */
    };
    sessionStorage;
    //Event Render Function
    renderEventContent(eventInfo, _createElement) {
        let innerHtml;
        //Check if event has image
        if (eventInfo.event._def.extendedProps.imageUrl) {
            // Store custom html code in variable
            innerHtml =
                "<img width='20' class='mr-1' style='border-radius:15px' src='" +
                    eventInfo.event._def.extendedProps.imageUrl +
                    "'>" +
                    eventInfo.event._def.title;
            //Event with rendering html
            //This sonarQube issue can't be fixed because this returs a image
            _createElement = { html: "<div class='ml-1'>" + innerHtml + '</div>' };
            return _createElement;
        }
    }
    checkAll = true;
    selectLabel = [];
    referralAutoSuggestion = false;
    referralAutoList = [];
    selectDatepickerValue = new Date();
    isSubmit = false;
    eventTypeList = [];
    labelName = 'Add Event';
    userList = [];
    isOwner = true;
    isVirtual = true;
    isFaceToFace = false;
    ownerDetails;
    outcomeList = [];
    eventAttachments = [];
    uploadedFile;
    urlPath;
    isCalendar = true;
    LookupList = [];
    categoryList = [];
    subCategoryList = [];
    uploadedDate;
    uploadedPerson;
    conflictAppointment = false;
    attachType;
    selectedIndex = 0;
    youthId;
    environment;
    AddButton;
    addholiday;
    RBACORG = new RBACINFO();
    PERMISSION;
    orgSubs;
    orgId;
    constructor(_formBuilder, _eventSchedulerService, _alertService, _httpService, _route, _router, _storeservice) {
        this._formBuilder = _formBuilder;
        this._eventSchedulerService = _eventSchedulerService;
        this._alertService = _alertService;
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this._storeservice = _storeservice;
        this.youthId = this._route.snapshot.paramMap.get('pageId');
        if (this.youthId) {
            this.searchYouth(this.youthId, true);
        }
        this.uploadedDate = new Date();
        this.uploadedPerson = sessionStorage.getItem('username') || '';
        this.initializeClientForm();
        this.miniDate = new Date(this.startEndDatetimeUtc(new Date()));
        this.isPublicHoliday = true;
        this.AddButton = false;
        this.addholiday = false;
    }
    ngOnInit() {
        this.selectedIndex = 0;
        this.orgSubs = this._storeservice.currentStore.subscribe((res) => {
            if (res['RBACORG'] && res['RBACORG'] !== '') {
                this.RBACORG = res['RBACORG'];
                console.log(this.RBACORG, 'RBACORG Event Scheduler');
                this.environment = this.RBACORG['environment'];
                this.orgId = parseInt(this.RBACORG['orgID']);
                if (this.environment) {
                    this.getCategoryLookup();
                    this.getUsers();
                    this.getOutComeList();
                    this.getLabels();
                    this.getEventType();
                    this.getEventList();
                }
            }
        });
    }
    ngOnDestroy() {
        this.orgSubs.unsubscribe();
    }
    initializeClientForm() {
        this.eventForm = this._formBuilder.group({
            id: [''],
            start: [new Date(), Validators.required],
            end: ['', Validators.required],
            allDay: [false],
            title: ['', Validators.required],
            calendar: [''],
            eventurl: [null, [Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
            extendedProps: [],
            location: [''],
            description: [''],
            addGuest: [],
            event_type: [],
            externalUsers: [null, [CommaSepEmail(RegexConstants.URLVALIDATE)]],
            event_id: [''],
            owner_photo: [''],
            event_completed: [false],
            outcome: [''],
            notes: [''],
            outcomeid: [''],
            searchid: [''],
            eventyouthid: ['']
        }, { validator: this.checkDates });
        this.uploadedForm = this._formBuilder.group({
            title: [''],
            description: [''],
            categoryDetail: [''],
            subCategoryDetail: ['']
        });
    }
    get eventFormControl() {
        if (this.youthId) {
            this.eventForm.controls['searchid'].disable();
        }
        this.eventTypeValidation();
        return this.eventForm.controls;
    }
    checkDates(group) {
        if (group.controls['end'].value < group.controls['start'].value) {
            return { notValid: true };
        }
        return null;
    }
    getUsers() {
        this._eventSchedulerService.getListUsers(sessionStorage.getItem('orgid')).subscribe((res) => {
            if (res.data) {
                this.userList = res.data;
            }
        });
    }
    getLabels() {
        this._eventSchedulerService.getLabels('CALENDAR_LABELS').subscribe((res) => {
            if (res.data) {
                if (this.addholiday === true) {
                    this.selectLabel = res.data;
                    this.selectLabel.forEach((element, index) => {
                        if (element.id === 125) {
                            this.selectLabel.splice(index, 1);
                        }
                    });
                }
                else {
                    this.selectLabel = res.data;
                    this.selectLabel = this.selectLabel.filter(obj => obj.id === 125);
                    this.selectedlabel = this.selectLabel;
                    // this.selectLabel.forEach((element,index) => {
                    //   if(element.id ===125){
                    //   }else {
                    //     this.selectLabel.splice(index,1)
                    //   }
                    // });
                }
                this.selectLabel = this.selectLabel.map((x) => {
                    return {
                        key: x.lookupkey,
                        label: x.lookupvalue,
                        bullet: this.getColor(x.lookupkey),
                        checked: true,
                        id: x.id
                    };
                });
            }
        });
    }
    getEventType() {
        this._eventSchedulerService.getLabels('CALENDAR_EVENT_TYPES').subscribe((res) => {
            if (res.data) {
                this.eventTypeList = res.data;
            }
        });
    }
    getEventList() {
        this._eventSchedulerService.getListEvents().subscribe((res) => {
            if (res.data) {
                this.eventList = [];
                this.eventList = res.data.map((x, index = 0) => {
                    return {
                        id_value: index + 1,
                        url: '',
                        title: x.eventDetails.title,
                        start: new Date(x.eventDetails.event_start),
                        end: new Date(x.eventDetails.event_end),
                        allDay: x.eventDetails.event_fullday,
                        calendar: this.loadLabel(x.eventDetails.eventLabels),
                        imageUrl: x.eventDetails.eventOwnerDetails?.additionalinfo?.thumbnail?.url
                            ? x.eventDetails.eventOwnerDetails?.additionalinfo?.thumbnail?.url
                            : 'assets/images/user-empty.png',
                        extendedProps: {
                            eventurl: x.eventDetails.event_url,
                            location: x.eventDetails.event_location,
                            description: x.eventDetails.description,
                            addGuest: this.loadAddUsers(x.eventDetails.systemUsers),
                            event_type: x.eventDetails.event_type,
                            externalUsers: this.loadexternalUsers(x.eventDetails.externalUsers),
                            event_id: x.event_id,
                            owner: x.owner,
                            ownerinfo: x.eventDetails.eventOwnerDetails,
                            event_completed: x.eventDetails.event_completed,
                            outcome: x.eventDetails?.eventOutcome?.outcome,
                            notes: x.eventDetails?.eventOutcome?.notes
                        }
                    };
                });
                const { calendarOptions } = this;
                if (this.youthId) {
                    calendarOptions.headerToolbar = {
                        left: 'prev,next today myCustomButton',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                    };
                }
                else {
                    calendarOptions.headerToolbar = {
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                    };
                }
                calendarOptions.events = this.eventList;
            }
        });
    }
    addEvent() {
        this.isSubmit = true;
        const eventForm = this.eventForm.value;
        const createEvent = this.addInputRequest(eventForm);
        this.eventAdd(createEvent);
    }
    addInputRequest(eventForm) {
        return {
            title: eventForm.title ? eventForm.title : '',
            labels: this.arryFormate(eventForm.calendar),
            systemUsers: this.addGuestUsers(eventForm.addGuest),
            description: eventForm.description ? eventForm.description : '',
            event_start: eventForm.start ? this.datetimeUtc(eventForm.start) : '',
            event_end: eventForm.end ? this.datetimeUtc(eventForm.end) : '',
            event_fullday: eventForm.allDay ? eventForm.allDay : false,
            event_url: eventForm.eventurl ? eventForm.eventurl : '',
            event_location: eventForm.location ? eventForm.location : '',
            event_type: eventForm.event_type ? eventForm.event_type : '',
            externalUsers: this.externalUrl(eventForm.externalUsers)
        };
    }
    eventAdd(createEvent) {
        this._eventSchedulerService.createEvent(createEvent).subscribe((_res) => {
            if (_res) {
                this.eventForm.patchValue({ event_id: _res.data.id });
                if (this.dynamicYouthId) {
                    this.saveEventWithYouthid();
                }
                this.getEvent(this.eventForm.value.event_id, false);
                this.getEventList();
                this._alertService.success('Event created successfully!');
            }
        }, _error => {
            this._alertService.error('Unable to process your request.');
        });
    }
    updateEvent() {
        this.isSubmit = true;
        const eventForm = this.eventForm.value;
        const createEvent = this.updateEventInputRequest(eventForm);
        this.eventUpdate(createEvent);
    }
    updateEventInputRequest(eventFormData) {
        return {
            title: eventFormData.title ? eventFormData.title : '',
            labels: this.arryFormate(eventFormData.calendar),
            systemUsers: this.addGuestUsers(eventFormData.addGuest),
            description: eventFormData.description ? eventFormData.description : '',
            event_start: eventFormData.start ? this.datetimeUtc(eventFormData.start) : '',
            event_end: eventFormData.end ? this.datetimeUtc(eventFormData.end) : '',
            event_fullday: eventFormData.allDay ? eventFormData.allDay : false,
            event_url: eventFormData.eventurl ? eventFormData.eventurl : '',
            event_location: eventFormData.location ? eventFormData.location : '',
            event_type: eventFormData.event_type ? eventFormData.event_type : '',
            externalUsers: this.externalUrl(eventFormData.externalUsers)
        };
    }
    eventUpdate(createEvent) {
        this._eventSchedulerService.updateEvent(this.eventForm.value.event_id, createEvent).subscribe(_res => {
            if (this.eventForm.value.searchid && this.eventForm.value.eventyouthid) {
                this.upadateEventWithYouthid();
            }
            else if (this.eventForm.value.searchid && !this.eventForm.value.eventyouthid) {
                this.saveEventWithYouthid();
            }
            this._alertService.success('Event updated successfully!');
            this.getEventList();
        }, _error => {
            this._alertService.error('Unable to process your request.');
        });
    }
    deleteEvent() {
        if (this.eventForm.value.event_id) {
            this.closePopup();
            this._eventSchedulerService.deleteEvent(this.eventForm.value.event_id).subscribe(_res => {
                this._alertService.success('Event deleted successfully!');
                this.getEventList();
            }, _error => {
                this._alertService.error('Unable to process your request.');
            });
        }
        else {
            this._alertService.error('Unable to process your request.');
        }
    }
    handleCalendarToggle() {
        this.calendarVisible = !this.calendarVisible;
    }
    handleWeekendsToggle() {
        const { calendarOptions } = this;
        calendarOptions.weekends = !calendarOptions.weekends;
    }
    handleDateSelect(selectInfo) {
        if (this.startEndDatetimeUtc(new Date()) > this.startEndDatetimeUtc(selectInfo.start)) {
            this._alertService.warn('Past date is not allowed!');
            return;
        }
        this.selectedIndex = 0;
        this.closePopup();
        this.eventForm.reset();
        this.eventForm.patchValue({
            start: selectInfo.start,
            end: selectInfo.end,
            allDay: false,
            event_type: this.eventTypeList.length > 0 ? this.eventTypeList[0].id : [],
            searchid: this.dynamicYouthId ? this.dynamicYouthId : ''
        });
        this.isSubmit = false;
        this.labelName = 'Add Event';
        this.youthId = '';
        this.isCalendar = false;
        this.conflictAppointment = false;
        this.dateCheck(this.eventForm.value.start, this.eventForm.value.end);
    }
    handleEventClick(clickInfo) {
        this.selectedIndex = 0;
        this.closePopup();
        this.eventForm.reset();
        this.getEvent(clickInfo.event.extendedProps['event_id'], false);
    }
    handleEvents(_events) {
        // This is intentional
    }
    selectDateforListView(selectDate) {
        this.selectDatepickerValue = selectDate;
        const calendarApi = this.calendarComponent.getApi();
        calendarApi.view.type = 'timeGridDay';
        calendarApi.gotoDate(new Date(this.selectDatepickerValue));
    }
    toggleCheckboxAll(event) {
        this.checkAll = event.target.checked;
        if (this.checkAll) {
            this.selectLabel.forEach(res => {
                res.checked = true;
            });
            const { calendarOptions } = this;
            calendarOptions.events = this.eventList;
        }
        else {
            this.selectLabel.forEach(res => {
                res.checked = false;
            });
            const { calendarOptions } = this;
            calendarOptions.events = [];
        }
    }
    checkboxChange(event, id) {
        const index = this.selectLabel.findIndex(r => {
            if (r.label === id.label) {
                return id;
            }
        });
        this.selectLabel[index].checked = event.target.checked;
        this.reloadEvents();
        this.checkAll = this.allChecked();
    }
    reloadEvents() {
        const calendarsChecked = this.selectLabel.filter(calendar => {
            return calendar.checked === true;
        });
        const calendarRef = [];
        calendarsChecked.forEach((res) => {
            calendarRef.push(res.id);
        });
        const filteredCalendar = this.eventList.filter((x) => calendarRef.includes(x.calendar));
        const { calendarOptions } = this;
        calendarOptions.events = filteredCalendar;
    }
    allChecked() {
        return this.selectLabel.every(v => v.checked === true);
    }
    closePopup() {
        this.isOwner = true;
        this.eventForm.enable();
        this.isCalendar = true;
    }
    handleEventAdd(_selectInfo) {
        // This is intentional
    }
    handleEventChange(_selectInfo) {
        // This is intentional
    }
    handleEventRemove(_selectInfo) {
        // This is intentional
    }
    /**
     * Add Event Class
     *
     * @param s
     */
    eventClass(s) {
        const colorName = this.selectLabel.filter(x => x.id === s.event._def.extendedProps.calendar);
        return colorName.length > 0 ? `bg-light-${colorName[0].bullet}` : '';
    }
    startDate(_date) {
        this.dateCheck(this.eventForm.value.start, this.eventForm.value.end);
        // This is intentional
    }
    endDate(_date) {
        this.dateCheck(this.eventForm.value.start, this.eventForm.value.end);
        // This is intentional
    }
    arryFormate(form) {
        return form ? [form] : [];
    }
    externalUrl(form) {
        return form ? form.split(',').filter((x) => x !== '') : [];
    }
    addGuestUsers(form) {
        if (form && form.length) {
            const list = this.userList.filter((o1) => form.some((o2) => o1.id === o2));
            return list && list.length
                ? list.map((x) => {
                    return { user_id: x.id, user_email: x.email };
                })
                : [];
        }
        else {
            return [];
        }
    }
    onKeyUp($event) {
        if ($event.target.value) {
            const data = { youthid: $event.target.value };
            if (data.youthid.length > 0) {
                this.searchYouth(data.youthid, false);
            }
            else {
                this.referralAutoSuggestion = false;
            }
        }
    }
    searchYouth(youthid, status) {
        if (youthid) {
            this._eventSchedulerService
                .youthEventSearch(youthid)
                .pipe(debounceTime(2000))
                .subscribe((res) => {
                if (res.data) {
                    this.referralAutoList = res.data;
                    if (this.referralAutoList.length > 0) {
                        this.referralAutoSuggestion = true;
                    }
                    else {
                        this.referralAutoSuggestion = false;
                    }
                    if (status) {
                        this.selectReferral(this.referralAutoList[0]);
                    }
                }
            });
        }
    }
    selectReferral(_data) {
        this.dynamicYouthId =
            _data?.id + (_data?.first_name ? '-' + _data?.first_name + ',' : '') + (_data?.last_name ? _data?.last_name : '');
        this.referralAutoSuggestion = false;
        this.eventForm.patchValue({
            searchid: this.dynamicYouthId
        });
    }
    outSideAddEvent(status) {
        this.addholiday = status;
        this.isPublicHoliday = status;
        this.getLabels();
        const enddate = new Date();
        enddate.setDate(enddate.getDate() + 1);
        this.isSubmit = false;
        this.eventForm.reset();
        this.eventForm.patchValue({
            start: new Date(),
            end: enddate,
            allDay: false,
            event_type: this.eventTypeList.length > 0 ? this.eventTypeList[0].id : []
        });
        this.labelName = 'Add Event';
        this.conflictAppointment = false;
        this.isCalendar = false;
        this.youthId = '';
        this.dateCheck(this.eventForm.value.start, this.eventForm.value.end);
    }
    getAppointmentsForSpecificDate(selectInfo) {
        const calendarApi = selectInfo.view.calendar;
        calendarApi.gotoDate(new Date());
    }
    loadLabel(modal) {
        return modal.length > 0 ? modal[0].labelDetails.id : '';
    }
    getColor(key) {
        const colorcode = COLOR_LABELS.filter(x => x.key === key);
        return colorcode.length > 0 ? colorcode[0].bullet : 'primary';
    }
    loadReferral(modal) {
        return modal.length > 0 ? modal[0].referral_id : '';
    }
    loadAddUsers(modal) {
        return modal && modal.length > 0
            ? modal
                .filter((item) => item)
                .map((item) => {
                return item['user_id'];
            })
            : [];
    }
    loadexternalUsers(modal) {
        return modal && modal.length > 0 ? modal.map((x) => x.user_email).toString() : '';
    }
    makeString() {
        return ('card-inal-' +
            'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                const r = Math.floor((AppConstants.generateNumber() * 16) / AppConstants.generateNumber());
                const v = c == 'x' ? r : (r & 0x3) | 0x8;
                return v.toString(16);
            }));
    }
    getUrl() {
        const videoConfUrl = 'https://' + this.environment.videoConferenceDomain + '/' + this.makeString();
        this.eventForm.patchValue({
            eventurl: videoConfUrl
        });
    }
    openNewWindow() {
        if (this.eventForm.value.eventurl !== '') {
            window.open(this.eventForm.value.eventurl, '_blank');
        }
    }
    isDisabled() {
        return this.labelName === 'Edit Event' || this.labelName === 'View Event' ? true : null;
    }
    isEventOwner() {
        return this.isOwner ? true : false;
    }
    outComeCompleted() {
        if (this.eventForm.value.outcomeid && this.eventForm.value.event_completed) {
            return true;
        }
        return false;
    }
    viewEventType() {
        const email = this.eventTypeList.filter(x => x.id === this.eventForm.value.event_type);
        return email.length > 0 ? email[0].lookupvalue : '';
    }
    viewLable() {
        const value = this.selectLabel.filter(x => x.id === this.eventForm.value.calendar);
        return value.length > 0 ? value[0].label : '';
    }
    viewGuest() {
        if (this.eventForm.value.addGuest && this.eventForm.value.addGuest.length) {
            const list = this.userList.filter((o1) => this.eventForm.value.addGuest.some((o2) => o1.id === o2));
            return list && list.length ? list : [];
        }
        else {
            return [];
        }
    }
    viewExternalUsers() {
        if (this.eventForm.value.externalUsers && this.eventForm.value.externalUsers !== '') {
            const list = this.eventForm.value.externalUsers.split(',');
            return list && list.length ? list : [];
        }
        else {
            return [];
        }
    }
    virtualVadation() {
        this.CalendarValueAssign();
        if (this.eventForm.value.calendar !== 125) {
            if (!this.eventForm.valid || this.isVirtual || this.isFaceToFace) {
                return false;
            }
        }
        else if (this.eventForm.value.calendar === 125) {
            if (!this.eventForm.valid) {
                return false;
            }
        }
        return true;
    }
    eventTypeValidation() {
        if (this.eventTypeList.length > 0) {
            // eslint-disable-next-line radix
            const email = this.eventTypeList.filter(x => x.id === parseInt(this.eventForm.value.event_type));
            if (email.length && email[0].lookupkey === 'VIRTUAL' && !this.eventForm.value.eventurl) {
                this.isFaceToFace = false;
                this.isVirtual = true;
            }
            else if (email.length && email[0].lookupkey === 'FACE_TO_FACE' && !this.eventForm.value.location) {
                this.isVirtual = false;
                this.isFaceToFace = true;
            }
            else {
                this.isVirtual = false;
                this.isFaceToFace = false;
            }
        }
    }
    onchangeEventtype() {
        if (!this.eventForm.value.eventurl && !this.eventForm.value.location) {
            if (this.eventForm.value.location === '') {
                this.isVirtual = false;
                this.isFaceToFace = true;
            }
            else if (this.eventForm.value.eventurl === '') {
                this.isFaceToFace = false;
                this.isVirtual = true;
            }
            else {
                this.isVirtual = false;
                this.isFaceToFace = false;
            }
        }
    }
    validateUpload() {
        if (this.eventForm.value.event_id) {
            return true;
        }
        return false;
    }
    validateOutCome() {
        if (this.eventForm.value.event_completed && this.labelName === 'Edit Event') {
            return true;
        }
        return false;
    }
    completeEvent() {
        const completeEvent = {
            event_completed: true
        };
        this._eventSchedulerService.completeEvent(this.eventForm.value.event_id, completeEvent).subscribe((_res) => {
            this.eventForm.patchValue({ event_completed: true });
            this._alertService.success('Event completed successfully!');
            if (!this.isPublicHoliday) {
                this.getHolidayList();
            }
            setTimeout(() => {
                this.selectedIndex = 2;
            }, 500);
        }, (_error) => {
            this._alertService.error('Unable to process your request.');
        });
    }
    getEvent(event_id, status) {
        this._eventSchedulerService.getEventInfo(event_id).subscribe((_res) => {
            if (_res.data) {
                this.patchEventInfo(_res, status);
            }
        });
    }
    patchEventInfo(_res, status) {
        this.eventAttachments = _res.data.eventDetails?.eventAttachments;
        this.eventForm.patchValue({ outcomeid: _res.data.eventDetails?.eventOutcome?.id });
        if (!status) {
            this.eventForm.patchValue({
                start: new Date(_res.data.eventDetails?.event_start),
                end: new Date(_res.data.eventDetails?.event_end),
                allDay: _res.data.eventDetails?.event_fullday,
                id: _res.data.eventDetails?.id,
                title: _res.data.eventDetails?.title,
                calendar: this.loadLabel(_res.data.eventDetails?.eventLabels),
                location: _res.data.eventDetails?.event_location,
                description: _res.data.eventDetails?.description,
                addGuest: this.loadAddUsers(_res.data.eventDetails?.systemUsers),
                eventurl: _res.data.eventDetails?.event_url,
                event_type: _res.data.eventDetails?.event_type,
                externalUsers: this.loadexternalUsers(_res.data.eventDetails?.externalUsers),
                event_id: _res.data.event_id,
                event_completed: _res.data.eventDetails?.event_completed,
                outcome: _res.data.eventDetails?.eventOutcome?.outcome,
                notes: _res.data.eventDetails?.eventOutcome?.notes,
                searchid: _res.data.eventDetails?.eventYouth ? this.getYouthInfo(_res.data.eventDetails?.eventYouth) : '',
                eventyouthid: _res.data.eventDetails?.eventYouth?.id
            });
            this.miniDate = new Date(this.startEndDatetimeUtc(this.eventForm.value.start));
            this.youthId = this.eventForm.value.searchid;
            this.isSubmit = false;
            this.referralAutoSuggestion = false;
            this.isOwner = _res.data.owner ? _res.data.owner : false;
            this.ownerDetails = _res.data.eventDetails?.eventOwnerDetails ? _res.data.eventDetails?.eventOwnerDetails : false;
            if (this.isOwner) {
                this.isCalendar = false;
                this.labelName = 'Edit Event';
            }
            else {
                this.isCalendar = false;
                this.labelName = 'View Event';
            }
        }
    }
    getYouthInfo(eventYouth) {
        if (eventYouth) {
            return (eventYouth.youthDetails?.id +
                (eventYouth.youthDetails?.first_name ? '-' + eventYouth.youthDetails?.first_name + ',' : '') +
                (eventYouth.youthDetails?.last_name ? eventYouth.youthDetails?.last_name : ''));
        }
        return '';
    }
    submitOutCome() {
        const modalInput = {
            event_id: this.eventForm.value.event_id,
            outcome: this.eventForm.value.outcome,
            notes: this.eventForm.value.notes
        };
        if (this.eventForm.value.outcomeid) {
            this.updateOutCome(modalInput);
        }
        else {
            this.addOutCome(modalInput);
        }
    }
    addOutCome(modalInput) {
        this._eventSchedulerService.addEventOutcome(modalInput).subscribe((_res) => {
            this.getEventList();
            this._alertService.success('Updated outcome details successfully!');
        });
    }
    updateOutCome(modalInput) {
        this._eventSchedulerService
            .updateEventOutcome(this.eventForm.value.outcomeid, modalInput)
            .subscribe((_res) => {
            this.getEventList();
            this._alertService.success('Updated outcome details successfully!');
        });
    }
    getOutComeList() {
        this._eventSchedulerService.getLabels('CALENDAR_EVENT_OUTCOMES').subscribe((res) => {
            if (res.data) {
                this.outcomeList = res.data;
            }
        });
    }
    deleteAttachment(fileValue) {
        if (fileValue) {
            this._eventSchedulerService.deleteEventAttachment(fileValue.id).subscribe(_res => {
                this._alertService.success('Document deleted successfully!');
                this.getEvent(this.eventForm.value.event_id, true);
            });
        }
    }
    download(fileValue) {
        if (fileValue) {
            this._eventSchedulerService.getEventInfo(fileValue.event_id).subscribe((_res) => {
                if (_res.data) {
                    this.eventAttachments = _res.data.eventDetails?.eventAttachments;
                    const openFile = this.eventAttachments.filter(x => x.id === fileValue.id)[0];
                    window.open(openFile.url);
                }
            });
        }
    }
    handleFileInput(fileValue) {
        const target = fileValue.target;
        const file = target.files ? target.files[0] : '';
        this.uploadedFile = fileValue.target.files[0].name;
        const formData = new FormData();
        formData.append('file', this.uploadedFile);
        const objParams = {
            contentType: fileValue.target.files[0].type,
            fileName: this.eventForm.value.event_id + '/' + this.uploadedFile,
            type: 'event-scheduling'
        };
        this._eventSchedulerService.uploadKey(objParams).subscribe((res) => {
            this.uploadToS3(file, res.data);
        }, (_error) => {
            this._alertService.error('Unable to process your request.');
        });
    }
    uploadToS3(file, data) {
        this.urlPath = data;
        const form_Data = new FormData();
        form_Data.append('fileKey', file, this.uploadedFile);
        /**
         * Using code javaScript to get the file details.
         * In the encryption, formData not working. So sharing the file path using put method to the s3
         */
        const uploadAttachmentDetails = file;
        this._httpService.putUpload(this.urlPath, uploadAttachmentDetails, uploadAttachmentDetails.type).subscribe((_resp) => {
            this.attachType = uploadAttachmentDetails.type;
        }, (_error) => {
            this.uploadedFile = '';
            this.urlPath = '';
            if (_error.status == 0) {
                this._alertService.error('Unable to process your request.');
            }
        });
    }
    createAttachement() {
        const validate = this.attachementvalidation();
        if (validate) {
            const signedUrlPath = this.urlPath.split('?');
            const saveAttachedFile = {
                event_id: this.eventForm.value.event_id,
                title: this.uploadedForm.value.title,
                description: this.uploadedForm.value.description,
                category: this.uploadedForm.value.categoryDetail,
                subcategory: this.uploadedForm.value.subCategoryDetail,
                path: signedUrlPath[0],
                attachment_type: this.attachType
            };
            this.createEventAttachement(saveAttachedFile);
        }
    }
    createEventAttachement(saveAttachedFile) {
        this.clearUploadedFile();
        this._eventSchedulerService.createEventAttachement(saveAttachedFile).subscribe((_resp) => {
            this._alertService.success('Upload successfully!');
            this.getEvent(this.eventForm.value.event_id, true);
            this.uploadedForm.reset();
            this.uploadedForm.patchValue({
                categoryDetail: '',
                subCategoryDetail: ''
            });
            this.uploadedFile = '';
        }, (_err) => {
            this.uploadedFile = '';
            this.urlPath = '';
            if (_err.status == 0) {
                this._alertService.error('Unable to process your request.');
            }
        });
    }
    attachementvalidation() {
        if (!this.urlPath) {
            this._alertService.error('Please Upload the image.');
            return false;
        }
        if (!this.uploadedForm.value.title) {
            this._alertService.error('Please enter title');
            return false;
        }
        if (!this.uploadedForm.value.description) {
            this._alertService.error('Please enter description');
            return false;
        }
        if (!this.uploadedForm.value.categoryDetail) {
            this._alertService.error('Please select category');
            return false;
        }
        if (!this.uploadedForm.value.subCategoryDetail) {
            this._alertService.error('Please select subcategory');
            return false;
        }
        return true;
    }
    datetimeUtc(datetime) {
        return new DatePipe('en-US').transform(datetime, 'YYYY-MM-dd HH:mm:ss');
    }
    startEndDatetimeUtc(datetime) {
        return new DatePipe('en-US').transform(datetime, 'YYYY-MM-dd 00:00:00');
    }
    clearUploadedFile() {
        this.urlPath = '';
        this.uploadedFile = '';
    }
    subcategoryByCategory(categoryvalue) {
        const categoryId = categoryvalue.target.value;
        this.subCategoryList = this.LookupList.filter((x) => x.parentid == categoryId);
    }
    getCategoryLookup() {
        const categoryname = AppConstants.categoryname;
        this._eventSchedulerService.getCategoryLookup(categoryname).subscribe((res) => {
            this.LookupList = res.data;
            this.LookupList.map((item) => {
                if (!item.parentid) {
                    this.categoryList.push(item);
                }
                else {
                    this.subCategoryList.push(item);
                }
            });
        }, (error) => {
            console.log(error);
        });
    }
    dateCheck(from, to) {
        this.conflictAppointment = false;
        this.eventList.forEach((element) => {
            const startdate = this.datetimeUtc(element.start);
            const enddate = this.datetimeUtc(element.end);
            if ((startdate >= this.datetimeUtc(from) && startdate < this.datetimeUtc(to)) ||
                (enddate > this.datetimeUtc(from) && enddate <= this.datetimeUtc(to))) {
                if (this.eventForm.value.event_id !== element.extendedProps.event_id) {
                    this.conflictAppointment = true;
                }
            }
        });
    }
    conformAppointment() {
        if (this.labelName === 'Edit Event') {
            this.updateEvent();
        }
        else {
            this.addEvent();
        }
    }
    toVerifyEventUpdate() {
        this.CalendarValueAssign();
        if (!this.eventForm.value.calendar || this.eventForm.value.calendar == '') {
            this._alertService.error('Unable to process your request.');
        }
        else {
            const validation = this.virtualVadation();
            if (validation) {
                this.updateConflict();
            }
            else {
                this._alertService.error('Unable to process your request.');
            }
        }
    }
    updateConflict() {
        this.updateEvent();
    }
    toVerifyEventAdd() {
        this.CalendarValueAssign();
        if (!this.eventForm.value.calendar || this.eventForm.value.calendar == '') {
            this._alertService.error('Unable to process your request.');
        }
        else {
            const validation = this.virtualVadation();
            // if(this.eventForm.value.calendar !== 125){
            if (validation) {
                this.addConflict();
            }
            else {
                this._alertService.error('Unable to process your request.');
            }
        }
    }
    addConflict() {
        this.addEvent();
    }
    saveEventWithYouthid() {
        const inputRequest = {
            event_id: this.eventForm.value.event_id,
            youth_id: this.dynamicYouthId ? this.splitYouthID(this.dynamicYouthId) : ''
        };
        this._eventSchedulerService.createYouthEvent(inputRequest).subscribe((_res) => {
            // This is intentional
        }, (_error) => {
            this._alertService.error('Unable to process your request.');
        });
    }
    splitYouthID(youthInfo) {
        if (youthInfo) {
            const youth = youthInfo.split('-');
            return youth[0];
        }
        return '';
    }
    upadateEventWithYouthid() {
        const inputRequest = {
            event_id: this.eventForm.value.event_id,
            youth_id: this.eventForm.value.searchid ? this.splitYouthID(this.eventForm.value.searchid) : ''
        };
        this._eventSchedulerService.upadateEventWithYouthid(this.eventForm.value.eventyouthid, inputRequest).subscribe((_res) => {
            // This is intentional
        }, (_error) => {
            this._alertService.error('Unable to process your request.');
        });
    }
    getAttachementType(fileName) {
        if (fileName) {
            fileName = fileName.split('?')[0];
            const fileType = fileName.substring(fileName.lastIndexOf('/') + 1, fileName.length);
            const attachementType = fileType.split('.');
            return attachementType[1].toUpperCase();
        }
        return '';
    }
    navigateTo() {
        this._router.navigate([`/pages/appointments`]);
    }
    //   showDialog() {
    //     this.visible = true;
    // }
    getHolidayList() {
        const roleid = sessionStorage.getItem('role_id');
        console.log(roleid);
        if (roleid === '2') {
            this.AddButton = true;
        }
        else {
            this.AddButton = false;
        }
        this.visible = true;
        this._eventSchedulerService.getHolidayList().subscribe((res) => {
            console.log(res.data);
            const data = res.data;
            data.map(d => {
                d['event_start'] = moment(d.event_start).format('MMM-DD');
                d['event_end'] = moment(d.event_end).format('dddd');
                d['event_day'] = moment(d.event_start).format('DD');
                d['event_month'] = moment(d.event_start).format('MMM');
            });
            this.HolidayList = data;
        });
    }
    addEventGrid(status) {
        this.outSideAddEvent(status);
        this.conflictAppointment = false;
    }
    holidayLable() {
        // console.log(this.eventForm.value.calendar);
        if (this.eventForm.value.calendar === 125) {
            this.isPublicHoliday = false;
            this.conflictAppointment = false;
        }
        else {
            this.isPublicHoliday = true;
            this.conflictAppointment = false;
        }
    }
    CalendarValueAssign() {
        if (this.selectLabel.length === 1) {
            this.eventForm.value.calendar = 125;
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: EventsComponent, deps: [{ token: i1$1.FormBuilder }, { token: EventSchedulerService }, { token: AlertService }, { token: HttpService }, { token: i5.ActivatedRoute }, { token: i5.Router }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: EventsComponent, selector: "event-scheduler", viewQueries: [{ propertyName: "calendarComponent", first: true, predicate: ["calendar"], descendants: true }, { propertyName: "startDatePicker", first: true, predicate: ["startDatePicker"], descendants: true }, { propertyName: "endDatePicker", first: true, predicate: ["endDatePicker"], descendants: true }], ngImport: i0, template: "<app-alert></app-alert>\r\n<div class=\"schedul\">\r\n    <div class=\"schedul-sidebar\" *ngIf=\"isCalendar\">\r\n        <div class=\"schedul-sidebar-section mb-3 row\">\r\n            <div class=\"col-md-6 col-12 pr-1\">\r\n                <button type=\"button\" class=\"btn btn-primary addevent\" fieldKey=\"EVE_SCH_ADD_EVENT\"\r\n                    (click)=\"outSideAddEvent(true)\">\r\n                    Add Event\r\n                </button>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-12 pl-1\">\r\n                <button type=\"button\" class=\"btn btn-primary addevent\" (click)=\"getHolidayList()\">\r\n                    Holidays\r\n                </button>\r\n                <p-dialog header=\"Holidays List\" [(visible)]=\"visible\">\r\n                    <div class=\"holidays-list\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-12 mb-3 text-right\">\r\n                                <button type=\"button\" class=\"btn btn-primary\" title=\"Add\" (click)=\"addEventGrid(false)\"\r\n                                    *ngIf=\"AddButton\" pRipple>\r\n                                    Add\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-12 col-md-6 col-lg-6 mb-3 pr-md-1\" *ngFor=\"let item of HolidayList\">\r\n                                <div class=\"single-timeline-content d-flex wow fadeInLeft\"\r\n                                    style=\"visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;\">\r\n                                    <div class=\"timeline-date\">\r\n                                        <h5 class=\"mb-0 font-weight-bold\">{{item.event_day}}</h5>\r\n                                        <p class=\"mb-0\">{{item.event_month}}</p>\r\n                                    </div>\r\n                                    <div class=\"timeline-text\">\r\n                                        <h6>{{item.title}}</h6>\r\n                                        <p>{{item.event_end}}</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </p-dialog>\r\n            </div>\r\n        </div>\r\n        <div class=\"schedul-calendar-event\">\r\n            <p-calendar [(ngModel)]=\"selectDate\" [inline]=\"true\" [showWeek]=\"false\" fieldKey=\"EVE_SCH_SELECT_DATE\"\r\n                (ngModelChange)=\"selectDateforListView($event)\"></p-calendar>\r\n        </div>\r\n        <div class=\"card-body pb-0 event-filterlist\">\r\n            <h6 class=\"section-label mb-2\">\r\n                <span class=\"align-middle text-uppercase font-weight-600\">Filter</span>\r\n            </h6>\r\n            <div class=\"custom-control custom-checkbox mb-1\">\r\n                <input type=\"checkbox\" class=\"custom-control-input select-all\" fieldKey=\"EVE_SCH_SELECT_ALL\"\r\n                    id=\"select-all\" [checked]=\"checkAll\" (change)=\"toggleCheckboxAll($event)\" />\r\n                <label class=\"custom-control-label\" for=\"select-all\">View All</label>\r\n            </div>\r\n            <div class=\"calendar-events-filter\">\r\n                <div class=\"custom-control  custom-checkbox mb-1 custom-control-{{ calendar.bullet }}\"\r\n                    *ngFor=\"let calendar of selectLabel; let i = index\">\r\n                    <input type=\"checkbox\" fieldKey=\"EVE_SCH_CALANDER_EVENT\" (change)=\"checkboxChange($event, calendar)\"\r\n                        class=\"custom-control-input input-filter\" id=\"calendar-{{ i }}\" [checked]=\"calendar.checked\" />\r\n                    <label class=\"custom-control-label\" for=\"calendar-{{ i }}\">{{ calendar.label }}</label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"schedul-main\">\r\n        <ng-container *ngIf=\"isCalendar\">\r\n            <full-calendar *ngIf=\"calendarVisible\" #calendar [options]=\"calendarOptions\"></full-calendar>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!isCalendar && labelName !== 'View Event'\">\r\n            <div [formGroup]=\"eventForm\" id=\"event-create\">\r\n                <p-card styleClass=\"w-100 event-schedul\">\r\n                    <div class=\"strip_head toggleleft mb-3 px-3 py-2 bg-primary\">\r\n                        <span class=\"report_head font-weight-bold text-white\">{{ addholiday ? labelName : 'Holiday\r\n                            Event' }}</span>\r\n                    </div>\r\n                    <!-- <div class=\"col-lg-3 col-sm-6 col-md-6 col-12 mb-2\">\r\n            <label aria-labelledby=\"youthid\" for=\"client-name4\" class=\"intake-form-labels text-primary\">Youth ID</label>\r\n            <div class=\"p-inputgroup input-group\">\r\n              <span class=\"p-inputgroup-addon\"><em class=\"pi pi-search\"></em></span>\r\n              <input\r\n                id=\"client-name4\"\r\n                class=\"form-control\"\r\n                type=\"text\"\r\n                maxlength=\"20\"\r\n                formControlName=\"searchid\"\r\n                fieldKey=\"EVE_SCH_YOUTH_ID\"\r\n                placeholder=\"Search Youth Id\"\r\n                (keyup)=\"onKeyUp($event)\"\r\n                autocomplete=\"off\"\r\n                pInputText />\r\n              <ul *ngIf=\"referralAutoSuggestion\" class=\"autosuggest\">\r\n                <li *ngFor=\"let item of referralAutoList\" (click)=\"selectReferral(item)\">\r\n                  {{ item?.id }}\r\n                  {{\r\n                    (item?.first_name ? '-' + item?.first_name + ',' : '') + (item?.last_name ? item?.last_name : '')\r\n                  }}\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div> -->\r\n                    <p-tabView styleClass=\"tabview-custom\" [activeIndex]=\"selectedIndex\"\r\n                        (onChange)=\"selectedIndex = $event.index\">\r\n                        <p-tabPanel>\r\n                            <ng-template pTemplate=\"header\">\r\n                                <em class=\"pi pi-calendar mr-2\"></em>\r\n                                <span>{{ addholiday ? 'Event Details' : 'Holiday Details' }}</span>\r\n                            </ng-template>\r\n                            <div class=\"messagecont\">\r\n                                <div class=\"p-field p-col mb-0\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-lg-3 col-sm-6 col-md-6 col-12 mb-3\">\r\n                                            <label aria-describedby=\"eventTitle\" for=\"eventTitle\"\r\n                                                class=\"intake-form-labels text-primary\">Title <span\r\n                                                    class=\"text-danger\">*</span></label>\r\n                                            <div class=\"col p-0\">\r\n                                                <input id=\"eventTitle\" autofocus class=\"form-control\" type=\"text\"\r\n                                                    formControlName=\"title\" fieldKey=\"EVE_SCH_TITLE\" autocomplete=\"off\"\r\n                                                    placeholder=\"Enter Title\" pInputText />\r\n                                                <span *ngIf=\"isSubmit && eventFormControl['title'].invalid\"\r\n                                                    class=\"invalid-form\">\r\n                                                    <small class=\"form-text text-danger\"\r\n                                                        *ngIf=\"eventFormControl['title'].hasError('required')\">Title is\r\n                                                        required!</small>\r\n                                                </span>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-lg-3 col-sm-6 col-md-6 col-12 mb-3\">\r\n                                            <label for=\"eventLabel\" class=\"intake-form-labels text-primary\">Label<span\r\n                                                    class=\"text-danger\">*</span></label>\r\n                                            <div class=\"col p-0\">\r\n                                                <p-dropdown *ngIf=\"addholiday === true\" styleClass=\"d-flex eventLable\"\r\n                                                    [options]=\"selectLabel\" placeholder=\"Select Label\"\r\n                                                    formControlName=\"calendar\" fieldKey=\"EVE_SCH_LABEL\"\r\n                                                    (onChange)=\"holidayLable()\" optionLabel=\"label\" id=\"eventLabel\"\r\n                                                    optionValue=\"id\">\r\n                                                    <ng-template let-country pTemplate=\"item\">\r\n                                                        <div>\r\n                                                            <span\r\n                                                                class=\"bullet bullet-sm mr-50 bullet-{{ country.bullet }}\"></span>\r\n                                                            {{ country.label }}\r\n                                                        </div>\r\n                                                    </ng-template>\r\n                                                    <!-- [disabled]=\"true\" placeholder=\"Select Label\" -->\r\n                                                </p-dropdown>\r\n                                                <!-- <div *ngIf=\"addholiday === false\">\r\n                                                <input value=\"Testholiday\" styleClass=\"d-flex eventLable\" type=\"text\"\r\n                                                formControlName=\"calendar\"  optionLabel=\"label\" id=\"eventLabel\" optionValue=\"id\" fieldKey=\"EVE_SCH_LABEL\" (onChange)=\"holidayLable()\"\r\n                                                     pInputText/>\r\n                                                    <ng-template let-country pTemplate=\"item\">\r\n                                                      <div>\r\n                                                          <span\r\n                                                              class=\"bullet bullet-sm mr-50 bullet-{{ country.bullet }}\"></span>\r\n                                                          {{ country.label }}\r\n                                                      </div>\r\n                                                  </ng-template>\r\n                                                    </div> -->\r\n                                                <p-dropdown *ngIf=\"addholiday === false\" styleClass=\"d-flex eventLable\"\r\n                                                    [disabled]=\"true\" [options]=\"selectLabel\" formControlName=\"calendar\"\r\n                                                    fieldKey=\"EVE_SCH_LABEL\" (onChange)=\"holidayLable()\"\r\n                                                    optionLabel=\"label\" id=\"eventLabel\" optionValue=\"id\">\r\n                                                    <ng-template let-country pTemplate=\"item\">\r\n                                                        <div>\r\n                                                            <span\r\n                                                                class=\"bullet bullet-sm mr-50 bullet-{{ country.bullet }}\"></span>\r\n                                                            {{ country.label }}\r\n                                                        </div>\r\n                                                    </ng-template>\r\n                                                </p-dropdown>\r\n                                                <span *ngIf=\"isSubmit && eventFormControl['calendar'].invalid\"\r\n                                                    class=\"invalid-form\">\r\n                                                    <small class=\"form-text text-danger\"\r\n                                                        *ngIf=\"eventFormControl['calendar'].hasError('required')\">Label\r\n                                                        is required!</small>\r\n                                                </span>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-lg-3 col-sm-6 col-md-6 col-12 mb-3\">\r\n                                            <label for=\"event-start\" class=\"intake-form-labels text-primary\"> Start Date\r\n                                                & Time </label>\r\n                                            <div class=\"col p-0\">\r\n                                                <p-calendar id=\"cdob\" iconAriaLabel=\"startDate\" [minDate]=\"miniDate\"\r\n                                                    [showIcon]=\"true\" [stepMinute]=\"5\" [showTime]=\"true\"\r\n                                                    fieldKey=\"EVE_SCH_START_DATE_TIME\" dateFormat=\"MM dd, yy\"\r\n                                                    formControlName=\"start\" (onSelect)=\"startDate($event)\"\r\n                                                    hourFormat=\"12\" #startDatePicker inputId=\"event-start\">\r\n                                                </p-calendar>\r\n                                                <span *ngIf=\"\r\n                            eventForm.get('start').invalid &&\r\n                            (eventForm.get('start').dirty || eventForm.get('start').touched)\r\n                          \" class=\"invalid-form\">\r\n                                                    <small class=\"form-text text-danger\"\r\n                                                        *ngIf=\"eventFormControl['start'].hasError('required')\">Start\r\n                                                        Date is required!</small>\r\n                                                </span>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-lg-3 col-sm-6 col-md-6 col-12 mb-3\">\r\n                                            <label for=\"event-end\" class=\"intake-form-labels text-primary\"> End Date &\r\n                                                Time </label>\r\n                                            <div class=\"col p-0\">\r\n                                                <p-calendar id=\"cdob\" iconAriaLabel=\"endDate\" [minDate]=\"miniDate\"\r\n                                                    [showIcon]=\"true\" [stepMinute]=\"5\" [showTime]=\"true\"\r\n                                                    fieldKey=\"EVE_SCH_END_DATE_TIME\" dateFormat=\"MM dd, yy\"\r\n                                                    formControlName=\"end\" (onSelect)=\"endDate($event)\" hourFormat=\"12\"\r\n                                                    #endDatePicker inputId=\"event-end\"></p-calendar>\r\n                                                <div>\r\n                                                    <span class=\"invalid-form\">\r\n                                                        <small class=\"form-text text-danger\"\r\n                                                            *ngIf=\"eventFormControl['end'].hasError('required')\">End\r\n                                                            Date is required!</small>\r\n                                                        <small class=\"form-text text-danger\"\r\n                                                            *ngIf=\"eventForm.hasError('notValid')\">Invalid date\r\n                                                            range!</small>\r\n                                                        <small class=\"form-text text-danger\"\r\n                                                            *ngIf=\"conflictAppointment\">This appointment conflicts with\r\n                                                            another one on your calendar, Are you sure want to\r\n                                                            Proceed!</small>\r\n                                                    </span>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-lg-3 col-sm-6 col-md-6 col-12 mb-3\">\r\n                                            <label class=\"intake-form-labels text-primary d-lg-block d-none\">All\r\n                                                Day</label>\r\n                                            <div class=\"switch d-inline-flex\">\r\n                                                <input type=\"checkbox\" id=\"toggleAll\" formControlName=\"allDay\"\r\n                                                    name=\"allDay\" fieldKey=\"EVE_SCH_ALL_DAY\" />\r\n                                                <label for=\"toggleAll\" class=\"mb-0\"></label>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <ng-container *ngIf=\"isPublicHoliday\">\r\n                                            <div class=\"col-lg-3 col-sm-6 col-md-6 col-12 mb-3\">\r\n                                                <label class=\"intake-form-labels text-primary\"> Event Type </label>\r\n                                                <div class=\"col p-0\">\r\n                                                    <div class=\"d-flex\">\r\n                                                        <div class=\"p-field-radiobutton\"\r\n                                                            *ngFor=\"let typevalue of eventTypeList; let i = index\">\r\n                                                            <p-radioButton name=\"event_type\"\r\n                                                                fieldKey=\"EVE_SCH_EVENT_TYPE\" value=\"{{ typevalue.id }}\"\r\n                                                                formControlName=\"event_type\"\r\n                                                                inputId=\"event_type{{ i }}\"></p-radioButton>\r\n                                                            <label for=\"event_type{{ i }}\"\r\n                                                                class=\"referral-form-labels mb-0\">{{\r\n                                                                typevalue.lookupvalue\r\n                                                                }}</label>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-lg-3 col-sm-12 col-md-12 col-12 mb-3\">\r\n                                                <label for=\"eventUrl\" class=\"intake-form-labels text-primary\">\r\n                                                    Event URL\r\n                                                    <span\r\n                                                        *ngIf=\"labelName !== 'Edit Event' && this.labelName !== 'View Event'\">\r\n                                                        <em class=\"pi pi-info-circle\"\r\n                                                            pTooltip=\"Click to Generate Jisti Url\" tooltipPosition=\"top\"\r\n                                                            (click)=\"getUrl()\"></em>\r\n                                                    </span>\r\n                                                    <span\r\n                                                        *ngIf=\"labelName === 'Edit Event' || this.labelName === 'View Event'\">\r\n                                                        <em class=\"pi pi-external-link ml-1 text-primary font-weight-600\"\r\n                                                            pTooltip=\"In New Window\" tooltipPosition=\"top\"\r\n                                                            (click)=\"openNewWindow()\"\r\n                                                            style=\"font-size: 10px; cursor: pointer\"></em>\r\n                                                    </span>\r\n                                                </label>\r\n                                                <div class=\"col p-0\">\r\n                                                    <input type=\"text\" id=\"eventUrl\" class=\"form-control\"\r\n                                                        formControlName=\"eventurl\" autocomplete=\"off\"\r\n                                                        fieldKey=\"EVE_SCH_EVENT_URL\" placeholder=\"Enter Event URL\"\r\n                                                        (input)=\"eventTypeValidation()\" pInputText />\r\n\r\n                                                    <span class=\"invalid-form\">\r\n                                                        <small class=\"form-text text-danger\"\r\n                                                            *ngIf=\"eventForm.get('eventurl') && eventFormControl['eventurl']!.errors?.['pattern']\">URL\r\n                                                            is not valid!</small>\r\n                                                        <small class=\"form-text text-danger\" *ngIf=\"isVirtual\">URL is\r\n                                                            required! </small>\r\n                                                    </span>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-lg-3 col-sm-6 col-md-6 col-12 mb-3\">\r\n                                                <label for=\"eventLocation\" class=\"intake-form-labels text-primary\">\r\n                                                    Location </label>\r\n                                                <div class=\"col p-0\">\r\n                                                    <input id=\"eventLocation\" class=\"form-control\" type=\"text\"\r\n                                                        formControlName=\"location\" fieldKey=\"EVE_SCH_LOCATION\"\r\n                                                        autocomplete=\"off\" placeholder=\"Enter Location\"\r\n                                                        (input)=\"eventTypeValidation()\" pInputText />\r\n                                                    <span class=\"invalid-form\" *ngIf=\"eventForm.get('location')\">\r\n                                                        <small class=\"form-text text-danger\"\r\n                                                            *ngIf=\"isFaceToFace\">Location is required!</small>\r\n                                                    </span>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-lg-6 col-sm-6 col-md-6 col-12 mb-3\">\r\n                                                <label for=\"eventGuest\" class=\"intake-form-labels text-primary\"> Add\r\n                                                    Guest </label>\r\n                                                <div class=\"col p-0\">\r\n                                                    <p-multiSelect [options]=\"userList\" id=\"eventGuest\"\r\n                                                        ariaLabelledBy=\"eventGuest\" display=\"chip\"\r\n                                                        formControlName=\"addGuest\" fieldKey=\"EVE_SCH_ADD_GUEST\"\r\n                                                        defaultLabel=\"Select Guest\" ariaFilterLabel=\"selectGuest\"\r\n                                                        optionLabel=\"firstname\" optionValue=\"id\"\r\n                                                        styleClass=\"form-control eventmultiguest\"\r\n                                                        [virtualScroll]=\"true\">\r\n                                                        <ng-template let-guest pTemplate=\"guest\">\r\n                                                            <div class=\"media align-items-center\">\r\n                                                                <img class=\"d-block rounded-circle mr-50\"\r\n                                                                    src=\"assets/images/user-empty.png\" height=\"26\"\r\n                                                                    width=\"26\" [alt]=\"guest.firstname\" />\r\n                                                                <div class=\"media-body\">\r\n                                                                    <p class=\"mb-0\">\r\n                                                                        {{ guest?.firstname }} {{ guest?.lastname\r\n                                                                        }} {{ guest?.email ? '(' + guest?.email + ')' :\r\n                                                                        '' }}\r\n                                                                    </p>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </ng-template>\r\n                                                    </p-multiSelect>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-lg-6 col-sm-12 col-md-12 col-12 mb-3\">\r\n                                                <label for=\"externalEmail\" class=\"intake-form-labels text-primary\">\r\n                                                    External Email </label>\r\n                                                <div class=\"col p-0\">\r\n                                                    <input id=\"externalEmail\" class=\"form-control\" type=\"text\"\r\n                                                        fieldKey=\"EVE_SCH_EXTERNAL_EMAIL\" autocomplete=\"off\"\r\n                                                        formControlName=\"externalUsers\"\r\n                                                        placeholder=\"External Email Address\" pInputText />\r\n                                                    <span class=\"invalid-form\" *ngIf=\"eventForm.get('externalUsers')\">\r\n                                                        <small class=\"form-text text-danger\"\r\n                                                            *ngIf=\"eventFormControl['externalUsers'].hasError('externalUrl')\">\r\n                                                            Invalid Email Id. Use comma (,) as separator for adding\r\n                                                            multiple email ids.</small>\r\n                                                    </span>\r\n                                                </div>\r\n                                            </div>\r\n                                        </ng-container>\r\n\r\n                                        <div class=\"col-md-4 col-12\"></div>\r\n\r\n                                        <div class=\"col-md-12\">\r\n                                            <label for=\"eventGuest\" class=\"intake-form-labels text-primary\">\r\n                                                Description\r\n                                            </label>\r\n                                            <div class=\"col p-0\">\r\n                                                <textarea class=\"form-control\" style=\"height: 80px\"\r\n                                                    fieldKey=\"EVE_SCH_DESCRYPTION\" formControlName=\"description\"\r\n                                                    placeholder=\"Enter Description\" pInputText>\r\n                        </textarea>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"p-field p-col mb-0 mt-2 d-flex flex-row-reverse text-right\"\r\n                                *ngIf=\"isEventOwner()\">\r\n                                <button title=\"Complete\" *ngIf=\"labelName === 'Edit Event'\"\r\n                                    class=\"btn text-white btn-primary px-4\" (click)=\"completeEvent()\"\r\n                                    fieldKey=\"EVE_SCH_COMPLETE\" [disabled]=\"validateOutCome()\">\r\n                                    Complete\r\n                                </button>\r\n                                <button title=\"Update\" *ngIf=\"labelName === 'Edit Event'\"\r\n                                    class=\"btn text-white btn-primary px-4 mr-2\" fieldKey=\"EVE_SCH_UPDATE\"\r\n                                    [disabled]=\"validateOutCome()\" (click)=\"toVerifyEventUpdate()\">\r\n                                    Update\r\n                                </button>\r\n                                <button title=\"Save\" *ngIf=\"labelName !== 'Edit Event'\"\r\n                                    class=\"btn text-white btn-primary px-4 mr-2\" fieldKey=\"EVE_SCH_SAVE\"\r\n                                    (click)=\"toVerifyEventAdd()\">\r\n                                    Save\r\n                                </button>\r\n                                <button title=\"Delete\" *ngIf=\"labelName === 'Edit Event'\"\r\n                                    class=\"btn text-white btn-primary px-4 mr-2\" fieldKey=\"EVE_SCH_DELETE\"\r\n                                    [disabled]=\"validateOutCome()\" (click)=\"deleteEvent()\">\r\n                                    Delete\r\n                                </button>\r\n                                <button title=\"Back\" fieldKey=\"EVE_SCH_BACK\"\r\n                                    class=\"btn btn-white border border-1 text-primary btn-cancel mr-2\"\r\n                                    (click)=\"closePopup()\">\r\n                                    Back\r\n                                </button>\r\n                            </div>\r\n                        </p-tabPanel>\r\n                        <ng-container *ngIf=\"isPublicHoliday\">\r\n                            <p-tabPanel header=\"Header II\" *ngIf=\"validateUpload()\">\r\n                                <ng-template pTemplate=\"header\">\r\n                                    <em class=\"pi pi-upload mr-2\"></em>\r\n                                    <span>Upload Documents</span>\r\n                                </ng-template>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-lg-4 col-sm-4 col-md-12 col-12 my-3 text-center\">\r\n                                        <div class=\"upload-box\">\r\n                                            <input type=\"file\" id=\"file\"\r\n                                                fieldKey=\"EVE_SCH_UPLOADED_DOCUMENTS_BROWSE_FILE\"\r\n                                                accept=\".pdf, .jpg, .jpeg, .png, .doc, .docx, .xls, .xlsx, .csv, .WEBM, .MPG, .MP2, .MPEG, .MPE, .MPV, .OGG, .MP4, .M4P, .M4V, .AVI, .WMV, .MOV, .FLV\"\r\n                                                (change)=\"handleFileInput($event)\"\r\n                                                style=\"visibility: hidden; display: none\"\r\n                                                (click)=\"$event?.target['value'] = null\" />\r\n                                            <span class=\"material-icon material-symbols-outlined\">cloud_upload</span>\r\n                                            <img src=\"../../../../../assets/images/upload_blue.png\" alt=\"Upload\" />\r\n                                            <div class=\"drobordrag\">\r\n                                                Drop your here, or\r\n                                                <label for=\"file\" class=\"text-primary\">browse</label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"col-lg-8 col-sm-8 col-md-12 col-12 px-4 uploadpartdisplay\">\r\n                                        <form [formGroup]=\"uploadedForm\">\r\n                                            <ng-container>\r\n                                                <ul class=\"uploaded-files mb-2\">\r\n                                                    <li>\r\n                                                        <em class=\"fa fa-file\" aria-hidden=\"true\"></em>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <label>{{ uploadedFile }}</label>\r\n                                                        <hr class=\"p-0 m-0\" />\r\n                                                    </li>\r\n                                                    <li class=\"remove text-right\" (click)=\"clearUploadedFile()\">\r\n                                                        <img src=\"../../../../../assets/images/delete.svg\"\r\n                                                            alt=\"delete\" />\r\n                                                    </li>\r\n                                                </ul>\r\n                                            </ng-container>\r\n\r\n                                            <div class=\"col-md-12 px-0 mt-4\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 col-12 mb-md-0 mb-2\">\r\n                                                        <input type=\"text\" class=\"form-control\" formControlName=\"title\"\r\n                                                            fieldKey=\"EVE_SCH_UPLOADED_DOCUMENTS_TITLE\"\r\n                                                            placeholder=\"Title\" />\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 col-12 mb-md-0 mb-2\">\r\n                                                        <input type=\"text\" class=\"form-control\"\r\n                                                            formControlName=\"description\"\r\n                                                            fieldKey=\"EVE_SCH_UPLOADED_DOCUMENTS_DESCRYPTION\"\r\n                                                            placeholder=\"Description\" />\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row mt-md-2 mt-0\">\r\n                                                    <div class=\"col-md-6 col-12 mb-md-0 mb-2\">\r\n                                                        <select id=\"categoryDetail\" class=\"form-control\"\r\n                                                            formControlName=\"categoryDetail\"\r\n                                                            aria-labelledby=\"categoryDetail\"\r\n                                                            fieldKey=\"EVE_SCH_UPLOADED_DOCUMENTS_UPLOADED_DATE\"\r\n                                                            (change)=\"subcategoryByCategory($event)\">\r\n                                                            <option value=\"\">Select</option>\r\n                                                            <option *ngFor=\"let clist of categoryList\"\r\n                                                                [value]=\"clist?.id\">\r\n                                                                {{ clist?.lookupvalue }}\r\n                                                            </option>\r\n                                                        </select>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 col-12 mb-md-0 mb-2\">\r\n                                                        <select id=\"subCategoryDetail\"\r\n                                                            aria-labelledby=\"subCategoryDetail\" class=\"form-control\"\r\n                                                            formControlName=\"subCategoryDetail\"\r\n                                                            fieldKey=\"EVE_SCH_UPLOADED_DOCUMENTS_UPLOAD_BY\">\r\n                                                            <option value=\"\">Select</option>\r\n                                                            <option *ngFor=\"let sclist of subCategoryList\"\r\n                                                                [value]=\"sclist?.id\">\r\n                                                                {{ sclist?.lookupvalue }}\r\n                                                            </option>\r\n                                                        </select>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row mt-md-2 mt-0\">\r\n                                                    <div class=\"col mb-md-0 mb-2\">\r\n                                                        <label for=\"label\" class=\"labelcss\">Uploaded Date</label> <br />\r\n                                                        <span>{{ uploadedDate | date : 'dd-MMM-yyyy' }}</span>\r\n                                                    </div>\r\n                                                    <div class=\"col mb-md-0 mb-2\">\r\n                                                        <label for=\"label\" class=\"labelcss\">Uploaded By</label><br />\r\n                                                        <span class=\"currentUsername\">{{ uploadedPerson }}</span>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </form>\r\n                                        <div class=\"col-12 d-flex flex-row-reverse pr-2 mt-3\">\r\n                                            <button\r\n                                                class=\"btn btn-primary d-flex align-items-center justify-content-center\"\r\n                                                [disabled]=\"outComeCompleted()\" (click)=\"createAttachement()\">\r\n                                                <em class=\"pi pi-plus-circle mr-2\"></em>\r\n                                                ADD FILES\r\n                                            </button>\r\n                                            <button class=\"mr-2 btn btn-white border border-1 text-primary btn-cancel\"\r\n                                                fieldKey=\"EVE_SCH_UPLOADED_DOCUMENTS_BACK\" (click)=\"closePopup()\">\r\n                                                Back\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <ng-container *ngIf=\"eventAttachments.length\">\r\n                                    <div class=\"table-responsive\">\r\n                                        <table id=\"eventAttachments\" aria-describedby=\"eventAttachments\"\r\n                                            class=\"table table-borderless mb-0\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th scope=\"col\" class=\"text-primary\">Title</th>\r\n                                                    <th scope=\"col\" class=\"text-primary\">Attachment Type</th>\r\n                                                    <th scope=\"col\" class=\"text-primary\">Category</th>\r\n                                                    <th scope=\"col\" class=\"text-primary\">Description</th>\r\n                                                    <th scope=\"col\" class=\"text-primary\">Download</th>\r\n                                                    <th scope=\"col\" class=\"text-primary\">Uploaded By</th>\r\n                                                    <th scope=\"col\" class=\"text-primary\">Uploaded Date</th>\r\n                                                    <th scope=\"col\" class=\"text-primary\">Action</th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr *ngFor=\"let file of eventAttachments\">\r\n                                                    <td>{{ file?.title }}</td>\r\n                                                    <td>{{ getAttachementType(file?.path) }}</td>\r\n                                                    <td>{{ file?.categoryDetails?.value }}</td>\r\n                                                    <td>{{ file?.description }}</td>\r\n                                                    <td>\r\n                                                        <a href=\"javascript:void(0)\" (click)=\"download(file)\">\r\n                                                            <em class=\"fa fa-download\" aria-hidden=\"true\"></em>\r\n                                                        </a>\r\n                                                    </td>\r\n                                                    <td>{{ file?.createdUser?.username }}</td>\r\n                                                    <td>{{ file?.updated ? (file?.updated | date : 'dd-MMM-yyyy hh:mm:ss\r\n                                                        a') : '' }}</td>\r\n                                                    <td>\r\n                                                        <a href=\"javascript:void(0)\" (click)=\"deleteAttachment(file)\">\r\n                                                            <img src=\"../../../../../assets/images/delete.svg\"\r\n                                                                alt=\"delete\" />\r\n                                                        </a>\r\n                                                    </td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                    </div>\r\n                                </ng-container>\r\n                            </p-tabPanel>\r\n                            <p-tabPanel header=\"Header III\" *ngIf=\"validateOutCome()\">\r\n                                <ng-template pTemplate=\"header\">\r\n                                    <em class=\"pi pi-cloud-upload mr-2\"></em>\r\n                                    <span>Outcome</span>\r\n                                </ng-template>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-3 mb-3\">\r\n                                        <label for=\"outcome\" aria-describedby=\"outcome\"\r\n                                            class=\"intake-form-labels text-primary\">Outcome<span\r\n                                                class=\"text-danger\">*</span></label>\r\n                                        <div class=\"col p-0\">\r\n                                            <p-dropdown styleClass=\"d-flex\" placeholder=\"Select Outcome\"\r\n                                                Inputid=\"outcome\" [options]=\"outcomeList\" formControlName=\"outcome\"\r\n                                                optionLabel=\"lookupvalue\" id=\"outcome\" optionValue=\"id\">\r\n                                            </p-dropdown>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12 mb-3\">\r\n                                        <label for=\"event-label\" aria-describedby=\"notes\"\r\n                                            class=\"intake-form-labels text-primary\">Notes<span\r\n                                                class=\"text-danger\">*</span></label>\r\n                                        <div class=\"col p-0\">\r\n                                            <p-editor id=\"notes\" [style]=\"{ height: '120px' }\"\r\n                                                formControlName=\"notes\"></p-editor>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-12 d-flex flex-row-reverse pr-2 mt-3\" *ngIf=\"isEventOwner()\">\r\n                                        <button class=\"btn text-white btn-primary px-4\"\r\n                                            *ngIf=\"labelName === 'Edit Event'\" [disabled]=\"outComeCompleted()\"\r\n                                            (click)=\"submitOutCome()\">\r\n                                            Submit\r\n                                        </button>\r\n                                        <button class=\"mr-2 btn btn-white border border-1 text-primary btn-cancel\"\r\n                                            (click)=\"closePopup()\">\r\n                                            Back\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </p-tabPanel>\r\n                        </ng-container>\r\n                    </p-tabView>\r\n                </p-card>\r\n            </div>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!isCalendar && labelName === 'View Event'\">\r\n            <div id=\"event-create\">\r\n                <p-card styleClass=\"w-100 event-schedul\">\r\n                    <div class=\"strip_head toggleleft mb-3 px-3 py-2 bg-primary\">\r\n                        <span class=\"report_head font-weight-bold text-white\">{{ labelName }}</span>\r\n                    </div>\r\n\r\n                    <div class=\"messagecont\">\r\n                        <div class=\"p-field p-col px-3 mb-0\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-12 mb-3\">\r\n                                    <label class=\"intake-form-labels text-muted font-weight-normal mb-0\">Title</label>\r\n                                    <div class=\"col-12 p-0\">\r\n                                        <h5 class=\"mb-0 text-primary event-title font-weight-600\">\r\n                                            {{ eventForm.value.title ? eventForm.value.title : 'NA' }}\r\n                                        </h5>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"col-md-3 col-12 mb-3\">\r\n                                    <label class=\"intake-form-labels text-muted font-weight-normal mb-0\">Label</label>\r\n                                    <div class=\"col-12 p-0 font-weight-600\">{{ viewLable() }}</div>\r\n                                </div>\r\n\r\n                                <div class=\"col-md-3 col-12 mb-3\">\r\n                                    <label class=\"intake-form-labels text-muted font-weight-normal mb-0\"> Start Date &\r\n                                        Time </label>\r\n                                    <div class=\"col-12 p-0 font-weight-600\">\r\n                                        {{ eventForm.value.start | date : 'MMM dd, yyyy h:mm:ss a' }}\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"col-md-3 col-12 mb-3\">\r\n                                    <label class=\"intake-form-labels text-muted font-weight-normal mb-0\"> End Date &\r\n                                        Time </label>\r\n                                    <div class=\"col-12 p-0 font-weight-600\">\r\n                                        {{ eventForm.value.end | date : 'MMM dd, yyyy h:mm:ss a' }}\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"col-md-3 col-12 mb-3\">\r\n                                    <label class=\"intake-form-labels text-muted font-weight-normal mb-0\"> Event Type\r\n                                    </label>\r\n                                    <div class=\"col-12 p-0 font-weight-600\">{{ viewEventType() }}</div>\r\n                                </div>\r\n\r\n                                <div class=\"col-md-3 col-12 mb-3\">\r\n                                    <label class=\"intake-form-labels text-muted font-weight-normal mb-0\"> Event URL\r\n                                    </label>\r\n                                    <div class=\"col-12 p-0 text-break\">\r\n                                        <a href=\"{{ eventForm.value.eventurl }}\" rel=\"noopener\" target=\"_blank\">{{\r\n                                            eventForm.value.eventurl ? eventForm.value.eventurl : 'NA'\r\n                                            }}</a>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"col-md-3 col-12 mb-3\">\r\n                                    <label class=\"intake-form-labels text-muted font-weight-normal mb-0\"> Location\r\n                                    </label>\r\n                                    <div class=\"col-12 p-0 font-weight-600\">\r\n                                        {{ eventForm.value.location ? eventForm.value.location : 'NA' }}\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"col-md-3 col-12 mb-3\">\r\n                                    <label class=\"intake-form-labels text-muted font-weight-normal mb-0\"> Add Guest\r\n                                    </label>\r\n                                    <div class=\"col-12 p-0 font-weight-600\" *ngFor=\"let item of viewGuest()\">\r\n                                        {{ item.email ? item.email : 'NA' }} {{ '(' + item.firstname + ' ' +\r\n                                        item.lastname + ')' }}\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"col-md-3 col-12 mb-3\">\r\n                                    <label class=\"intake-form-labels text-muted font-weight-normal mb-0\"> External Email\r\n                                    </label>\r\n                                    <div class=\"col-12 p-0 font-weight-600\" *ngFor=\"let item of viewExternalUsers()\">{{\r\n                                        item }}</div>\r\n                                </div>\r\n\r\n                                <div class=\"col-md-3 col-12 mb-3\">\r\n                                    <label class=\"intake-form-labels text-muted font-weight-normal mb-0\"> Description\r\n                                    </label>\r\n                                    <div class=\"col-12 p-0 font-weight-600 text-break\">\r\n                                        {{ eventForm.value.description }}\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"col-md-3 col-12\">\r\n                                    <label class=\"intake-form-labels text-muted font-weight-normal mb-0\"> Event Owner\r\n                                    </label>\r\n                                    <div class=\"col-12 p-0 font-weight-600\">\r\n                                        {{ ownerDetails?.firstname + ' ' + ownerDetails?.lastname }}\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"p-field p-col mb-0 mt-2 d-flex flex-row-reverse text-right\">\r\n                        <button title=\"Back\" class=\"btn btn-white border border-1 text-primary btn-cancel mr-2\"\r\n                            (click)=\"closePopup()\">\r\n                            Back\r\n                        </button>\r\n                    </div>\r\n                </p-card>\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n</div>", styles: [".schedul{display:flex;min-height:100%;font-size:var(--base-font-size)}.schedul h2{margin:0;font-size:var(--font-16)}.schedul ul{margin:0;padding:0 0 0 1.5em}.schedul li{margin:1.5em 0;padding:0}.schedul b{margin-right:3px}.schedul .schedul-sidebar{width:300px;line-height:1.5;background:var(--bg-light);border-right:1px solid var(--table-border);color:var(--text-dark)}.schedul .addevent{width:100%;background-color:var(--primary)}.schedul .fc{max-width:1100px;margin:0 auto}.schedul .fc.fc-theme-standard .fc-toolbar .fc-button{text-transform:capitalize}.schedul .schedul-main{flex-grow:1;padding:0}.schedul .demo-inline-calendar-card{width:300px}.schedul .custom-control-input:checked~.custom-control-label:before{color:#fff;border-color:#7367f0;background-color:#7367f0}.schedul .custom-control-primary .custom-control-input:active~.custom-control-label:before,.schedul .custom-control-primary .custom-control-input:checked~.custom-control-label:before{background-color:#7367f0;border-color:#7367f0}.schedul .custom-control-success .custom-control-input:active~.custom-control-label:before,.schedul .custom-control-success .custom-control-input:checked~.custom-control-label:before{border-color:#28c76f;background-color:#28c76f}.schedul .custom-control-danger .custom-control-input:active~.custom-control-label:before,.schedul .custom-control-danger .custom-control-input:checked~.custom-control-label:before{border-color:#ea5455;background-color:#ea5455}.schedul .custom-control-warning .custom-control-input:active~.custom-control-label:before,.schedul .custom-control-warning .custom-control-input:checked~.custom-control-label:before{border-color:#ff9f43;background-color:#ff9f43}.schedul .custom-control-info .custom-control-input:active~.custom-control-label:before,.schedul .custom-control-info .custom-control-input:checked~.custom-control-label:before{border-color:#00cfe8;background-color:#00cfe8}.schedul .custom-control-training .custom-control-input:active~.custom-control-label:before,.schedul .custom-control-training .custom-control-input:checked~.custom-control-label:before{border-color:#39aea9;background-color:#39aea9}.schedul .custom-control-interview .custom-control-input:active~.custom-control-label:before,.schedul .custom-control-interview .custom-control-input:checked~.custom-control-label:before{border-color:#726eec;background-color:#726eec}.schedul .custom-control-guest .custom-control-input:active~.custom-control-label:before,.schedul .custom-control-guest .custom-control-input:checked~.custom-control-label:before{border-color:#e93997;background-color:#e93997}.schedul .switch input[type=checkbox]{height:0;width:0;visibility:hidden}.schedul .switch input[type=checkbox]:checked+label{background:var(--btn)}.schedul .switch input[type=checkbox]:checked+label:after{left:calc(100% - 4px);transform:translate(-100%)}.schedul .switch label{cursor:pointer;width:48px;height:24px;background:var(--light-gray);display:block;border-radius:24px;position:relative}.schedul .switch label:after{content:\"\";position:absolute;top:4px;left:4px;width:16px;height:16px;background:#fff;border-radius:16px;transition:.3s}.schedul .bg-primary-common{background:var(--primary)!important}.schedul .bullet.bullet-success{background-color:#28c76f}.schedul .bullet-primary{background-color:#7367f0}.schedul .bullet-danger{background-color:#ea5455}.schedul .bullet-warning{background-color:#ff9f43}.schedul .bullet-info{background-color:#00cfe8}.schedul .bullet-interview{background-color:#726eec}.schedul .bullet-training{background-color:#39aea9}.schedul .bullet-guest{background-color:#e93997}.schedul .bullet{width:1rem;height:1rem;border-radius:50%;display:inline-block}.schedul .bullet.bullet-sm{width:.714rem;height:.714rem;margin-right:5px}.schedul .autosuggest{position:absolute;inset:0 auto auto 0;transform:translate3d(0,38px,0);will-change:transform;float:left;min-width:10rem;padding:.5rem;margin:.125rem 0 0;font-size:1rem;color:var(--text-dark);text-align:left;list-style:none;background-color:var(--bg-light);background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem;z-index:9;width:100%;height:200px;overflow:auto}.schedul .autosuggest li{cursor:pointer;font-size:var(--base-font-size);line-height:30px;margin:0;border-bottom:solid 1px var(--table-border)}.schedul .autosuggest li:hover{color:var(--primary-light)}.schedul .mr-50,.schedul .mx-50{margin-right:.5rem!important}.schedul .rounded-circle{border-radius:50%!important}:host ::ng-deep p-tabview .p-tabview-panels{background:var(--bg-light);color:var(--text-dark)}:host ::ng-deep p-tabview .p-tabview-nav{border-color:var(--table-border);background:var(--bg-light)}:host ::ng-deep p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link{border-color:var(--table-border);color:var(--hover-text);background:var(--btn)!important}:host ::ng-deep p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link:focus{box-shadow:inset 0 0 0 .2rem var(--primary-light)}:host ::ng-deep p-tabview .p-tabview-nav li .p-tabview-nav-link{border-color:var(--table-border);color:var(--text-dark);background:var(--bg-light)!important}:host ::ng-deep p-tabview .p-tabview-nav li .p-tabview-nav-link:hover{text-decoration:none}:host ::ng-deep p-tabview .p-element{font-size:var(--base-font-size)}@media (min-width: 768px) and (max-width: 1024px) and (orientation: portrait){.schedul .schedul-sidebar .schedul-calendar-event,.schedul .schedul-sidebar .card-body{display:inline-block;width:auto;vertical-align:top;padding-top:0}}@media (max-width: 991px){.schedul{display:block}.schedul .schedul-main{margin-top:15px}.schedul .schedul-sidebar,.schedul .schedul-main{width:100%}}.uploadpartdisplay .uploaded-files{display:flex;flex:1;flex-direction:row;padding:0 0 0 .1em}.uploadpartdisplay .uploaded-files li{list-style-type:none}.uploadpartdisplay .uploaded-files select{background-color:var(--bg-light);color:var(--text-dark);border-color:var(--table-border)}.uploadpartdisplay .uploaded-files li:first-child,.uploadpartdisplay .uploaded-files li:last-child{width:25px}.uploadpartdisplay .uploaded-files li:nth-child(2){width:calc(100% - 30px);margin-right:10px}.uploadpartdisplay .uploaded-files label{font-size:var(--base-font-size);margin-bottom:0}.uploadpartdisplay .uploaded-files hr{height:1px;background-color:var(--primary-light)}.uploadpartdisplay .uploaded-files .fa{color:var(--primary)}.uploadpartdisplay .uploaded-files .form-control{background-color:var(--bg-light);color:var(--text-dark);border-color:var(--table-border);padding:.5rem .75rem;height:36px}:host ::ng-deep .p-fileupload-row,:host ::ng-deep .p-fileupload-content{display:none}.uploadfile-attache{max-height:150px;overflow-y:auto}.upload-box{display:flex;flex:1;-webkit-box-flex:1;-moz-box-flex:1;flex-direction:column;align-items:center;justify-content:center;padding:20px;min-height:150px;border:2px dashed var(--table-border)}.upload-box .material-icon{font-size:45px}.upload-box .drobordrag{font-size:var(--base-font-size);font-weight:600}.upload-box .drobordrag label{cursor:pointer}.toggleleft .report_head{font-size:var(--base-font-size);font-weight:600;display:block}:host ::ng-deep .event-schedul .p-card-body,:host ::ng-deep .event-schedul .p-card-content{padding:0}:host ::ng-deep .event-schedul .form-control{background-color:var(--bg-light);color:var(--text-dark);border-color:var(--table-border);padding:.5rem .75rem}:host ::ng-deep .event-schedul .p-calendar{width:100%}:host ::ng-deep .event-schedul .form-control.eventmultiguest{padding:.3rem .5rem}:host ::ng-deep .fc.fc-theme-standard a{color:var(--text-dark)}:host ::ng-deep .fc.fc-theme-standard .fc-toolbar-title{color:var(--text-dark)}:host ::ng-deep .fc.fc-theme-standard .fc-view{background:var(--bg-light)}:host ::ng-deep .fc.fc-theme-standard .fc-day-today{background-color:var(--primary)}:host ::ng-deep .fc.fc-theme-standard .fc-day-today a{color:var(--hover-text)}:host ::ng-deep .fc.fc-theme-standard .fc-view-harness .fc-scrollgrid{border-color:var(--table-border)}:host ::ng-deep .fc.fc-theme-standard .fc-view-harness .fc-scrollgrid td{border-color:var(--table-border)}:host ::ng-deep .schedul .p-calendar .p-datepicker{background:var(--bg-light);border:1px solid var(--table-border);color:var(--text-dark)}:host ::ng-deep .schedul .p-calendar .p-datepicker .p-datepicker-header{background:var(--background-color);border-bottom:1px solid var(--table-border)}:host ::ng-deep .schedul .p-calendar .p-datepicker .p-datepicker-header .p-datepicker-title .p-link{color:var(--nav-text)}.single-timeline-content{position:relative;z-index:1;border-radius:6px;box-shadow:0 .25rem 1rem #2f5bea20;border:1px solid #ebebeb;height:100%;align-items:center}.single-timeline-content .timeline-date{transition-duration:.5s;width:70px;background-color:var(--primary);flex:0 0 70px;text-align:center;max-width:70px;margin-right:15px;display:flex;align-items:center;justify-content:center;font-weight:600;color:#fff;line-height:normal;height:100%;flex-direction:column}.single-timeline-content .timeline-text{width:100%;padding:10px}.single-timeline-content .timeline-text h6{transition-duration:.5s;margin-bottom:0;font-weight:600;text-transform:capitalize}.single-timeline-content .timeline-text p{font-size:13px;margin-bottom:0}.single-timeline-content:hover,.single-timeline-content:focus{cursor:default}.single-timeline-content:hover .timeline-date,.single-timeline-content:focus .timeline-date{background-color:var(--primary-light)}.single-timeline-content:hover .timeline-text h6,.single-timeline-content:focus .timeline-text h6{color:var(--primary)}@media only screen and (max-width: 575px){.single-timeline-content{padding:20px}}\n"], dependencies: [{ kind: "directive", type: i7.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1$1.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i1$1.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i1$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$1.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { kind: "directive", type: i1$1.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i1$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1$1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: i8.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "directive", type: i9.Tooltip, selector: "[pTooltip]", inputs: ["tooltipPosition", "tooltipEvent", "appendTo", "positionStyle", "tooltipStyleClass", "tooltipZIndex", "escape", "showDelay", "hideDelay", "life", "positionTop", "positionLeft", "autoHide", "fitContent", "hideOnEscape", "pTooltip", "tooltipDisabled", "tooltipOptions"] }, { kind: "component", type: i10.TabView, selector: "p-tabView", inputs: ["style", "styleClass", "controlClose", "scrollable", "activeIndex", "selectOnFocus", "nextButtonAriaLabel", "prevButtonAriaLabel", "autoHideButtons", "tabindex"], outputs: ["onChange", "onClose", "activeIndexChange"] }, { kind: "component", type: i10.TabPanel, selector: "p-tabPanel", inputs: ["closable", "headerStyle", "headerStyleClass", "cache", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "selected", "disabled", "header", "leftIcon", "rightIcon"] }, { kind: "component", type: i11.Dropdown, selector: "p-dropdown", inputs: ["id", "scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "dataKey", "filterBy", "filterFields", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "overlayOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "focusOnHover", "selectOnFocus", "autoOptionFocus", "autofocusFilter", "disabled", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "filterValue", "options"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear", "onLazyLoad"] }, { kind: "component", type: i12.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }, { kind: "directive", type: i13.InputText, selector: "[pInputText]" }, { kind: "component", type: i14.Calendar, selector: "p-calendar", inputs: ["style", "styleClass", "inputStyle", "inputId", "name", "inputStyleClass", "placeholder", "ariaLabelledBy", "ariaLabel", "iconAriaLabel", "disabled", "dateFormat", "multipleSeparator", "rangeSeparator", "inline", "showOtherMonths", "selectOtherMonths", "showIcon", "icon", "appendTo", "readonlyInput", "shortYearCutoff", "monthNavigator", "yearNavigator", "hourFormat", "timeOnly", "stepHour", "stepMinute", "stepSecond", "showSeconds", "required", "showOnFocus", "showWeek", "showClear", "dataType", "selectionMode", "maxDateCount", "showButtonBar", "todayButtonStyleClass", "clearButtonStyleClass", "autoZIndex", "baseZIndex", "panelStyleClass", "panelStyle", "keepInvalid", "hideOnDateTimeSelect", "touchUI", "timeSeparator", "focusTrap", "showTransitionOptions", "hideTransitionOptions", "tabindex", "minDate", "maxDate", "disabledDates", "disabledDays", "yearRange", "showTime", "responsiveOptions", "numberOfMonths", "firstDayOfWeek", "locale", "view", "defaultDate"], outputs: ["onFocus", "onBlur", "onClose", "onSelect", "onClear", "onInput", "onTodayClick", "onClearClick", "onMonthChange", "onYearChange", "onClickOutside", "onShow"] }, { kind: "component", type: i15.Editor, selector: "p-editor", inputs: ["style", "styleClass", "placeholder", "formats", "modules", "bounds", "scrollingContainer", "debug", "readonly"], outputs: ["onInit", "onTextChange", "onSelectionChange"] }, { kind: "component", type: i16.RadioButton, selector: "p-radioButton", inputs: ["value", "formControlName", "name", "disabled", "label", "tabindex", "inputId", "ariaLabelledBy", "ariaLabel", "style", "styleClass", "labelStyleClass"], outputs: ["onClick", "onFocus", "onBlur"] }, { kind: "directive", type: i17.Ripple, selector: "[pRipple]" }, { kind: "component", type: i18.MultiSelect, selector: "p-multiSelect", inputs: ["id", "ariaLabel", "style", "styleClass", "panelStyle", "panelStyleClass", "inputId", "disabled", "readonly", "group", "filter", "filterPlaceHolder", "filterLocale", "overlayVisible", "tabindex", "appendTo", "dataKey", "name", "ariaLabelledBy", "displaySelectedLabel", "maxSelectedLabels", "selectionLimit", "selectedItemsLabel", "showToggleAll", "emptyFilterMessage", "emptyMessage", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "showHeader", "filterBy", "scrollHeight", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "overlayOptions", "ariaFilterLabel", "filterMatchMode", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "display", "autocomplete", "showClear", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "defaultLabel", "placeholder", "options", "filterValue", "itemSize", "selectAll", "focusOnHover", "filterFields", "selectOnFocus", "autoOptionFocus"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onClear", "onPanelShow", "onPanelHide", "onLazyLoad", "onRemove", "onSelectAllChange"] }, { kind: "component", type: i19.Dialog, selector: "p-dialog", inputs: ["header", "draggable", "resizable", "positionLeft", "positionTop", "contentStyle", "contentStyleClass", "modal", "closeOnEscape", "dismissableMask", "rtl", "closable", "responsive", "appendTo", "breakpoints", "styleClass", "maskStyleClass", "showHeader", "breakpoint", "blockScroll", "autoZIndex", "baseZIndex", "minX", "minY", "focusOnShow", "maximizable", "keepInViewport", "focusTrap", "transitionOptions", "closeIcon", "closeAriaLabel", "closeTabindex", "minimizeIcon", "maximizeIcon", "visible", "style", "position"], outputs: ["onShow", "onHide", "visibleChange", "onResizeInit", "onResizeEnd", "onDragEnd", "onMaximize"] }, { kind: "directive", type: PermissionDirective, selector: "[fieldKey]", inputs: ["fieldKey"] }, { kind: "component", type: AlertComponent, selector: "app-alert" }, { kind: "component", type: i22.FullCalendarComponent, selector: "full-calendar", inputs: ["options", "deepChangeDetection", "events", "eventSources", "resources"] }, { kind: "pipe", type: i7.DatePipe, name: "date" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: EventsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'event-scheduler', template: "<app-alert></app-alert>\r\n<div class=\"schedul\">\r\n    <div class=\"schedul-sidebar\" *ngIf=\"isCalendar\">\r\n        <div class=\"schedul-sidebar-section mb-3 row\">\r\n            <div class=\"col-md-6 col-12 pr-1\">\r\n                <button type=\"button\" class=\"btn btn-primary addevent\" fieldKey=\"EVE_SCH_ADD_EVENT\"\r\n                    (click)=\"outSideAddEvent(true)\">\r\n                    Add Event\r\n                </button>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-12 pl-1\">\r\n                <button type=\"button\" class=\"btn btn-primary addevent\" (click)=\"getHolidayList()\">\r\n                    Holidays\r\n                </button>\r\n                <p-dialog header=\"Holidays List\" [(visible)]=\"visible\">\r\n                    <div class=\"holidays-list\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-12 mb-3 text-right\">\r\n                                <button type=\"button\" class=\"btn btn-primary\" title=\"Add\" (click)=\"addEventGrid(false)\"\r\n                                    *ngIf=\"AddButton\" pRipple>\r\n                                    Add\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-12 col-md-6 col-lg-6 mb-3 pr-md-1\" *ngFor=\"let item of HolidayList\">\r\n                                <div class=\"single-timeline-content d-flex wow fadeInLeft\"\r\n                                    style=\"visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;\">\r\n                                    <div class=\"timeline-date\">\r\n                                        <h5 class=\"mb-0 font-weight-bold\">{{item.event_day}}</h5>\r\n                                        <p class=\"mb-0\">{{item.event_month}}</p>\r\n                                    </div>\r\n                                    <div class=\"timeline-text\">\r\n                                        <h6>{{item.title}}</h6>\r\n                                        <p>{{item.event_end}}</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </p-dialog>\r\n            </div>\r\n        </div>\r\n        <div class=\"schedul-calendar-event\">\r\n            <p-calendar [(ngModel)]=\"selectDate\" [inline]=\"true\" [showWeek]=\"false\" fieldKey=\"EVE_SCH_SELECT_DATE\"\r\n                (ngModelChange)=\"selectDateforListView($event)\"></p-calendar>\r\n        </div>\r\n        <div class=\"card-body pb-0 event-filterlist\">\r\n            <h6 class=\"section-label mb-2\">\r\n                <span class=\"align-middle text-uppercase font-weight-600\">Filter</span>\r\n            </h6>\r\n            <div class=\"custom-control custom-checkbox mb-1\">\r\n                <input type=\"checkbox\" class=\"custom-control-input select-all\" fieldKey=\"EVE_SCH_SELECT_ALL\"\r\n                    id=\"select-all\" [checked]=\"checkAll\" (change)=\"toggleCheckboxAll($event)\" />\r\n                <label class=\"custom-control-label\" for=\"select-all\">View All</label>\r\n            </div>\r\n            <div class=\"calendar-events-filter\">\r\n                <div class=\"custom-control  custom-checkbox mb-1 custom-control-{{ calendar.bullet }}\"\r\n                    *ngFor=\"let calendar of selectLabel; let i = index\">\r\n                    <input type=\"checkbox\" fieldKey=\"EVE_SCH_CALANDER_EVENT\" (change)=\"checkboxChange($event, calendar)\"\r\n                        class=\"custom-control-input input-filter\" id=\"calendar-{{ i }}\" [checked]=\"calendar.checked\" />\r\n                    <label class=\"custom-control-label\" for=\"calendar-{{ i }}\">{{ calendar.label }}</label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"schedul-main\">\r\n        <ng-container *ngIf=\"isCalendar\">\r\n            <full-calendar *ngIf=\"calendarVisible\" #calendar [options]=\"calendarOptions\"></full-calendar>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!isCalendar && labelName !== 'View Event'\">\r\n            <div [formGroup]=\"eventForm\" id=\"event-create\">\r\n                <p-card styleClass=\"w-100 event-schedul\">\r\n                    <div class=\"strip_head toggleleft mb-3 px-3 py-2 bg-primary\">\r\n                        <span class=\"report_head font-weight-bold text-white\">{{ addholiday ? labelName : 'Holiday\r\n                            Event' }}</span>\r\n                    </div>\r\n                    <!-- <div class=\"col-lg-3 col-sm-6 col-md-6 col-12 mb-2\">\r\n            <label aria-labelledby=\"youthid\" for=\"client-name4\" class=\"intake-form-labels text-primary\">Youth ID</label>\r\n            <div class=\"p-inputgroup input-group\">\r\n              <span class=\"p-inputgroup-addon\"><em class=\"pi pi-search\"></em></span>\r\n              <input\r\n                id=\"client-name4\"\r\n                class=\"form-control\"\r\n                type=\"text\"\r\n                maxlength=\"20\"\r\n                formControlName=\"searchid\"\r\n                fieldKey=\"EVE_SCH_YOUTH_ID\"\r\n                placeholder=\"Search Youth Id\"\r\n                (keyup)=\"onKeyUp($event)\"\r\n                autocomplete=\"off\"\r\n                pInputText />\r\n              <ul *ngIf=\"referralAutoSuggestion\" class=\"autosuggest\">\r\n                <li *ngFor=\"let item of referralAutoList\" (click)=\"selectReferral(item)\">\r\n                  {{ item?.id }}\r\n                  {{\r\n                    (item?.first_name ? '-' + item?.first_name + ',' : '') + (item?.last_name ? item?.last_name : '')\r\n                  }}\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div> -->\r\n                    <p-tabView styleClass=\"tabview-custom\" [activeIndex]=\"selectedIndex\"\r\n                        (onChange)=\"selectedIndex = $event.index\">\r\n                        <p-tabPanel>\r\n                            <ng-template pTemplate=\"header\">\r\n                                <em class=\"pi pi-calendar mr-2\"></em>\r\n                                <span>{{ addholiday ? 'Event Details' : 'Holiday Details' }}</span>\r\n                            </ng-template>\r\n                            <div class=\"messagecont\">\r\n                                <div class=\"p-field p-col mb-0\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-lg-3 col-sm-6 col-md-6 col-12 mb-3\">\r\n                                            <label aria-describedby=\"eventTitle\" for=\"eventTitle\"\r\n                                                class=\"intake-form-labels text-primary\">Title <span\r\n                                                    class=\"text-danger\">*</span></label>\r\n                                            <div class=\"col p-0\">\r\n                                                <input id=\"eventTitle\" autofocus class=\"form-control\" type=\"text\"\r\n                                                    formControlName=\"title\" fieldKey=\"EVE_SCH_TITLE\" autocomplete=\"off\"\r\n                                                    placeholder=\"Enter Title\" pInputText />\r\n                                                <span *ngIf=\"isSubmit && eventFormControl['title'].invalid\"\r\n                                                    class=\"invalid-form\">\r\n                                                    <small class=\"form-text text-danger\"\r\n                                                        *ngIf=\"eventFormControl['title'].hasError('required')\">Title is\r\n                                                        required!</small>\r\n                                                </span>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-lg-3 col-sm-6 col-md-6 col-12 mb-3\">\r\n                                            <label for=\"eventLabel\" class=\"intake-form-labels text-primary\">Label<span\r\n                                                    class=\"text-danger\">*</span></label>\r\n                                            <div class=\"col p-0\">\r\n                                                <p-dropdown *ngIf=\"addholiday === true\" styleClass=\"d-flex eventLable\"\r\n                                                    [options]=\"selectLabel\" placeholder=\"Select Label\"\r\n                                                    formControlName=\"calendar\" fieldKey=\"EVE_SCH_LABEL\"\r\n                                                    (onChange)=\"holidayLable()\" optionLabel=\"label\" id=\"eventLabel\"\r\n                                                    optionValue=\"id\">\r\n                                                    <ng-template let-country pTemplate=\"item\">\r\n                                                        <div>\r\n                                                            <span\r\n                                                                class=\"bullet bullet-sm mr-50 bullet-{{ country.bullet }}\"></span>\r\n                                                            {{ country.label }}\r\n                                                        </div>\r\n                                                    </ng-template>\r\n                                                    <!-- [disabled]=\"true\" placeholder=\"Select Label\" -->\r\n                                                </p-dropdown>\r\n                                                <!-- <div *ngIf=\"addholiday === false\">\r\n                                                <input value=\"Testholiday\" styleClass=\"d-flex eventLable\" type=\"text\"\r\n                                                formControlName=\"calendar\"  optionLabel=\"label\" id=\"eventLabel\" optionValue=\"id\" fieldKey=\"EVE_SCH_LABEL\" (onChange)=\"holidayLable()\"\r\n                                                     pInputText/>\r\n                                                    <ng-template let-country pTemplate=\"item\">\r\n                                                      <div>\r\n                                                          <span\r\n                                                              class=\"bullet bullet-sm mr-50 bullet-{{ country.bullet }}\"></span>\r\n                                                          {{ country.label }}\r\n                                                      </div>\r\n                                                  </ng-template>\r\n                                                    </div> -->\r\n                                                <p-dropdown *ngIf=\"addholiday === false\" styleClass=\"d-flex eventLable\"\r\n                                                    [disabled]=\"true\" [options]=\"selectLabel\" formControlName=\"calendar\"\r\n                                                    fieldKey=\"EVE_SCH_LABEL\" (onChange)=\"holidayLable()\"\r\n                                                    optionLabel=\"label\" id=\"eventLabel\" optionValue=\"id\">\r\n                                                    <ng-template let-country pTemplate=\"item\">\r\n                                                        <div>\r\n                                                            <span\r\n                                                                class=\"bullet bullet-sm mr-50 bullet-{{ country.bullet }}\"></span>\r\n                                                            {{ country.label }}\r\n                                                        </div>\r\n                                                    </ng-template>\r\n                                                </p-dropdown>\r\n                                                <span *ngIf=\"isSubmit && eventFormControl['calendar'].invalid\"\r\n                                                    class=\"invalid-form\">\r\n                                                    <small class=\"form-text text-danger\"\r\n                                                        *ngIf=\"eventFormControl['calendar'].hasError('required')\">Label\r\n                                                        is required!</small>\r\n                                                </span>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-lg-3 col-sm-6 col-md-6 col-12 mb-3\">\r\n                                            <label for=\"event-start\" class=\"intake-form-labels text-primary\"> Start Date\r\n                                                & Time </label>\r\n                                            <div class=\"col p-0\">\r\n                                                <p-calendar id=\"cdob\" iconAriaLabel=\"startDate\" [minDate]=\"miniDate\"\r\n                                                    [showIcon]=\"true\" [stepMinute]=\"5\" [showTime]=\"true\"\r\n                                                    fieldKey=\"EVE_SCH_START_DATE_TIME\" dateFormat=\"MM dd, yy\"\r\n                                                    formControlName=\"start\" (onSelect)=\"startDate($event)\"\r\n                                                    hourFormat=\"12\" #startDatePicker inputId=\"event-start\">\r\n                                                </p-calendar>\r\n                                                <span *ngIf=\"\r\n                            eventForm.get('start').invalid &&\r\n                            (eventForm.get('start').dirty || eventForm.get('start').touched)\r\n                          \" class=\"invalid-form\">\r\n                                                    <small class=\"form-text text-danger\"\r\n                                                        *ngIf=\"eventFormControl['start'].hasError('required')\">Start\r\n                                                        Date is required!</small>\r\n                                                </span>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-lg-3 col-sm-6 col-md-6 col-12 mb-3\">\r\n                                            <label for=\"event-end\" class=\"intake-form-labels text-primary\"> End Date &\r\n                                                Time </label>\r\n                                            <div class=\"col p-0\">\r\n                                                <p-calendar id=\"cdob\" iconAriaLabel=\"endDate\" [minDate]=\"miniDate\"\r\n                                                    [showIcon]=\"true\" [stepMinute]=\"5\" [showTime]=\"true\"\r\n                                                    fieldKey=\"EVE_SCH_END_DATE_TIME\" dateFormat=\"MM dd, yy\"\r\n                                                    formControlName=\"end\" (onSelect)=\"endDate($event)\" hourFormat=\"12\"\r\n                                                    #endDatePicker inputId=\"event-end\"></p-calendar>\r\n                                                <div>\r\n                                                    <span class=\"invalid-form\">\r\n                                                        <small class=\"form-text text-danger\"\r\n                                                            *ngIf=\"eventFormControl['end'].hasError('required')\">End\r\n                                                            Date is required!</small>\r\n                                                        <small class=\"form-text text-danger\"\r\n                                                            *ngIf=\"eventForm.hasError('notValid')\">Invalid date\r\n                                                            range!</small>\r\n                                                        <small class=\"form-text text-danger\"\r\n                                                            *ngIf=\"conflictAppointment\">This appointment conflicts with\r\n                                                            another one on your calendar, Are you sure want to\r\n                                                            Proceed!</small>\r\n                                                    </span>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-lg-3 col-sm-6 col-md-6 col-12 mb-3\">\r\n                                            <label class=\"intake-form-labels text-primary d-lg-block d-none\">All\r\n                                                Day</label>\r\n                                            <div class=\"switch d-inline-flex\">\r\n                                                <input type=\"checkbox\" id=\"toggleAll\" formControlName=\"allDay\"\r\n                                                    name=\"allDay\" fieldKey=\"EVE_SCH_ALL_DAY\" />\r\n                                                <label for=\"toggleAll\" class=\"mb-0\"></label>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <ng-container *ngIf=\"isPublicHoliday\">\r\n                                            <div class=\"col-lg-3 col-sm-6 col-md-6 col-12 mb-3\">\r\n                                                <label class=\"intake-form-labels text-primary\"> Event Type </label>\r\n                                                <div class=\"col p-0\">\r\n                                                    <div class=\"d-flex\">\r\n                                                        <div class=\"p-field-radiobutton\"\r\n                                                            *ngFor=\"let typevalue of eventTypeList; let i = index\">\r\n                                                            <p-radioButton name=\"event_type\"\r\n                                                                fieldKey=\"EVE_SCH_EVENT_TYPE\" value=\"{{ typevalue.id }}\"\r\n                                                                formControlName=\"event_type\"\r\n                                                                inputId=\"event_type{{ i }}\"></p-radioButton>\r\n                                                            <label for=\"event_type{{ i }}\"\r\n                                                                class=\"referral-form-labels mb-0\">{{\r\n                                                                typevalue.lookupvalue\r\n                                                                }}</label>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-lg-3 col-sm-12 col-md-12 col-12 mb-3\">\r\n                                                <label for=\"eventUrl\" class=\"intake-form-labels text-primary\">\r\n                                                    Event URL\r\n                                                    <span\r\n                                                        *ngIf=\"labelName !== 'Edit Event' && this.labelName !== 'View Event'\">\r\n                                                        <em class=\"pi pi-info-circle\"\r\n                                                            pTooltip=\"Click to Generate Jisti Url\" tooltipPosition=\"top\"\r\n                                                            (click)=\"getUrl()\"></em>\r\n                                                    </span>\r\n                                                    <span\r\n                                                        *ngIf=\"labelName === 'Edit Event' || this.labelName === 'View Event'\">\r\n                                                        <em class=\"pi pi-external-link ml-1 text-primary font-weight-600\"\r\n                                                            pTooltip=\"In New Window\" tooltipPosition=\"top\"\r\n                                                            (click)=\"openNewWindow()\"\r\n                                                            style=\"font-size: 10px; cursor: pointer\"></em>\r\n                                                    </span>\r\n                                                </label>\r\n                                                <div class=\"col p-0\">\r\n                                                    <input type=\"text\" id=\"eventUrl\" class=\"form-control\"\r\n                                                        formControlName=\"eventurl\" autocomplete=\"off\"\r\n                                                        fieldKey=\"EVE_SCH_EVENT_URL\" placeholder=\"Enter Event URL\"\r\n                                                        (input)=\"eventTypeValidation()\" pInputText />\r\n\r\n                                                    <span class=\"invalid-form\">\r\n                                                        <small class=\"form-text text-danger\"\r\n                                                            *ngIf=\"eventForm.get('eventurl') && eventFormControl['eventurl']!.errors?.['pattern']\">URL\r\n                                                            is not valid!</small>\r\n                                                        <small class=\"form-text text-danger\" *ngIf=\"isVirtual\">URL is\r\n                                                            required! </small>\r\n                                                    </span>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-lg-3 col-sm-6 col-md-6 col-12 mb-3\">\r\n                                                <label for=\"eventLocation\" class=\"intake-form-labels text-primary\">\r\n                                                    Location </label>\r\n                                                <div class=\"col p-0\">\r\n                                                    <input id=\"eventLocation\" class=\"form-control\" type=\"text\"\r\n                                                        formControlName=\"location\" fieldKey=\"EVE_SCH_LOCATION\"\r\n                                                        autocomplete=\"off\" placeholder=\"Enter Location\"\r\n                                                        (input)=\"eventTypeValidation()\" pInputText />\r\n                                                    <span class=\"invalid-form\" *ngIf=\"eventForm.get('location')\">\r\n                                                        <small class=\"form-text text-danger\"\r\n                                                            *ngIf=\"isFaceToFace\">Location is required!</small>\r\n                                                    </span>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-lg-6 col-sm-6 col-md-6 col-12 mb-3\">\r\n                                                <label for=\"eventGuest\" class=\"intake-form-labels text-primary\"> Add\r\n                                                    Guest </label>\r\n                                                <div class=\"col p-0\">\r\n                                                    <p-multiSelect [options]=\"userList\" id=\"eventGuest\"\r\n                                                        ariaLabelledBy=\"eventGuest\" display=\"chip\"\r\n                                                        formControlName=\"addGuest\" fieldKey=\"EVE_SCH_ADD_GUEST\"\r\n                                                        defaultLabel=\"Select Guest\" ariaFilterLabel=\"selectGuest\"\r\n                                                        optionLabel=\"firstname\" optionValue=\"id\"\r\n                                                        styleClass=\"form-control eventmultiguest\"\r\n                                                        [virtualScroll]=\"true\">\r\n                                                        <ng-template let-guest pTemplate=\"guest\">\r\n                                                            <div class=\"media align-items-center\">\r\n                                                                <img class=\"d-block rounded-circle mr-50\"\r\n                                                                    src=\"assets/images/user-empty.png\" height=\"26\"\r\n                                                                    width=\"26\" [alt]=\"guest.firstname\" />\r\n                                                                <div class=\"media-body\">\r\n                                                                    <p class=\"mb-0\">\r\n                                                                        {{ guest?.firstname }} {{ guest?.lastname\r\n                                                                        }} {{ guest?.email ? '(' + guest?.email + ')' :\r\n                                                                        '' }}\r\n                                                                    </p>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </ng-template>\r\n                                                    </p-multiSelect>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-lg-6 col-sm-12 col-md-12 col-12 mb-3\">\r\n                                                <label for=\"externalEmail\" class=\"intake-form-labels text-primary\">\r\n                                                    External Email </label>\r\n                                                <div class=\"col p-0\">\r\n                                                    <input id=\"externalEmail\" class=\"form-control\" type=\"text\"\r\n                                                        fieldKey=\"EVE_SCH_EXTERNAL_EMAIL\" autocomplete=\"off\"\r\n                                                        formControlName=\"externalUsers\"\r\n                                                        placeholder=\"External Email Address\" pInputText />\r\n                                                    <span class=\"invalid-form\" *ngIf=\"eventForm.get('externalUsers')\">\r\n                                                        <small class=\"form-text text-danger\"\r\n                                                            *ngIf=\"eventFormControl['externalUsers'].hasError('externalUrl')\">\r\n                                                            Invalid Email Id. Use comma (,) as separator for adding\r\n                                                            multiple email ids.</small>\r\n                                                    </span>\r\n                                                </div>\r\n                                            </div>\r\n                                        </ng-container>\r\n\r\n                                        <div class=\"col-md-4 col-12\"></div>\r\n\r\n                                        <div class=\"col-md-12\">\r\n                                            <label for=\"eventGuest\" class=\"intake-form-labels text-primary\">\r\n                                                Description\r\n                                            </label>\r\n                                            <div class=\"col p-0\">\r\n                                                <textarea class=\"form-control\" style=\"height: 80px\"\r\n                                                    fieldKey=\"EVE_SCH_DESCRYPTION\" formControlName=\"description\"\r\n                                                    placeholder=\"Enter Description\" pInputText>\r\n                        </textarea>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"p-field p-col mb-0 mt-2 d-flex flex-row-reverse text-right\"\r\n                                *ngIf=\"isEventOwner()\">\r\n                                <button title=\"Complete\" *ngIf=\"labelName === 'Edit Event'\"\r\n                                    class=\"btn text-white btn-primary px-4\" (click)=\"completeEvent()\"\r\n                                    fieldKey=\"EVE_SCH_COMPLETE\" [disabled]=\"validateOutCome()\">\r\n                                    Complete\r\n                                </button>\r\n                                <button title=\"Update\" *ngIf=\"labelName === 'Edit Event'\"\r\n                                    class=\"btn text-white btn-primary px-4 mr-2\" fieldKey=\"EVE_SCH_UPDATE\"\r\n                                    [disabled]=\"validateOutCome()\" (click)=\"toVerifyEventUpdate()\">\r\n                                    Update\r\n                                </button>\r\n                                <button title=\"Save\" *ngIf=\"labelName !== 'Edit Event'\"\r\n                                    class=\"btn text-white btn-primary px-4 mr-2\" fieldKey=\"EVE_SCH_SAVE\"\r\n                                    (click)=\"toVerifyEventAdd()\">\r\n                                    Save\r\n                                </button>\r\n                                <button title=\"Delete\" *ngIf=\"labelName === 'Edit Event'\"\r\n                                    class=\"btn text-white btn-primary px-4 mr-2\" fieldKey=\"EVE_SCH_DELETE\"\r\n                                    [disabled]=\"validateOutCome()\" (click)=\"deleteEvent()\">\r\n                                    Delete\r\n                                </button>\r\n                                <button title=\"Back\" fieldKey=\"EVE_SCH_BACK\"\r\n                                    class=\"btn btn-white border border-1 text-primary btn-cancel mr-2\"\r\n                                    (click)=\"closePopup()\">\r\n                                    Back\r\n                                </button>\r\n                            </div>\r\n                        </p-tabPanel>\r\n                        <ng-container *ngIf=\"isPublicHoliday\">\r\n                            <p-tabPanel header=\"Header II\" *ngIf=\"validateUpload()\">\r\n                                <ng-template pTemplate=\"header\">\r\n                                    <em class=\"pi pi-upload mr-2\"></em>\r\n                                    <span>Upload Documents</span>\r\n                                </ng-template>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-lg-4 col-sm-4 col-md-12 col-12 my-3 text-center\">\r\n                                        <div class=\"upload-box\">\r\n                                            <input type=\"file\" id=\"file\"\r\n                                                fieldKey=\"EVE_SCH_UPLOADED_DOCUMENTS_BROWSE_FILE\"\r\n                                                accept=\".pdf, .jpg, .jpeg, .png, .doc, .docx, .xls, .xlsx, .csv, .WEBM, .MPG, .MP2, .MPEG, .MPE, .MPV, .OGG, .MP4, .M4P, .M4V, .AVI, .WMV, .MOV, .FLV\"\r\n                                                (change)=\"handleFileInput($event)\"\r\n                                                style=\"visibility: hidden; display: none\"\r\n                                                (click)=\"$event?.target['value'] = null\" />\r\n                                            <span class=\"material-icon material-symbols-outlined\">cloud_upload</span>\r\n                                            <img src=\"../../../../../assets/images/upload_blue.png\" alt=\"Upload\" />\r\n                                            <div class=\"drobordrag\">\r\n                                                Drop your here, or\r\n                                                <label for=\"file\" class=\"text-primary\">browse</label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"col-lg-8 col-sm-8 col-md-12 col-12 px-4 uploadpartdisplay\">\r\n                                        <form [formGroup]=\"uploadedForm\">\r\n                                            <ng-container>\r\n                                                <ul class=\"uploaded-files mb-2\">\r\n                                                    <li>\r\n                                                        <em class=\"fa fa-file\" aria-hidden=\"true\"></em>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <label>{{ uploadedFile }}</label>\r\n                                                        <hr class=\"p-0 m-0\" />\r\n                                                    </li>\r\n                                                    <li class=\"remove text-right\" (click)=\"clearUploadedFile()\">\r\n                                                        <img src=\"../../../../../assets/images/delete.svg\"\r\n                                                            alt=\"delete\" />\r\n                                                    </li>\r\n                                                </ul>\r\n                                            </ng-container>\r\n\r\n                                            <div class=\"col-md-12 px-0 mt-4\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 col-12 mb-md-0 mb-2\">\r\n                                                        <input type=\"text\" class=\"form-control\" formControlName=\"title\"\r\n                                                            fieldKey=\"EVE_SCH_UPLOADED_DOCUMENTS_TITLE\"\r\n                                                            placeholder=\"Title\" />\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 col-12 mb-md-0 mb-2\">\r\n                                                        <input type=\"text\" class=\"form-control\"\r\n                                                            formControlName=\"description\"\r\n                                                            fieldKey=\"EVE_SCH_UPLOADED_DOCUMENTS_DESCRYPTION\"\r\n                                                            placeholder=\"Description\" />\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row mt-md-2 mt-0\">\r\n                                                    <div class=\"col-md-6 col-12 mb-md-0 mb-2\">\r\n                                                        <select id=\"categoryDetail\" class=\"form-control\"\r\n                                                            formControlName=\"categoryDetail\"\r\n                                                            aria-labelledby=\"categoryDetail\"\r\n                                                            fieldKey=\"EVE_SCH_UPLOADED_DOCUMENTS_UPLOADED_DATE\"\r\n                                                            (change)=\"subcategoryByCategory($event)\">\r\n                                                            <option value=\"\">Select</option>\r\n                                                            <option *ngFor=\"let clist of categoryList\"\r\n                                                                [value]=\"clist?.id\">\r\n                                                                {{ clist?.lookupvalue }}\r\n                                                            </option>\r\n                                                        </select>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 col-12 mb-md-0 mb-2\">\r\n                                                        <select id=\"subCategoryDetail\"\r\n                                                            aria-labelledby=\"subCategoryDetail\" class=\"form-control\"\r\n                                                            formControlName=\"subCategoryDetail\"\r\n                                                            fieldKey=\"EVE_SCH_UPLOADED_DOCUMENTS_UPLOAD_BY\">\r\n                                                            <option value=\"\">Select</option>\r\n                                                            <option *ngFor=\"let sclist of subCategoryList\"\r\n                                                                [value]=\"sclist?.id\">\r\n                                                                {{ sclist?.lookupvalue }}\r\n                                                            </option>\r\n                                                        </select>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row mt-md-2 mt-0\">\r\n                                                    <div class=\"col mb-md-0 mb-2\">\r\n                                                        <label for=\"label\" class=\"labelcss\">Uploaded Date</label> <br />\r\n                                                        <span>{{ uploadedDate | date : 'dd-MMM-yyyy' }}</span>\r\n                                                    </div>\r\n                                                    <div class=\"col mb-md-0 mb-2\">\r\n                                                        <label for=\"label\" class=\"labelcss\">Uploaded By</label><br />\r\n                                                        <span class=\"currentUsername\">{{ uploadedPerson }}</span>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </form>\r\n                                        <div class=\"col-12 d-flex flex-row-reverse pr-2 mt-3\">\r\n                                            <button\r\n                                                class=\"btn btn-primary d-flex align-items-center justify-content-center\"\r\n                                                [disabled]=\"outComeCompleted()\" (click)=\"createAttachement()\">\r\n                                                <em class=\"pi pi-plus-circle mr-2\"></em>\r\n                                                ADD FILES\r\n                                            </button>\r\n                                            <button class=\"mr-2 btn btn-white border border-1 text-primary btn-cancel\"\r\n                                                fieldKey=\"EVE_SCH_UPLOADED_DOCUMENTS_BACK\" (click)=\"closePopup()\">\r\n                                                Back\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <ng-container *ngIf=\"eventAttachments.length\">\r\n                                    <div class=\"table-responsive\">\r\n                                        <table id=\"eventAttachments\" aria-describedby=\"eventAttachments\"\r\n                                            class=\"table table-borderless mb-0\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th scope=\"col\" class=\"text-primary\">Title</th>\r\n                                                    <th scope=\"col\" class=\"text-primary\">Attachment Type</th>\r\n                                                    <th scope=\"col\" class=\"text-primary\">Category</th>\r\n                                                    <th scope=\"col\" class=\"text-primary\">Description</th>\r\n                                                    <th scope=\"col\" class=\"text-primary\">Download</th>\r\n                                                    <th scope=\"col\" class=\"text-primary\">Uploaded By</th>\r\n                                                    <th scope=\"col\" class=\"text-primary\">Uploaded Date</th>\r\n                                                    <th scope=\"col\" class=\"text-primary\">Action</th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr *ngFor=\"let file of eventAttachments\">\r\n                                                    <td>{{ file?.title }}</td>\r\n                                                    <td>{{ getAttachementType(file?.path) }}</td>\r\n                                                    <td>{{ file?.categoryDetails?.value }}</td>\r\n                                                    <td>{{ file?.description }}</td>\r\n                                                    <td>\r\n                                                        <a href=\"javascript:void(0)\" (click)=\"download(file)\">\r\n                                                            <em class=\"fa fa-download\" aria-hidden=\"true\"></em>\r\n                                                        </a>\r\n                                                    </td>\r\n                                                    <td>{{ file?.createdUser?.username }}</td>\r\n                                                    <td>{{ file?.updated ? (file?.updated | date : 'dd-MMM-yyyy hh:mm:ss\r\n                                                        a') : '' }}</td>\r\n                                                    <td>\r\n                                                        <a href=\"javascript:void(0)\" (click)=\"deleteAttachment(file)\">\r\n                                                            <img src=\"../../../../../assets/images/delete.svg\"\r\n                                                                alt=\"delete\" />\r\n                                                        </a>\r\n                                                    </td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                    </div>\r\n                                </ng-container>\r\n                            </p-tabPanel>\r\n                            <p-tabPanel header=\"Header III\" *ngIf=\"validateOutCome()\">\r\n                                <ng-template pTemplate=\"header\">\r\n                                    <em class=\"pi pi-cloud-upload mr-2\"></em>\r\n                                    <span>Outcome</span>\r\n                                </ng-template>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-3 mb-3\">\r\n                                        <label for=\"outcome\" aria-describedby=\"outcome\"\r\n                                            class=\"intake-form-labels text-primary\">Outcome<span\r\n                                                class=\"text-danger\">*</span></label>\r\n                                        <div class=\"col p-0\">\r\n                                            <p-dropdown styleClass=\"d-flex\" placeholder=\"Select Outcome\"\r\n                                                Inputid=\"outcome\" [options]=\"outcomeList\" formControlName=\"outcome\"\r\n                                                optionLabel=\"lookupvalue\" id=\"outcome\" optionValue=\"id\">\r\n                                            </p-dropdown>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12 mb-3\">\r\n                                        <label for=\"event-label\" aria-describedby=\"notes\"\r\n                                            class=\"intake-form-labels text-primary\">Notes<span\r\n                                                class=\"text-danger\">*</span></label>\r\n                                        <div class=\"col p-0\">\r\n                                            <p-editor id=\"notes\" [style]=\"{ height: '120px' }\"\r\n                                                formControlName=\"notes\"></p-editor>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-12 d-flex flex-row-reverse pr-2 mt-3\" *ngIf=\"isEventOwner()\">\r\n                                        <button class=\"btn text-white btn-primary px-4\"\r\n                                            *ngIf=\"labelName === 'Edit Event'\" [disabled]=\"outComeCompleted()\"\r\n                                            (click)=\"submitOutCome()\">\r\n                                            Submit\r\n                                        </button>\r\n                                        <button class=\"mr-2 btn btn-white border border-1 text-primary btn-cancel\"\r\n                                            (click)=\"closePopup()\">\r\n                                            Back\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </p-tabPanel>\r\n                        </ng-container>\r\n                    </p-tabView>\r\n                </p-card>\r\n            </div>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!isCalendar && labelName === 'View Event'\">\r\n            <div id=\"event-create\">\r\n                <p-card styleClass=\"w-100 event-schedul\">\r\n                    <div class=\"strip_head toggleleft mb-3 px-3 py-2 bg-primary\">\r\n                        <span class=\"report_head font-weight-bold text-white\">{{ labelName }}</span>\r\n                    </div>\r\n\r\n                    <div class=\"messagecont\">\r\n                        <div class=\"p-field p-col px-3 mb-0\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-12 mb-3\">\r\n                                    <label class=\"intake-form-labels text-muted font-weight-normal mb-0\">Title</label>\r\n                                    <div class=\"col-12 p-0\">\r\n                                        <h5 class=\"mb-0 text-primary event-title font-weight-600\">\r\n                                            {{ eventForm.value.title ? eventForm.value.title : 'NA' }}\r\n                                        </h5>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"col-md-3 col-12 mb-3\">\r\n                                    <label class=\"intake-form-labels text-muted font-weight-normal mb-0\">Label</label>\r\n                                    <div class=\"col-12 p-0 font-weight-600\">{{ viewLable() }}</div>\r\n                                </div>\r\n\r\n                                <div class=\"col-md-3 col-12 mb-3\">\r\n                                    <label class=\"intake-form-labels text-muted font-weight-normal mb-0\"> Start Date &\r\n                                        Time </label>\r\n                                    <div class=\"col-12 p-0 font-weight-600\">\r\n                                        {{ eventForm.value.start | date : 'MMM dd, yyyy h:mm:ss a' }}\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"col-md-3 col-12 mb-3\">\r\n                                    <label class=\"intake-form-labels text-muted font-weight-normal mb-0\"> End Date &\r\n                                        Time </label>\r\n                                    <div class=\"col-12 p-0 font-weight-600\">\r\n                                        {{ eventForm.value.end | date : 'MMM dd, yyyy h:mm:ss a' }}\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"col-md-3 col-12 mb-3\">\r\n                                    <label class=\"intake-form-labels text-muted font-weight-normal mb-0\"> Event Type\r\n                                    </label>\r\n                                    <div class=\"col-12 p-0 font-weight-600\">{{ viewEventType() }}</div>\r\n                                </div>\r\n\r\n                                <div class=\"col-md-3 col-12 mb-3\">\r\n                                    <label class=\"intake-form-labels text-muted font-weight-normal mb-0\"> Event URL\r\n                                    </label>\r\n                                    <div class=\"col-12 p-0 text-break\">\r\n                                        <a href=\"{{ eventForm.value.eventurl }}\" rel=\"noopener\" target=\"_blank\">{{\r\n                                            eventForm.value.eventurl ? eventForm.value.eventurl : 'NA'\r\n                                            }}</a>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"col-md-3 col-12 mb-3\">\r\n                                    <label class=\"intake-form-labels text-muted font-weight-normal mb-0\"> Location\r\n                                    </label>\r\n                                    <div class=\"col-12 p-0 font-weight-600\">\r\n                                        {{ eventForm.value.location ? eventForm.value.location : 'NA' }}\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"col-md-3 col-12 mb-3\">\r\n                                    <label class=\"intake-form-labels text-muted font-weight-normal mb-0\"> Add Guest\r\n                                    </label>\r\n                                    <div class=\"col-12 p-0 font-weight-600\" *ngFor=\"let item of viewGuest()\">\r\n                                        {{ item.email ? item.email : 'NA' }} {{ '(' + item.firstname + ' ' +\r\n                                        item.lastname + ')' }}\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"col-md-3 col-12 mb-3\">\r\n                                    <label class=\"intake-form-labels text-muted font-weight-normal mb-0\"> External Email\r\n                                    </label>\r\n                                    <div class=\"col-12 p-0 font-weight-600\" *ngFor=\"let item of viewExternalUsers()\">{{\r\n                                        item }}</div>\r\n                                </div>\r\n\r\n                                <div class=\"col-md-3 col-12 mb-3\">\r\n                                    <label class=\"intake-form-labels text-muted font-weight-normal mb-0\"> Description\r\n                                    </label>\r\n                                    <div class=\"col-12 p-0 font-weight-600 text-break\">\r\n                                        {{ eventForm.value.description }}\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"col-md-3 col-12\">\r\n                                    <label class=\"intake-form-labels text-muted font-weight-normal mb-0\"> Event Owner\r\n                                    </label>\r\n                                    <div class=\"col-12 p-0 font-weight-600\">\r\n                                        {{ ownerDetails?.firstname + ' ' + ownerDetails?.lastname }}\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"p-field p-col mb-0 mt-2 d-flex flex-row-reverse text-right\">\r\n                        <button title=\"Back\" class=\"btn btn-white border border-1 text-primary btn-cancel mr-2\"\r\n                            (click)=\"closePopup()\">\r\n                            Back\r\n                        </button>\r\n                    </div>\r\n                </p-card>\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n</div>", styles: [".schedul{display:flex;min-height:100%;font-size:var(--base-font-size)}.schedul h2{margin:0;font-size:var(--font-16)}.schedul ul{margin:0;padding:0 0 0 1.5em}.schedul li{margin:1.5em 0;padding:0}.schedul b{margin-right:3px}.schedul .schedul-sidebar{width:300px;line-height:1.5;background:var(--bg-light);border-right:1px solid var(--table-border);color:var(--text-dark)}.schedul .addevent{width:100%;background-color:var(--primary)}.schedul .fc{max-width:1100px;margin:0 auto}.schedul .fc.fc-theme-standard .fc-toolbar .fc-button{text-transform:capitalize}.schedul .schedul-main{flex-grow:1;padding:0}.schedul .demo-inline-calendar-card{width:300px}.schedul .custom-control-input:checked~.custom-control-label:before{color:#fff;border-color:#7367f0;background-color:#7367f0}.schedul .custom-control-primary .custom-control-input:active~.custom-control-label:before,.schedul .custom-control-primary .custom-control-input:checked~.custom-control-label:before{background-color:#7367f0;border-color:#7367f0}.schedul .custom-control-success .custom-control-input:active~.custom-control-label:before,.schedul .custom-control-success .custom-control-input:checked~.custom-control-label:before{border-color:#28c76f;background-color:#28c76f}.schedul .custom-control-danger .custom-control-input:active~.custom-control-label:before,.schedul .custom-control-danger .custom-control-input:checked~.custom-control-label:before{border-color:#ea5455;background-color:#ea5455}.schedul .custom-control-warning .custom-control-input:active~.custom-control-label:before,.schedul .custom-control-warning .custom-control-input:checked~.custom-control-label:before{border-color:#ff9f43;background-color:#ff9f43}.schedul .custom-control-info .custom-control-input:active~.custom-control-label:before,.schedul .custom-control-info .custom-control-input:checked~.custom-control-label:before{border-color:#00cfe8;background-color:#00cfe8}.schedul .custom-control-training .custom-control-input:active~.custom-control-label:before,.schedul .custom-control-training .custom-control-input:checked~.custom-control-label:before{border-color:#39aea9;background-color:#39aea9}.schedul .custom-control-interview .custom-control-input:active~.custom-control-label:before,.schedul .custom-control-interview .custom-control-input:checked~.custom-control-label:before{border-color:#726eec;background-color:#726eec}.schedul .custom-control-guest .custom-control-input:active~.custom-control-label:before,.schedul .custom-control-guest .custom-control-input:checked~.custom-control-label:before{border-color:#e93997;background-color:#e93997}.schedul .switch input[type=checkbox]{height:0;width:0;visibility:hidden}.schedul .switch input[type=checkbox]:checked+label{background:var(--btn)}.schedul .switch input[type=checkbox]:checked+label:after{left:calc(100% - 4px);transform:translate(-100%)}.schedul .switch label{cursor:pointer;width:48px;height:24px;background:var(--light-gray);display:block;border-radius:24px;position:relative}.schedul .switch label:after{content:\"\";position:absolute;top:4px;left:4px;width:16px;height:16px;background:#fff;border-radius:16px;transition:.3s}.schedul .bg-primary-common{background:var(--primary)!important}.schedul .bullet.bullet-success{background-color:#28c76f}.schedul .bullet-primary{background-color:#7367f0}.schedul .bullet-danger{background-color:#ea5455}.schedul .bullet-warning{background-color:#ff9f43}.schedul .bullet-info{background-color:#00cfe8}.schedul .bullet-interview{background-color:#726eec}.schedul .bullet-training{background-color:#39aea9}.schedul .bullet-guest{background-color:#e93997}.schedul .bullet{width:1rem;height:1rem;border-radius:50%;display:inline-block}.schedul .bullet.bullet-sm{width:.714rem;height:.714rem;margin-right:5px}.schedul .autosuggest{position:absolute;inset:0 auto auto 0;transform:translate3d(0,38px,0);will-change:transform;float:left;min-width:10rem;padding:.5rem;margin:.125rem 0 0;font-size:1rem;color:var(--text-dark);text-align:left;list-style:none;background-color:var(--bg-light);background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem;z-index:9;width:100%;height:200px;overflow:auto}.schedul .autosuggest li{cursor:pointer;font-size:var(--base-font-size);line-height:30px;margin:0;border-bottom:solid 1px var(--table-border)}.schedul .autosuggest li:hover{color:var(--primary-light)}.schedul .mr-50,.schedul .mx-50{margin-right:.5rem!important}.schedul .rounded-circle{border-radius:50%!important}:host ::ng-deep p-tabview .p-tabview-panels{background:var(--bg-light);color:var(--text-dark)}:host ::ng-deep p-tabview .p-tabview-nav{border-color:var(--table-border);background:var(--bg-light)}:host ::ng-deep p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link{border-color:var(--table-border);color:var(--hover-text);background:var(--btn)!important}:host ::ng-deep p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link:focus{box-shadow:inset 0 0 0 .2rem var(--primary-light)}:host ::ng-deep p-tabview .p-tabview-nav li .p-tabview-nav-link{border-color:var(--table-border);color:var(--text-dark);background:var(--bg-light)!important}:host ::ng-deep p-tabview .p-tabview-nav li .p-tabview-nav-link:hover{text-decoration:none}:host ::ng-deep p-tabview .p-element{font-size:var(--base-font-size)}@media (min-width: 768px) and (max-width: 1024px) and (orientation: portrait){.schedul .schedul-sidebar .schedul-calendar-event,.schedul .schedul-sidebar .card-body{display:inline-block;width:auto;vertical-align:top;padding-top:0}}@media (max-width: 991px){.schedul{display:block}.schedul .schedul-main{margin-top:15px}.schedul .schedul-sidebar,.schedul .schedul-main{width:100%}}.uploadpartdisplay .uploaded-files{display:flex;flex:1;flex-direction:row;padding:0 0 0 .1em}.uploadpartdisplay .uploaded-files li{list-style-type:none}.uploadpartdisplay .uploaded-files select{background-color:var(--bg-light);color:var(--text-dark);border-color:var(--table-border)}.uploadpartdisplay .uploaded-files li:first-child,.uploadpartdisplay .uploaded-files li:last-child{width:25px}.uploadpartdisplay .uploaded-files li:nth-child(2){width:calc(100% - 30px);margin-right:10px}.uploadpartdisplay .uploaded-files label{font-size:var(--base-font-size);margin-bottom:0}.uploadpartdisplay .uploaded-files hr{height:1px;background-color:var(--primary-light)}.uploadpartdisplay .uploaded-files .fa{color:var(--primary)}.uploadpartdisplay .uploaded-files .form-control{background-color:var(--bg-light);color:var(--text-dark);border-color:var(--table-border);padding:.5rem .75rem;height:36px}:host ::ng-deep .p-fileupload-row,:host ::ng-deep .p-fileupload-content{display:none}.uploadfile-attache{max-height:150px;overflow-y:auto}.upload-box{display:flex;flex:1;-webkit-box-flex:1;-moz-box-flex:1;flex-direction:column;align-items:center;justify-content:center;padding:20px;min-height:150px;border:2px dashed var(--table-border)}.upload-box .material-icon{font-size:45px}.upload-box .drobordrag{font-size:var(--base-font-size);font-weight:600}.upload-box .drobordrag label{cursor:pointer}.toggleleft .report_head{font-size:var(--base-font-size);font-weight:600;display:block}:host ::ng-deep .event-schedul .p-card-body,:host ::ng-deep .event-schedul .p-card-content{padding:0}:host ::ng-deep .event-schedul .form-control{background-color:var(--bg-light);color:var(--text-dark);border-color:var(--table-border);padding:.5rem .75rem}:host ::ng-deep .event-schedul .p-calendar{width:100%}:host ::ng-deep .event-schedul .form-control.eventmultiguest{padding:.3rem .5rem}:host ::ng-deep .fc.fc-theme-standard a{color:var(--text-dark)}:host ::ng-deep .fc.fc-theme-standard .fc-toolbar-title{color:var(--text-dark)}:host ::ng-deep .fc.fc-theme-standard .fc-view{background:var(--bg-light)}:host ::ng-deep .fc.fc-theme-standard .fc-day-today{background-color:var(--primary)}:host ::ng-deep .fc.fc-theme-standard .fc-day-today a{color:var(--hover-text)}:host ::ng-deep .fc.fc-theme-standard .fc-view-harness .fc-scrollgrid{border-color:var(--table-border)}:host ::ng-deep .fc.fc-theme-standard .fc-view-harness .fc-scrollgrid td{border-color:var(--table-border)}:host ::ng-deep .schedul .p-calendar .p-datepicker{background:var(--bg-light);border:1px solid var(--table-border);color:var(--text-dark)}:host ::ng-deep .schedul .p-calendar .p-datepicker .p-datepicker-header{background:var(--background-color);border-bottom:1px solid var(--table-border)}:host ::ng-deep .schedul .p-calendar .p-datepicker .p-datepicker-header .p-datepicker-title .p-link{color:var(--nav-text)}.single-timeline-content{position:relative;z-index:1;border-radius:6px;box-shadow:0 .25rem 1rem #2f5bea20;border:1px solid #ebebeb;height:100%;align-items:center}.single-timeline-content .timeline-date{transition-duration:.5s;width:70px;background-color:var(--primary);flex:0 0 70px;text-align:center;max-width:70px;margin-right:15px;display:flex;align-items:center;justify-content:center;font-weight:600;color:#fff;line-height:normal;height:100%;flex-direction:column}.single-timeline-content .timeline-text{width:100%;padding:10px}.single-timeline-content .timeline-text h6{transition-duration:.5s;margin-bottom:0;font-weight:600;text-transform:capitalize}.single-timeline-content .timeline-text p{font-size:13px;margin-bottom:0}.single-timeline-content:hover,.single-timeline-content:focus{cursor:default}.single-timeline-content:hover .timeline-date,.single-timeline-content:focus .timeline-date{background-color:var(--primary-light)}.single-timeline-content:hover .timeline-text h6,.single-timeline-content:focus .timeline-text h6{color:var(--primary)}@media only screen and (max-width: 575px){.single-timeline-content{padding:20px}}\n"] }]
        }], ctorParameters: function () { return [{ type: i1$1.FormBuilder }, { type: EventSchedulerService }, { type: AlertService }, { type: HttpService }, { type: i5.ActivatedRoute }, { type: i5.Router }, { type: DataStoreService }]; }, propDecorators: { calendarComponent: [{
                type: ViewChild,
                args: ['calendar']
            }], startDatePicker: [{
                type: ViewChild,
                args: ['startDatePicker']
            }], endDatePicker: [{
                type: ViewChild,
                args: ['endDatePicker']
            }] } });

class EventComponent {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: EventComponent, deps: [{ token: PermissionStore }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: EventComponent, selector: "event", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", schedulerEvent: "schedulerEvent" }, ngImport: i0, template: `
        <event-scheduler></event-scheduler>
  `, isInline: true, dependencies: [{ kind: "component", type: EventsComponent, selector: "event-scheduler" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: EventComponent, decorators: [{
            type: Component,
            args: [{ selector: 'event', template: `
        <event-scheduler></event-scheduler>
  ` }]
        }], ctorParameters: function () { return [{ type: PermissionStore }, { type: DataStoreService }]; }, propDecorators: { RBACORG: [{
                type: Input
            }], PERMISSION: [{
                type: Input
            }], schedulerEvent: [{
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

class PicsEventModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsEventModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: PicsEventModule, declarations: [EventsComponent], imports: [CommonModule,
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
            AlertModule,
            FullCalendarModule], exports: [EventsComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsEventModule, imports: [CommonModule,
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
            AlertModule,
            FullCalendarModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsEventModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        EventsComponent
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
                        AlertModule,
                        FullCalendarModule
                    ],
                    exports: [
                        EventsComponent
                    ],
                    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
                }]
        }] });

class CardiEventModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardiEventModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: CardiEventModule, declarations: [EventComponent], imports: [PicsEventModule], exports: [EventComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardiEventModule, providers: [DatePipe, EventSchedulerService, HttpClient, HttpService, AlertService, ConfirmationService, PermissionStore, DataStoreService], imports: [PicsEventModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardiEventModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        EventComponent
                    ],
                    imports: [
                        PicsEventModule
                    ],
                    exports: [
                        EventComponent
                    ],
                    providers: [DatePipe, EventSchedulerService, HttpClient, HttpService, AlertService, ConfirmationService, PermissionStore, DataStoreService]
                }]
        }] });

/*
 * Public API Surface of event
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CardiEventModule, EventComponent, EventService };
//# sourceMappingURL=pics-module-event.mjs.map
