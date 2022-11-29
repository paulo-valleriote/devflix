import React from 'react';

import styled from 'styled-components';
import Menu from '../../components / Menu';
import BannerMain from '../../components /BannerMain';
import Carousel from '../../components /Carousel';
import Footer from '../../components /Footer';

import initialData from '../../data/initial_data.json';

const AppWrapper = styled.div`
  background-color: var(--black);
`;

export default function Home() {
  return (
    <AppWrapper>
      <Menu />

      <BannerMain
        videoTitle={initialData.categorias[2].videos[1].titulo}
        url={initialData.categorias[2].videos[1].url}
        videoDescription="O que é Front-end? Trabalhando na área."
      />

      <Carousel
        ignoreFirstVideo
        category={initialData.categorias[0]}
      />

      <Carousel
        ignoreFirstVideo
        category={initialData.categorias[1]}
      />

      <Carousel
        ignoreFirstVideo
        category={initialData.categorias[2]}
      />

      <Carousel
        ignoreFirstVideo
        category={initialData.categorias[3]}
      />

      <Carousel
        ignoreFirstVideo
        category={initialData.categorias[4]}
      />

      <Carousel
        ignoreFirstVideo
        category={initialData.categorias[5]}
      />

      <Carousel
        ignoreFirstVideo
        category={initialData.categorias[6]}
      />

      <Footer />
    </AppWrapper>
  );
}
