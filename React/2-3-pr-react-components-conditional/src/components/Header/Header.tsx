import "./Header.css";

export const Header = ({ title, one, two, header, children }: any) => {
  return (
    <header className={header}>
      <div className="center-content">
        <h1>{title}</h1>
        <h3>{one}</h3>
        <h3>{two}</h3>
        {children}
      </div>
    </header>
  );
};
