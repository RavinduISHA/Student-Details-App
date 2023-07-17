import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AddUser from './users/AddUser';

// const router = Router([
//   {
//     path: '/',
//     element: <Home></Home>
//   },
//   {
//     path: '/add-user',
//     element: <AddUser></AddUser>
//   }
// ])

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/add-user' element={<AddUser />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
