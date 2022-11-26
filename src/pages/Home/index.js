import Menu from "../../components / Menu";
import dadosIniciais from '../../data/dados_iniciais.json'
import BannerMain from "../../components /BannerMain";
import Carousel from "../../components /Carousel"
import Footer from "../../components /Footer"

export default function Home() {
  return (
    <>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[2].videos[1].titulo}
        url={dadosIniciais.categorias[2].videos[1].url}
        videoDescription={"O que é Front-end? Trabalhando na área."}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[4]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[5]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[6]}
      />

      <Footer />
    </ >
  );
}
