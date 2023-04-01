import * as React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [key: string]: any;
    }
  }
  interface Window {
    React: typeof React;
  }
}