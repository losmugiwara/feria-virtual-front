import React, { useContext } from 'react';
import { MaipoContext } from '../../context/maipoContext';
import { AdminCharts } from '../components/graficos/AdminCharts';
import { ClientExtCharts } from '../components/graficos/ClientExtCharts';
import { ClientIntCharts } from '../components/graficos/ClientIntCharts';
import { ProducerCharts } from '../components/graficos/ProducerCharts';



export const DashboardPage = () => {

    const {user} = useContext(MaipoContext);

  return (
    <> 
        <h3>Bienvenid@ {user.username}</h3>
        <hr/>

        {
          (user.role === 'ROLE_ADMIN') && <AdminCharts />
        }
        {
          (user.role === 'ROLE_CUSTOMER_INTERNAL') && <ClientIntCharts />
        }
        {
          (user.role === 'ROLE_CUSTOMER_EXTERNAL') && <ClientExtCharts />
        }
        {
          (user.role === 'ROLE_PRODUCER') && <ProducerCharts />
        }
        

    </>
  )
}
