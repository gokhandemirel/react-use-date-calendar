import { useEffect, useRef } from 'react';

export default function useClickOutside(callback) {
  const ref = useRef(null);

  const handleClickListener = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickListener);
    return () => {
      document.removeEventListener('click', handleClickListener);
    };
  });

  return ref;
}
