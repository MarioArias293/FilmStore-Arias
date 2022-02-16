import Lottie from 'react-lottie';
import * as animationData from '../assets/animations/loading.json';

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div id="loadingBoxStyle">
      <Lottie
        options={defaultOptions}
        height={250}
        width={250}
        isStopped={false}
        isPaused={false}
      />
    </div>
  );
};

export default Loading;
