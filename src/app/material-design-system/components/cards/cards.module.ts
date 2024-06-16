import { NgModule } from "@angular/core";
import { FilledCardComponent } from "./filled/filled-card.component";
import { ElevatedCardComponent } from "./elevated/elevated-card.component";
import { OutlinedCardComponent } from "./outlined/outlined-card.component";

@NgModule({
        exports: [ElevatedCardComponent, FilledCardComponent, OutlinedCardComponent],
        declarations: [ElevatedCardComponent, FilledCardComponent, OutlinedCardComponent]
})
export class CardsModule {}