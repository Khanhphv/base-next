import CssBaseline from '@mui/material/CssBaseline';
import ColorModeProvider from '../src/components/color-mode-context';

function Root({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => page);
  return (
    <ColorModeProvider>
      <div>
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
      </div>
    </ColorModeProvider>
  );
}
export default Root;
