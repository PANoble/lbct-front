import styled from '@emotion/styled';

const NewMessage = styled.input`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 3vh;
  font-size: 16px;
  padding: 8px;
  margin-left: 0px;
  border: 1px solid #3f3f3f;
  background-color: #40444b;
  color: #fff;
  :focus {
    outline: none;
  }
`;
NewMessage.displayName = 'NewMessage';

export { NewMessage };
