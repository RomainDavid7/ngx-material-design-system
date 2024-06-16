import { NgModule } from "@angular/core";
import { CardsModule } from "./components/cards/cards.module";
import { BadgesModule } from "./components/badges/badges.module";
import { ButtonsModule } from "./components/buttons/buttons.module";
import { MaterialDesignSystemService } from "./services/material-design-system.service";

@NgModule({
        providers: [MaterialDesignSystemService],
        imports: [
                BadgesModule, 
                ButtonsModule,
                CardsModule
        ],
        exports: [
                BadgesModule,
                ButtonsModule,
                CardsModule
        ]
})
export class MaterialDesignSystemModule {}