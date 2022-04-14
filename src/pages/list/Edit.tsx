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
import { useForm, Controller } from 'react-hook-form'
import { useState, useEffect } from 'react'

function EditTitle(props: any) {
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

function Edit(props: any) {
  const { handleSubmit, register, control, reset } = useForm()
  useEffect(() => {
    reset()
  }, [props.data])
  return (
    <Dialog open={props.open}>
      <EditTitle onClose={props.onClose}>Edit Hero - {props.data.id} </EditTitle>
      <DialogContent dividers sx={{ padding: 2, paddingBottom: 4 }}>
        <Box component="form">
          <Grid container alignItems="flex-start" direction="column" spacing={2}>
            <Grid item>
              <Controller
                name="id"
                control={control}
                defaultValue={props.data.id}
                render={({ field }) => (
                  <TextField disabled label="Id" variant="standard" size="small" {...field}></TextField>
                )}
              />
            </Grid>

            <Grid item>
              <Controller
                name="name"
                control={control}
                defaultValue={props.data.name}
                render={({ field }) => (
                  <TextField label="Name" variant="standard" size="small" {...field}></TextField>
                )}
              />
            </Grid>

            <Grid item>
              <Controller
                name="description"
                control={control}
                defaultValue={props.data.description}
                render={({ field }) => (
                  <TextField label="Description" variant="standard" size="small" {...field}></TextField>
                )}
              />
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
