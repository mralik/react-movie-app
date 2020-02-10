import styled from 'styled-components';

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
`;

const H3 = styled.a`
  color: #fff;
  font-weight: bold;
  background: #00acc1;
  padding: 0 6px;
  height: 60px;
  display: flex;
  align-items: center;
  font-size: 30px;
  
   @media screen and (max-width: 768px) {
   font-size: 20px;
  }
`;

const InputWrap = styled.div`
  display: flex;
  align-items: center;
`;


const SearchIcon = styled.div`
  display: inline-flex;
  height: 24px;
  width: 24px;

  color: #9d9fb0;

  font-size: 14px;
  font-weight: bolder;

  svg {
    height: 100%;
    width: 100%;
  }
`;

const SearchInput = styled.input`
  margin-left: 10px;
  border: 0;
  height: 30px;
  border-bottom: 1px solid;
  background-color: transparent;
  color: #9d9fb0;
  font-size: 14px;
  font-weight: bolder;
  width: 100%;
  &:focus {
  outline: none;
`;

export {SearchBarContainer, SearchIcon, SearchInput, InputWrap, H3};
