import styled from 'styled-components';

const GridContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  
    @media screen and (max-width: 768px) {
    justify-content: center;
    padding: 0;
  }
`;

export default GridContainer;
