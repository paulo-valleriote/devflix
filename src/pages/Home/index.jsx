import React, { useEffect, useState } from 'react';

import Carousel from '../../components /Carousel';
import BannerMain from '../../components /BannerMain';
import Loading from '../../components /Loading';
import PageDefault from '../../components /PageRoot';
import API from '../../config';

export default function Home() {
  const [initialData, setInitialData] = useState([]);
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    API.get('/categories?_embed=videos')
      .then(async (res) => res.data)
      .then(async (res) => setInitialData(res))
      .catch((err) => console.log(err.message));

    API.get('/categories/1?_embed=videos')
      .then(async (res) => res.data)
      .then(async (res) => res.videos[0])
      .then(async (res) => setBannerData([res]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {initialData.length === 0 && (<Loading>Loading...</Loading>)}

      {bannerData.map((data) => (
        <BannerMain
          key={data.id}
          videoTitle={data.title}
          videoDescription=""
          url={data.url}
        />
      ))}

      {initialData.map((data) => (
        <Carousel
          key={data.id}
          ignoreFirstVideo
          category={data}
        />
      ))}

    </PageDefault>
  );
}
