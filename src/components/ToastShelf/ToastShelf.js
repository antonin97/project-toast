import React from 'react';

import Toast from '../Toast';
import { ToastContext } from '../ToastProvider';

import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { shownToasts } = React.useContext(ToastContext);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {shownToasts.map((toast) => {
        return (
          <li key={toast.id} className={styles[toast.variant]}>
            <div className={styles.toastWrapper}>
              <Toast variant={toast.variant} id={toast.id}>
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
