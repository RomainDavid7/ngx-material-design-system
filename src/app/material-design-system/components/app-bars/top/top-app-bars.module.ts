import { NgModule } from "@angular/core";
import { ButtonsModule } from "../../buttons/buttons.module";
import { SmallTopAppBarComponent } from "./small/small-top-app-bar.component";
import { LargeTopAppBarComponent } from "./large/large-top-app-bar.component";
import { MediumTopAppBarComponent } from "./medium/medium-top-app-bar.component";
import { CenterAlignedTopAppBarComponent } from "./center-aligned/center-aligned-top-app-bar.component";

@NgModule({
        imports: [ButtonsModule],
        exports: [CenterAlignedTopAppBarComponent, SmallTopAppBarComponent, MediumTopAppBarComponent, LargeTopAppBarComponent],
        declarations: [CenterAlignedTopAppBarComponent, SmallTopAppBarComponent, MediumTopAppBarComponent, LargeTopAppBarComponent]
})
export class TopAppBarsModule {}