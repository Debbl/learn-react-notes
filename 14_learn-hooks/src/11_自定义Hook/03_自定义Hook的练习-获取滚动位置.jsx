import React, { useEffect, useState } from 'react';
import useScrollPosition from '../hooks/scroll-position-hook';

export default function CustomScrollPositionHook() {
  // const [scrollPosition, setScrollPosition] = useState(0);
  // useEffect(() => {
  //   const handelScroll = () => {
  //     console.log(window.scrollY);
  //     setScrollPosition(window.scrollY);
  //   };
  //   document.addEventListener('scroll', handelScroll);
  //   return () => {
  //     document.removeEventListener(handelScroll);
  //   };
  // }, []);
  const scrollPosition = useScrollPosition();
  return (
    <div style={{ padding: '100px 0px' }}>
      <h2>CustomScrollPositionHook {scrollPosition}</h2>
    </div>
  );
}
