import Header from "@common/Header";
import NavigationBar from "@common/NavigationBar";
import useTournamentStore from "@stores/useTournamentStore";
import { useQuery } from "@tanstack/react-query";
import fetchGameList from "apis/fetchGameList";
import Spinner from "@assets/images/Spinner2.gif"


function planDateToString(planDate : string) {
    const year = planDate.slice(0, 4)
    const month = planDate.slice(4, 6)
    const date = planDate.slice(6,8)

    return `${year}년 ${month}월 ${date}일`
}

function timeToString(time : string) {
    const [hour, min] = time.split(":")

    return `${hour}시 ${min}분`
}

export default function Schedule() {
    const { selectedTeams, tournamentId } = useTournamentStore();
    const { isLoading, isFetching, isSuccess, data } = useQuery({
        queryKey: [],
        queryFn: () => fetchGameList({ tournamentId })
    })

    return (
        <div className="w-full flex flex-col min-h-dvh pb-2">
            <Header />
            <main className="w-full h-full grow shrink-0 flex flex-col md:items-center">
                <div id="container" className="w-full max-w-[1700px] min-h-full flex flex-col px-4 grow">
                    <div id="top" className="flex flex-col flex-wrap md:flex-row items-center">
                        <div className="w-full">
                            <div className="w-full flex justify-center md:justify-start mb-4">
                                <NavigationBar current="schedule" />
                            </div>
                            <h1 id="title" className="w-ful73l text-3xl md:text-4xl  font-bold mb-4 text-center md:text-left">
                                <span className="text-FairyBlue">스케쥴표</span>를 꾸미고 저장해보세요!
                            </h1>
                            <div id="tip" className="flex flex-col md:flex-row justify-center md:justify-start items-start md:gap-4 mb-2 md:mb-4 text-center md:text-left">
                                <div className="font-semibold text-black hidden md:block">
                                    <span>Tip</span>
                                </div>
                                <div className="grow w-full font-semibold text-sx text-neutral-500">
                                    <p>선택하신 클럽과 팀의 매치업을 스케쥴표로 만들었어요~!</p>
                                    <p>원하시는 색깔로 꾸민 후 사진으로 다운로드할 수 있어요</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-wrap mb-6">
                            <div className="flex gap-3 shrink-0">
                                <button className="flex items-center gap-2 shadow-2xl px-4 cursor-pointer bg-white text-black border border-neutral-100 hover:bg-black hover:text-white">
                                    <span>헤더</span>
                                </button>
                                <button className="flex items-center gap-2 shadow-2xl px-3 py-2 cursor-pointer bg-white text-black border border-neutral-100 hover:bg-black hover:text-white">
                                    <span>테두리</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div id="middle" className="w-full h-full flex flex-col items-center grow">
                        {
                            (isLoading || isFetching) &&
                            <div className="w-full h-full grow flex items-center justify-center">
                                <img alt="loading" src={Spinner} />
                            </div>
                        }
                        {(!isLoading && !isFetching && isSuccess && data) &&
                            <section id="schedule-table" className="w-full max-w-[800px] shadow-2xl rounded-2xl overflow-hidden">
                                <article className="w-full grid grid-cols-6 bg-black text-white text-center px-4 py-4">
                                    <span>날짜</span>
                                    <span>시간</span>
                                    <span>코트</span>
                                    <span>나이</span>
                                    <span>출전선수 1팀</span>
                                    <span>출전선수 2팀</span>
                                </article>
                                {
                                    data && data.gameList && data.gameList.data_list
                                        .filter(match => selectedTeams.includes(match.TEAM1_ENTRY_ID) || selectedTeams.includes(match.TEAM2_ENTRY_ID))
                                        .map(match =>
                                        (<article className="w-full grid grid-cols-6 text-center px-4 py-4">
                                            <span>{planDateToString(match.PLAN_DATE)}</span>
                                            <span>{timeToString(match.START_TIME)}</span>
                                            <span>{match.COURT_NO}번</span>
                                            <span>{match.EVENT_NM}</span>
                                            <span>{match.T1_PLAYER}</span>
                                            <span>{match.T2_PLAYER}</span>
                                        </article>)
                                        )
                                }
                            </section>
                        }
                    </div>
                </div>
            </main>
        </div>
    )
}