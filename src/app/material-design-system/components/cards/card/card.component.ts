import { Component, InputSignal, input } from "@angular/core";

@Component({ template: '' })
export abstract class CardComponent {

        public disabled: InputSignal<boolean> = input<boolean>(false)

}