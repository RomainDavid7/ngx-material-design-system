import { Component, InputSignal, viewChild, input, ProviderToken, effect, ElementRef, inject, WritableSignal, signal, computed, Signal, OutputEmitterRef, output } from "@angular/core";

@Component({ template: '' })
export class TopAppBarComponent {

        public text: InputSignal<string> = input.required<string>()

        public leadingIcon: InputSignal<string> = input.required<string>()

        public scrollableElementId: InputSignal<string | undefined> = input<string | undefined>(undefined)

        public onLeadingIconClicked: OutputEmitterRef<MouseEvent> = output<MouseEvent>()

        private scrolled: WritableSignal<boolean> = signal<boolean>(false)

        private scrollableElement: Signal<HTMLElement | null> = computed<HTMLElement | null>(
                () => this.scrollableElementId() ? document.getElementById(this.scrollableElementId()!) : null
        )

        constructor() {
                effect(() => {
                        if (!this.scrollableElement()) return
                        this.scrollableElement()!.onscroll = (event: Event) => this.scrolled.set(this.scrollableElement()!.scrollTop !== 0)
                }) 
        }

}