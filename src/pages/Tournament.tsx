/*
* 1. 상위 폴더 alias 설정 변경하기 o 
*/

import Header from "@common/Header";
import FloatMenu from "@common/FloatMenu";
import TournamentThumbnail from "@assets/images/TournamentThumbnail.jpg"

function Tournament() {
    return (
        <div className="w-full h-dvh flex flex-col">
            <Header />
            <main className="w-full grow flex flex-col items-center">
                <div id="container" className="w-full max-w-3xl">
                    <h1 id="title" className="text-4xl font-Pretendard font-bold mb-4">
                        <span className="text-BlushPink">어떤 대회</span>를 나가시나요?
                    </h1>
                    <div id="tip" className="flex items-start gap-4">
                        <div className="font-semibold text-black">
                            <span>Tip</span>
                        </div>
                        <div className="font-Pretendard font-semibold text-sx text-neutral-500">
                            <p>출전하거나 둘러보고 싶은 배드민턴 대회가 있으신가요?</p>
                            <p>검색이나 필터를 통해 더 쉽고 빠르게 찾아보세요!</p>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <section id="tournament-card-wrap">
                    <article
                        id="tournament-card"
                        className="rounded-2xl w-60 h-80 bg-black relative"
                    >
                        <img
                            src={TournamentThumbnail} alt="토너먼트 썸네일"
                            className="absolute left-0 top-0"
                        />
                        <div className="text-black absolute right-0 top-0">
                            <h3>배드민턴 대회 이름</h3>
                            <p>
                                <time dateTime="2025-05-03">2025년 5월 3일</time>
                                <address>배드민턴체육관</address>
                                <mark>123</mark>
                                <data value="120">120명 참가 진행중</data>
                            </p>
                        </div>

                    </article>
                </section>

                <FloatMenu />
            </main>
            <footer>

            </footer>
        </div >
    )
}

export default Tournament;