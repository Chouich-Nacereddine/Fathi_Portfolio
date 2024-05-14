import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../../public/assets/Animation.json'; 

const LottieAnimation = () => {
  const animationContainer = useRef(null);
  const animationInstance = useRef(null);

  useEffect(() => {
    if (animationContainer.current && !animationInstance.current) {
      animationInstance.current = lottie.loadAnimation({
        container: animationContainer.current,
        animationData: animationData,
        renderer: 'svg',
        loop: false, // Play the animation only once
        autoplay: true,
      });
    }

    // Cleanup animation instance on component unmount
    return () => {
      if (animationInstance.current) {
        animationInstance.current.destroy();
        animationInstance.current = null;
      }
    };
  }, []); // Run effect only on initial mount

  return <div ref={animationContainer} className=' w-full h-full  lg:mr-[10%] lg:mb-[20.5%]'/>;
};

export default LottieAnimation;
