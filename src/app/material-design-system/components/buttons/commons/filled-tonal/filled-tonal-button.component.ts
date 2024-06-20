import { Component } from "@angular/core";
import { CommonButtonComponent } from "../common/common-button.component";

@Component({
        selector: 'mds-filled-tonal-button',
        templateUrl: '../common/common-button.component.html',
        styleUrls: ['./filled-tonal-button.component.css', '../common/common-button.component.css'],
})
export class FilledTonalButtonComponent extends CommonButtonComponent {}