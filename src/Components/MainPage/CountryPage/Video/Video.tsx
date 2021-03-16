import React from 'react';
import ReactPlayer from 'react-player';
import styles from './Video.module.css';

export default function Video({ url }: any) {
  return (
    <div className={styles['player-wrapper']}>
      <ReactPlayer controls url={url} playing={true} />
    </div>
  );
}
