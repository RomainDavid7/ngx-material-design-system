import { Component, ElementRef, InputSignal, inject, input } from "@angular/core";

@Component({
        template: '',
        host: { 
                '[class.with-icon]': '!!icon()',
                '[class.disabled]': 'disabled()',
                '[tabIndex]': "disabled() ? -1 : 0"
        }
})
export abstract class CommonButtonComponent {

        public label: InputSignal<string> = input.required<string>()

        public disabled: InputSignal<boolean> = input<boolean>(false)

        public icon: InputSignal<string | undefined> = input<string | undefined>(undefined)

        private element: ElementRef<HTMLElement> = inject<ElementRef<HTMLElement>>(ElementRef<HTMLElement>)
        
}