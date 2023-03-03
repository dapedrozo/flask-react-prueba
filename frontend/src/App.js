import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { Users } from './components/Users';

function App() {
  return (
    /*en router va la navegacion y componentes que se cargan en cada ruta*/
    /*switch elije que ruta se renderiza dependiendo de que url se visite*/
    /*por cada ruta que se visite se va a renderizar un componente route */
    /*route recibe un parametro path que es la ruta que cargara y un componente que renderizara*/
    /*se crea la carpeta components en la carpeta src del proyecto, ahi se enlistan los componentes
    basicos de la interfaz */
    /*en la carpeta components se crean 3 archivos, uno relacionado con la navegacion llamado navbar.js
    otro llamado About.js y uno llamado Users.js*/
    /*Estos tres componentes son los fragmentos de pagina y se van a ir instanciando y renderizando
    segun llamemos una pagina o la otra */
    /*Le decimos que inicialmente siempre cargue el componente Navbar */
    /*Se va a hoja index.js y se importa el diseño bootswatch */
    /*Como el contenido esta muy pegado se le da un padding al div directamente, esto afectara a toda
     la pag siempre*/
    <Router>
      <Navbar/>
      <div className="container p-4">
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={Users} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
