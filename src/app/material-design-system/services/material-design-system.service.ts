import { Injectable } from "@angular/core";
import { MaterialDesignSystemTheme } from "../types/theme.type";

@Injectable()
export class MaterialDesignSystemService {

        public setTheme = (theme: MaterialDesignSystemTheme): void => {
                document.body.className = theme
        }

}