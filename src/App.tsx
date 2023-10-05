import { useState } from "react";
import Select from "./Select";

function App() {
  const options = [
    { label: "First", value: 1 },
    { label: "Second", value: 2 },
    { label: "Third", value: 3 },
    { label: "Fourth", value: 4 },
    { label: "Fifth", value: 5 },
  ];

  const [value, setValue] = useState<typeof options[0] | undefined>(options[0]);

  return (
    <>
      <Select options={options} onChange={(o) => setValue(o)} value={value} />
    </>
  );
}

export default App;
