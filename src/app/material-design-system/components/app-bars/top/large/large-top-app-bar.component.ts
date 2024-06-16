import { Component } from "@angular/core";
import { TopAppBarComponent } from "../top/top-app-bar.component";

@Component({
        selector: 'mds-large-top-app-bar',
        templateUrl: './large-top-app-bar.component.html',
        styleUrls: ['./large-top-app-bar.component.css', '../top/top-app-bar.component.css'],
        host: {
                '[class.on-scroll]': 'scrolled()'
        }
})
export class LargeTopAppBarComponent extends TopAppBarComponent {}