import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonsModule } from "../buttons/buttons.module";
import { SearchBarComponent } from "./search-bar/search-bar.component";

@NgModule({
        imports: [FormsModule, ButtonsModule],
        exports: [SearchBarComponent],
        declarations: [SearchBarComponent]
})
export class SearchesModule {}