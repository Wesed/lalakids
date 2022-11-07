import React from 'react';
import styled , {keyframes} from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  height: 100%;
`;

const Img = styled.img`
  display: block;
  max-width: 100%;
  grid-area: 1/1;
  opacity: 0;
  transition: .2s;
`;

const skeleton = keyframes`
  from {
    background-position: 0;
  }

  to {
    background-position: -200px;
  }
`;

const SkeletonBackground = styled.div`
  grid-area: 1/1;
  height: 100%;
  background-image: linear-gradient(90deg, #eee 0 , #fff 50%, #eee 100%);
  background-color: #eee;
  background-size: 200%;
  animation: ${skeleton} 1.5s infinite linear;
`;

const Skeleton = ({alt, ...props}) => {
  const [skeleton, setSkeleton] = React.useState(true);

  const handleLoad = ({target}) => {
    setSkeleton(false);
    target.style.opacity = 1;
  };

  return (
    <Wrapper>
      { skeleton && <SkeletonBackground /> }
      <Img onLoad={handleLoad} alt={alt} {...props} />
    </Wrapper>
  )
}

export default Skeleton;