import * as React from 'react';
import type { IThemeColorsProps } from './IThemeColorsProps';
import { createTheme, ITheme } from "office-ui-fabric-react";
import "office-ui-fabric-core/dist/css/fabric.min.css";
// import * as sharedStyling from '../../../../common/styling/sharedStyling';

import styles from './ThemeColors.module.scss';

export default class ThemeColors extends React.Component<IThemeColorsProps, {}> {
  public render(): React.ReactElement<IThemeColorsProps> {

    // Get the theme colors from the window object
    const ThemeColorsFromWindow: any = (window as any).__themeState__.theme;

    // Create a site theme object using the theme colors from the window object
    const siteTheme: ITheme = createTheme({ palette: ThemeColorsFromWindow });
    const palette = siteTheme.palette;

    // Use the getObjectPropertiesAndValuesSafe method to get the properties and values
    const paletteEntries = this.getObjectPropertiesAndValuesSafe(palette);

    // Define the list of base theme color keys
    const baseThemeColorKeys = [
      "themePrimary", "themeLighterAlt", "themeLighter", "themeLight",
      "themeTertiary", "themeSecondary", "themeDarkAlt", "themeDark",
      "themeDarker", "neutralLighterAlt", "neutralLighter", "neutralLight",
      "neutralQuaternaryAlt", "neutralQuaternary", "neutralTertiaryAlt",
      "neutralTertiary", "neutralSecondaryAlt", "neutralSecondary",
      "neutralPrimaryAlt", "neutralPrimary", "neutralDark", "black",
      "white", "primaryBackground", "primaryText", "bodyBackground",
      "bodyText", "disabledBackground", "disabledText", "error", "accent"
    ];

    // Initialize arrays for base theme colors and other colors
    const baseThemeColors: { key: string, value: string }[] = [];
    const otherColors: { key: string, value: string }[] = [];

    // Separate the colors into base theme colors and other colors
    paletteEntries.forEach(entry => {
      if (baseThemeColorKeys.indexOf(entry.key) !== -1) {
        baseThemeColors.push(entry);
      } else {
        otherColors.push(entry);
      }
    });

    return (
      <>
        <div>
          <div className='ms-Grid' dir='ltr'>

            <div className='ms-Grid-row'>
              <div className='ms-Grid-col ms-md12'>
                <h3>Base theme colors</h3>
              </div>
            </div>

            <div className='ms-Grid-row'>
              <div className='ms-Grid-col ms-md12'>
                {baseThemeColors.map(({ key, value }) => (
                  value && typeof value === 'string' && value.indexOf('#') > -1 && this.getColorBlock(value as string, key)
                ))}
              </div>
            </div>

            <div className='ms-Grid-row'>
              <div className='ms-Grid-col ms-md12'>
                <h3>Other colors from the palette</h3>
              </div>
            </div>

            <div className='ms-Grid-row'>
              {otherColors.map(({ key, value }) => (
                value && typeof value === 'string' && value.indexOf('#') > -1 && this.getColorBlock(value as string, key)
              ))}
            </div>
          </div>
        </div>
      </>

    );

  }

  private getObjectPropertiesAndValuesSafe(obj: any): { key: string, value: any }[] {
    return Object.keys(obj).map(key => ({ key, value: obj[key] }));
  }

  private getColorBlock(themeColor: string, themeName: string): JSX.Element {

    return (
      <div className='ms-Grid-col ms-md4 ms-sm12'>
        <div style={{ paddingBottom: 10 }}>
          <div style={{ border: '1px solid #eee', padding: 5 }}>

            <div className='ms-Grid-row'>
              <div className='ms-Grid-col ms-md2 ms-sm-12'>
                <span className={styles.colorRectangle} style={{ background: themeColor }}>&nbsp;</span>
              </div>
              <div className='ms-Grid-col ms-md6 ms-sm-12'>
                <div className={styles.ellipsis} title={themeName}>{themeName + ''}</div>
              </div>
              <div className='ms-Grid-col ms-md4 ms-sm-12'>
                <div className={styles.ellipsis} title={themeColor}>{themeColor + ''}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


}


// {this.getColorBlock(palette.themePrimary, 'themePrimary')}
// {this.getColorBlock(palette.themeLighterAlt, 'themeLighterAlt')}
// {this.getColorBlock(palette.themeLighter, 'themeLighter')}
// {this.getColorBlock(palette.themeLight, 'themeLight')}


// {this.getColorBlock(palette.themeSecondary, 'themeSecondary')}
// {this.getColorBlock(palette.themeTertiary, 'themeTertiary')}

// {this.getColorBlock(palette.themeDark, 'themeDark')}
// {this.getColorBlock(palette.themeDarkAlt, 'themeDarkAlt')}
// {this.getColorBlock(palette.themeDarker, 'themeDarker')}
// {this.getColorBlock(palette.themeLight, 'themeLight')}
// {this.getColorBlock(palette.themeLighter, 'themeLighter')}
// {this.getColorBlock(palette.themeLighterAlt, 'themeLighterAlt')}

// {this.getColorBlock(palette.neutralDark, 'neutralDark')}
// {this.getColorBlock(palette.neutralLight, 'neutralLight')}
// {this.getColorBlock(palette.neutralLighter, 'neutralLighter')}
// {this.getColorBlock(palette.neutralLighterAlt, 'neutralLighterAlt')}
// {this.getColorBlock(palette.neutralPrimary, 'neutralPrimary')}
// {this.getColorBlock(palette.neutralPrimaryAlt, 'neutralPrimaryAlt')}
// {this.getColorBlock(palette.neutralSecondary, 'neutralSecondary')}
// {this.getColorBlock(palette.neutralSecondaryAlt, 'neutralSecondaryAlt')}
// {this.getColorBlock(palette.neutralTertiary, 'neutralTertiary')}
// {this.getColorBlock(palette.neutralTertiaryAlt, 'neutralTertiaryAlt')}
// {this.getColorBlock(palette.neutralQuaternary, 'neutralQuaternary')}
// {this.getColorBlock(palette.neutralQuaternaryAlt, 'neutralQuaternaryAlt')}

// {this.getColorBlock(palette.accent, 'accent')}
// {this.getColorBlock(palette.red, 'red')}
// {this.getColorBlock(palette.redDark, 'redDark')}
// {this.getColorBlock(palette.orange, 'orange')}
// {this.getColorBlock(palette.orangeLight, 'orangeLight')}
// {this.getColorBlock(palette.orangeLighter, 'orangeLighter')}
// {this.getColorBlock(palette.accent, 'accent')}
// {this.getColorBlock(palette.green, 'green')}
// {this.getColorBlock(palette.greenLight, 'greenLight')}
// {this.getColorBlock(palette.greenDark, 'greenDark')}
// {this.getColorBlock(palette.yellow, 'yellow')}
// {this.getColorBlock(palette.yellowLight, 'yellowLight')}