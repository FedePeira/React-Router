import { Link } from "react-router-dom"
import { useState } from "react"
import {
  Container,
  Button,
  AppBar,
  Toolbar,
  Alert
} from '@mui/material'

import Note from "./components/Note"
import Notes from "./components/Notes"
import Login from "./components/Login"
import Users from "./components/Users"
import Home from "./components/Home"

import {
  Routes,
  Route,
  Navigate,
  useMatch
} from "react-router-dom"

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      content: 'HTML is easy',
      important: true,
      user: 'Matti Luukkainen'
    },
    {
      id: 2,
      content: 'Browser can execute only JavaScript',
      important: false,
      user: 'Matti Luukkainen'
    },
    {
      id: 3,
      content: 'Most important methods of HTTP-protocol are GET and POST',
      important: true,
      user: 'Arto Hellas'
    }
  ])
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState(null)

  const match = useMatch('/notes/:id')

  const note = match
    ? notes.find(note => note.id === Number(match.params.id))
    : null

  const login = (user) => {
    setUser(user)
    setMessage(`welcome ${user}`)
    setTimeout(() => {
      setMessage(null)
    }, 10000)
  }

  return (
    <Container>
      <div>
        {(message &&
          <Alert severity="success">
            {message}
          </Alert>
        )}
      </div>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">
            home
          </Button>
          <Button color="inherit" component={Link} to="/notes">
            notes
          </Button>
          <Button color="inherit" component={Link} to="/users">
            users
          </Button>   
          {user
            ? <em>{user} logged in</em>
            : <Button color="inherit" component={Link} to="/login">
                login
              </Button>
          }                              
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/notes/:id" element={<Note note={note} />} />
        <Route path="/notes" element={<Notes notes={notes} />} />
        <Route path="/users" element={user ? <Users /> : <Navigate replace to="/login" />} />
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <div>
        <br />
        <em>Note app, Department of Computer Science 2022</em>
      </div>
    </Container>
  )
}

export default App