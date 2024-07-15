import { Injectable } from '@angular/core';
import { EventSchedulerConfig } from '../urls/event-scheduler-url.config';
import * as i0 from "@angular/core";
import * as i1 from "./http.service";
export class EventSchedulerService {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: EventSchedulerService, deps: [{ token: i1.HttpService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: EventSchedulerService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: EventSchedulerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtc2NoZWR1bGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLW1vZHVsZS9ldmVudC9zcmMvbGliL3BpY3MtZXZlbnQvQGNvcmUvc2VydmljZS9ldmVudC1zY2hlZHVsZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7QUFLMUUsTUFBTSxPQUFPLHFCQUFxQjtJQUNaO0lBQXBCLFlBQW9CLElBQWlCO1FBQWpCLFNBQUksR0FBSixJQUFJLENBQWE7SUFBRyxDQUFDO0lBRXpDLGdCQUFnQixDQUFDLFVBQWU7UUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7SUFDRCxTQUFTLENBQUMsWUFBaUI7UUFDekIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBQ0QsV0FBVyxDQUFDLEtBQVU7UUFDcEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBQ0QsV0FBVyxDQUFDLEVBQU8sRUFBRSxLQUFVO1FBQzdCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEdBQUcsRUFBRSxFQUFFLEtB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Q0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGdCQUFnQixHQUFHLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqRyxDQUFDO0lBQ0QsaUJBQWlCLENBQUMsT0FBWTtRQUM1QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEdBQUcsT0FBTyxDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUNELGlCQUFpQixDQUFDLElBQVM7UUFDekIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGlCQUFpQixHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNqRyxDQUFDO0lBQ0QsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUU3RSxDQUFDO3dHQXpFVSxxQkFBcUI7NEdBQXJCLHFCQUFxQixjQUZwQixNQUFNOzs0RkFFUCxxQkFBcUI7a0JBSGpDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gJy4vaHR0cC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXZlbnRTY2hlZHVsZXJDb25maWcgfSBmcm9tICcuLi91cmxzL2V2ZW50LXNjaGVkdWxlci11cmwuY29uZmlnJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEV2ZW50U2NoZWR1bGVyU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwU2VydmljZSkge31cclxuXHJcbiAgeW91dGhFdmVudFNlYXJjaChzZWFyY2hUZXh0OiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KEV2ZW50U2NoZWR1bGVyQ29uZmlnLkVuZFBvaW50LkFwcG9pbnRtZW50LnlvdXRoRXZlbnRTZWFyY2ggKyBzZWFyY2hUZXh0KTtcclxuICB9XHJcbiAgZ2V0TGFiZWxzKGNhdGVnb3J5bmFtZTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChFdmVudFNjaGVkdWxlckNvbmZpZy5FbmRQb2ludC5BcHBvaW50bWVudC5nZXRMYWJlbHMgKyBjYXRlZ29yeW5hbWUpO1xyXG4gIH1cclxuICBjcmVhdGVFdmVudChtb2RhbDogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoRXZlbnRTY2hlZHVsZXJDb25maWcuRW5kUG9pbnQuQXBwb2ludG1lbnQuY3JlYXRlRXZlbnQsIG1vZGFsKTtcclxuICB9XHJcbiAgdXBkYXRlRXZlbnQoaWQ6IGFueSwgbW9kYWw6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaChFdmVudFNjaGVkdWxlckNvbmZpZy5FbmRQb2ludC5BcHBvaW50bWVudC51cGRhdGVFdmVudCArIGlkLCBtb2RhbCk7XHJcbiAgfVxyXG4gIGRlbGV0ZUV2ZW50KGlkOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKEV2ZW50U2NoZWR1bGVyQ29uZmlnLkVuZFBvaW50LkFwcG9pbnRtZW50LmRlbGV0ZUV2ZW50ICsgaWQpO1xyXG4gIH1cclxuICBnZXRMaXN0RXZlbnRzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoRXZlbnRTY2hlZHVsZXJDb25maWcuRW5kUG9pbnQuQXBwb2ludG1lbnQubGlzdEV2ZW50cyk7XHJcbiAgfVxyXG4gIGdldExpc3RVc2VycyhvcmdpZCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoRXZlbnRTY2hlZHVsZXJDb25maWcuRW5kUG9pbnQuQXBwb2ludG1lbnQuTGlzdFVzZXJzLnJlcGxhY2UoJ3tvcmdpZH0nLCBvcmdpZCkpO1xyXG4gIH1cclxuICBnZXRFdmVudFR5cGUoZXZlbnRUeXBlOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KEV2ZW50U2NoZWR1bGVyQ29uZmlnLkVuZFBvaW50LkFwcG9pbnRtZW50LmdldExhYmVscyArIGV2ZW50VHlwZSk7XHJcbiAgfVxyXG4gIGNvbXBsZXRlRXZlbnQoaWQ6IGFueSwgbW9kYWw6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaChcclxuICAgICAgRXZlbnRTY2hlZHVsZXJDb25maWcuRW5kUG9pbnQuQXBwb2ludG1lbnQuY29tcGxldGVFdmVudDEgK1xyXG4gICAgICAgIGlkICtcclxuICAgICAgICBFdmVudFNjaGVkdWxlckNvbmZpZy5FbmRQb2ludC5BcHBvaW50bWVudC5jb21wbGV0ZUV2ZW50MixcclxuICAgICAgbW9kYWxcclxuICAgICk7XHJcbiAgfVxyXG4gIGdldEV2ZW50SW5mbyhldmVudElkOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KEV2ZW50U2NoZWR1bGVyQ29uZmlnLkVuZFBvaW50LkFwcG9pbnRtZW50LmdldEV2ZW50ICsgZXZlbnRJZCk7XHJcbiAgfVxyXG4gIGFkZEV2ZW50T3V0Y29tZShtb2RhbDogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoRXZlbnRTY2hlZHVsZXJDb25maWcuRW5kUG9pbnQuQXBwb2ludG1lbnQuYWRkRXZlbnRPdXRjb21lLCBtb2RhbCk7XHJcbiAgfVxyXG4gIGNyZWF0ZUV2ZW50QXR0YWNoZW1lbnQobW9kYWw6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KEV2ZW50U2NoZWR1bGVyQ29uZmlnLkVuZFBvaW50LkFwcG9pbnRtZW50LmNyZWF0ZUV2ZW50QXR0YWNoZW1lbnQsIG1vZGFsKTtcclxuICB9XHJcbiAgdXBsb2FkS2V5KG9ianBhcmFtczogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoRXZlbnRTY2hlZHVsZXJDb25maWcuRW5kUG9pbnQuQXBwb2ludG1lbnQuVXBsb2FkS2V5LCBvYmpwYXJhbXMpO1xyXG4gIH1cclxuICBkZWxldGVFdmVudEF0dGFjaG1lbnQoZXZlbnRJZDogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZShFdmVudFNjaGVkdWxlckNvbmZpZy5FbmRQb2ludC5BcHBvaW50bWVudC5ldmVudEF0dGFjaG1lbnQgKyBldmVudElkKTtcclxuICB9XHJcbiAgdXBkYXRlRXZlbnRPdXRjb21lKGlkOiBhbnksIG1vZGFsOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucGF0Y2goXHJcbiAgICAgIEV2ZW50U2NoZWR1bGVyQ29uZmlnLkVuZFBvaW50LkFwcG9pbnRtZW50LnVwZGF0ZUV2ZW50T3V0Y29tZTEgK1xyXG4gICAgICAgIGlkICtcclxuICAgICAgICBFdmVudFNjaGVkdWxlckNvbmZpZy5FbmRQb2ludC5BcHBvaW50bWVudC51cGRhdGVFdmVudE91dGNvbWUyLFxyXG4gICAgICBtb2RhbFxyXG4gICAgKTtcclxuICB9XHJcbiAgY3JlYXRlWW91dGhFdmVudChvYmpwYXJhbXM6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KEV2ZW50U2NoZWR1bGVyQ29uZmlnLkVuZFBvaW50LkFwcG9pbnRtZW50LmNyZWF0ZUV2ZW50WW91dGgsIG9ianBhcmFtcyk7XHJcbiAgfVxyXG4gIHVwYWRhdGVFdmVudFdpdGhZb3V0aGlkKGlkOiBhbnksIG1vZGFsOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucGF0Y2goRXZlbnRTY2hlZHVsZXJDb25maWcuRW5kUG9pbnQuQXBwb2ludG1lbnQudXBkYXRlRXZlbnRZb3V0aCArIGlkLCBtb2RhbCk7XHJcbiAgfVxyXG4gIGdldEV2ZW50QnlZb3V0aElkKHlvdXRoSWQ6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoRXZlbnRTY2hlZHVsZXJDb25maWcuRW5kUG9pbnQuQXBwb2ludG1lbnQuZ2V0RXZlbnRCeVlvdXRoSWQgKyB5b3V0aElkKTtcclxuICB9XHJcbiAgZ2V0Q2F0ZWdvcnlMb29rdXAobmFtZTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChFdmVudFNjaGVkdWxlckNvbmZpZy5FbmRQb2ludC5BdHRhY2htZW50cy5HZXRDYXRlZ29yeUxvb2t1cCArICcvJyArIG5hbWUpO1xyXG4gIH1cclxuICBnZXRIb2xpZGF5TGlzdCgpe1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoRXZlbnRTY2hlZHVsZXJDb25maWcuRW5kUG9pbnQuQXBwb2ludG1lbnQuSG9saWRheUxpc3QpXHJcblxyXG4gIH1cclxufVxyXG4iXX0=