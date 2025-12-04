import axios from "@apis";
import { AxiosError } from "axios";
import type { IMatchData } from "@type/tournament";

export type optionsType = {
    tournamentId : string | null
}

interface IFetchTournamentData {
    data?: {
        tournament : [IMatchData[]]
    }
}

async function fetchTournamentList({tournamentId}: optionsType): Promise<IFetchTournamentData> {
    try {
        const response = await axios.get(`/tournament/${tournamentId}`)

        return response.data
    } catch (e) {
        if (e instanceof AxiosError) {
            throw new Error(e.message)
        }

        throw new Error("알 수 없는 에러가 발생했습니다");
    }
}

export default fetchTournamentList;