import PropTypes from 'prop-types';

const Note = ({ note }) => {
  return (
    <div>
      <h2>{note.content}</h2>
      <div>{note.user}</div>
      <div><strong>{note.important ? 'important' : ''}</strong></div>
    </div>
  )
}

Note.propTypes = {
 note: PropTypes.shape({
    content: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    important: PropTypes.bool.isRequired,
 }),
};

export default Note