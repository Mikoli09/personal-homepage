import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../GlobalStyle';
import { Header } from '../../features/Homepage/Homepage/MainHeader';
import { MainContainer } from '../../common/MainContainer/styled';
import { Section } from '../../features/Homepage/Homepage/SkillsSection';
import { Skills } from '../../common/Skills';
import { skillsList } from '../../assets/skillsList';
import { toLearnList } from '../../assets/toLearnList';
import { Portfolio } from '../../features/Homepage/Homepage/Portfolio';
import { Footer } from '../../features/Homepage/Homepage/Footer';
import { ThemeLight, ThemeDark } from '../themeProvider';
import { selectThemeDark } from '../../features/Homepage/homepageSlice';
import { useSelector } from 'react-redux';
import { useRefreshDisable } from '../../useRefreshDisable';

function App() {
  const darkThemeSelected = useSelector(selectThemeDark);
  const refreshDisabled = useRefreshDisable();

  return (
    <ThemeProvider theme={darkThemeSelected ? ThemeDark : ThemeLight}>
      <GlobalStyle refreshDisabled={refreshDisabled} />
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