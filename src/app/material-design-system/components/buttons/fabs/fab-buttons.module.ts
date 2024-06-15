import { NgModule } from "@angular/core";
import { FABButtonComponent } from "./fab/fab-button.component";
import { ExtendedFABButtonComponent } from "./extended/extended-fab-button.component";

@NgModule({
        exports: [FABButtonComponent, ExtendedFABButtonComponent],
        declarations: [FABButtonComponent, ExtendedFABButtonComponent]
})
export class FABButtonsModule {}