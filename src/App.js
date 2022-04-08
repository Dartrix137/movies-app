import List from './Layouts/List';
import Movieinfo from './pages/Movieinfo';
import Navbar from './Components/navbar';
import 'bootswatch/dist/lux/bootstrap.min.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        
        <Route path='/' element={<List />}/>
        <Route path="/movieinfo/:id" element={<Movieinfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;