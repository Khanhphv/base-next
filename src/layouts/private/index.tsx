import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useRef } from 'react';
import NextAppBar from '../../components/app-bar';
import NextSlideBar from '../../components/slide-bar';

const PrivateLayout = children => {
  const slideBarRef = useRef(null);
  const onToggleSlidebar = () => {
    slideBarRef.current.collapse();
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid xs="auto">
          <NextSlideBar ref={slideBarRef} />
        </Grid>
        <Grid xs>
          <NextAppBar onToggleSlidebar={onToggleSlidebar}>
            {children}
          </NextAppBar>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PrivateLayout;
