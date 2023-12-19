import "./styles/index.scss";
import { ThemeProvider } from "app/providers/ThemeProvider";
import AppLayout from './Layout/Layout';

const App = () => {
  return (
    <>
      <ThemeProvider>
        <AppLayout />
      </ThemeProvider>
    </>
    
  );
};

export default App;
