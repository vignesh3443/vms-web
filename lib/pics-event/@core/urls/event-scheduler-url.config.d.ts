export declare class EventSchedulerConfig {
    static EndPoint: {
        Appointment: {
            getReferralSuggestions: string;
            getLabels: string;
            createEvent: string;
            updateEvent: string;
            deleteEvent: string;
            listEvents: string;
            ListUsers: string;
            completeEvent1: string;
            completeEvent2: string;
            getEvent: string;
            addEventOutcome: string;
            createEventAttachement: string;
            UploadKey: string;
            eventAttachment: string;
            updateEventOutcome1: string;
            updateEventOutcome2: string;
            createEventYouth: string;
            youthEventSearch: string;
            updateEventYouth: string;
            getEventByYouthId: string;
            HolidayList: string;
        };
        Attachments: {
            GetAttachmentReferral: string;
            GetCategoryLookup: string;
            UploadKey: string;
            DownloadKey: string;
            PostAttachment: string;
            PutAttachment: string;
        };
    };
}
export declare class RBACINFO {
    apiHost: string;
    tokenKey: string;
    others?: any;
    orgID?: any;
    environment?: Environment;
}
export declare class Environment {
    mstrUsername?: string;
    mstrPassword?: string;
    mstrURL?: string;
    mstrProjectID?: string;
    applicationid?: string;
    priority?: string;
}
