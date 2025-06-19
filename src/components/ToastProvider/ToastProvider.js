import React from 'react';

import useEscapeKey from '../../hooks/escape';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [shownToasts, setShownToasts] = React.useState([]);

  const removeAllToasts = React.useCallback(() => {
    setShownToasts([]);
  }, []) 

  useEscapeKey(removeAllToasts);

  function addToast({ variant, children }) {
    const id = crypto.randomUUID();
    setShownToasts((currentToasts) => [
      ...currentToasts,
      { id, variant, children },
    ]);
  }

  function removeToast(id) {
    setShownToasts((currentToasts) =>
      currentToasts.filter((currentToast) => currentToast.id !== id)
    );
  }

  const providerObject = React.useMemo(() => {
    return {
      shownToasts,
      addToast,
      removeToast,
      removeAllToasts,
    };
  }, [shownToasts, removeAllToasts]);

  return (
    <ToastContext.Provider value={providerObject}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
