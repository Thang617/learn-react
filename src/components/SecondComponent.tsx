import { useState, type ChangeEvent } from "react";
import { Card } from "./Card";
import { WelcomeComponent } from "./WelcomeComponent";

type Props = {
  value?: string;
  onChange?: (value: string) => void;
};
function SecondComponent(props: Props) {
  const { value, onChange } = props;
  const name = "amu";
  const items = [1, 2, 3];
  const styles = {
    backgroundColor: "yellow",
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <>
      <Card>
        <WelcomeComponent name="lolo" />
      </Card>
      <input type="text" value={value} onChange={handleChange} />
      <p style={styles}>Sum: {2 + 2}</p>
      <p>Item: {items.length}</p>
      <p>Today: {new Date().toDateString()}</p>
    </>
  );
}

export default SecondComponent;
