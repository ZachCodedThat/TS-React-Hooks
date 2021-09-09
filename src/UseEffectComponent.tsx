import { useState, useEffect } from "react";

function UseEffectComponent() {
  const [value, setValue] = useState(1);

  // useEffect is called and passed  "timer" which adds one to the "value" every second (represented in milliseconds) passing a [] as the second argument this ensures
  // the hook only runs on start up.

  useEffect(() => {
    const timer = window.setInterval(() => {
      setValue((value) => value + 1);
    }, 1000);

    return () => window.clearInterval(timer); // need more clarification on why clearing the interval is necessary
  }, []);

  return <div>{value}</div>;
}

export default UseEffectComponent;
