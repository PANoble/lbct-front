import React from 'react';
import { Container, Main } from './App.css';

import { Sidebar } from './wrappers/Sidebar';
import { MessagesList } from './wrappers/MessagesList';
import { NewMessage } from './wrappers/NewMessage';
import './App.css';

const App = () => (
  <Container>
    <Sidebar />
    <Main>
      <MessagesList />
      <NewMessage />
    </Main>
  </Container>
);

export default App;
