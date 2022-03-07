import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import {DOCUMENT} from '@angular/common';
import { ThemeTypes } from '../../model/theme-types';

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeSwitchComponent {
  private static readonly DARK_THEME_CLASS = 'dark-theme';
  private static readonly DARK_THEME_LIGHT = 'light';
  private static readonly DARK_THEME_DARK = 'dark';


  ThemeTypes = ThemeTypes;
  public theme: string;

  constructor(@Inject(DOCUMENT) private document: Document) {
      this.theme = this.document.documentElement.classList.contains(ThemeSwitchComponent.DARK_THEME_CLASS) ? ThemeSwitchComponent.DARK_THEME_DARK : ThemeSwitchComponent.DARK_THEME_LIGHT;
  }

  public selectDarkTheme(): void {
      this.document.documentElement.classList.add(ThemeSwitchComponent.DARK_THEME_CLASS);
      this.theme = ThemeSwitchComponent.DARK_THEME_DARK;
  }

  public selectLightTheme(): void {
      this.document.documentElement.classList.remove(ThemeSwitchComponent.DARK_THEME_CLASS);
      this.theme = ThemeSwitchComponent.DARK_THEME_LIGHT;
  }
}
