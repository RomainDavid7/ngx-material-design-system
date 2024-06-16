import { Component } from "@angular/core";
import { TopAppBarComponent } from "../top/top-app-bar.component";

@Component({
        selector: 'mds-medium-top-app-bar',
        templateUrl: './medium-top-app-bar.component.html',
        styleUrls: ['./medium-top-app-bar.component.css', '../top/top-app-bar.component.css'],
        host: {
                '[class.on-scroll]': 'scrolled()'
        }
})
export class MediumTopAppBarComponent extends TopAppBarComponent {}