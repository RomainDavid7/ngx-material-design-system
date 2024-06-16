import { Component, InputSignal, ModelSignal, Signal, computed, input, model } from "@angular/core";

type CheckboxIcon = 'check' | 'remove' | undefined

@Component({
        selector: 'mds-checkbox',
        styleUrl: './checkbox.component.css',
        templateUrl: './checkbox.component.html',
        host: {
                '[tabIndex]': 'disabled() ? -1 : 0',
                '[class.error]': 'isOnError()',
                '[class.disabled]': 'disabled()',
                '[class.selected]': 'selected()',
                '(click)': 'handleClick()'
        }
})
export class CheckboxComponent {

        public selected: ModelSignal<boolean> = model<boolean>(false)

        public disabled: InputSignal<boolean> = input<boolean>(false)

        public isParent: InputSignal<boolean> = input<boolean>(false)

        public isOnError: InputSignal<boolean> = input<boolean>(false)

        protected icon: Signal<CheckboxIcon> = computed<CheckboxIcon>(() => this.selected() ? this.isParent() ? 'remove' : 'check' : undefined)

        private handleClick(): void {
                this.selected.update((selected: boolean) => !selected)
        }

}