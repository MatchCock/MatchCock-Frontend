/*
* 1. 상위 폴더 alias 설정 변경하기 o 
*/

import Header from "@common/Header";

function Tournament() {
    return (
        <div className="w-full h-dvh">
            <Header />
            <main className="w-full grow flex flex-col">
                <div id="container" className="w-full">
                    
                </div>
                <nav id="menuWrap" className="fixed right-0 top-0">
                    <div
                        id="tournament"
                        tabIndex={0}
                        // style={{"backgroundPosition" : "-4px -203px"}}
                        className="w-20 h-20 shrink-0 
                                bg-size-[300px] bg-position-[-4px_-23px] hover:bg-position-[-4px_-108px] focus:bg-position-[-4px_-108px] 
                                bg-[url('assets/images/MenuSprite.png')] bg-no-repeat cursor-pointer"
                    />

                    <div
                        id="club"
                        tabIndex={0}
                        // style={{"backgroundPosition" : "-75px -203px"}}
                        className="w-20 h-20 shrink-0
                            bg-size-[300px] 
                                bg-position-[-75px_-23px] hover:bg-position-[-75px_-108px] focus:bg-position-[-75px_-108px] 
                                bg-[url('assets/images/MenuSprite.png')] bg-no-repeat cursor-pointer"
                    />
                    <div
                        id="team"
                        tabIndex={0}
                        // style={{"backgroundPosition" : "-148px -203px"}}
                        className="w-20 h-20 shrink-0
                            bg-size-[300px] 
                                bg-position-[-148px_-23px] hover:bg-position-[-148px_-108px] focus:bg-position-[-148px_-108px] 
                                bg-[url('assets/images/MenuSprite.png')] bg-no-repeat cursor-pointer"
                    />
                    <div
                        id="schedule"
                        tabIndex={0}
                        // style={{"backgroundPosition" : "-221px -203px"}}
                        className="w-20 h-20 shrink-0
                            bg-size-[300px] 
                                        bg-position-[-221px_-23px] hover:bg-position-[-221px_-108px] focus:bg-position-[-221px_-108px] 
                                bg-[url('assets/images/MenuSprite.png')] bg-no-repeat cursor-pointer"
                    />
                </nav>
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default Tournament;