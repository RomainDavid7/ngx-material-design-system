import { Component, InputSignal, input } from "@angular/core";

@Component({
        selector: 'mds-menu-item',
        styleUrl: './menu-item.component.css',
        templateUrl: './menu-item.component.html',
        host: {
                '[class.disabled]': 'disabled()',
                '[tabIndex]': 'disabled() ? -1 : 0'
        }
})
export class MenuItemComponent {

        public label: InputSignal<string> = input.required<string>()

        public disabled: InputSignal<boolean> = input<boolean>(false)

        public leadingIcon: InputSignal<string | undefined> = input<string | undefined>(undefined)

        public trailingIcon: InputSignal<string | undefined> = input<string | undefined>(undefined)

}