import { Component, InputSignal, ModelSignal, input, model } from "@angular/core";

@Component({
        selector: 'mds-input-chip',
        templateUrl: './input-chip.component.html',
        styleUrls: ['./input-chip.component.css', '../chip/chip.component.css'],
        host: {
                '[class.selected]': 'selected()',
                '[class.disabled]': 'disabled()',
                '[tabIndex]': 'disabled() ? -1 : 0',
                '[class.with-leading-icon]': '!!leadingIcon()',
                '[class.with-trailing-icon]': '!!trailingIcon()',
                '(click)': 'handleClick()'
        }
})
export class InputChipComponent {

        public selected: ModelSignal<boolean> = model<boolean>(false)

        public label: InputSignal<string> = input.required<string>()

        public disabled: InputSignal<boolean> = input<boolean>(false)
        
        public leadingIcon: InputSignal<string | undefined> = input<string | undefined>(undefined)

        public trailingIcon: InputSignal<string | undefined> = input<string | undefined>(undefined)

        private handleClick(): void {
                this.selected.update((selected: boolean) => !selected)
        }

}