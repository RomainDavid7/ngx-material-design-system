import { Injectable } from "@angular/core";

type Theme = 'light' | 'dark'

type Contrast = '' | '-mc' | '-hc'

export type MaterialDesignSystemTheme = `${Theme}${Contrast}`

@Injectable()
export class MaterialDesignSystemService {

        constructor() {
                this.setTheme(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        }

        public setTheme = (theme: MaterialDesignSystemTheme): void => {
                document.body.className = theme
        }

}