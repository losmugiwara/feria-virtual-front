import React, { useContext } from 'react';
import { MaipoContext } from '../../context/maipoContext';
import { AdminCharts } from "../../auth/components/graficos/admin/AdminCharts";
import { ClientIntCharts } from "../../auth/components/graficos/clientint/ClientIntCharts";
import { ClientExtCharts } from "../../auth/components/graficos/clientext/ClientExtCharts";
import { ProducerCharts } from "../../auth/components/graficos/producer/ProducerCharts";



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
