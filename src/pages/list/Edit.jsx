import {
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Box,
  Grid,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useForm } from 'react-hook-form'

function EditTitle(props) {
  const { children, onClose, ...other } = props

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}

function Edit(props) {
  const { handleSubmit, register, setValue } = useForm()
  console.log(props.data)
  return (
    <Dialog open={props.open}>
      <EditTitle onClose={props.onClose}>Edit Hero - {props.data.id} </EditTitle>
      <DialogContent dividers sx={{ padding: 2, paddingBottom: 4 }}>
        <Box component="form">
          <Grid container alignItems="flex-start" direction="column" spacing={2}>
            <Grid item>
              <TextField disabled label="id" variant="standard" size="small" {...register('id', { value: props.data.id })}></TextField>
            </Grid>
            <Grid item>
              <TextField label="name" variant="standard" size="small" {...register('name', { value: props.data.name })}></TextField>
            </Grid>
            <Grid item>
              <TextField label="description" variant="standard" size="small" {...register('description', { value: props.data.description })}></TextField>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button autoFocus variant="contained" size="small" onClick={handleSubmit(props.onConfirm)}>
          Save
        </Button>

        <Button variant="outlined" size="small" onClick={props.onCancel}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default Edit
