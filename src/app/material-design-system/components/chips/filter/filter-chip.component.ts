import { Component, InputSignal, ModelSignal, input, model } from "@angular/core";

@Component({
        selector: 'mds-filter-chip',
        templateUrl: './filter-chip.component.html',
        styleUrls: ['./filter-chip.component.css', '../chip/chip.component.css'],
        host: {
                '[class.elevated]': 'elevated()',
                '[class.disabled]': 'disabled()',
                '[class.selected]': 'selected()',
                '[tabIndex]': 'disabled() ? -1 : 0',
                '[class.with-leading-icon]': '!!leadingIcon()',
                '[class.with-trailing-icon]': '!!trailingIcon()',
                '(click)': 'handleClick()'
        }
})
export class FilterChipComponent {

        public elevated: InputSignal<boolean> = input<boolean>(false)

        public selected: ModelSignal<boolean> = model<boolean>(false)

        public label: InputSignal<string> = input.required<string>()

        public disabled: InputSignal<boolean> = input<boolean>(false)
        
        public leadingIcon: InputSignal<string | undefined> = input<string | undefined>(undefined)

        public trailingIcon: InputSignal<string | undefined> = input<string | undefined>(undefined)

        private handleClick(): void {
                this.selected.update((selected: boolean) => !selected)
        }

}