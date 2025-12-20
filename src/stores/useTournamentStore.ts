import { create } from "zustand"

type State = {
    tournamentId: string | null,
    selectedTeams: string[],
}

type Action = {
    setTournamentId: (_tournamentId: State["tournamentId"]) => void,
    setSelectedTeams: (_selectedTeams: State["selectedTeams"]) => void
}

const useTournamentStore = create<State & Action>((set) => ({
    tournamentId: null,
    selectedTeams: [],
    setTournamentId: (_tournamentId) => set(() => ({ tournamentId: _tournamentId })),
    setSelectedTeams: (_selectedTeams) => set((state) => ({ selectedTeams: [...state.selectedTeams, ..._selectedTeams] }))
}))

export default useTournamentStore;