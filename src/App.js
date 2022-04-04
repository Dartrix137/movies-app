import List from './Layouts/List';
import 'bootswatch/dist/lux/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<List/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;