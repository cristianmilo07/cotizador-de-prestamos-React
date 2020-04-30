import React, {Fragment, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header'
import Formulario from './componentes/Formulario'
import Resultado from './componentes/Resultado';
import Mensaje from './componentes/Mensaje';
import Spinner from './componentes/Spinner';


function App() {
  //Definir el state
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState('');
  const [total, guardarTotal] = useState(0);
  const [cargando, guardarCargando] = useState(false)

  let mostrar;
  if(cargando){
    mostrar = <Spinner/>
  }else if(total === 0){
    mostrar = <Mensaje/>
  }else{
    mostrar = <Resultado
                    total={total}
                    plazo={plazo}
                    cantidad={cantidad}
                  />
  }

  return (
    <Fragment>
      <Header
        titulo ="Cotizador de Prestamos"
      />
      <div className="container">
        <Formulario
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
          totals={total}
          guardarTotal={guardarTotal}
          guardarCargando = {guardarCargando}
        />
        <p>{mostrar}</p>
      </div>
    </Fragment>
  );
}

export default App;
