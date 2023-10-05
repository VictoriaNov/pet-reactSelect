import Select from "./Select";

function App() {
  const options = [
    { label: "First", value: 1 },
    { label: "Second", value: 2 },
    { label: "Third", value: 3 },
    { label: "Fourth", value: 4 },
    { label: "Fifth", value: 5 }

  ];

  return (
    <>
      <Select options={options} onChange={() => new Date()} />
    </>
  );
}

export default App;
