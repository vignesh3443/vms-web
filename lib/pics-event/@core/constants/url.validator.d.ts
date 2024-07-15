import { ValidatorFn } from '@angular/forms';
export declare class RegexConstants {
    static URLVALIDATE: RegExp;
}
export declare class RegexUrlConstants {
    static URLVALIDATE: string;
}
export declare class RegexUrlMultipleConstants {
    static URLVALIDATE: RegExp;
}
export declare function RegexValidator(reg: RegexConstants): ValidatorFn;
export declare function CommaSepEmail(_reg: any): ValidatorFn;
