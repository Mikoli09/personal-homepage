import './App.css';
import { HeaderContainer } from './features/Homepage/MainHeader';
import { MainContainer } from './features/Homepage/MainContainer/styled';
import { SkillsSection } from './common/SkillsSection';
import { Skills } from './features/Homepage/SkillsSection';
import { skillsList } from './common/List/skillsList';
import { toLearnList } from './common/toLearnList';
import { Portfolio } from './features/Homepage/Portfolio';
import { projects } from './features/Homepage/Portfolio/projectList';

function App() {
  return (
    <MainContainer>
      <HeaderContainer />
      <SkillsSection
        headerContent={"My skillset includes 🛠️"}
        sectionContent={<Skills list={skillsList} />}
      />
      <SkillsSection
        headerContent={"What I want to learn next 🚀"}
        sectionContent={<Skills list={toLearnList} />}
      />
      <Portfolio
        projects={projects}
      />
      <SkillsSection>Footer</SkillsSection>
    </MainContainer>
  );
}

export default App;
