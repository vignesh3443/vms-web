import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../permissions/permission.store";
export class PermissionDirective {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i1.PermissionStore }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: PermissionDirective, selector: "[fieldKey]", inputs: { fieldKey: "fieldKey" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[fieldKey]'
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i1.PermissionStore }]; }, propDecorators: { fieldKey: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLW1vZHVsZS9ldmVudC9zcmMvbGliL3BpY3MtZXZlbnQvQGNvcmUvZGlyZWN0aXZlcy9wZXJtaXNzaW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBYyxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7OztBQVF2RixNQUFNLE9BQU8sbUJBQW1CO0lBSVg7SUFDVDtJQUNBO0lBTEQsUUFBUSxDQUFVO0lBQzNCLFdBQVcsQ0FBTTtJQUNqQixZQUNtQixRQUFtQixFQUM1QixVQUFzQixFQUN0QixTQUEwQjtRQUZqQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQzVCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsY0FBUyxHQUFULFNBQVMsQ0FBaUI7SUFFcEMsQ0FBQztJQUNELGVBQWU7UUFDYixNQUFNLFdBQVcsR0FBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztRQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO1FBQ3ZELElBQUksV0FBVyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUMvQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztnQkFDL0MsSUFBSSxRQUFRLENBQUMsT0FBTyxLQUFLLEdBQUcsRUFBRTtvQkFDNUIsSUFBSSxRQUFRLEVBQUU7d0JBQ1osTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQzt3QkFDdEYsQ0FBQyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO3dCQUNqQyxDQUFDLENBQUMsSUFBSSxHQUFHLHFCQUFxQixDQUFDO3dCQUMvQixDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDO3dCQUNyQixDQUFDLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7d0JBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO3FCQUNwRTtpQkFDRjtxQkFBTSxJQUNMLFFBQVEsQ0FBQyxPQUFPLEtBQUssZUFBZTtvQkFDcEMsUUFBUSxDQUFDLE9BQU8sS0FBSyxZQUFZO29CQUNqQyxRQUFRLENBQUMsT0FBTyxLQUFLLFlBQVk7b0JBQ2pDLFFBQVEsQ0FBQyxPQUFPLEtBQUssY0FBYztvQkFDbkMsUUFBUSxDQUFDLE9BQU8sS0FBSyxlQUFlO29CQUNwQyxRQUFRLENBQUMsT0FBTyxLQUFLLFlBQVksRUFDakM7b0JBQ0EsSUFBSSxRQUFRLEVBQUU7d0JBQ1osTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQzt3QkFDdEYsQ0FBQyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO3dCQUNqQyxDQUFDLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7d0JBQ2pDLENBQUMsQ0FBQyxTQUFTLElBQUksYUFBYSxDQUFDO3dCQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztxQkFDcEU7aUJBQ0Y7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO29CQUM3RSxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FDcEUsMkRBQTJELENBQzVELENBQUM7b0JBQ0YsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFO3dCQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO29CQUN2RCxDQUFDLENBQUMsQ0FBQztpQkFDSjthQUNGO1NBQ0Y7SUFDSCxDQUFDO3dHQWxEVSxtQkFBbUI7NEZBQW5CLG1CQUFtQjs7NEZBQW5CLG1CQUFtQjtrQkFIL0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtpQkFDdkI7dUpBRVUsUUFBUTtzQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQZXJtaXNzaW9uU3RvcmUgfSBmcm9tICcuLi9wZXJtaXNzaW9ucy9wZXJtaXNzaW9uLnN0b3JlJztcclxuXHJcblxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbZmllbGRLZXldJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUGVybWlzc2lvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIGZpZWxkS2V5ITogc3RyaW5nO1xyXG4gIHBlcm1pc3Npb25zOiBhbnk7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIGRhdGFTdG9yZTogUGVybWlzc2lvblN0b3JlXHJcbiAgKSB7XHJcbiAgfVxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIGNvbnN0IHBlcm1pc3Npb25zID0gIHRoaXMuZGF0YVN0b3JlLnN0YXRlO1xyXG4gICAgY29uc29sZS5sb2cocGVybWlzc2lvbnMsICdwZXJtaXNzaW9ucyBldmVudCBzY2hlZHVsZXInKTtcclxuICAgICBpZiAocGVybWlzc2lvbnMpIHtcclxuICAgICAgaWYgKCFwZXJtaXNzaW9uc1t0aGlzLmZpZWxkS2V5XSkge1xyXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgaWYgKHRlbXBsYXRlLnRhZ05hbWUgPT09ICdBJykge1xyXG4gICAgICAgICAgaWYgKHRlbXBsYXRlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICAgIHIuaW5uZXJIVE1MID0gdGVtcGxhdGUuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICByLmhyZWYgPSAnamF2YXNjcmlwdDp2b2lkKDApOyc7XHJcbiAgICAgICAgICAgIHJbJ2Rpc2FibGVkJ10gPSB0cnVlO1xyXG4gICAgICAgICAgICByLmNsYXNzTmFtZSA9IHRlbXBsYXRlLmNsYXNzTmFtZTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQociwgdGVtcGxhdGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICB0ZW1wbGF0ZS50YWdOYW1lID09PSAnUC1NVUxUSVNFTEVDVCcgfHxcclxuICAgICAgICAgIHRlbXBsYXRlLnRhZ05hbWUgPT09ICdQLURST1BET1dOJyB8fFxyXG4gICAgICAgICAgdGVtcGxhdGUudGFnTmFtZSA9PT0gJ1AtQ0hFQ0tCT1gnIHx8XHJcbiAgICAgICAgICB0ZW1wbGF0ZS50YWdOYW1lID09PSAnUC1UUkVFU0VMRUNUJyB8fFxyXG4gICAgICAgICAgdGVtcGxhdGUudGFnTmFtZSA9PT0gJ1AtUkFESU9CVVRUT04nIHx8XHJcbiAgICAgICAgICB0ZW1wbGF0ZS50YWdOYW1lID09PSAnUC1DQUxFTkRBUidcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGlmICh0ZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICBjb25zdCByID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICByLmlubmVySFRNTCA9IHRlbXBsYXRlLmlubmVySFRNTDtcclxuICAgICAgICAgICAgci5jbGFzc05hbWUgPSB0ZW1wbGF0ZS5jbGFzc05hbWU7XHJcbiAgICAgICAgICAgIHIuY2xhc3NOYW1lICs9ICcgcC1kaXNhYmxlZCc7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHIsIHRlbXBsYXRlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgJ3RydWUnKTtcclxuICAgICAgICAgIGNvbnN0IGNoaWxkSW5wdXROb2RlcyA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICAgICdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSwgYnV0dG9uLCBhLCBuZy1zZWxlY3QsIGRpdiwgbGFibGUnXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgY2hpbGRJbnB1dE5vZGVzLmZvckVhY2goKGVsZW06IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbGVtLCAnZGlzYWJsZWQnLCAndHJ1ZScpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==