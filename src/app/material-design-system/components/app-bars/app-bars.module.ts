import { NgModule } from "@angular/core";
import { ButtonsModule } from "../buttons/buttons.module";
import { TopAppBarsModule } from "./top/top-app-bars.module";
import { BottomAppBarComponent } from "./bottom/bottom-app-bar.component";

@NgModule({
        declarations: [BottomAppBarComponent],
        imports: [ButtonsModule, TopAppBarsModule],
        exports: [BottomAppBarComponent, TopAppBarsModule]
})
export class AppBarsModule {}