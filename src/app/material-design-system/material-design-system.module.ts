import { NgModule } from "@angular/core";
import { BadgesModule } from "./components/badges/badges.module";
import { ButtonsModule } from "./components/buttons/buttons.module";
import { MaterialDesignSystemService } from "./services/material-design-system.service";

@NgModule({
        providers: [MaterialDesignSystemService],
        imports: [
                BadgesModule, 
                ButtonsModule
        ],
        exports: [
                BadgesModule,
                ButtonsModule
        ]
})
export class MaterialDesignSystemModule {}