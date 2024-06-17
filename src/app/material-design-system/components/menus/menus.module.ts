import { NgModule } from "@angular/core";
import { MenuComponent } from "./menu/menu.component";
import { MenuItemComponent } from "./menu-item/menu-item.component";

@NgModule({
        exports: [MenuComponent, MenuItemComponent],
        declarations: [MenuComponent, MenuItemComponent]
})
export class MenusModule {}