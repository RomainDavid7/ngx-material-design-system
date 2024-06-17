import { NgModule } from "@angular/core";
import { ButtonsModule } from "../buttons/buttons.module";
import { BasicDialogComponent } from "./basic/basic-dialog.component";
import { FullScreenDialogComponent } from "./full-screen/full-screen-dialog.component";

@NgModule({
        imports: [ButtonsModule],
        exports: [BasicDialogComponent, FullScreenDialogComponent],
        declarations: [BasicDialogComponent, FullScreenDialogComponent]
})
export class DialogsModule {}