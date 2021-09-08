import { useState, useEffect } from "react";

function UseEffectComponent() {
  const [val, setVal] = useState(1);

  useEffect(() => {
    // useEffect is called and passed constant "timer" which adds one to the "value"
    const timer = window.setInterval(() => {
      setVal((value) => value + 1);
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return <div>{val}</div>;
}

export default UseEffectComponent;
