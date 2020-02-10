import styled from 'styled-components';

const DetailContainer = styled.div`
display: flex;
  width: 100%;
  padding: 25px;
  
@media screen and (max-width: 768px) {
  flex-direction : column;
  padding: 0;
  }
`;

const ImageWrap = styled.div`
display: inline-flex;
  height: 200px;
  width: 150px;
  margin-right : 20px;
  
  @media screen and (max-width: 768px) {
  margin: 10px auto;
  
  }
`;
const Image = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  background:  linear-gradient(
      rgba(0, 0, 0, 0.45), 
      rgba(0, 0, 0, 0.45)
    ), url(${props => props.image && props.image});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

`;

const H3 = styled.h3`
    color: #00acc1;
    display: flex;
    align-items: center;
    margin-top: 0;
        
    @media screen and (max-width: 768px) {
        margin: 15px 15px 15px 0;
    }
`;


const Content = styled.div`
max-width: 600px;


span {
font-size: 13px;
color: #8e95a5;

&.title {
    color: #00acc1;
}

}

@media screen and (max-width: 768px) {
   max-width: 100%;
   padding: 15px;
  }
`;

const UL = styled.ul`
 list-style-type: none;
 padding: 0;
 margin: 10px 0 0;
 
 li {
 
     .array:not(:last-child): after {
         content: ', '
     }
 }
`;

const Badge = styled.div`
  display: flex;
 background: #FED700;
 border-radius: 3px;
  color: #333;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: bold;
  padding: 4px 6px;
  width: 25px;
  margin-left: 10px;
`;

export {DetailContainer, Image, ImageWrap, H3, Content, UL, Badge};