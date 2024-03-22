import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import { TableContainer, Table, TableBody, TableRow, TableCell, Paper } from '@mui/material'

const Notes = ({notes}) => (
  <div>
    <h2>Notes</h2>

    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {notes.map(note => (
            <TableRow key={note.id}>
              <TableCell>
                <Link to={`/notes/${note.id}`}>{note.content}</Link>
              </TableCell>
              <TableCell>
                {note.name}
              </TableCell>
              <TableCell>
                {note.user}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
)

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
     id: PropTypes.number.isRequired,
     content: PropTypes.string.isRequired,
     important: PropTypes.bool.isRequired,
     user: PropTypes.string.isRequired
  })).isRequired
 };

export default Notes