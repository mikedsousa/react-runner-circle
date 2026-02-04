import { gql } from "@apollo/client";

export const GET_EQUIPMENTS = gql`
  query {
    equipments: allEquipment(filter: { emUso: true }) {
      id
      nome
      tipo
      marca
      emUso
    }
  }
`;
