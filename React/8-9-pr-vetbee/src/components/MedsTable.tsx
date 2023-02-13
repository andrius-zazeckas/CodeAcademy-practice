import { useGetMeds } from "../hooks/useGetMeds";
import { MedsContainer } from "./styles/MedsContainer";
import { TableStyled } from "./styles/TableStyled";

export const MedsTable = () => {
  const { meds } = useGetMeds();

  if (!meds.length) {
    return <h1>No meds</h1>;
  }

  return (
    <MedsContainer>
      <TableStyled>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>

        <tbody>
          {meds.map((med) => (
            <tr key={med.id}>
              <td>{med.id}</td>
              <td>{med.name}</td>
              <td>{med.description}</td>
            </tr>
          ))}
        </tbody>
      </TableStyled>
    </MedsContainer>
  );
};
