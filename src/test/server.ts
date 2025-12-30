import { setupWorker } from 'msw/browser'
import { GetTournament, PostTournamentList } from './router/tournamentRouter'
import { GetGame } from './router/gameRouter'

export const worker = setupWorker(
    GetGame,
    GetTournament,
    PostTournamentList,
)
