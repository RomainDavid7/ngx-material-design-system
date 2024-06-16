import { Component } from "@angular/core";
import { TopAppBarComponent } from "../top/top-app-bar.component";

@Component({
        selector: 'mds-small-top-app-bar',
        templateUrl: './small-top-app-bar.component.html',
        styleUrls: ['./small-top-app-bar.component.css', '../top/top-app-bar.component.css'],
        host: {
                '[class.on-scroll]': 'scrolled()'
        }
})
export class SmallTopAppBarComponent extends TopAppBarComponent {}