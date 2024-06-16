import { Component, ElementRef, InputSignal, ModelSignal, Renderer2, Signal, effect, inject, input, model, viewChild, viewChildren } from "@angular/core";
import { elementAt } from "rxjs";

export interface ISegmentedButtonOption {
        label: string
        selected: boolean
        icon: string | undefined
        disabled: boolean | undefined
}

function isOptionsEqual(option1: ISegmentedButtonOption, option2: ISegmentedButtonOption): boolean {
        return option1.label === option2.label && option1.icon === option2.icon
}

@Component({
        selector: 'mds-segmented-button',
        styleUrl: './segmented-button.component.css',
        templateUrl: './segmented-button.component.html'
})
export class SegmentedButtonComponent {

        public singleSelect: InputSignal<boolean> = input<boolean>(false)

        public options: ModelSignal<ISegmentedButtonOption[]> = model.required<ISegmentedButtonOption[]>()

        private buttons: Signal<readonly ElementRef<HTMLElement>[]> = viewChildren<ElementRef<HTMLElement>>('button')
        
        private renderer: Renderer2 = inject<Renderer2>(Renderer2)

        constructor() {
                effect(() => {
                        const MAX_WIDTH: number = this.buttons().reduce(
                                (accumulator: number, element: ElementRef<HTMLElement>) => accumulator = accumulator < element.nativeElement.clientWidth 
                                        ? element.nativeElement.clientWidth
                                        : accumulator
                                , 0
                        )
                        this.buttons().forEach((element: ElementRef<HTMLElement>) => this.renderer.setStyle(element.nativeElement, 'width', `${MAX_WIDTH}px`))
                })
        }

        protected handleClick(optionClicked: ISegmentedButtonOption): void {
                if (optionClicked.disabled) return

                this.options.update(
                        (options) => options.map<ISegmentedButtonOption>(
                                (option: ISegmentedButtonOption) => this.singleSelect() 
                                        ? (option.label === optionClicked.label && option.icon === optionClicked.icon 
                                                ? {...option, selected: !option.selected} 
                                                : {...option, selected: false}
                                        )
                                        : (option.label === optionClicked.label && option.icon === optionClicked.icon  
                                                ? {...option, selected: !option.selected} 
                                                : option
                                        )
                        )
                )
        }

}