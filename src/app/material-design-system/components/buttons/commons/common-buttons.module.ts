import { NgModule } from "@angular/core";
import { TextButtonComponent } from "./text/text-button.component";
import { FilledButtonComponent } from "./filled/filled-button.component";
import { ElevatedButtonComponent } from "./elevated/elevated-button.component";
import { OutlinedButtonComponent } from "./outlined/outlined-button.component";
import { FilledTonalButtonComponent } from "./filled-tonal/filled-tonal-button.component";

@NgModule({
        exports: [ElevatedButtonComponent, FilledButtonComponent, FilledTonalButtonComponent, OutlinedButtonComponent, TextButtonComponent],
        declarations: [ElevatedButtonComponent, FilledButtonComponent, FilledTonalButtonComponent, OutlinedButtonComponent, TextButtonComponent]
})
export class CommonButtonsModule {}