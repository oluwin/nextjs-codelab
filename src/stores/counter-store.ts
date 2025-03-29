import { create } from 'zustand';
// Note: 'create' as a default export is a deprecated import.

interface CounterState {
    count: number,
    increment: () => void
}

const useCounterStore = create<CounterState>(
    (set) => ({
        count: 0,
        increment: () => set((state: any) => ({ count: state.count + 1 })),
    }));

export default useCounterStore;