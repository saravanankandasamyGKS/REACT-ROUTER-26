import { useState } from "react";
import { ColorBox } from './ColorBox';

export function Addcolor() {
  const [color, setcolor] = useState("skyblue");
  const [colorList, setColorlist] = useState(["orange", "red", "green"]);

  const styles = {
    background: color
  };

  return (
    <div>
      <div className="add-color">
        <input style={styles} type="text" value={color}
          onChange={(event) => setcolor(event.target.value)} />

        <button onClick={() => {
          setColorlist([...colorList, color]);
        }}>Add color</button>
      </div>

      {colorList.map((clr) => {
        return <ColorBox color={clr} />;
      })}
    </div>
  );
}
