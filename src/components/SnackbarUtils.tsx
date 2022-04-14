import { useSnackbar } from 'notistack'
import React from 'react'

const InnerSnackbarUtilsConfigurator = (props: any) => {
  props.setUseSnackbarRef(useSnackbar())
  return null
}

let useSnackbarRef: any
const setUseSnackbarRef = (useSnackbarRefProp: any) => {
  useSnackbarRef = useSnackbarRefProp
}

export const SnackbarUtilsConfigurator = () => {
  
  return <InnerSnackbarUtilsConfigurator setUseSnackbarRef={setUseSnackbarRef} />
}

export const NotiStackHepler = {
  success(msg: any) {
    return this.toast(msg, 'success')
  },
  warning(msg: any) {
    return this.toast(msg, 'warning')
  },
  info(msg: any) {
    return this.toast(msg, 'info')
  },
  error(msg: any) {
    return this.toast(msg, 'error')
  },
  toast(msg: any, variant = 'default') {
    return useSnackbarRef.enqueueSnackbar(msg, { variant })
  },
  close(key: any) {
    key ? useSnackbarRef.closeSnackbar(key) : useSnackbarRef.closeSnackbar()
  },
}
