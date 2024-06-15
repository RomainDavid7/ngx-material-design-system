import { Component, InputSignal, input } from "@angular/core";

@Component({
        selector: 'mds-extended-fab-button',
        styleUrl: './extended-fab-button.component.css',
        templateUrl: './extended-fab-button.component.html',
        host: {
                '[tabIndex]' : '0',
                '[class.lowered]': 'lowered()',
                '[class.with-icon]': '!!icon()'
        }
})
export class ExtendedFABButtonComponent {

        public label: InputSignal<string> = input.required<string>()

        public lowered: InputSignal<boolean> = input<boolean>(false)

        public icon: InputSignal<string | undefined> = input<string | undefined>(undefined)

}