/*
* 1. 상위 폴더 alias 설정 변경하기 o 
* 2. 기본 폰트 Pretendard르 변경하기
*/

import Header from "@common/Header";
import FloatMenu from "@common/FloatMenu";
import TournamentCard from "@common/TournamentCard";

function Tournament() {
    return (
        <div className="w-full h-dvh flex flex-col">
            <Header />
            <main className="w-full flex flex-col items-center">
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
                    <article className="w-full flex gap-4 flex-wrap justify-around">
                        <div className="w-80 h-96">
                            <TournamentCard />
                        </div>
                        <div className="w-80 h-96">
                            <TournamentCard />
                        </div>
                        <div className="w-80 h-96">
                            <TournamentCard />
                        </div>
                        <div className="w-80 h-96">
                            <TournamentCard />
                        </div>
                        <div className="w-80 h-96">
                            <TournamentCard />
                        </div>
                        <div className="w-80 h-96">
                            <TournamentCard />
                        </div>
                        
                        <div className="w-80 h-96">
                            <TournamentCard />
                        </div>
                    </article>
                </div>


                <FloatMenu />
            </main>
            <footer>

            </footer>
        </div >
    )
}

export default Tournament;