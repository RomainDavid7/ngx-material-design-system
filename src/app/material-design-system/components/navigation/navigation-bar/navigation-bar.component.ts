import { Component, InputSignal, ModelSignal, OutputEmitterRef, input, model, output } from "@angular/core";

export interface INavigationBarItem {
        link: string
        icon: string
        label: string
        active: boolean
        badgeLabel: string
        displayBadge: boolean
}

@Component({
        selector: 'mds-navigation-bar',
        styleUrl: './navigation-bar.component.css',
        templateUrl: './navigation-bar.component.html'
})
export class NavigationBarComponent {

        public items: ModelSignal<INavigationBarItem[]> = model.required<INavigationBarItem[]>()

        protected handleItemSelected(item: INavigationBarItem): void {
                this.items.update(
                        (items: INavigationBarItem[]) => items.map<INavigationBarItem>(
                                (currentItem: INavigationBarItem) => ({ ...currentItem, active: currentItem.label === item.label})
                        )
                )
        }

}