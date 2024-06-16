import { Component, InputSignal, input } from "@angular/core";

@Component({
        selector: 'mds-suggestion-chip',
        templateUrl: './suggestion-chip.component.html',
        styleUrls: ['./suggestion-chip.component.css', '../chip/chip.component.css'],
        host: {
                '[class.elevated]': 'elevated()',
                '[class.disabled]': 'disabled()',
                '[tabIndex]': 'disabled() ? -1 : 0'
        }
})
export class SuggestionChipComponent {

        public elevated: InputSignal<boolean> = input<boolean>(false)

        public label: InputSignal<string> = input.required<string>()

        public disabled: InputSignal<boolean> = input<boolean>(false)

}