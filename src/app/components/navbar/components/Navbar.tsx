/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { centerStyle } from '../../../styles';

type customProps = {
    children: string
}

const NavbarComponent = ({ children }: customProps) => (
  <div css={[navBar(), centerStyle()]}>
    <h1>{children}</h1>
  </div>
);

const navBar = () => css`
  margin: auto;
  padding: 30px 0; 
  font-style: italic;
  h1 {
    @media (max-width: 1000px) {
      font-size: 30px;
    }
    @media (max-width: 650px) {
      text-align: center;
    }
  }
  
`;


export default NavbarComponent;
