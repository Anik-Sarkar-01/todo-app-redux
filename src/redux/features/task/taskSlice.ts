import type { RootState } from "@/redux/store";
import type { ITasks } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    tasks : ITasks[],
    filter: "All" | "High" | "Medium" | "Low"
}


const initialState : InitialState = {
    tasks: [
        {
            id: "asdfghjklmnop",
            title: "Initializing frontend",
            description: "Create Homepage and routing",
            dueDate: "2025-11",
            isCompleted: false, 
            priority: "High"
        },
        {
            id: "asdfghjklsdfd",
            title: "Create github repo",
            description: "Create github account and a repo",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "Low"
        },
        {
            id: "asdfghjklsadd",
            title: "Create backend",
            description: "Create backend using express and node",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "Medium"
        },
    ],
    filter : "All"
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {

    }
})

export const selectTasks = (state: RootState) => {
    return state.todo.tasks;
}
export const selectFilter = (state: RootState) => {
    return state.todo.filter;
}

export default taskSlice.reducer;