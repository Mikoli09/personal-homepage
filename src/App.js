import './App.css';
import { HeaderContainer } from './features/Homepage/HeaderContainer';
import { MainContainer } from './features/Homepage/MainContainer/styled';
import { Section } from './features/Homepage/Section';

function App() {
  return (
      <MainContainer>
        <HeaderContainer></HeaderContainer>
        <Section>Skills</Section>
        <Section>What I want to learn</Section>
        <Section>Github portfolio</Section>
        <Section>Footer</Section>
      </MainContainer>
  );
}

export default App;
