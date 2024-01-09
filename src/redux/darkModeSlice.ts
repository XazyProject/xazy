import { createSlice } from '@reduxjs/toolkit'

interface CounterState {
    mode: string;
}

const storedMode = localStorage.getItem('darkMode');

const initialState: CounterState = {
    mode: typeof storedMode === 'string' ? JSON.parse(storedMode) : 'false',
}

export const darkModeSlice = createSlice({
    name: "darkMode",
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.mode = state.mode === 'false' ? 'true' : 'false';
            localStorage.setItem("darkMode", JSON.stringify(state.mode));
        }
    }
})

export const { toggleDarkMode } = darkModeSlice.actions
export default darkModeSlice.reducer