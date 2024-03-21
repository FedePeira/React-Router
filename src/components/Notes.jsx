import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

const Notes = ({notes}) => (
  <div>
    <h2>Notes</h2>
    <ul>
      {notes.map(note =>
        <li key={note.id}>
          <Link to={`/notes/${note.id}`}>{note.content}</Link>
        </li>
      )}
    </ul>
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