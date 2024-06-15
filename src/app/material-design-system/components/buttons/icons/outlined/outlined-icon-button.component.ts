import { Component } from "@angular/core";
import { IconButtonComponent } from "../icon/icon-button.component";

@Component({
        selector: 'mds-outlined-icon-button',
        templateUrl: '../icon/icon-button.component.html',
        styleUrls: ['./outlined-icon-button.component.css', '../icon/icon-button.component.css'],
        host: {
                '[class.selected]': 'selected()',
                '[tabIndex]': "element.nativeElement.hasAttribute('disabled') ? -1 : 0"
        }
})
export class OutlinedIconButtonComponent extends IconButtonComponent {}