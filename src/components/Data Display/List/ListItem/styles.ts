import styled from 'styled-components';

import ListItemProps from './types';

const ListItem = styled.li<ListItemProps>`
  color: ${({ color }) => color || 'inherit'};
`;
export { ListItem };
