import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BadgesModule } from "../badges/badges.module";
import { ButtonsModule } from "../buttons/buttons.module";
import { NavigationBarComponent } from "./navigation-bar/navigation-bar.component";
import { NavigationRailComponent } from "./navigation-rail/navigation-rail.component";
import { NavigationDrawerComponent } from "./navigation-drawer/navigation-drawer.component";
import { ModalNavigationDrawerComponent } from "./navigation-drawer/modal/modal-navigation-drawer.component";
import { NavigationRailItemComponent } from "./navigation-rail/navigation-rail-item/navigation-rail-item.component";
import { NavigationDrawerItemComponent } from "./navigation-drawer/navigation-drawer-item/navigation-drawer-item.component";

@NgModule({
        imports: [CommonModule, RouterModule, BadgesModule, ButtonsModule],
        exports: [
                NavigationBarComponent,
                NavigationRailComponent,
                NavigationDrawerComponent,
                NavigationRailItemComponent,
                NavigationDrawerItemComponent,
                ModalNavigationDrawerComponent
        ],
        declarations: [
                NavigationBarComponent,
                NavigationRailComponent,
                NavigationDrawerComponent,
                NavigationRailItemComponent,
                NavigationDrawerItemComponent,
                ModalNavigationDrawerComponent
        ]
})
export class NavigationModule {}