import { Component, InputSignal, input, signal } from "@angular/core";

export interface IListItem {
        headline: string
        disabled?: boolean | undefined
        leadingText?: string | undefined
        leadingIcon?: string | undefined
        leadingImage?: string | undefined
        trailingIcon?: string | undefined
        supportingText?: string | undefined
        trailingSupportingText?: string | undefined
}

@Component({
        selector: 'mds-list',
        styleUrl: './list.component.css',
        templateUrl: './list.component.html',
})
export class ListComponent {
        
        public divided: InputSignal<boolean> = input<boolean>(false)
        
        public data: InputSignal<IListItem[]> = input.required<IListItem[]>()

        public withLeadingCheckbox: InputSignal<boolean> = input<boolean>(false)

        public withTrailingCheckbox: InputSignal<boolean> = input<boolean>(false)

}