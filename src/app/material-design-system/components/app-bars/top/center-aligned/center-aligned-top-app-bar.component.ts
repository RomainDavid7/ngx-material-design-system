import { TopAppBarComponent } from "../top/top-app-bar.component";
import { Component, InputSignal, OutputEmitterRef, input, output } from "@angular/core";

@Component({
        selector: 'mds-center-aligned-top-app-bar',
        templateUrl: './center-aligned-top-app-bar.component.html',
        styleUrls: ['./center-aligned-top-app-bar.component.css', '../top/top-app-bar.component.css'],
        host: {
                '[class.on-scroll]': 'scrolled()'
        }
})
export class CenterAlignedTopAppBarComponent extends TopAppBarComponent {

        public trailingIcon: InputSignal<string> = input.required<string>()

        public onTrailingIconClicked: OutputEmitterRef<MouseEvent> = output<MouseEvent>()

}