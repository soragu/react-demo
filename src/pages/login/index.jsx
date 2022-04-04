import {
  Container,
  TextField,
  Box,
  Button,
  Typography
} from '@mui/material'
import { FormattedMessage } from 'react-intl'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '@/store/user'

function LoginPage(props) {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    dispatch(login({
      username: data.get('username'),
      password: data.get('password')
    }))
    navigate('/dashboard')
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          <FormattedMessage id="login" />
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label={
              <FormattedMessage id="username" />
            }
            name="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label={
              <FormattedMessage id="password" />
            }
            type="password"
            id="password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            <FormattedMessage id="signIn" />
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default LoginPage
