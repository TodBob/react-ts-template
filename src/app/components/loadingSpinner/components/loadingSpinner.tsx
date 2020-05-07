/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Spinner } from 'react-bootstrap';
import { centerStyle } from '../../../styles';

const LoadingSpinner = () => (
  <div css={[spinner(), centerStyle()]}>
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  </div>
);


const spinner = () => css`
    height: 50vh;
`;


export default LoadingSpinner;
