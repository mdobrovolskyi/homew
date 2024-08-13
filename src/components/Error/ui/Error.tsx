import useWikiStore from '../../../store/wikiStore'
import styles from './Error.module.css'

export const Error = () => {
    const { error } = useWikiStore()
    return <div className={styles.Error}>{error}</div>
}
