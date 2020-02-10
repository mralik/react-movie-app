import styled from 'styled-components';

const Container = styled.div`
  display: inline-flex;
  height: 180px;
  width: 130px;
  margin-top: 16px;
  margin-bottom: 20px;
  margin-right: 16px;
  padding: 15px;
  border-radius: 24px;
  background: white;
  padding: 0;
  position: relative;
`;

const Image = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 20px;
  background-color: white;
  background:  linear-gradient(
      rgba(0, 0, 0, 0.45), 
      rgba(0, 0, 0, 0.45)
    ), url(${props => props.image && props.image});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  &:hover {
  box-shadow: 0 0 12px #fff;
  }

`;



const Text = styled.div`
  position: absolute;
  bottom: 0;
  text-align: center;
  margin-bottom: 10px;
  height: ${props => props.height && '3.6em'};
  width: 100%; 
  font-size: 12px;
  font-weight: bold;
  color:#fff;
  display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;

  ::after {
    content: '';
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    width: ${props => (props.relative && '0') || '40%'};
    height: 1.2em;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1) 50%
    );
  }
`;

const FAB = styled.div`
  display: flex;
 background: #FED700;
 border-radius: 3px;
  right: 8px;
  top: 8px;
  position: absolute;
  color: #333;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: bold;
  padding: 4px 6px;
`;




export {Container, Image, Text, FAB, };
