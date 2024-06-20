import { Component, InputSignal, ModelSignal, OutputEmitterRef, input, model, output } from "@angular/core";

@Component({
        selector: 'mds-search-bar',
        styleUrl: './search-bar.component.css',
        templateUrl: './search-bar.component.html'
})
export class SearchBarComponent {

        public value: ModelSignal<string> = model.required<string>()

        public supportingText: InputSignal<string> = input<string>('')
        
        public leadingIcon: InputSignal<string> = input.required<string>()

        public trailingIcon: InputSignal<string | undefined> = input<string | undefined>(undefined)

        public onLeadingIconClicked: OutputEmitterRef<MouseEvent> = output<MouseEvent>()

        public onTrailingIconClicked: OutputEmitterRef<MouseEvent> = output<MouseEvent>()
}