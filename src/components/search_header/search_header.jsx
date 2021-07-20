import styles from './search_hedaer.module.css';

import React, { useRef } from 'react';

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef();

  const handelSearch = () => {
    const value = inputRef.current.value;
    // 검색하는것을 props로 사용해야함
    onSearch(value);
  };
  const onClick = () => {
    handelSearch();
  };

  const onKeyPress = event => {
    if (event.key === 'Enter') {
      handelSearch();
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="Search..."
        onKeyPress={onKeyPress}
      />
      <button className={styles.btn} type="submit" onClick={onClick}>
        <img className={styles.btnImg} src="/images/search.png" alt="search" />
      </button>
    </header>
  );
};

export default SearchHeader;
