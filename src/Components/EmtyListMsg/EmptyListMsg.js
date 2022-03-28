import React from 'react'
import styles from "./EmptyListMsg.module.scss"

function EmptyListMsg({msg}) {
    return (
            <div className={styles.msg}>{msg}</div>
    )
}

export default EmptyListMsg
