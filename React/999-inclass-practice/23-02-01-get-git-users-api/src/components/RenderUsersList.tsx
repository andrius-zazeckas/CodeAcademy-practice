import { RenderUserCard } from "./RenderUserCard";

export const RenderUsersList = ({ users }: any) => {
  return (
    <>
      {users.map((user: any) => (
        <RenderUserCard key={user.id} user={user} />
      ))}
    </>
  );
};
