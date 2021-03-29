import styled from '@emotion/styled';

const Container = styled.div`
  display: grid;
  grid-template-columns: 0.75fr 3fr;
  grid-template-areas: 'sidebar main';
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Roboto';
  color: #fff;
  background-color: #36393f;
`;

const Main = styled.section`
  grid-area: main;
`;

export { Container, Main };
