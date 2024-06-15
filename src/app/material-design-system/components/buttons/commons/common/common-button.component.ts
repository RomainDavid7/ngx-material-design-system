import { Component, ElementRef, InputSignal, inject, input } from "@angular/core";

@Component({ template: '' })
export abstract class CommonButtonComponent {

        public label: InputSignal<string> = input.required<string>()

        public icon: InputSignal<string | undefined> = input<string | undefined>(undefined)

        private element: ElementRef<HTMLElement> = inject<ElementRef<HTMLElement>>(ElementRef<HTMLElement>)

}