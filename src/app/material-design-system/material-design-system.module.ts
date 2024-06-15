import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BadgesModule } from "./components/badges/badges.module";
import { ButtonsModule } from "./components/buttons/buttons.module";
import { MaterialDesignSystemService } from "./services/material-design-system.service";

@NgModule({
        providers: [MaterialDesignSystemService],
        imports: [
                CommonModule, 
                BadgesModule, 
                ButtonsModule
        ],
        exports: [
                BadgesModule,
                ButtonsModule
        ]
})
export class MaterialDesignSystemModule {}