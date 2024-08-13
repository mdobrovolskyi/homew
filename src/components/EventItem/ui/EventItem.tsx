import { EventItemI } from '../../../types/event'
import styles from './EventItem.module.css'

export const EventItem = (props: EventItemI) => {
    const { text, year } = props

    return (
        <div className={styles.EventItem}>
            <div className={styles.year}>{year}</div>
            <div className={styles.text}>
                <p>{text}</p>
            </div>
        </div>
    )
}
