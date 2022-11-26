import styled from 'styled-components';

export const Title = styled.h3`
  display: inline-block;
  
  margin-bottom: 16px;
  padding: 20px;

  background: red;
  border-radius: 4px;
  
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 1;

  cursor: default;
  transition: scale 0.3s;

  @media (max-width: 800px) {
    padding: 10px;
    
    font-size: 18px;
  }

  &:hover {
    scale: 1.1;
  }
`;

export const ExtraLink = styled.a`
  margin-left: 16px;

  text-decoration: none;

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px) {
    display: block;

    margin-bottom: 16px;
    margin-left: 0;
  }
`;

export const VideoCardList = styled.ul`
  display: flex;
  overflow-x: auto;
  flex-direction: row;

  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;

  list-style: none;
  
  li {
    margin-right: 16px;
  }
`;

export const VideoCardGroupContainer = styled.section`
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 16px;
  
  min-height: 197px;
  
  color: white;
`;
