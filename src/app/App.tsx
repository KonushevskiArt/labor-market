import "./styles/index.scss";
import { ThemeProvider } from "app/providers/ThemeProvider";
import AppLayout from './Layout/Layout';
import { StoreProvider } from "./providers/StoreProvider";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <StoreProvider>
          <AppLayout />
        </StoreProvider>
      </ThemeProvider>
    </>
    
  );
};

export default App;
