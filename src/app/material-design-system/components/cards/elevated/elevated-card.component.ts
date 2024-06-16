import { Component } from "@angular/core";
import { CardComponent } from "../card/card.component";

@Component({
        selector: 'mds-elevated-card',
        templateUrl: '../card/card.component.html',
        styleUrls: ['./elevated-card.component.css', '../card/card.component.css'],
        host: {
                '[class.disabled]': 'disabled()',
                '[tabIndex]': 'disabled() ? -1 : 0'
        }
})
export class ElevatedCardComponent extends CardComponent {}