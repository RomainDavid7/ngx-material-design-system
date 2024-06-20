import { Component, InputSignal, OutputEmitterRef, input, output } from "@angular/core";

@Component({
        selector: 'mds-navigation-rail',
        styleUrl: './navigation-rail.component.css',
        templateUrl: './navigation-rail.component.html'
})
export class NavigationRailComponent {

        public menuDisplayed: InputSignal<boolean> = input<boolean>(false)

        public onMenuClicked: OutputEmitterRef<MouseEvent> = output<MouseEvent>()

}