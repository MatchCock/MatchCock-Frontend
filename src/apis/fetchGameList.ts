import axios from "@apis";
import { AxiosError } from "axios";

interface IFetchGameList {
    tournamentId: string | null,
}

type MatchType = {
    TOURNAMENT_ID: string,
    "SEQ": string,
    "EVENT_ID": string,
    "EVENT_NM": string,
    "DRAW_ID": string,
    "DRAW_NM": string,
    "DRAW_TYPE": string,
    "MATCH_ID": string,
    "PLAN_NO": string,
    "ENTRY_ID": string,
    "TEAM1_ENTRY_ID": string,
    "T1CLUB": string,
    "T1CLUB_ID": string,
    "T1CLUB2": string,
    "T1CLUB_ID2": string,
    "T1_PLAYER1_ID": string,
    "T1_PLAYER2_ID": string,
    "T1_ADVANTAGE": string,
    "T1_PLAYER": string,
    "TEAM2_ENTRY_ID": string,
    "T2CLUB": string,
    "T2CLUB_ID": string,
    "T2CLUB2": string,
    "T2CLUB_ID2": string,
    "T2_PLAYER1_ID": string,
    "T2_PLAYER2_ID": string,
    "T2_ADVANTAGE": string,
    "T2_PLAYER": string,
    "WIN": string,
    "WINNER_ID": string,
    "LOSER_ID": string,
    "PLAN_DATE": string,
    "COURT_NO": string,
    "PREPLAN1_NO": string,
    "PREPLAN2_NO": string,
    "NEXTPLAN_NO": string,
    "WALKOVER_YN": string,
    "RETIRED_YN": string,
    "T1_SET1": string,
    "T2_SET1": string,
    "SET_SCORE1": string,
    "SET_SCORE2": string,
    "TOTAL_SCORE1": string,
    "TOTAL_SCORE2": string,
    "MATCH_STS": string,
    "MATCH_STS_NM": string,
    "SUB_SEQ": string,
    "COURT_SORT": string,
    "START_TIME": string,
    "END_TIME": string,
    "REMARK1": string,
    "REMARK2": string,
    "SET_COUNT": string,
    "DEFAULT_WIN_SCORE": string,
    "DEFAULT_WIN_SCORE_T": string,
    "GAME_TYPE": string,
    "REG_DATE": string,
    "CHG_DATE": string,
    "GYM_CD": string
}

type GameListType = {
    gameList: {
        ResultCode: string,
        courtList: {
            COURT_NO: string
        }[],
        data_list: MatchType[],
        gymList: {
            GYM_CD: string,
            GYM_NM: string,
        }[],
        planDateList: {
            PLAN_DATE: string
        }[],
        sCourtMap: [MatchType[]],
        sTimeMap: {
            [time: string]: MatchType[]
        },
        startTimeList: {
            START_TIME: string
        }[]
    }
}

async function fetchGameList({ tournamentId }: IFetchGameList): Promise<GameListType> {
    try {
        if (tournamentId === null) {
            throw new Error("대회가 선택되지 않았습니다")
        }

        const response = await axios.get("/game/list", {
            params: { tournamentId }
        })

        return response.data.data
    } catch (e) {
        if (e instanceof AxiosError) {
            throw new Error(e.message)
        }

        throw new Error("알 수 없는 에러가 발생했습니다")
    }
}

export default fetchGameList;