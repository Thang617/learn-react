type CardComponentProps = {
  name: string;
  role: "admin" | "user";
  verified: boolean;
};
const CardComponent = ({ name, role, verified }: CardComponentProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{role}</p>
      {verified && <span>*</span>}
    </div>
  );
};

export default CardComponent;
