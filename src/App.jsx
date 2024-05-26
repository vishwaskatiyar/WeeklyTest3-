import employees from "./Asset/data";
import Homepage from "./page/Homepage";
function App() {
  return (
    <>
      <div>
        <Homepage employees={employees} />
      </div>
    </>
  );
}

export default App;
