import { useQuery } from "@apollo/client/react";
import { GET_EQUIPMENTS } from "../../../database/graphql/query/equipments";

const Equipments = () => {
  const { data, loading, error } = useQuery(GET_EQUIPMENTS);

  console.log(data);

  if (loading) return <p>Carregando...</p>;
  if (error) {
    console.error(error);
    return <p>Erro ao carregar equipamentos.</p>;
  }

  return (
    <div>
      <h2>Equipamentos em uso:</h2>
      {data?.equipments?.map((item) => (
        <li key={item.id}>
          🟢 {item.nome} ({item.tipo})
        </li>
      ))}
    </div>
  );
};

export default Equipments;
