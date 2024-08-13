import { render, screen, waitFor } from '@testing-library/react'
import App from './App'
import useWikiStore from '../store/wikiStore'

describe('MyComponent', () => {
    it('should render data from the store', async () => {
        const mockData = [
            { year: 2018, text: 'Event 4' },
            { year: 2019, text: 'Event 2' },
            { year: 2020, text: 'Event 1' },
            { year: 2021, text: 'Event 3' },
            { year: 2022, text: 'Event 5' },
        ]

        useWikiStore.setState({
            data: mockData,
            loading: false,
            error: null,
        })

        render(<App />)

        await waitFor(() => {
            expect(screen.getByText('Event 4')).toBeInTheDocument()
        })

        await waitFor(() => {
            expect(screen.getByText('Event 5')).toBeInTheDocument()
        })
    })
})
