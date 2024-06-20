import { Component, InputSignal, input } from "@angular/core";

@Component({
        selector: 'mds-navigation-rail-item',
        styleUrl: './navigation-rail-item.component.css',
        templateUrl: './navigation-rail-item.component.html',
        host: {
                '[tabIndex]': '0',
                '[class.active]': 'active()'
        }
})
export class NavigationRailItemComponent {

        public icon: InputSignal<string> = input.required<string>()

        public active: InputSignal<boolean> = input<boolean>(false)

        public label: InputSignal<string> = input.required<string>()

        public badgeDisplayed: InputSignal<boolean> = input<boolean>(false)

        public badgeLabel: InputSignal<string | undefined> = input<string | undefined>(undefined)

}