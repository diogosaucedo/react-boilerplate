import styled from 'styled-components';
import ListItemType from './type';

const ListItem = styled.li<ListItemType>`
  color: ${({ color }) => color || 'inherit'};
`;
export { ListItem };
