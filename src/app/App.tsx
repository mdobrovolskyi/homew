import React from 'react'
import { Button } from '../components/Button'
import useWikiStore from '../store/wikiStore'
import styles from './App.module.css'
import { EventItem } from '../components/EventItem'
import { Error } from '../components/Error'
import { Loader } from '../components/Loader'

function App() {
    const { data, fetchData } = useWikiStore()

    const onClick = () => {
        fetchData()
    }

    return (
        <div className={styles.main}>
            <div className={styles.control}>
                <Loader />
                <Error />
                <Button onClick={onClick}>Fetch data</Button>
            </div>
            <div className={styles.content}>
                {data.map(({ text, year }) => (
                    <EventItem text={text} year={year} key={text} />
                ))}
            </div>
        </div>
    )
}

export default App
