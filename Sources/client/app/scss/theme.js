import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  root: {
    width: '100%',
    marginTop: 0,
    zIndex: 1,
    height: '100%',
    overflow: 'hidden'
  }
});

export default theme;
