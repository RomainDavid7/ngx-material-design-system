import { Component, inject } from '@angular/core';
import { MaterialDesignSystemModule } from './material-design-system/material-design-system.module';
import { MaterialDesignSystemService, MaterialDesignSystemTheme } from './material-design-system/services/material-design-system.service';
import { ISegmentedButtonOption } from './material-design-system/components/buttons/segmented/segmented-button.component';

@Component({
  standalone: true,
  selector: 'app-root',
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
  imports: [MaterialDesignSystemModule]
})
export class AppComponent {

  private material_design_system_service: MaterialDesignSystemService = inject<MaterialDesignSystemService>(MaterialDesignSystemService)

  protected segmentedButtonOptions: ISegmentedButtonOption[] = [
    { label: 'First', icon: 'star', selected: false, disabled: false },
    { label: 'Second', icon: undefined, selected: false, disabled: false },
    { label: 'Third', icon: 'star', selected: true, disabled: true }
  ]

  protected setTheme = (theme: MaterialDesignSystemTheme): void => this.material_design_system_service.setTheme(theme)

  protected test = (data: any): void => console.log(data)

}
