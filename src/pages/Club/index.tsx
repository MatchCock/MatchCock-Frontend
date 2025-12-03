import Header from "@common/Header";
import NavigationBar from "@common/NavigationBar";

export default function Club() {
    return (
        <div className="w-full flex flex-col min-h-dvh">
            <Header />
            <main className="w-full h-full grow shrink-0 flex flex-col md:items-center">
                <div id="container" className="w-full max-w-[1700px] min-h-full flex flex-col px-4 grow">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="w-full">
                            <div className="w-full flex justify-center md:justify-start mb-4">
                                <NavigationBar current="club"/>
                            </div>
                            <h1 id="title" className="w-full text-3xl md:text-4xl  font-bold mb-4 text-center md:text-left">
                                원하는 <span className="text-BlushPink">클럽</span>을 선택해주세요
                            </h1>
                            <div id="tip" className="flex flex-col md:flex-row w-full justify-center md:justify-start items-start md:gap-4 mb-2 md:mb-4 text-center md:text-left">
                                <div className="font-semibold text-black hidden md:block">
                                    <span>Tip</span>
                                </div>
                                <div className="grow w-full font-semibold text-sx text-neutral-500">
                                    <p>대회에 출전한 클럽목록을 보고, 원하는 클럽을 선택해보세요</p>
                                    <p>클럽명을 검색하여 더 빠르게 찾을 수도 있습니다!</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}