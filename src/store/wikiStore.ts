import { create } from 'zustand'
import axios from 'axios'
import { EventItemI } from '../types/event'

const baseUrl =
    'https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/events'

type WikiStore = {
    data: EventItemI[]
    loading: boolean
    error: string | null
    fetchData: () => Promise<void>
}

const useWikiStore = create<WikiStore>((set) => ({
    data: [],
    loading: false,
    error: null,
    fetchData: async () => {
        const today = new Date()
        const month = (today.getMonth() + 1).toString().padStart(2, '0')
        const day = today.getDate().toString().padStart(2, '0')
        const url = `${baseUrl}/${month}/${day}`

        try {
            set({ loading: true, error: null })
            const res = await axios.get(url, {
                headers: {
                    // Use the api key that i sent you :)
                    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
                },
            })
            const slicedData = res.data.events.slice(0, 5)
            const sortedByYear = slicedData.sort(
                (a: EventItemI, b: EventItemI) => a.year - b.year
            )
            set({ data: sortedByYear })
        } catch (error) {
            if (axios.isAxiosError(error)) {
                set({ error: error.message })
            } else {
                set({ error: 'An unknown error occurred' })
            }
        } finally {
            set({ loading: false })
        }
    },
}))

export default useWikiStore
