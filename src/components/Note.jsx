import {
  useParams
} from "react-router-dom"
import PropTypes from 'prop-types';

const Note = ({ notes }) => {

  const id = useParams().id
  const note = notes.find(n => n.id === Number(id)) 
  return (
    <div>
      <h2>{note.content}</h2>
      <div>{note.user}</div>
      <div><strong>{note.important ? 'important' : ''}</strong></div>
    </div>
  )
}

Note.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    important: PropTypes.bool.isRequired,
    user: PropTypes.string.isRequired
  })).isRequired
};

export default Note