import { Component, InputSignal, input } from "@angular/core";

@Component({
        selector: 'mds-navigation-drawer-item',
        styleUrl: './navigation-drawer-item.component.css',
        templateUrl: './navigation-drawer-item.component.html',
        host: {
                '[tabIndex]' : '0',
                '[class.active]': 'active()'
        }
})
export class NavigationDrawerItemComponent {

        public icon: InputSignal<string> = input.required<string>()

        public label: InputSignal<string> = input.required<string>()

        public active: InputSignal<boolean> = input<boolean>(false)

        public badgeLabelText: InputSignal<string | undefined> = input<string | undefined>(undefined)

}