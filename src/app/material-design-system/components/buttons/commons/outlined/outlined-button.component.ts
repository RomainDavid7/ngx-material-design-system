import { Component } from "@angular/core";
import { CommonButtonComponent } from "../common/common-button.component";

@Component({
        selector: 'mds-outlined-button',
        templateUrl: '../common/common-button.component.html',
        styleUrls: ['./outlined-button.component.css', '../common/common-button.component.css'],
})
export class OutlinedButtonComponent extends CommonButtonComponent {}