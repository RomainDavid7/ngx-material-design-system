import { NgModule } from "@angular/core";
import { CommonButtonsModule } from "./commons/common-buttons.module";
import { FABButtonsModule } from "./fab/fab-buttons.module";

@NgModule({
        imports: [CommonButtonsModule, FABButtonsModule],
        exports: [CommonButtonsModule, FABButtonsModule]
})
export class ButtonsModule {}