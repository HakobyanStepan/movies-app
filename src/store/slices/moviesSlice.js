import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        results: [],
        selectedMovie: null,
        history: [],
        showHistory: false,
    },
    reducers: {
        setResults: (state, action) => {
            state.results = action.payload;
        },
        setSelectedMovie: (state, action) => {
            state.selectedMovie = action.payload;
        },
        setHistory: (state, action) => {
            state.history = action.payload;
        },
        setShowHistory: (state, action) => {
            state.showHistory = action.payload;
        },
    },
});

export const { setResults, setSelectedMovie, setHistory, setShowHistory } = moviesSlice.actions;
export default moviesSlice.reducer;