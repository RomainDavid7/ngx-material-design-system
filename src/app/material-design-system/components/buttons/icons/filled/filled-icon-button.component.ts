import { Component } from "@angular/core";
import { IconButtonComponent } from "../icon/icon-button.component";

@Component({
        selector: 'mds-filled-icon-button',
        templateUrl: '../icon/icon-button.component.html',
        styleUrls: ['./filled-icon-button.component.css', '../icon/icon-button.component.css']
})
export class FilledIconButtonComponent extends IconButtonComponent {}