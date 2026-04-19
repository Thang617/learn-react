type WelcomeComponentProps = { name: string };
export const WelcomeComponent = ({ name }: WelcomeComponentProps) => {
  return <h1>Hello, {name}</h1>;
};
