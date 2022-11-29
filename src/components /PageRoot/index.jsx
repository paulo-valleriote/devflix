import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Menu from '../ Menu';
import Footer from '../Footer';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);

    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;

    ${({ paddingAll }) => css`
      padding: ${paddingAll};
    `}
`;

export default function PageDefault({ children, paddingAll }) {
  return (
    <>
      <Menu />
      <Main paddingAll={paddingAll}>
        {children}
      </Main>
      <Footer />
    </>
  );
}

PageDefault.defaultProps = {
  paddingAll: null,
};

PageDefault.propTypes = {
  children: PropTypes.array.isRequired,
  paddingAll: PropTypes.number,
};
