import Login from "./Login.js";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "./../utility/theme.js";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Login />
    </ThemeProvider>
  );
}

export default App;
