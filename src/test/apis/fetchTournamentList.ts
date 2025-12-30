import type { ITournamentData } from "test/type";
import axios from "./index";

export default async function fetchTournamentList(): Promise<ITournamentData[]> {
    const response = await axios.post("mobile_tm_list.php", {
        DATA: JSON.stringify({
            pageStart: 0,
            pageLimit: 10000
        }),
    })

    return response.data.data_list
}