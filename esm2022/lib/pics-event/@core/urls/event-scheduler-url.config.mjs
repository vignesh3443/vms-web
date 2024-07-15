export class EventSchedulerConfig {
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
export class RBACINFO {
    apiHost = '';
    tokenKey = '';
    others;
    orgID;
    environment;
}
export class Environment {
    mstrUsername;
    mstrPassword;
    mstrURL;
    mstrProjectID;
    applicationid;
    priority;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtc2NoZWR1bGVyLXVybC5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLW1vZHVsZS9ldmVudC9zcmMvbGliL3BpY3MtZXZlbnQvQGNvcmUvdXJscy9ldmVudC1zY2hlZHVsZXItdXJsLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sb0JBQW9CO0lBQ3hCLE1BQU0sQ0FBQyxRQUFRLEdBQUc7UUFDdkIsV0FBVyxFQUFFO1lBQ1gsc0JBQXNCLEVBQUUsaUNBQWlDO1lBQ3pELFNBQVMsRUFBRSwrQ0FBK0M7WUFDMUQsV0FBVyxFQUFFLDBDQUEwQztZQUN2RCxXQUFXLEVBQUUsb0NBQW9DO1lBQ2pELFdBQVcsRUFBRSxvQ0FBb0M7WUFDakQsVUFBVSxFQUFFLG9EQUFvRDtZQUNoRSxTQUFTLEVBQUUsZ0ZBQWdGO1lBQzNGLGNBQWMsRUFBRSxvQ0FBb0M7WUFDcEQsY0FBYyxFQUFFLGdCQUFnQjtZQUNoQyxRQUFRLEVBQUUsb0NBQW9DO1lBQzlDLGVBQWUsRUFBRSxtREFBbUQ7WUFDcEUsc0JBQXNCLEVBQUUscURBQXFEO1lBQzdFLFNBQVMsRUFBRSwwQkFBMEI7WUFDckMsZUFBZSxFQUFFLCtDQUErQztZQUNoRSxtQkFBbUIsRUFBRSxvQ0FBb0M7WUFDekQsbUJBQW1CLEVBQUUscUJBQXFCO1lBQzFDLGdCQUFnQixFQUFFLGdEQUFnRDtZQUNsRSxnQkFBZ0IsRUFBRSx3REFBd0Q7WUFDMUUsZ0JBQWdCLEVBQUUsMENBQTBDO1lBQzVELGlCQUFpQixFQUFFLGlEQUFpRDtZQUNwRSxXQUFXLEVBQUUsc0RBQXNEO1NBQ3BFO1FBQ0QsV0FBVyxFQUFFO1lBQ1gscUJBQXFCLEVBQUUsMEJBQTBCO1lBQ2pELGlCQUFpQixFQUFFLDhDQUE4QztZQUNqRSxTQUFTLEVBQUUsMEJBQTBCO1lBQ3JDLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsY0FBYyxFQUFFLHdCQUF3QjtZQUN4QyxhQUFhLEVBQUUsaUJBQWlCO1NBQ2pDO0tBQ0YsQ0FBQzs7QUFFSixNQUFNLE9BQU8sUUFBUTtJQUNuQixPQUFPLEdBQUUsRUFBRSxDQUFDO0lBQ1osUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNkLE1BQU0sQ0FBTztJQUNiLEtBQUssQ0FBTztJQUNaLFdBQVcsQ0FBZTtDQUMzQjtBQUNELE1BQU0sT0FBTyxXQUFXO0lBQ3RCLFlBQVksQ0FBVTtJQUN0QixZQUFZLENBQVU7SUFDdEIsT0FBTyxDQUFVO0lBQ2pCLGFBQWEsQ0FBVTtJQUN2QixhQUFhLENBQVU7SUFDdkIsUUFBUSxDQUFTO0NBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEV2ZW50U2NoZWR1bGVyQ29uZmlnIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgQXBwb2ludG1lbnQ6IHtcclxuICAgICAgZ2V0UmVmZXJyYWxTdWdnZXN0aW9uczogJy9yZWYvcmVmZXJyYWwvcmVmZXJyYWxzP3NlYXJjaD0nLFxyXG4gICAgICBnZXRMYWJlbHM6ICcvcGxhdGZvcm0vbWFzdGVyL2xvb2t1cC9sb29rdXBieWNhdGVnb3J5bmFtZS8nLFxyXG4gICAgICBjcmVhdGVFdmVudDogJy9zb2x1dGlvbi9jYWxlbmRhci13b3JrZmxvdy9ldmVudC9jcmVhdGUnLFxyXG4gICAgICB1cGRhdGVFdmVudDogJy9zb2x1dGlvbi9jYWxlbmRhci13b3JrZmxvdy9ldmVudC8nLFxyXG4gICAgICBkZWxldGVFdmVudDogJy9zb2x1dGlvbi9jYWxlbmRhci13b3JrZmxvdy9ldmVudC8nLFxyXG4gICAgICBsaXN0RXZlbnRzOiAnL3NvbHV0aW9uL2NhbGVuZGFyLXdvcmtmbG93L2V2ZW50L2dldEJ5Q3VycmVudFVzZXInLFxyXG4gICAgICBMaXN0VXNlcnM6ICcvb3JnL3VzZXIvb3JnYW5pemF0aW9uL3tvcmdpZH0/YWRkQWRkaXRpb25hbEluZm89ZmFsc2UmZXhjbHVkZUN1cnJlbnR1c2VyPXRydWUnLFxyXG4gICAgICBjb21wbGV0ZUV2ZW50MTogJy9zb2x1dGlvbi9jYWxlbmRhci13b3JrZmxvdy9ldmVudC8nLFxyXG4gICAgICBjb21wbGV0ZUV2ZW50MjogJy9jb21wbGV0ZUV2ZW50JyxcclxuICAgICAgZ2V0RXZlbnQ6ICcvc29sdXRpb24vY2FsZW5kYXItd29ya2Zsb3cvZXZlbnQvJyxcclxuICAgICAgYWRkRXZlbnRPdXRjb21lOiAnL3NvbHV0aW9uL2NhbGVuZGFyLXdvcmtmbG93L2V2ZW50L2FkZEV2ZW50T3V0Y29tZScsXHJcbiAgICAgIGNyZWF0ZUV2ZW50QXR0YWNoZW1lbnQ6ICcvc29sdXRpb24vY2FsZW5kYXItd29ya2Zsb3cvZXZlbnQtYXR0YWNobWVudC9jcmVhdGUnLFxyXG4gICAgICBVcGxvYWRLZXk6ICcvY29tbW9uL2ZpbGVzL3VwbG9hZC1rZXknLFxyXG4gICAgICBldmVudEF0dGFjaG1lbnQ6ICcvc29sdXRpb24vY2FsZW5kYXItd29ya2Zsb3cvZXZlbnQtYXR0YWNobWVudC8nLFxyXG4gICAgICB1cGRhdGVFdmVudE91dGNvbWUxOiAnL3NvbHV0aW9uL2NhbGVuZGFyLXdvcmtmbG93L2V2ZW50LycsXHJcbiAgICAgIHVwZGF0ZUV2ZW50T3V0Y29tZTI6ICcvdXBkYXRlRXZlbnRPdXRjb21lJyxcclxuICAgICAgY3JlYXRlRXZlbnRZb3V0aDogJy9zb2x1dGlvbi9jYWxlbmRhci13b3JrZmxvdy9ldmVudC15b3V0aC9jcmVhdGUnLFxyXG4gICAgICB5b3V0aEV2ZW50U2VhcmNoOiAnL3NvbHV0aW9uL2NhbGVuZGFyLXdvcmtmbG93L2V2ZW50LXlvdXRoL3lvdXRocz9zZWFyY2g9JyxcclxuICAgICAgdXBkYXRlRXZlbnRZb3V0aDogJy9zb2x1dGlvbi9jYWxlbmRhci13b3JrZmxvdy9ldmVudC15b3V0aC8nLFxyXG4gICAgICBnZXRFdmVudEJ5WW91dGhJZDogJy9zb2x1dGlvbi9jYWxlbmRhci13b3JrZmxvdy9ldmVudC9nZXRCeVlvdXRoSWQvJyxcclxuICAgICAgSG9saWRheUxpc3Q6ICcvc29sdXRpb24vY2FsZW5kYXItd29ya2Zsb3cvZXZlbnQvZ2V0cHVibGljaG9saWRheXMvJyBcclxuICAgIH0sXHJcbiAgICBBdHRhY2htZW50czoge1xyXG4gICAgICBHZXRBdHRhY2htZW50UmVmZXJyYWw6ICcvcmVmL2F0dGFjaG1lbnQvcmVmZXJyYWwnLFxyXG4gICAgICBHZXRDYXRlZ29yeUxvb2t1cDogJy9wbGF0Zm9ybS9tYXN0ZXIvbG9va3VwL2xvb2t1cGJ5Y2F0ZWdvcnluYW1lJyxcclxuICAgICAgVXBsb2FkS2V5OiAnL2NvbW1vbi9maWxlcy91cGxvYWQta2V5JyxcclxuICAgICAgRG93bmxvYWRLZXk6ICcvY29tbW9uL2ZpbGVzL2Rvd25sb2FkLWtleScsXHJcbiAgICAgIFBvc3RBdHRhY2htZW50OiAnL3JlZi9hdHRhY2htZW50L2NyZWF0ZScsXHJcbiAgICAgIFB1dEF0dGFjaG1lbnQ6ICcvcmVmL2F0dGFjaG1lbnQnXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5leHBvcnQgY2xhc3MgUkJBQ0lORk8ge1xyXG4gIGFwaUhvc3QgPScnO1xyXG4gIHRva2VuS2V5ID0gJyc7XHJcbiAgb3RoZXJzPzogYW55O1xyXG4gIG9yZ0lEPzogYW55O1xyXG4gIGVudmlyb25tZW50PzogRW52aXJvbm1lbnQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50IHtcclxuICBtc3RyVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgbXN0clBhc3N3b3JkPzogc3RyaW5nO1xyXG4gIG1zdHJVUkw/OiBzdHJpbmc7XHJcbiAgbXN0clByb2plY3RJRD86IHN0cmluZztcclxuICBhcHBsaWNhdGlvbmlkPzogc3RyaW5nO1xyXG4gIHByaW9yaXR5Pzogc3RyaW5nXHJcbn1cclxuIl19