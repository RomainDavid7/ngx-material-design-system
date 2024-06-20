import { Component, InputSignal, ModelSignal, input, model } from "@angular/core";

@Component({
        selector: 'mds-radio-button',
        styleUrl: './radio-button.component.css',
        templateUrl: './radio-button.component.html',
        host: {
                '[class.disabled]': 'disabled()',
                '[class.selected]': 'selected()',
                '[tabIndex]': 'disabled() ? -1 : 0',
                '(click)': 'handleClick()'
        }
})
export class RadioButtonComponent {

        public disabled: InputSignal<boolean> = input<boolean>(false)

        public selected: ModelSignal<boolean> = model.required<boolean>()

        private handleClick(): void {
                this.selected.update((value: boolean) => !value)
        }

}