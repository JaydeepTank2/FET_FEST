import { Component } from '@angular/core';

import * as variables from "src/assets/_variables.js";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularStyle';

  ColorBasePrimary = variables.ColorBasePrimary;
  ColorBaseSecondary = variables.ColorBaseSecondary;
  ColorBaseTertiary = variables.ColorBaseTertiary;
  ColorBaseSuccess = variables.ColorBaseSuccess;
  ColorBaseWarning = variables.ColorBaseWarning;
  ColorBaseInfo = variables.ColorBaseInfo;
  ColorBaseDanger = variables.ColorBaseDanger;
  ColorBaseGrayLight = variables.ColorBaseGrayLight;
  ColorBaseGrayMedium = variables.ColorBaseGrayMedium;
  ColorBaseGrayDark = variables.ColorBaseGrayDark;
  ColorBaseRed = variables.ColorBaseRed;
  ColorBaseGreen = variables.ColorBaseGreen;
  ColorBaseWhite = variables.ColorBaseWhite;
  ColorFontPrimary = variables.ColorFontPrimary;
  ColorFontSecondary = variables.ColorFontSecondary;
  ColorFontTertiary = variables.ColorFontTertiary;
  SizeFontSmall = variables.SizeFontSmall;
  SizeFontMedium = variables.SizeFontMedium;
  SizeFontLarge = variables.SizeFontLarge;
  SizeFontXlarge = variables.SizeFontXlarge;
  SizeFontBase = variables.SizeFontBase;
}
