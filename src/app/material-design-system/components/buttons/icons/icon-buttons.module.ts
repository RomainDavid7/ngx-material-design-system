import { NgModule } from "@angular/core";
import { FilledIconButtonComponent } from "./filled/filled-icon-button.component";
import { OutlinedIconButtonComponent } from "./outlined/outlined-icon-button.component";
import { StandardIconButtonComponent } from "./standard/standard-icon-button.component";
import { FilledTonalIconButtonComponent } from "./filled-tonal/filled-tonal-icon-button.component";

@NgModule({
        exports: [FilledIconButtonComponent, FilledTonalIconButtonComponent, OutlinedIconButtonComponent, StandardIconButtonComponent],
        declarations: [FilledIconButtonComponent, FilledTonalIconButtonComponent, OutlinedIconButtonComponent, StandardIconButtonComponent]
})
export class IconButtonsModule {}