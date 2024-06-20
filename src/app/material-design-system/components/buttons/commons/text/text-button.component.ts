import { Component } from "@angular/core";
import { CommonButtonComponent } from "../common/common-button.component";

@Component({
        selector: 'mds-text-button',
        templateUrl: '../common/common-button.component.html',
        styleUrls: ['./text-button.component.css', '../common/common-button.component.css'],
})
export class TextButtonComponent extends CommonButtonComponent {}