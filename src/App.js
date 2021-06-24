import Routes from './Routes/Routes';
import GlobalState from "./GlobalState/GlobalState";

function App() {
  return (
    <GlobalState>
      <Routes />
    </GlobalState>
  );
}

export default App;
