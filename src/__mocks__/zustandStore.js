import { create } from 'zustand'

const useWikiStore = create((set) => ({
    data: [],
    loading: false,
    error: null,
    fetchData: jest.fn(() => Promise.resolve()),
}))

export default useWikiStore
