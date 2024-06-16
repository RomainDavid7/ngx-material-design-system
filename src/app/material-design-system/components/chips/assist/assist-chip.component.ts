import { Component, InputSignal, input } from "@angular/core";

@Component({
        selector: 'mds-assist-chip',
        templateUrl: './assist-chip.component.html',
        styleUrls: ['./assist-chip.component.css', '../chip/chip.component.css'],
        host: {
                '[class.elevated]': 'elevated()',
                '[class.disabled]': 'disabled()',
                '[tabIndex]': 'disabled() ? -1 : 0',
                '[class.with-leading-icon]': '!!leadingIcon()'
        }
})
export class AssistChipComponent {

        public elevated: InputSignal<boolean> = input<boolean>(false)

        public label: InputSignal<string> = input.required<string>()

        public disabled: InputSignal<boolean> = input<boolean>(false)
        
        public leadingIcon: InputSignal<string | undefined> = input<string | undefined>(undefined)

}