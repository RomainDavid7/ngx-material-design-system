import { Component, InputSignal, input } from "@angular/core";

@Component({
        selector: 'mds-bottom-app-bar',
        styleUrl: './bottom-app-bar.component.css',
        templateUrl: './bottom-app-bar.component.html',
        host: {
                '[class.with-fab]': '!!FABButtonIcon()'
        }
})
export class BottomAppBarComponent {

        public FABButtonIcon: InputSignal<string | undefined> = input<string | undefined>(undefined)

}