import { Component, ElementRef, InputSignal, inject, input } from "@angular/core";

@Component({ template: '' })
export abstract class IconButtonComponent {

        public icon: InputSignal<string> = input.required<string>()

        public selected: InputSignal<boolean> = input<boolean>(false)

        private element: ElementRef<HTMLElement> = inject<ElementRef<HTMLElement>>(ElementRef<HTMLElement>)

}