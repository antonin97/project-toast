import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [usedVariant, setUsedVariant] = React.useState('notice');
  const [shownToasts, setShownToasts] = React.useState([]);

  console.log("PLAYGROUND RENDERED")

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toastList={shownToasts} setToastList={setShownToasts}></ToastShelf>

      <div className={styles.controlsWrapper}>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const id = crypto.randomUUID();
            const newShownToasts = [...shownToasts, {
              id,
              variant: usedVariant,
              children: message,
            }
            ];
            setShownToasts(newShownToasts);
            setMessage('');
            setUsedVariant('notice');
          }}
        >
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                required
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
                className={styles.messageInput}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              {VARIANT_OPTIONS.map((variant) => {
                return (
                  <label key={variant} htmlFor={`variant-${variant}`}>
                    <input
                      id={`variant-${variant}`}
                      type="radio"
                      name="variant"
                      value={variant}
                      checked={usedVariant === variant}
                      onChange={(event) => {
                        setUsedVariant(event.target.value);
                      }}
                    />
                    {variant}
                  </label>
                );
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ToastPlayground;
