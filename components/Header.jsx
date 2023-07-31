import React, { useEffect } from 'react'
import styles from './Header.module.css'

const Header = () => {

  return (
    <div className={styles.header}>
        <div className={styles.left}>
            <div className={styles.logo}>Social Seedlings</div>
        </div>

        <div className={styles.right}>

        </div>
    </div>
  )
}

export default Header