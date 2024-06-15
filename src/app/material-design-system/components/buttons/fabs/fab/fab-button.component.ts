import { Component, InputSignal, input } from "@angular/core";

type FABButtonSize = 'small' | 'medium' | 'large'

type FABButtonColor = 'primary' | 'secondary' | 'tertiary' | 'branded' | 'surface'

@Component({
        selector: 'mds-fab-button',
        styleUrl: './fab-button.component.css',
        templateUrl: './fab-button.component.html',
        host: {
                '[tabIndex]' : '0',
                '[class]': '[size(), color()]',
                '[class.lowered]': 'lowered()'
        }
})
export class FABButtonComponent {

        public icon: InputSignal<string> = input.required<string>()

        public lowered: InputSignal<boolean> = input<boolean>(false)

        public size: InputSignal<FABButtonSize> = input<FABButtonSize>('medium')

        public color: InputSignal<FABButtonColor> = input<FABButtonColor>('primary')

}