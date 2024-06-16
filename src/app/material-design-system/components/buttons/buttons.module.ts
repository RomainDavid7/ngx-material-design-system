import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FABButtonsModule } from "./fabs/fab-buttons.module";
import { IconButtonsModule } from "./icons/icon-buttons.module";
import { CommonButtonsModule } from "./commons/common-buttons.module";
import { SegmentedButtonComponent } from "./segmented/segmented-button.component";

@NgModule({
        declarations: [SegmentedButtonComponent],
        imports: [CommonModule, CommonButtonsModule, FABButtonsModule, IconButtonsModule],
        exports: [CommonButtonsModule, FABButtonsModule, IconButtonsModule, SegmentedButtonComponent]
})
export class ButtonsModule {}