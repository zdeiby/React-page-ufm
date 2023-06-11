import './App.css';
import { Inicio } from './home/inicio';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Ufm } from './ufm/Ufm';
import { Contactenos } from './contactenos';
import { Login } from './login';
import { Noticias } from './noticias';
import { Todas } from './noticias/todasNoticias';
import { Multimedia } from './multimedia';

function App() {
  return (
  <>
  <Router>
    <Routes>
      <Route path='/' element={<Inicio></Inicio>}/>
      <Route path='/ufm' element={<Ufm/>}/>
      <Route path='/contactenos' element={<Contactenos/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/noticias' element={<Noticias/>}/>
      <Route path='noticias/mas-noticias' element={<Todas/>}/>
      <Route path='/multimedia' element={<Multimedia/>}/>
    </Routes>
  </Router>

  </>
  );
}

export default App;
