import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material'
import { useState, Fragment } from 'react'
import heroes from '@/__mock__/heroes'
import Edit from './Edit'

const cols = [
  { prop: 'id', label: 'Id' },
  { prop: 'name', label: 'Name' },
  { prop: 'description', label: 'Description' },
]

function HeroesHead() {
  return (
    <TableRow>
      {cols.map((col) => (
        <TableCell key={col.prop}>{col.label}</TableCell>
      ))}
      <TableCell align="right">Operation</TableCell>
    </TableRow>
  )
}

function HeroesBody(props) {
  return heroes.map((row) => (
    <TableRow key={row.id}>
      {cols.map((col, index) => {
        if (index === 0) {
          return (
            <TableCell key={col.prop} component="th" scope="row">
              {row[col.prop]}
            </TableCell>
          )
        } else {
          return <TableCell key={col.prop}>{row[col.prop]}</TableCell>
        }
      })}
      <TableCell align="right">
        <Button variant="text" onClick={() => props.onEditClick(row)}>
          Edit
        </Button>
      </TableCell>
    </TableRow>
  ))
}

function Heroes(props) {
  const [openEdit, setOpenEdit] = useState(false)
  const [editData, setEditData] = useState({
    id: '',
    name: '',
    description: '',
  })
  const handleClickEdit = (data) => {
    setOpenEdit(true)
    setEditData({...data})
  }
  const handleClose = () => {
    setOpenEdit(false)
  }
  const handleConfirm = (data) => {
      console.log(data)
      setOpenEdit(false)
  }
  return (
    <Fragment>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <HeroesHead />
        </TableHead>
        <TableBody>
          <HeroesBody onEditClick={handleClickEdit} />
        </TableBody>
      </Table>
      <Edit open={openEdit} onConfirm={handleConfirm} onCancel={handleClose} onClose={handleClose} data={editData} />
    </Fragment>
  )
}

function ListPage() {
  return (
    <TableContainer component={Paper}>
      <Heroes />
    </TableContainer>
  )
}

export default ListPage
