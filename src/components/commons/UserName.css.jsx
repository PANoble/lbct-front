import styled from '@emotion/styled';
import { css } from '@emotion/react';

const UserName = styled.span`
  font-weight: bold;
  ${({ userColor }) => css`
    color: ${userColor};
  `}
`;
UserName.displayName = 'UserName';

export default UserName;
