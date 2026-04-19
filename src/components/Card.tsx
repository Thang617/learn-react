export const Card = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="card">
      <button>Click me</button>
      <section>{children}</section>
    </div>
  );
};
