import { Container, TextField, Box, Button, Typography } from '@mui/material'
import { FormattedMessage } from 'react-intl'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@/store/user' or its correspon... Remove this comment to see the full error message
import { SET_USER, SET_TOKEN, USER_LOGOUT } from '@/store/user'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@/service/api/user' or its cor... Remove this comment to see the full error message
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
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Container component="main" maxWidth="xs" data-testid="loginPage">
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Typography component="h1" variant="h5">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <FormattedMessage id="login" />
        </Typography>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            label={<FormattedMessage id="username" />}
            name="username"
            autoFocus
          />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            label={<FormattedMessage id="password" />}
            type="password"
            id="password"
          />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <FormattedMessage id="signIn" />
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default LoginPage
