import { useEffect } from 'react';
import lottie from 'lottie-web';

const LottieAnimation = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const animation = lottie.loadAnimation({
        container: document.getElementById('lottie'), // the DOM element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('../../public/assets/Animation.json'), // path to your animation data
      });

      // Cleanup function to destroy the animation on component unmount
      return () => animation.destroy();
    }
  }, []);

  return <div id="lottie" />;
};

export default LottieAnimation;
