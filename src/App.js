import UseRef from "./UseRef";
import UseContext from "./UseContext";
import UseMemo from "./UseMemo";
import UseCallback from './UseCallback'

function App() {
  return (
    <>
    <h1>React Hooks</h1>
        <h3>UseRef Example</h3>
        <UseRef />
        <hr/>
        <h3>UseContext Example</h3>
        <UseContext />
        <h3>UseMemo Example</h3>
        <UseMemo />
        <h3>UseCallback Example</h3>
        <UseCallback />
    </>
  );
}

export default App;
