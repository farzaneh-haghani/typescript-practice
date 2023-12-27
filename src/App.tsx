import { useState } from "react";
import "./App.css";
import Alert from "./components/ALert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["a", "b", "c"];
  const [visiblity, setVisibility] = useState(false);

  return (
    <div>
      <ListGroup
        items={items}
        onSelectItem={(item: string) => console.log(item)}
      />

      {/* passing children to a component when we want to send lots of text or HTML elements*/}
      {visiblity && (
        <Alert>
          click <span onClick={() => setVisibility(false)}>HERE</span> to close
        </Alert>
      )}
      <Button
        text="Cancel"
        onClick={() => setVisibility(true)}
        className="blue"
      />
      <Button
        text="Confirm"
        onClick={() => console.log("reusable button")}
        className="blue"
        color="red"
      />
    </div>
  );
}

export default App;
