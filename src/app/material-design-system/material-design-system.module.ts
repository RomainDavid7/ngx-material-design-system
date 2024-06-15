import { NgModule } from "@angular/core";
import { MaterialDesignSystemService } from "./services/material-design-system.service";
import { BadgesModule } from "./components/badges/badges.module";

@NgModule({
        providers: [MaterialDesignSystemService],
        exports: [BadgesModule],
        imports: [BadgesModule]
})
export class MaterialDesignSystemModule {}