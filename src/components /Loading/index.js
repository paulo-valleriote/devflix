import styled from 'styled-components';

const Loading = styled.div`
    margin-top: 10px;

    color: transparent;
    
    background-color: gray;
    background-clip: text;
    -webkit-background-clip: text;

    animation: rotate 3s ease-in-out infinite .5s;

    @keyframes rotate {
      0% {
        opacity: 0.2;
      }
      100% {
        opacity: 1;
      }
    }
`;

export default Loading;
