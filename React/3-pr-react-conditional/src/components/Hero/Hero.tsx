import "./Hero.css";

export const Hero = (props: any) => {
  return (
    <div className={props.color}>
      {props.title && <h1>{props.title}</h1>}
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};
