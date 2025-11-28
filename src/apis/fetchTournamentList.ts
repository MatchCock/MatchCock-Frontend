import axios from "@apis";
import type { ITournamentData } from "@type/tournament";

export type optionsType = {
    type?: "page" | "infinite" | undefined
    pageNumber?: number | undefined,
    cursor?: number | undefined,
    search?: string | undefined,
    stateFilter?: string[] | undefined,
    dateFilter?: {
        from?: Date,
        to?: Date,
    } | undefined,
    order?: {
        [key: string]: "asc" | "desc"
    } | undefined
}

async function fetchTournamentList(options: optionsType): Promise<ITournamentData[] | string> {
    try {
        const response = await axios.post("/tournament", options)

        return response.data
    } catch (e) {
        return "서버 오류가 발생했습니다.";
    }

}

export default fetchTournamentList;