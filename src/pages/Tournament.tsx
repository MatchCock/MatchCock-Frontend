/*
* 1. 상위 폴더 alias 설정 변경하기 o 
*/

import Header from "@common/Header";
import FloatMenu from "@common/FloatMenu";

function Tournament() {   
    return (
        <div className="w-full h-dvh">
            <Header />
            <main className="w-full grow flex flex-col">
                <div id="container" className="w-full">

                </div>
                <FloatMenu />
            </main>
            <footer>

            </footer>
        </div >
    )
}

export default Tournament;