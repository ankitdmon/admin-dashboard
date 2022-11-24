import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import TopBar from "./scenes/global/TopBar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Team from './scenes/team';
import Contacts from './scenes/contacts';

function App() {

  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <TopBar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />

              <Route path="/team" element={<Team />} />

              <Route path="/contacts" element={<Contacts />} />

              {/* <Route path="/invoices" element={<Invoices />} /> */}

              {/* <Route path="/form" element={<Form />} /> */}

              {/* <Route path="/bar" element={<Bar />} /> */}

              {/* <Route path="/pie" element={<Pie />} /> */}

              {/* <Route path="/line" element={<Line />} /> */}

              {/* <Route path="/faq" element={<FAQ />} /> */}

              {/* <Route path="/calendar" element={<Calendar />} /> */}

              {/* <Route path="/geography" element={<Geography />} /> */}

            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
