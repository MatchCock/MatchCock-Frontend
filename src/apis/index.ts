import axios from "axios";
import fetchTournamentList from "./fetchTournamentList";

const ax = axios.create({
    baseURL: "https://sponet.co.kr/php/bm/",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
})


export {
    fetchTournamentList
};

export default ax;