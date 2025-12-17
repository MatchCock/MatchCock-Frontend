import Header from "@common/Header";
import NavigationBar from "@common/NavigationBar";

export default function Schedule() {
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
                            <h1 id="title" className="w-full text-3xl md:text-4xl  font-bold mb-4 text-center md:text-left">
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
                    <div id="middle" className="w-full flex justify-center ">
                        <section id="schedule-table" className="w-full max-w-[800px] shadow-2xl rounded-2xl overflow-hidden">
                            <article className="w-full grid grid-cols-5 bg-black text-white text-center py-4">
                                <span>시간</span>
                                <span>코트</span>
                                <span>나이</span>
                                <span>체육관</span>
                                <span>출전선수</span>
                            </article>
                            <article className="w-full grid grid-cols-5 text-center py-4">
                                <span>25/12/17 18:36</span>
                                <span>6번</span>
                                <span>20대</span>
                                <span>자양초등학교</span>
                                <span>장동건&장지혜</span>
                            </article>

                        </section>
                    </div>
                </div>
            </main>
        </div>
    )
}