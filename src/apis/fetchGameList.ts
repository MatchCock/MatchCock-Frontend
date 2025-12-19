import axios from "@apis";
import { AxiosError } from "axios";

interface IFetchGameList {
    tournamentId: string | null,
}

async function fetchGameList({ tournamentId }: IFetchGameList) {
    try {
        if(tournamentId === null) {
            throw new Error("대회가 선택되지 않았습니다")
        }

        const response = await axios.get("/game/list", {
            params: { tournamentId }
        })

        return response.data
    } catch (e) {
        if (e instanceof AxiosError) {
            throw new Error(e.message)
        }

        throw new Error("알 수 없는 에러가 발생했습니다")
    }
}

export default fetchGameList;