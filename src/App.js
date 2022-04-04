import List from './Layouts/List';
import 'bootswatch/dist/lux/bootstrap.min.css'
import { Fragment } from 'react';
function App() {
  return (
    <Fragment>
      <nav className='navbar navbar-dark bg-dark border-bottom border-white'>
        <a href='/' className='navbar-brand'>Movies app</a>
      </nav>
      <main className='bg-dark'>
        <div className='container'>
          <List />
        </div>
      </main>
    </Fragment>
  );
}

export default App;