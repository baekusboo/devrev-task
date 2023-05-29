import {StyledContainer} from './components/Styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//pages
import Home from './pages/home';
import Login from './pages/user_login';
import Signup from './pages/user_signup';
import ViewBooks from './pages/view_books';
import Profile from './pages/profile';
import Borrow from './pages/borrow_books';

function App() {
  return (
    <div className="App">
      <StyledContainer>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/viewbooks" element={<ViewBooks />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/borrowbooks" element={<Borrow />} />
        </Routes>
      </Router>
      </StyledContainer>

    </div>
  );
}

export default App;
