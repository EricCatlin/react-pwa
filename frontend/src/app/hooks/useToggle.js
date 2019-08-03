import { useState, useCallback } from 'react';

const hook = initial => {
  const [on, setOn] = useState(!!initial);
  return [
    on,
    useCallback(newVal => setOn(on => (newVal !== undefined ? newVal : !on)))
  ];
};

export { hook };
