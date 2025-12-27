import { create } from "zustand"

type State = {
    tournamentId: string | null,
    checked: string[],
}

type Action = {
    setTournamentId: (_tournamentId: State["tournamentId"]) => void,
    setChecked: (func: (_checked : State["checked"]) => State["checked"]) => void
}

const useTournamentStore = create<State & Action>((set) => ({
    tournamentId: null,
    checked: [],
    setTournamentId: (_tournamentId) => set(() => ({ tournamentId: _tournamentId })),
    setChecked: (func : ((_checked : string[]) => string[])) => set((state) => ({ checked: [ ...func(state.checked)] }))
}))

export default useTournamentStore;