import { useEffect, useState } from 'react';

function useWindowHeight() {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    setWindowHeight(window.innerHeight);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowHeight;
}

export default useWindowHeight;
