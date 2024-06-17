import { Component, InputSignal, OutputEmitterRef, input, output } from "@angular/core";

@Component({
        selector: 'mds-full-screen-dialog',
        styleUrl: './full-screen-dialog.component.css',
        templateUrl: './full-screen-dialog.component.html'
})
export class FullScreenDialogComponent {

        public iconButton: InputSignal<string> = input<string>('close')

        public headline: InputSignal<string> = input.required<string>()
        
        public textButton: InputSignal<string> = input.required<string>()

        public onIconClicked: OutputEmitterRef<MouseEvent> = output<MouseEvent>()

        public onTextClicked: OutputEmitterRef<MouseEvent> = output<MouseEvent>()

}