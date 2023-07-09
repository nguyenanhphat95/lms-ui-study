import debounce from '@App/utils/debounce';
import * as React from 'react';

const styles = {
  width: 99,
  height: 99,
  position: 'absolute',
  top: -9999,
  overflow: 'scroll',
};

export interface ScrollbarSizeProps {
  onChange: any;
}

const ScrollbarSize = (props) => {
  const { onChange, ...other } = props;
  const scrollbarHeight = React.useRef<any>();
  const nodeRef = React.useRef(null);

  const setMeasurements = () => {
    scrollbarHeight.current = nodeRef.current.offsetHeight - nodeRef.current.clientHeight;
  };

  React.useEffect(() => {
    const handleResize: any = debounce(() => {
      const prevHeight = scrollbarHeight.current;
      setMeasurements();
      if (prevHeight !== scrollbarHeight.current) {
        onChange(scrollbarHeight.current);
      }
    }, 10);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [onChange]);

  React.useEffect(() => {
    setMeasurements();
    onChange(scrollbarHeight.current);
  }, [onChange]);

  return <div style={styles} ref={nodeRef} {...other} />;
};

export default ScrollbarSize;
