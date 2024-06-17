import { Component, InputSignal, OutputEmitterRef, input, output } from "@angular/core";

@Component({
        selector: 'mds-basic-dialog',
        styleUrl: './basic-dialog.component.css',
        templateUrl: './basic-dialog.component.html',
        host: {
                '[class.with-icon]': '!!icon()',
        }
})
export class BasicDialogComponent {

        public headline: InputSignal<string> = input.required<string>()

        public displayDividers: InputSignal<boolean> = input<boolean>(false)

        public supportingText: InputSignal<string> = input.required<string>()
        
        public leftButtonLabel: InputSignal<string> = input.required<string>()
        
        public rightButtonLabel: InputSignal<string> = input.required<string>()

        public icon: InputSignal<string | undefined> = input<string | undefined>(undefined)

        public subhead: InputSignal<string | undefined> = input<string | undefined>(undefined)

        public onLeftButtonClicked: OutputEmitterRef<MouseEvent> = output<MouseEvent>()

        public onRightButtonClicked: OutputEmitterRef<MouseEvent> = output<MouseEvent>()

}