import {
  Button,
  Container,
  TextField,
  Box,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import CreditCardIcon from '@mui/icons-material/CreditCard';

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <>
      <Container
        maxWidth="xs"
        sx={{
          height: '100vh',
          display: 'flex',
          marginTop: '10%',
        }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container sx={{ fontWeight: 'bold' }}>
            <Grid item>
              <CreditCardIcon />
            </Grid>
            <Grid item>
              <Typography ml={1} mr={1}>
                |
              </Typography>
            </Grid>
            <Grid item>
              <Typography component="h3">Selling made easy</Typography>
            </Grid>
          </Grid>
          <Typography component="h1" variant="h4">
            Login
          </Typography>
          <Box sx={{}}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              {...register('email')}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              {...register('password')}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </form>
      </Container>
    </>
  );
};
// Login.getLayout = PublicLayout;
export default Login;
