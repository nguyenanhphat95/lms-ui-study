import React from 'react';
import ReactDOM from 'react-dom';
import isBrowser from './../src/utils/isBrowser';

if (isBrowser()) {
  (window as any).react = React;
  (window as any)['react-dom'] = ReactDOM;
}
