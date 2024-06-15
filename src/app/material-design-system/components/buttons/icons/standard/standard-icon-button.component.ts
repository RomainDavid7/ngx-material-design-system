import { Component } from "@angular/core";
import { IconButtonComponent } from "../icon/icon-button.component";

@Component({
        selector: 'mds-standard-icon-button',
        templateUrl: '../icon/icon-button.component.html',
        styleUrls: ['./standard-icon-button.component.css', '../icon/icon-button.component.css'],
        host: {
                '[class.selected]': 'selected()',
                '[tabIndex]': "element.nativeElement.hasAttribute('disabled') ? -1 : 0"
        }
})
export class StandardIconButtonComponent extends IconButtonComponent {}