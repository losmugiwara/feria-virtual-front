import { useState } from 'react';


export const ProcesosVentas = () => {

  const [act, setAct] = useState(false);

  const clickAct = () => {
    setAct(act=true);
  }


  return (
    <div>
      <div>

        <h1>Proceso de ventas</h1>
        <div>
          <div className='btn-group'>
            <button className='btn btn-primary'>1</button>
            <button className='btn btn-primary'>2</button>

            <div className='btn-group'>
              <button className='btn btn-primary dropdown-toggle' onClick={clickAct}>
                Dropdown
              </button>
              {
                console.log(setAct)
                
                
              }
            </div>
          </div>
        </div>
      </div>


    </div >

  )
}
