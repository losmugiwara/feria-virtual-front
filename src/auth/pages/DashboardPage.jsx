
import { AdminCharts } from "../../auth/components/graficos/admin/AdminCharts";
import { ClientIntCharts } from "../../auth/components/graficos/clientint/ClientIntCharts";
import { ClientExtCharts } from "../../auth/components/graficos/clientext/ClientExtCharts";
import { ProducerCharts } from "../../auth/components/graficos/producer/ProducerCharts";
import { useSelector } from 'react-redux';



export const DashboardPage = () => {


  const { roles, userName } = useSelector(state => state.auth);

  return (
    <>
      <h3>Bienvenid@ {userName}</h3>
      <hr />

      {
        (roles[0]?.authority === 'ROLE_ADMIN') && <AdminCharts />
      }
      {
        (roles[0]?.authority === 'ROLE_CUSTOMER_INTERNAL') && <ClientIntCharts />
      }
      {
        (roles[0]?.authority === 'ROLE_CUSTOMER_EXTERNAL') && <ClientExtCharts />
      }
      {
        (roles[0]?.authority === 'ROLE_PRODUCER') && <ProducerCharts />
      }


    </>
  )
}
