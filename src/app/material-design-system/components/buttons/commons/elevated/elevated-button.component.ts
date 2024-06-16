import { Component } from "@angular/core";
import { CommonButtonComponent } from "../common/common-button.component";

@Component({
        selector: 'mds-elevated-button',
        templateUrl: '../common/common-button.component.html',
        styleUrls: ['./elevated-button.component.css', '../common/common-button.component.css'],
        host: { 
                '[class.with-icon]': '!!icon()',
                '[class.disabled]': 'disabled()',
                '[tabIndex]': "disabled() ? -1 : 0"
        }
})
export class ElevatedButtonComponent extends CommonButtonComponent {}