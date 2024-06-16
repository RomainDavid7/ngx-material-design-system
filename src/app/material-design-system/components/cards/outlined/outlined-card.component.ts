import { Component } from "@angular/core";
import { CardComponent } from "../card/card.component";

@Component({
        selector: 'mds-outlined-card',
        templateUrl: '../card/card.component.html',
        styleUrls: ['./outlined-card.component.css', '../card/card.component.css'],
        host: {
                '[class.disabled]': 'disabled()',
                '[tabIndex]': 'disabled() ? -1 : 0'
        }
})
export class OutlinedCardComponent extends CardComponent {}