import { NgModule } from "@angular/core";
import { InputChipComponent } from "./input/input-chip.component";
import { AssistChipComponent } from "./assist/assist-chip.component";
import { FilterChipComponent } from "./filter/filter-chip.component";
import { SuggestionChipComponent } from "./suggestion/suggestion-chip.component";

@NgModule({
        exports: [AssistChipComponent, FilterChipComponent, InputChipComponent, SuggestionChipComponent],
        declarations: [AssistChipComponent, FilterChipComponent, InputChipComponent, SuggestionChipComponent]
})
export class ChipsModule {}