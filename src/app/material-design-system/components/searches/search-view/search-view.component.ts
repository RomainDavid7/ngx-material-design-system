import { Component, InputSignal, ModelSignal, OutputEmitterRef, input, model, output } from "@angular/core";

@Component({
        selector: 'mds-search-view',
        styleUrl: './search-view.component.css',
        templateUrl: './search-view.component.html'
})
export class SearchViewComponent {

        public value: ModelSignal<string> = model.required<string>()

        public supportingText: InputSignal<string> = input<string>('')
        
        public leadingIcon: InputSignal<string> = input.required<string>()

        public trailingIcon: InputSignal<string | undefined> = input<string | undefined>(undefined)

        public onLeadingIconClicked: OutputEmitterRef<MouseEvent> = output<MouseEvent>()

        public onTrailingIconClicked: OutputEmitterRef<MouseEvent> = output<MouseEvent>()

}