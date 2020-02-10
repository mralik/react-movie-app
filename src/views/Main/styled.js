import styled from 'styled-components';

const RootContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: inline-flex;
  flex-direction: column;
`;
const SideBarSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  
  @media screen and (max-width: 768px) {
   justify-content: center;
  }
`;

const ContentSection = styled.div`
  height: 100%;
  width: 100%;
`;

const SearchBarSection = styled.section`
  padding: 0 20px;
  background: #2f3441 ;
`;

const MoviesGridSection = styled.section`
  height: 100%;
  width: 100%;
  padding: 20px;
  overflow-y: scroll;
   @media screen and (max-width: 768px) {
    padding: 0px;
  }
`;

export {
    RootContainer,
    SideBarSection,
    ContentSection,
    SearchBarSection,
    MoviesGridSection
};
