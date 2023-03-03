import {useState, useEffect} from 'react'
const API = process.env.REACT_APP_API

/*Se crea un componente funcional, en este caso el componente sera exportado y se va a llamar Users
y solo va a retornar un Users */
/*Se va a usar react hooks por lo que se van a usar metodos usestate, useefect, para crear una 
interfaz sencilla*/
/*onSubmit es el evento que ejecuta el formulario cuando se ejecuta algo, pero le pasamos una funcion */
/*La funcion se llama handleSubmit, recibe un parametro que es un evento, y se imprime el evento con 
console.log */
/*creamos un input en el formulario en el que al momento de escribir en el input pues tambien cambia un
estado en nuestro componente principal, es decir en esta pag users */
/*importar useState permite capturar cambios de estado en los inputs por ejemplo, para usarlo solo 
escribimos useState y le pasamos el valor que queremos almacenar */
/*Se le asignan las siguientes constantes name y setname definimos un estado con una clave llamada name
que su valor va a ser un string vacio, y para asignarle un nuevo valor vamos a usar setName, entonces, 
cuando cambie el dato, recibimos un evento cada vez que el usuario escriba algo, ese evento se lo pasamos
como setName(e.target.value), esto lo que hace es que si el usuario escribe una a le pasamos esa a al evento
llamado setName, entonces eso sera anexado al useState y quedaria asi useState('a'), pero tambien vamos a 
querer mostrar el valor actual del estado, es decir lo que el usuario esta escribiendo, entonces le pasamos
el value={name}, asi con email y con password*/
/*Entonces, cuando escribimos algo, capturamos el evento con e => y se lo pasamos como parametro
a la funcion que lo va a manejar*/
/*Para cancelar que se reinicie la pag siempre, en la funcion handleSubmit que captura el envio, se le
pasa el parametro  */
/*la funcion fetch sirve para enviar los datos a una api, pero creamos una variable de entorno para 
indicarle esos parametros, asi podemos usar esa misma variable de entorno para enviar a cualquier
api, creamos el archivo .env en la carpeta superior, las variables en env se declaran igual que en python
variable=valor, y las variables relacionadas con react deben empezar por REACT_APP_ y luego un nombre
que uno quiera, en este caso REACT_APP_API y el valor es la direccion de conexion con flask, 
aqui uno puede si se cambia el back a otra direccion o a otra ip o el dominio, uno solo lo cambia en ese
archivo .env y ya, env ademas solo funciona en el pc que se este ejecutando la aplicacion */
/*al inicio fetch tambien tiene que hacer una llamada es decir traer la variable, por tanto se hace esa
funcion iniciamos almacenandolo en una constante llamada API que nos trae el valor correspondiente y se lo
pasamos al fetch a traves de estas comillas `` de javascript se coloca ${} y a dentro se llama normal, 
asi se concatenan cosas y le pasamos con una coma el metodo que va a ser para enviar en este caso post
y con la propiedad body le decimos el texto o lo que queremos enviar en este caso las variables que almacenan
son name, email y password, para que no de problemas hay que convertirlo a string con JSON.stringify*/
/*para que el servidor entienda si es un texto plano, un archivo, etc hay que enviar un header tambien
 en el que le decimos el tipo de contenido que estamos enviando es decir el content-type y le decimos
 que eestamos enviando un json*/
/*como esto es un metodo asincrono porque el navegador no se va a quedar bloqueado cuando envie datos, le
decimos que es un await, y para qeu funcione el await la funcion que contiene todo es decir handleSubmit
debe ser async*/
/*como cada vez que envie datos nos llega una respuesta del servidor, lo guardamos en una constante llamada
res*/
/*lo siguiente es convertir esa respuesta a un json para poder entenderla, por tanto se le pasa .json() 
como la conversion es asincrona, le ponemos await y cuando termine la guardamos en una constante data*/
/*para obtener los usuarios ya guardados se crea un nuevo metodo llamado getUsers y hacemos otra peticion
fetch solo que ahora va a ser a traves del metodo get, pero en este caso no hace falta pedir el get
porque por defecto el fetch ya hace una peticion get por tanto se deja assi y se convierte a json de una vez
con un await porqeu es un metodo asincrono, como hay un  await la funcion general tambien es async*/
/*ahora para llamar la funcion para obtener usuarios hay que mostrarla en el html en react hay una 
funcion que se encarga de ejecutarse una vez cada vez que carga un componente, la funcion se llama 
useEffect(lo importamos), esta funcion lo que hace es que nos permite poder ejecutar codigo despues del 
renderizado del componente, entonces cada vez que se vuelve a cargar ese useEffect se ejecuta*/
/*para utilizarlo, dentro del componente le decimos useEffect(()=>{}) y dentro le pasamos una funcion con 
()=>{} y luego como el useEffect puede depender de datos que pueden ir cambiando dentro del componente
o de datos externos, le damos dentro de un array [] los datos que van a ir cambiando, en resumen
una vez la pantalla haya sido cargada, se va ejecutar un codigo, cual codigo? la funcion getUsers*/
/*como ya estamos guardando y ya estamos trayendo datos, para pintarlos vamos a asignar unaa variable en el
estado, esta variable se va a encargar de tener la lista de usuarios */
/* para esta variable llamamos otra vez useState, y useState al inicio asignara 2 datos, asignara una lista
de usuarios y un setUsers, entonces tenemos una lista de usuarios y un setUsers para asignarle esta lista,
esta lista la llenamos con el metodo resultante de la funcion getUsers, como los datos vienen directos
se llama data directamente en setUsers(data), si hubiera algun metodo por ejemplo una variable que guarde
users y dentro esten los arrays de los datos pues habria que navegar a esa variable por ejemplo asi: 
setUsers(data.users), para acceder al array de datos, para que funcione este useState, le decimos que 
empiece con un arreglo vacio*/
/*ya esta la lista de usuarios, pero ahora para utilizarla, vamos al final del html en la tabla y le 
recorremos los datos 1 a 1 y los vamos pintando, esto lo hacemos con la funcion .map y le decimos
que va a estar recorriendo cada uno de los usuarios, por cada recorrido va a retornar un elemento
todo esto dandoselo como funcion =>(), el elemento que va a retornar es una fila y con ${users.} le decimos
que queremos llamar para esa fila, en este caso todos los datos*/
/*para que no de problemas, le decimos que cada tr va a tener una key y esa key la traemos desde user._id
y va a ser el id de cada usuario */
/*para eliminar, decimos que cuando den click ejecutamos esa funcion, en este caso deleteUser, en este caso
es una constante que va a contener una funcion con = (id) =>{} esta funcion va a recibir un parametro
qeu es un id para poder buscarlo en la bd, le indicamos en el onClick de donde extrae el id
y para que se ejecute le pasamos una funcion flecha, y hacemos lo mismo para la funcion de editar,
ahora para enviar los datos, lo mismo, con las peticiones fetch, para cuando se eliminan, volvemos a llamar
a la funcion getUsers para que vuelva a cargar los usuarios sin actualizar la pagina, para que no se 
elimine el usuario directamente, le damos la funcion window.confirm y dentro le pasamos todo el codigo,
en esta funcion le pasamos un texto, en este caso estas seguro de eliminar al usuario? y le pasamos un if
si es true, ejecute el codigo de eliminar, si es false simplemente continua sin ejecutar ese bloque de 
eliminar*/
/*para el edit necesitamos que primero se eliminen los datos que quedan en el formulario, y necesitamos
que se pinten en el formulario para poder editarlos, para ello vamos a hacer una peticion fetch que nos va 
a traer los datos de ese unico usuario*/
/*una vez que nos traemos los datos, ahora los pintamos en el formulario para cambiarlos, para ello
le decimos que el setName(data.name), es decir la funcion que nos captura los datos en el formulario
y lo ponemos para contraseña y password*/
/*para eliminar los datos del formulario, una vez se ha guardado, y ha finalizado la funcion handleSubmit,
le decimos que setee los setName,setEmail, etc a vacios otra vez, para continuar editando, y que guarde
el momento de editar, le creamos un estado con useState y le decimos que al inicio va a ser false y que
se va a llamar editing y luego va a tener una funcion setEditing para poder cambiar el estado a true, y que
el navegador sepa cuando edita y cuando crea, y para ello cuando pintamos los datos en el formulario 
le decimos qeu asigne el setEditing a true, como tambien tenemos que pasarle un id para que sepa cual
id va a actualizar, hacemos lo mismo pero pasandole un estado que se llama id en este caso, y tambien
lo llamamos cuando cambiemos el estado a true en editar*/
/*el preventDefault, hace que no se recargue la pagina, pero el modelo de enviar los datos tanto
para creacion como para edicion es similar, por tanto en el handleSubmit, y le decimos la funcion, 
si !editing, es decir si es false, osea si no se esta editando, que haga el codigo de crear, 
y si se esta editanto pues que haga la peticion fetch con el metodo PUT, en la peticion fetch le decimos 
que busque el id, ese id lo obtenemos desde el useState id, es decir desde el estado de la aplicacion
y el resto en general es lo mismo que guardar dato normal, enviamos como un json.stringify({}) los datos
que queremos actualizar*/
/*despues de editar seteamos el setEditing en false nuevamente y limpiamos el setId */
/*ahora cambiamos el texto del boton en el formulario, y le decimos que si esta creando lo deje en 
crear usuario y si esta editando lo ponga como editar usuario, la sintaxis es esta: */
/*si editing es true (?) pon este texto '', si es es false (:) pon este otro texto '', por eso
{editing ? 'texto true': 'texto false'} */

export const Users = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [editing, setEditing] = useState(false)
    const [id, setId] = useState('')

    const [users, setUsers] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!editing){
            const res = await fetch(`${API}/users`,{
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            })
            const data = await res.json();
            console.log(data)
        } else{
            const res = await fetch(`${API}/users/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            })
            const data = await res.json();
            console.log(data)
            setEditing(false);
            setId('');
        }

        await getUsers();

        setName('');
        setEmail('');
        setPassword('');
    }

    const getUsers = async () => {
        const res = await fetch(`${API}/users`)
        const data = await res.json();
        setUsers(data)
    }

    useEffect(() => {
        getUsers();
    }, [])

    const deleteUser = async (id) => {
        const userResponse = window.confirm('estas seguro de eliminar el usuario?')
        if (userResponse){
            const res = await fetch(`${API}/users/${id}`,{
                method: 'DELETE'
            });
            const data = await res.json();
            console.log(data)
            await getUsers();
        }
    }

    const editUser = async (id) => {
        const res = await fetch(`${API}/user/${id}`)
        const data = await res.json();
        
        setEditing(true);
        setId(id);
        setName(data.name)
        setEmail(data.email)
        setPassword(data.password)
        console.log(data)
    }

    return (
        <div className="row">
            <div className="col-md-4">
                <form onSubmit={handleSubmit} className="card card-body">
                    <div className="form-group">
                        <input type="text" 
                        onChange={e => setName(e.target.value)} 
                        value={name}
                        className="form-control"
                        placeholder="nombre"
                        autoFocus>
                        </input>
                    </div>
                    <div className="form-group">
                        <input type="email" 
                        onChange={e => setEmail(e.target.value)} 
                        value={email}
                        className="form-control"
                        placeholder="email">
                        </input>
                    </div>
                    <div className="form-group">
                        <input type="password" 
                        onChange={e => setPassword(e.target.value)} 
                        value={password}
                        className="form-control"
                        placeholder="password">
                        </input>
                    </div>
                    <button className="btn btn-primary btn-block">
                        {editing ? 'Editar usuario' : 'Crear usuario'}
                    </button>
                </form>
            </div>
                <div className="col-md-8">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user._id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
                                    <td>
                                        <button 
                                        className="btn btn-secondary btn-sm btn-block"
                                        onClick={(e) => editUser(user._id)}
                                        >
                                            Editar
                                        </button>
                                        <button 
                                            className="btn btn-danger btn-sm btn-block"
                                            onClick={(e) => deleteUser(user._id)}
                                            >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
    )
}