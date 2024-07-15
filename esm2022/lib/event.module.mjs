import { NgModule } from '@angular/core';
import { EventComponent } from './event.component';
import { HttpClient } from '@angular/common/http';
import { ConfirmationService } from 'primeng/api';
import { PermissionStore } from './pics-event/@core/permissions/permission.store';
import { AlertService } from './pics-event/@core/service/alert.service';
import { DataStoreService } from './pics-event/@core/service/data-store.service';
import { EventSchedulerService } from './pics-event/@core/service/event-scheduler.service';
import { HttpService } from './pics-event/@core/service/http.service';
import { PicsEventModule } from './pics-event/pics-event.module';
import { DatePipe } from '@angular/common';
import * as i0 from "@angular/core";
export class CardiEventModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1tb2R1bGUvZXZlbnQvc3JjL2xpYi9ldmVudC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDbEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDakUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQWdCM0MsTUFBTSxPQUFPLGdCQUFnQjt3R0FBaEIsZ0JBQWdCO3lHQUFoQixnQkFBZ0IsaUJBVnpCLGNBQWMsYUFHZCxlQUFlLGFBR2YsY0FBYzt5R0FJTCxnQkFBZ0IsYUFGaEIsQ0FBQyxRQUFRLEVBQUUscUJBQXFCLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixDQUFDLFlBTHpJLGVBQWU7OzRGQU9OLGdCQUFnQjtrQkFaNUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osY0FBYztxQkFDZjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsZUFBZTtxQkFDaEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGNBQWM7cUJBQ2Y7b0JBQ0QsU0FBUyxFQUFFLENBQUMsUUFBUSxFQUFFLHFCQUFxQixFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQztpQkFDNUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFdmVudENvbXBvbmVudCB9IGZyb20gJy4vZXZlbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uU2VydmljZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcclxuaW1wb3J0IHsgUGVybWlzc2lvblN0b3JlIH0gZnJvbSAnLi9waWNzLWV2ZW50L0Bjb3JlL3Blcm1pc3Npb25zL3Blcm1pc3Npb24uc3RvcmUnO1xyXG5pbXBvcnQgeyBBbGVydFNlcnZpY2UgfSBmcm9tICcuL3BpY3MtZXZlbnQvQGNvcmUvc2VydmljZS9hbGVydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGF0YVN0b3JlU2VydmljZSB9IGZyb20gJy4vcGljcy1ldmVudC9AY29yZS9zZXJ2aWNlL2RhdGEtc3RvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IEV2ZW50U2NoZWR1bGVyU2VydmljZSB9IGZyb20gJy4vcGljcy1ldmVudC9AY29yZS9zZXJ2aWNlL2V2ZW50LXNjaGVkdWxlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tICcuL3BpY3MtZXZlbnQvQGNvcmUvc2VydmljZS9odHRwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQaWNzRXZlbnRNb2R1bGUgfSBmcm9tICcuL3BpY3MtZXZlbnQvcGljcy1ldmVudC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBFdmVudENvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgUGljc0V2ZW50TW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBFdmVudENvbXBvbmVudFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbRGF0ZVBpcGUsIEV2ZW50U2NoZWR1bGVyU2VydmljZSwgSHR0cENsaWVudCwgSHR0cFNlcnZpY2UsIEFsZXJ0U2VydmljZSwgQ29uZmlybWF0aW9uU2VydmljZSwgUGVybWlzc2lvblN0b3JlLCBEYXRhU3RvcmVTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FyZGlFdmVudE1vZHVsZSB7IH1cclxuIl19