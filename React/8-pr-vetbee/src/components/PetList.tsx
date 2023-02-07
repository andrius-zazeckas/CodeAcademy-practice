export const PetList = ({ data }: any) => {
  return (
    <>
      {data.map((pet: any) => (
        <div key={pet.id}>
          <h3>{pet.name}</h3>
        </div>
      ))}
    </>
  );
};
