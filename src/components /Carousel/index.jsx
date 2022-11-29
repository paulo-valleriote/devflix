import React from 'react';
import PropTypes from 'prop-types';

import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import Slider, { SliderItem } from './components/Slider';
import VideoCard from './components/VideoCard';

function Carousel({
  ignoreFirstVideo,
  category,
}) {
  const categoryTitle = category.title;
  const categoryColor = category.color;
  const categoryExtraLink = category.link_extra;
  const { videos } = category;

  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink
            && (
              <ExtraLink href={categoryExtraLink.url} target="_blank">
                {categoryExtraLink.text}
              </ExtraLink>
            )}
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.id}>
              <VideoCard
                videoTitle={video.title}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

Carousel.defaultProps = {
  ignoreFirstVideo: true,
};

Carousel.propTypes = {
  ignoreFirstVideo: PropTypes.bool,
  category: PropTypes.object.isRequired,
};

export default Carousel;
