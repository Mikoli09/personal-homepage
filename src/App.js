import './App.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { Header } from './features/Homepage/MainHeader';
import { MainContainer } from './common/MainContainer/styled';
import { Section } from './common/SkillsSection';
import { Skills } from './features/Homepage/SkillsSection';
import { skillsList } from './assets/skillsList';
import { toLearnList } from './assets/toLearnList';
import { Portfolio } from './features/Homepage/Portfolio';
import { Footer } from './features/Homepage/Footer';
import { ThemeLight, ThemeDark } from './themeProvider';
import { selectThemeDark } from './features/Homepage/homepageSlice';
import { useSelector } from 'react-redux';

function App() {
  const darkThemeSelected = useSelector(selectThemeDark);

  return (
    <ThemeProvider theme={darkThemeSelected? ThemeDark : ThemeLight}>
      <GlobalStyle />
      <MainContainer>
        <Header />
        <Section
          headerContent={"My skillset includes 🛠️"}
          sectionContent={<Skills list={skillsList} />}
        />
        <Section
          headerContent={"What I want to learn next 🚀"}
          sectionContent={<Skills list={toLearnList} />}
        />
        <Portfolio />
        <Footer />
      </MainContainer>
    </ThemeProvider >
  );
}

export default App;