import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toastList, setToastList }) {

  console.log("SHELF RENDERED")

  return (
    <ol className={styles.wrapper}>
      {toastList.map((toast) => {
        return (
          <li key={toast.id} className={styles[toast.variant]}>
            <div className={styles.toastWrapper}>
            <Toast
              variant={toast.variant}
              handleDismiss={() => {
                setToastList((currentToasts) =>
                  currentToasts.filter((currentToast) => currentToast.id !== toast.id)
                );
              }}
            >
              {toast.children}
            </Toast>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export default React.memo(ToastShelf);
