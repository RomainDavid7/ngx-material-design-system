import { NgModule } from "@angular/core";
import { CardsModule } from "./components/cards/cards.module";
import { BadgesModule } from "./components/badges/badges.module";
import { ButtonsModule } from "./components/buttons/buttons.module";
import { AppBarsModule } from "./components/app-bars/app-bars.module";
import { CheckboxesModule } from "./components/checkboxes/checkboxes.module";
import { MaterialDesignSystemService } from "./services/material-design-system.service";

@NgModule({
        providers: [MaterialDesignSystemService],
        imports: [
                AppBarsModule,
                BadgesModule, 
                ButtonsModule,
                CardsModule,
                CheckboxesModule
        ],
        exports: [
                AppBarsModule,
                BadgesModule,
                ButtonsModule,
                CardsModule,
                CheckboxesModule
        ]
})
export class MaterialDesignSystemModule {}