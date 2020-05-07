import { css } from '@emotion/core';

export const centerStyle = () => css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const containerWidthStyle = () => css`
    max-width: 1200px;
`;

export const rowSpecificStyle = () => css`
    display: flex;
    margin: auto;
`;

export const backButtonStyle = () => css`
  cursor: pointer;
  &:hover {
    color: green;
  }
`;
