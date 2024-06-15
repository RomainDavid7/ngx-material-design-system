import { NgModule } from "@angular/core";
import { FABButtonsModule } from "./fabs/fab-buttons.module";
import { IconButtonsModule } from "./icons/icon-buttons.module";
import { CommonButtonsModule } from "./commons/common-buttons.module";

@NgModule({
        imports: [CommonButtonsModule, FABButtonsModule, IconButtonsModule],
        exports: [CommonButtonsModule, FABButtonsModule, IconButtonsModule]
})
export class ButtonsModule {}