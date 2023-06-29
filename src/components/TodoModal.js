import React from 'react';
import { MdOutlineClose } from 'react-icons/md';
import styles from '../styles/modules/modal.module.scss';

function TodoModal() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.closeButton}>
          <MdOutlineClose />
        </div>
        <form className={styles.form}>
          <h1 className={styles.formTitle}>Add Task</h1>
          <label htmlFor="title">
            Title HOi HOi
            <input type="text" id="title" />
          </label>
          <label htmlFor="status">
            Status Hoi Hoi
            <select name="status" id="status">
              <option value="incomplete">Incomplete</option>
              <option value="complete">Complete</option>
              <option value="kiv">KIV</option>
            </select>
          </label>
        </form>
      </div>
    </div>
  );
}

export default TodoModal;
