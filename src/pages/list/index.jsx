import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button
} from '@mui/material'
// import { Fragment } from 'react'
import heroes from '@/__mock__/heroes'

const cols = [
  { prop: 'id', label: 'Id' },
  { prop: 'name', label: 'Name' },
  { prop: 'descirption', label: 'Descirption' },
]

function HeroesHead() {
  return (
    <TableRow>
      {
        cols.map(col => (
          <TableCell key={col.prop}>
            {col.label}
          </TableCell>
        ))
      }
      <TableCell align="right">
        Operation
      </TableCell>
    </TableRow>
  )
}

function HeroesBody() {
  return heroes.map(row => (
    <TableRow
      key={row.id}
    >
      {
        cols.map((col, index) => {
          if (index === 0) {
            return (
              <TableCell key={col.prop} component="th" scope="row">
                {row[col.prop]}
              </TableCell>
            )
          } else {
            return (
              <TableCell key={col.prop}>
                {row[col.prop]}
              </TableCell>
            )
          }
        })
      }
      <TableCell align="right">
        <Button variant="text">Edit</Button>
      </TableCell>
    </TableRow>
  ))
}

function Heroes() {
  return (
    <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <HeroesHead />
        </TableHead>
        <TableBody>
          <HeroesBody />
        </TableBody>
    </Table>
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
