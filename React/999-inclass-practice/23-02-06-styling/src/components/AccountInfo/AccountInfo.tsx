export const AccountInfo = ({ children, className }: any) => {
  const { account } = children.props;

  return (
    <div className={className}>
      <p>{account.name}</p>
      <p>{account.birthdate.toLocaleString()}</p>
    </div>
  );
};
