import { Container, TextField, Box, Button, Typography } from '@mui/material'
import { FormattedMessage } from 'react-intl'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { SET_USER, SET_TOKEN, USER_LOGOUT } from '@/store/user'
import { login, getUser } from '@/service/api/user'

function LoginPage(props: any) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    let params = {
      username: formData.get('username'),
      password: formData.get('password'),
    }
    login(params).then((res: any) => {
      let { userid, token } = res.data
      dispatch(SET_TOKEN({token}))
      getUser(userid).then((res: any) => {
        let user = res.data || {}
        dispatch(SET_USER({...user}))
        navigate('/dashboard')
      })
    })
  }

  return (
    <Container component="main" maxWidth="xs" data-testid="loginPage">
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
            label={<FormattedMessage id="username" />}
            name="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label={<FormattedMessage id="password" />}
            type="password"
            id="password"
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            <FormattedMessage id="signIn" />
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default LoginPage
