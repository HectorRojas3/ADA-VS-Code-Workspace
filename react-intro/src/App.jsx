
import './App.css'
import MyComponent from './components/myComponent' //import default, no importa el nombre
import {OtroCompo} from './components/namedComponent' //el nombre debe hacer match, de lo contrario genera syntax error
import Ejercicio from './components/Ejercicio'

function App() {

  return (

    <>
    <h1>aprendiendo react!</h1>
    <MyComponent/>
    <OtroCompo/>
    <Ejercicio/>
    </>

  )
  
}

export default App
