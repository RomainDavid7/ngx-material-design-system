import { Component, Signal, WritableSignal, computed, inject, signal } from '@angular/core';
import { MaterialDesignSystemModule } from './material-design-system/material-design-system.module';
import { ISegmentedButtonOption } from './material-design-system/components/buttons/segmented/segmented-button.component';
import { MaterialDesignSystemService, MaterialDesignSystemTheme } from './material-design-system/services/material-design-system.service';

type DialogState = 'opened' | 'closed'

@Component({
  standalone: true,
  selector: 'app-root',
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
  imports: [MaterialDesignSystemModule]
})
export class AppComponent {

  private material_design_system_service: MaterialDesignSystemService = inject<MaterialDesignSystemService>(MaterialDesignSystemService)

  private dialogState: WritableSignal<DialogState> = signal<DialogState>('closed')

  private fullDialogState: WritableSignal<DialogState> = signal<DialogState>('closed')

  protected dialogOpened: Signal<boolean> = computed<boolean>(() => this.dialogState() === 'opened')

  protected fullDialogOpened: Signal<boolean> = computed<boolean>(() => this.fullDialogState() === 'opened')

  protected segmentedButtonOptions: WritableSignal<ISegmentedButtonOption[]> = signal<ISegmentedButtonOption[]>([
    { label: 'First', icon: 'star', selected: false, disabled: false },
    { label: 'Second', icon: undefined, selected: false, disabled: false },
    { label: 'Third', icon: 'star', selected: true, disabled: true }
  ])

  protected textPlaceHolder: WritableSignal<string> = signal<string>(`
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis tellus est. Nullam luctus ex in pharetra interdum. Proin malesuada, orci sed venenatis interdum, 
    ante augue fringilla libero, eu viverra massa mi quis elit. Nullam vitae luctus quam, non convallis lacus. Duis aliquam fermentum ipsum, ac pharetra turpis varius nec. 
    Aliquam et nibh quis tellus tincidunt iaculis. Nullam pellentesque volutpat mi, sed porttitor elit volutpat vel. Ut eu interdum est. Ut interdum bibendum efficitur. 
    Sed finibus ante a rhoncus commodo. Pellentesque euismod id nulla a posuere. Vivamus ut elit vel purus egestas eleifend eu et magna. Maecenas egestas, sapien at 
    porttitor sollicitudin, metus arcu congue sem, et placerat urna magna et lorem.
  `)

  protected setTheme = (theme: MaterialDesignSystemTheme): void => this.material_design_system_service.setTheme(theme)

  protected _setDialog = (): void => this.dialogState.update((state: DialogState) => state === 'opened' ? 'closed' : 'opened')

  protected _setFullDialog = (): void => this.fullDialogState.update((state: DialogState) => state === 'opened' ? 'closed' : 'opened')

  protected test = (data: any): void => console.log(data)

}
