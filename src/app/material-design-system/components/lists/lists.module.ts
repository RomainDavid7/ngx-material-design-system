import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListComponent } from "./list/list.component";
import { DividersModule } from "../dividers/dividers.module";
import { CheckboxesModule } from "../checkboxes/checkboxes.module";

@NgModule({
        exports: [ListComponent],
        declarations: [ListComponent],
        imports: [CommonModule, DividersModule, CheckboxesModule]
})
export class ListsModule {}