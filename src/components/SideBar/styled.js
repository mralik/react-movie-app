import styled from 'styled-components';

const SideBarTitle = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  margin: 24px 0;

  font-weight: bolder;
  color: #9798aa;
`;

const SideBarItem = styled.div`
padding: 10px 0;
@media screen and (max-width: 768px) {
    padding: 0;
  }
`;

const ItemContainer = styled.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  padding: 6px 12px;
 
  &.active {
  background: #292c34;
  }
  
   @media screen and (max-width: 768px) {
    flex-direction: column;
     padding: 6px;
  }
`;

const ItemActiveTick = styled.div`
  width: 3px;
  height: 100%;
  background-color: ${props => (props.bg ? props.bg : 'white')};
`;

const ItemIcon = styled.div`
  width: 24px;
  height: 24px;
  margin: 0 15px;
  background-position: center center;
  background-repeat: no-repeat;

  color: ${props => (props.color ? props.color : '#DEE1E7')};

  svg {
    height: 100%;
    width: 100%;
  }
   @media screen and (max-width: 768px) {
    width: 22px;
  height: 22px;
  }
`;

const ItemText = styled.span`
  font-size: 16px;
  color: ${props => (props.color ? props.color : '#DEE1E7')};
  
   @media screen and (max-width: 768px) {
     font-size: 14px;
  }
`;

export {
  SideBarTitle,
  SideBarItem,
  ItemContainer,
  ItemActiveTick,
  ItemIcon,
  ItemText
};
