import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material'
import { useState, Fragment } from 'react'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@/__mock__/heroes' or its corr... Remove this comment to see the full error message
import heroes from '@/__mock__/heroes'
// @ts-expect-error ts-migrate(6142) FIXME: Module './Edit' was resolved to 'C:/Users/guyushen... Remove this comment to see the full error message
import Edit from './Edit'

const cols = [
  { prop: 'id', label: 'Id' },
  { prop: 'name', label: 'Name' },
  { prop: 'description', label: 'Description' },
]

function HeroesHead() {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <TableRow>
      {cols.map((col) => (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TableCell key={col.prop}>{col.label}</TableCell>
      ))}
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <TableCell align="right">Operation</TableCell>
    </TableRow>
  )
}

function HeroesBody(props: any) {
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return heroes.map((row: any) => <TableRow key={row.id}>
    {cols.map((col, index) => {
      if (index === 0) {
        return (
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TableCell key={col.prop} component="th" scope="row">
            {row[col.prop]}
          </TableCell>
        )
      } else {
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        return <TableCell key={col.prop}>{row[col.prop]}</TableCell>
      }
    })}
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <TableCell align="right">
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Button variant="text" onClick={() => props.onEditClick(row)}>
        Edit
      </Button>
    </TableCell>
  </TableRow>);
}

function Heroes(props: any) {
  const [openEdit, setOpenEdit] = useState(false)
  const [editData, setEditData] = useState({
    id: '',
    name: '',
    description: '',
  })
  const handleClickEdit = (data: any) => {
    setOpenEdit(true)
    setEditData({...data})
  }
  const handleClose = () => {
    setOpenEdit(false)
  }
  const handleConfirm = (data: any) => {
      console.log(data)
      setOpenEdit(false)
  }
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Fragment>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Table sx={{ minWidth: 650 }}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TableHead>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <HeroesHead />
        </TableHead>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TableBody>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <HeroesBody onEditClick={handleClickEdit} />
        </TableBody>
      </Table>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Edit open={openEdit} onConfirm={handleConfirm} onCancel={handleClose} onClose={handleClose} data={editData} />
    </Fragment>
  )
}

function ListPage() {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <TableContainer component={Paper}>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Heroes />
    </TableContainer>
  )
}

export default ListPage
