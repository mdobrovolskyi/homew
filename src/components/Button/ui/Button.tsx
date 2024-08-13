import React from 'react'
import styles from './Button.module.css'

export const Button: React.FC<React.HTMLAttributes<HTMLButtonElement>> = (
    props
) => {
    const { children } = props
    return (
        <button {...props} className={styles.Button}>
            {children}
        </button>
    )
}
