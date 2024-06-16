import { Component } from "@angular/core";
import { IconButtonComponent } from "../icon/icon-button.component";

@Component({
        selector: 'mds-filled-tonal-icon-button',
        templateUrl: '../icon/icon-button.component.html',
        styleUrls: ['./filled-tonal-icon-button.component.css', '../icon/icon-button.component.css'],
        host: {
                '[class.selected]': 'selected()',
                '[class.disabled]': 'disabled()',
                '[tabIndex]': "disabled() ? -1 : 0"
        }
})
export class FilledTonalIconButtonComponent extends IconButtonComponent {}