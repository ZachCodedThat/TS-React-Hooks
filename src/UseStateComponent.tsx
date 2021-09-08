import { useState } from "react";

function UseStateComponent() {
  const [arr, setArr] = useState<number[]>([]); // ([]) defaults to type of "never" which baulks the type "number" we need to pass in this example
  const [name, setName] = useState<string[] | null>(null); // we specify that this array can be set with a null value as well as an array of strings[]
  return (
    <div>
      <div>
        <button onClick={() => setArr([...arr, arr.length + 1])}>
          Add to Array
        </button>
        {JSON.stringify(arr)}
      </div>
      <div>
        <button onClick={() => setName(["Zach", "john", "Lauren"])}>
          Set Name
        </button>
        {JSON.stringify(name)}
      </div>
    </div>
  );
}

export default UseStateComponent;
