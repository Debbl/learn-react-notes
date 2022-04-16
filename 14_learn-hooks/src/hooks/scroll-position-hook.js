import { useEffect, useState } from 'react';

function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handelScroll = () => {
      setScrollPosition(window.scrollY);
    };
    document.addEventListener('scroll', handelScroll);
    return () => {
      document.removeEventListener(handelScroll);
    };
  }, []);

  return scrollPosition;
}

export default useScrollPosition;
