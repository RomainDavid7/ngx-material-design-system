import { NgModule } from "@angular/core";
import { CardsModule } from "./components/cards/cards.module";
import { ChipsModule } from "./components/chips/chips.module";
import { ListsModule } from "./components/lists/lists.module";
import { BadgesModule } from "./components/badges/badges.module";
import { ButtonsModule } from "./components/buttons/buttons.module";
import { DialogsModule } from "./components/dialogs/dialogs.module";
import { AppBarsModule } from "./components/app-bars/app-bars.module";
import { DividersModule } from "./components/dividers/dividers.module";
import { CheckboxesModule } from "./components/checkboxes/checkboxes.module";
import { MaterialDesignSystemService } from "./services/material-design-system.service";
import { MenusModule } from "./components/menus/menus.module";
import { NavigationModule } from "./components/navigation/navigation.module";
import { RadioButtonsModule } from "./components/radio-buttons/radio-buttons.module";
import { SearchesModule } from "./components/searches/searches.module";

@NgModule({
        providers: [MaterialDesignSystemService],
        imports: [
                AppBarsModule,
                BadgesModule, 
                ButtonsModule,
                CardsModule,
                CheckboxesModule,
                ChipsModule,
                DialogsModule,
                DividersModule,
                ListsModule,
                MenusModule,
                NavigationModule,
                RadioButtonsModule,
                SearchesModule
        ],
        exports: [
                AppBarsModule,
                BadgesModule,
                ButtonsModule,
                CardsModule,
                CheckboxesModule,
                ChipsModule,
                DialogsModule,
                DividersModule,
                ListsModule,
                MenusModule,
                NavigationModule,
                RadioButtonsModule,
                SearchesModule
        ]
})
export class MaterialDesignSystemModule {}