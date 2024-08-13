const axios = {
    get: jest.fn(() =>
        Promise.resolve({
            data: {
                events: [
                    { year: 2020, description: 'Event 1' },
                    { year: 2019, description: 'Event 2' },
                    { year: 2021, description: 'Event 3' },
                    { year: 2018, description: 'Event 4' },
                    { year: 2022, description: 'Event 5' },
                ],
            },
        })
    ),
}

export default axios
