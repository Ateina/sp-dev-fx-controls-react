import { IStyle } from '@fluentui/react';
import {
  IDynamicFieldStyleProps,
  IDynamicFieldStyles,
} from './IDynamicFieldProps';

export const getFieldStyles = (
  props: IDynamicFieldStyleProps
): IDynamicFieldStyles => {
  const { required, theme } = props;
  const { palette } = theme;
  const globalClassNames = {
    titleContainer: 'titleContainer',
    fieldEditor: 'fieldEditor',
    fieldIcon: 'fieldIcon',
    fieldContainer: 'fieldContainer',
    fieldDisplay: 'fieldDisplay',
    fieldDisplayNoPadding: 'fieldDisplayNoPadding',
    fieldDescription: 'fieldDescription',
    fieldLabel: 'fieldLabel',
    labelContainer: 'labelContainer',
    pickersContainer: 'pickersContainer',
    errormessage: 'errormessage',
    richText: 'richText',
    thumbnailFieldButtons: 'thumbnailFieldButtons',
    selectedFileContainer: 'selectedFileContainer',
    fieldRequired: 'fieldRequired',
    attachmentButton: 'attachmentButton',
    attachmentButtonFlexContainer: 'attachmentButtonFlexContainer',
    attachmentButtonLabel: 'attachmentButtonLabel',
    attachmentDeleteButton: 'attachmentDeleteButton',
    attachmentAddButton: 'attachmentAddButton',
  };

  const fieldDisplayNoPadding_style: IStyle = {
    display: 'inline-block',
    'vertical-align': 'top',
    width: '100%',
    'font-size': '14px',
    'font-weight': '400',
    outline: '0',
  };

  const fieldDisplay_style: IStyle = fieldDisplayNoPadding_style && {
    padding: '6px 0 0px 0',
  };

  const fieldRequired_style: IStyle = {
    selectors: {
      '::after': {
        content: `' *'`,
        color: theme.semanticColors.errorText,
        'padding-right': '12px',
      },
    },
  };

  const fontfamily =
    "'Segoe UI', 'Segoe UI Web (West European)',  -apple-system, BlinkMacSystemFont, Roboto,'Helvetica Neue', 'sans-serif'";

  return {
    titleContainer: [
      globalClassNames.titleContainer,
      {
        display: 'flex',
      },
    ],
    fieldIcon: [
      globalClassNames.fieldIcon,
      {
        'align-self': 'center',
        'font-size': '16px',
        color: palette.neutralSecondary,
        'margin-right': '8px',
      },
    ],
    fieldDisplay: [globalClassNames.fieldDisplay, fieldDisplay_style],
    fieldContainer: [
      globalClassNames.fieldContainer,
      { 'padding-bottom': '4px' },
    ],
    fieldDisplayNoPadding: [
      globalClassNames.fieldDisplayNoPadding,
      fieldDisplay_style,
    ],
    fieldEditor: [globalClassNames.fieldEditor, { padding: '4px 3px' }],
    fieldDescription: [
      globalClassNames.fieldDescription,
      {
        'font-weight': '400',
        'font-size': '12px',
        color: '#858585',
        'margin-top': '4px',
        'font-family': fontfamily,
        '-webkit-font-smoothing': 'antialiased',
        '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
        'overflow-wrap': 'break-word',
        display: 'block',
        'user-select': 'none',
        '-webkit-user-select': 'none',
      },
    ],
    fieldLabel: [
      globalClassNames.fieldLabel,
      {
        'font-weight': '600',
        'font-size': '14px',
        'padding-top': '5px',
        'padding-bottom': '5px',
        'font-family': fontfamily,
        '-webkit-font-smoothing': 'antialiased',
        color: palette.neutralPrimary,
        'box-sizing': 'border-box',
        'box-shadow': 'none',
        margin: '0px',
        'overflow-wrap': 'break-word',
        display: 'block',
      },
      required && [globalClassNames.fieldRequired, fieldRequired_style],
    ],
    fieldRequired: [globalClassNames.fieldRequired, fieldRequired_style],
    labelContainer: [
      globalClassNames.labelContainer,
      { 'padding-bottom': '7px' },
    ],
    pickersContainer: [
      globalClassNames.pickersContainer,
      { padding: '6px 0 0px' },
    ],
    selectedFileContainer: [
      globalClassNames.selectedFileContainer,
      { display: 'flex', margin: '10px 0px' },
    ],
    richText: [globalClassNames.richText, { position: 'relative' }],
    thumbnailFieldButtons: [
      globalClassNames.thumbnailFieldButtons,
      { display: 'flex' },
    ],
    attachmentButton: [
      globalClassNames.attachmentButton,
      {
        backgroundColor: palette.themeLighter,
        color: palette.themePrimary,
        borderRadius: '14px 2px 2px 14px',
        border: 'none',
        fontWeight: '400',
        height: '28px',
        margin: 0,
        padding: '0 0 0 6px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        selectors: {
          ':hover': {
            backgroundColor: palette.themeLight,
            color: palette.themePrimary,
          }
        }
      }
    ],
    attachmentAddButton: [
      globalClassNames.attachmentAddButton,
      {
        width: '100%',
        border: `1px solid ${palette.neutralTertiaryAlt}`,
        borderRadius: '2px',
        color: palette.themePrimary,
        backgroundColor: 'transparent',
        textAlign: 'left',
        paddingLeft: '6px',
        selectors: {
          ':hover': {
            backgroundColor: palette.neutralLighter,
            color: palette.themePrimary,
            border: `1px solid ${palette.neutralTertiaryAlt}`,
          }
        }
      }
    ],
    attachmentDeleteButton: [
      globalClassNames.attachmentDeleteButton,
      {
        backgroundColor: palette.themeLighter,
        color: palette.themePrimary,
        borderRadius: '2px 14px 14px 2px',
        border: 'none',
        height: '28px',
        minWidth: '28px',
        margin: 0,
        selectors: {
          ':hover': {
            backgroundColor: palette.themeLight,
            color: palette.themePrimary,
          }
        }
      }
    ],
    attachmentButtonFlexContainer: [
      globalClassNames.attachmentButtonFlexContainer,
      {
        justifyContent: 'flex-start',
        alignItems: 'center',
      }
    ],
    attachmentButtonLabel: [
      globalClassNames.attachmentButtonLabel,
      {
        fontWeight: '400',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: '160px',
        lineHeight: '1.5'
      }
    ],
    errormessage: [
      globalClassNames.errormessage,
      {
        'animation-duration': '0.367s',
        'animation-timing-function': 'cubic-bezier(0.1, 0.9, 0.2, 1)',
        'animation-fill-mode': 'both',
        'font-family': fontfamily,
        'font-size': '12px',
        'font-weight': '400',
        color: theme.semanticColors.errorText,
        margin: '0px',
        'padding-top': '5px',
        display: 'flex',
        'align-items': 'center',
      },
    ],
  };
};
