import React from 'react';
import styles from './Footer.module.css'


const Footer = function() {
  return <div className={styles.footer}><span className='footer__year'>2021</span>
    <a className='footer__author-link' href='https://github.com/vladstepway'target='_blank'>Vladislav Stepovoy</a>
    <a className='footer__author-link' href='https://github.com/mykamapolice' target='_blank'>Ilya Barachenia</a>
    <a className='footer__author-link' href='https://github.com/SixStringer91' target='_blank'>Danik Lutsev</a>
    <a className='footer__author-link' href='https://github.com/svdfsdev' target='_blank'>Vasiliy Suhovenko</a>
    <img
      style={{height: "2rem"}}
      className={styles.imgFooter}
      src="https://rs.school/images/rs_school_js.svg"
      alt="rs-logo"
    />
</div>
};

export default Footer;
