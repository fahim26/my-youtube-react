import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Video from "./pages/Video";
const Container = styled.div`
  display:flex;

`;

// display:flex er mane holo Container component er children 
// components gula horizontally thakbe

// suppose amader tinta component ase..tinta components er modde consecutively
// flex:1 , flex:6 , flex:4 dea hole total space ke 1:6:4 onupate divide kore tinta
//  component ke space dibe

const Main = styled.div`
  flex:7;
  background-color: ${({ theme }) => theme.bg};

`;




const Wrapper = styled.div`
  padding: 20px 12px;
`;

// ekti container object r vitor Menu and Main duita component children hisebe ase 
// Menu flex:1 , Main flex:7 so duita 1:7 onupate jaega nibe

function App() {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
              <Route exact path="/" element={<Home /> }/>
              <Route path="/videos" element={<Video /> }/>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
