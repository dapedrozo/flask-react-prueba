import {Link} from 'react-router-dom'

/*Se crea un componente funcional, en este caso el componente sera exportado y se va a llamar Navbar
y solo va a retornar un Navbar */
/*Se cambia el codigo html por codigo jsx (en google: html to jsx) */
/*Se importa el componente link y se reemplaza todas las etiquetas a de html por link y en lugar de usar
to se utiliza to*/

export const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Flask & react</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
)