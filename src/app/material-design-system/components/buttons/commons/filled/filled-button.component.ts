import { Component } from "@angular/core";
import { CommonButtonComponent } from "../common/common-button.component";

@Component({
        selector: 'mds-filled-button',
        templateUrl: '../common/common-button.component.html',
        styleUrls: ['./filled-button.component.css', '../common/common-button.component.css'],
})
export class FilledButtonComponent extends CommonButtonComponent {}