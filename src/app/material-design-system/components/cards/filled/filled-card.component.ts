import { Component } from "@angular/core";
import { CardComponent } from "../card/card.component";

@Component({
        selector: 'mds-filled-card',
        templateUrl: '../card/card.component.html',
        styleUrls: ['./filled-card.component.css', '../card/card.component.css']
})
export class FilledCardComponent extends CardComponent {}