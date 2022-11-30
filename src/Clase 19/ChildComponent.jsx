import React, { useState, useContext } from 'react'
import { EstadosGlobales } from './Context'


const ChildComponent = () => {
  const { salario, setSalario } = useContext(EstadosGlobales)
  return (
    <div className='child'>
        <h3>ChildComponent</h3>
        <p>Cuanto ganas por semestre?</p>
        <h3>Total: {salario*6} </h3>
        <button onClick={() => setSalario(salario + 6000)}>Aumentar</button>
        {console.log('Se renderizó el hijo')}
    </div>
  )
}

export default ChildComponent
