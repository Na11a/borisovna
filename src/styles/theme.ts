export type TThemeColor =
  | 'primary'
  | 'primaryDark'
  | 'secondary'
  | 'action'
  | 'disabled'
  | 'error'
  | 'warning'
  | 'info'
  | 'attention'
  | 'success'
  | 'white'
  | 'black'
  | 'grey'
  | 'lightGrey'
  | 'darkGrey';

export interface ITheme {
  colors: {
    [key in TThemeColor]: string;
  };
}

export const theme: ITheme = {
  colors: {
    primary    : '#045739',
    primaryDark: '#033825',
    secondary  : '#F55F5F',
    action     : '#69818b',
    disabled   : '#606060',
    error      : '#f44336',
    warning    : '#e4572e',
    info       : '#2c3f69',
    attention  : '#fac05e',
    success    : '#55bd59',
    black      : '#272932',
    white      : '#ffffff',
    grey       : 'rgba(147,146,146,0.25)',
    lightGrey  : 'rgba(211,211,211,0.42)',
    darkGrey   : '#adacac',
  },
}
