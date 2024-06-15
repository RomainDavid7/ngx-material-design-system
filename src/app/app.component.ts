import { Component, inject } from '@angular/core';
import { MaterialDesignSystemTheme } from './material-design-system/types/theme.type';
import { MaterialDesignSystemModule } from './material-design-system/material-design-system.module';
import { MaterialDesignSystemService } from './material-design-system/services/material-design-system.service';

@Component({
  standalone: true,
  selector: 'app-root',
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
  imports: [MaterialDesignSystemModule]
})
export class AppComponent {

  private material_design_system_service: MaterialDesignSystemService = inject<MaterialDesignSystemService>(MaterialDesignSystemService)

  protected setTheme = (theme: MaterialDesignSystemTheme): void => this.material_design_system_service.setTheme(theme)

}
