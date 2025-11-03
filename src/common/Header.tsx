/*
* 1. 최상위 폴더 alias 설정하기 (미진행)
* 2. header 디자인 수정하기
* 
*/

import LogoImage from "@assets/images/Logo.svg"

function Header() {
    return (
        <header className="fixed w-full h-20 p-5">
            <div className="w-8 h-8">
                <img
                    alt="로고"
                    src={LogoImage} 
                    className="w-full h-full"
                />
            </div>
        </header>
    )
}

export default Header;