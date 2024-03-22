import PropTypes from 'prop-types'
import { Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom';

const Login = (props) => {

  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    props.onLogin('mluukkai');
    navigate('/');
 };

  return (
    <div>
      <h2>login</h2>
      <form onSubmit={onSubmit}>
        <div>
          <p>username</p>
          <TextField label="username" />
        </div>
        <div>
          <p>password</p>
          <TextField  label="password" type='password' />
        </div>
        <div>
          <Button variant="contained" color="primary" type="submit">
            login
          </Button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login
