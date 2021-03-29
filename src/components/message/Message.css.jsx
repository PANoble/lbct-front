import styled from '@emotion/styled';

const Message = styled.div`
  padding: 5px 0 0 5px;
  line-height: 1.375rem;
  display: flex;
  padding: 0 0 24px 0;
  background-color: #36393f;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
`;

Message.displayName = 'Message';

export { Message, MainContent };
