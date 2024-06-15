import { Component, InputSignal, Signal, computed, input } from "@angular/core";

@Component({
        selector: 'mds-badge',
        styleUrl: './badge.component.css',
        templateUrl: './badge.component.html',
        host: { '[class.large]': '!!label()' }
})
export class BadgeComponent {

        public label: InputSignal<string | undefined> = input<string | undefined>(undefined)

        protected label_displayed: Signal<string | undefined> = computed(() => this.label()?.slice(0, 4))

}