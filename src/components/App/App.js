import React from 'react';

import ToastPlayground from '../ToastPlayground';
import Footer from '../Footer';
import ToastProvider from '../ToastProvider';

function App() {
  return (
    <>
      <ToastProvider>
        <h1>Toast Playground</h1>
        <ToastPlayground />
        <Footer />
      </ToastProvider>
    </>
  );
}

export default App;
