import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonsModule } from "../buttons/buttons.module";
import { DividersModule } from "../dividers/dividers.module";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { SearchViewComponent } from "./search-view/search-view.component";

@NgModule({
        imports: [FormsModule, ButtonsModule, DividersModule],
        exports: [SearchBarComponent, SearchViewComponent],
        declarations: [SearchBarComponent, SearchViewComponent]
})
export class SearchesModule {}