import { Component } from "@angular/core";
import { CommonButtonComponent } from "../common/common-button.component";

@Component({
        selector: 'mds-text-button',
        templateUrl: '../common/common-button.component.html',
        styleUrls: ['./text-button.component.css', '../common/common-button.component.css'],
        host: { 
                '[class.with-icon]': '!!icon()',
                '[tabIndex]': "element.nativeElement.hasAttribute('disabled') ? -1 : 0"
        }
})
export class TextButtonComponent extends CommonButtonComponent {}