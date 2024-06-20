import { Component, InputSignal, input } from "@angular/core";

@Component({
        template: '',
        host: {
                '[class.disabled]': 'disabled()',
                '[tabIndex]': 'disabled() ? -1 : 0'
        }
})
export abstract class CardComponent {

        public disabled: InputSignal<boolean> = input<boolean>(false)

}