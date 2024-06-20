import { Component } from "@angular/core";
import { IconButtonComponent } from "../icon/icon-button.component";

@Component({
        selector: 'mds-standard-icon-button',
        templateUrl: '../icon/icon-button.component.html',
        styleUrls: ['./standard-icon-button.component.css', '../icon/icon-button.component.css'],
})
export class StandardIconButtonComponent extends IconButtonComponent {}