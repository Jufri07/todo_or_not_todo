import React from 'react';
import Button, { SelectButton } from './Button';
import styles from '../styles/modules/app.module.scss';

function AppHeader() {
  return (
    <div className={styles.appHeader}>
      <Button variant="primary">Click Me</Button>
      <SelectButton id="status">
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <opton value="complete">Complete</opton>
      </SelectButton>
    </div>
  );
}

export default AppHeader;
