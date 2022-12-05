import styled from 'styled-components';
import ImageType from './type';

const Image = styled.img<ImageType>`
  // Box Model
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  // Display
  border-radius: ${({ borderRadius }) => borderRadius};
  border: ${({ border }) => border};
`;

export { Image };
