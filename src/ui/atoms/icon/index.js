import React from 'react';
import styled from 'styled-components';
import icons from './icons.svg';

export const Icon = ({ name, size, color, strokeWidth }) => (
  <Svg
    size={size}
    color={color}
    strokeWidth={strokeWidth}
  >
    <use xlinkHref={`${icons}#${name}`}></use>
  </Svg>
);

Icon.defaultProps = {
  size: 20,
  color: '#fff',
  weight: 1,
};

const Svg = styled.svg`
  display: block;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  stroke: ${({ color }) => color};
  stroke-width: ${({ strokeWidth }) => strokeWidth};
  stroke-linecap: square;
  stroke-linejoin: miter;
  fill: none;
`;
