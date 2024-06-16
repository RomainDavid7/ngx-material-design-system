import { Component } from "@angular/core";
import { CommonButtonComponent } from "../common/common-button.component";

@Component({
        selector: 'mds-filled-tonal-button',
        templateUrl: '../common/common-button.component.html',
        styleUrls: ['./filled-tonal-button.component.css', '../common/common-button.component.css'],
        host: { 
                '[class.with-icon]': '!!icon()',
                '[class.disabled]': 'disabled()',
                '[tabIndex]': "disabled() ? -1 : 0"
        }
})
export class FilledTonalButtonComponent extends CommonButtonComponent {}