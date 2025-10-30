/* 변경 사항
 * font Pretendard tailwindcss 적용 o
 * color 이름 변경 o
 *
*/

import LogoImage from "./assets/images/Logo.svg"

function App() {
  return (
    <div className="w-full h-full">
      <header className="sticky w-full h-20 p-5">
        <div className="w-8 h-8">
          <img
            src={LogoImage} alt="로고"
            className="w-full h-full"
          />
        </div>
      </header>

      <main className="flex justify-center">
        <div id="container" className="flex flex-col items-center min-w-96 w-full p-5  max-w-7xl">
          <div id="imageWrap" className="w-20 h-20 mb-8">
            <img src="https://stauter-web-dev.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FImg_main.66654e82.png&w=256&q=100" alt="아이콘" />
          </div>
          <div id="textWrap">
            <p className="text-center mb-6 font-Pretendard text-[22px] leading-10 font-bold">
              <span className="bg-clip-text bg-linear-to-r from-BlushPink to-MysticIndigo text-transparent">
                IT 스타터
              </span>
              를 위한 가이드 <br />
              스타우터
            </p>
            <p className="mb-4 text-center text-[13px] leading-6 font-Pretendard font-light">
              <b className="font-bold" >아웃소싱 제안에 필요한 문서</b>를 간편하게 정리하기! <br />
              스타우터 테스트를 통해 요구사항 정의서부터 기능구조도, <br />
              예시 화면까지 무료로 받아보세요!
            </p>
          </div>
          <div id="buttonWrap" className="w-full">
            <button className="w-full font-Pretendard font-bold text-white bg-RoyalAmethyst py-4 rounded-xl mb-4 leading-6">
              지금 바로 시작하기
            </button>
          </div>
          <div id="detail" className="w-full text-[rgba(0,0,0,.65)] font-Pretendard font-light text-xs">
            <table className="w-full border-separate border-spacing border-spacing-4">
              <tr>
                <td className="">예상 소요시간</td>
                <td>약 8분 ~ 12분</td>
              </tr>
              <tr>
                <td>추천 이용자</td>
                <td>초기 기획을 완료하 IT 서비스 제작자</td>
              </tr>
            </table>
          </div>
        </div>
      </main>

      <footer>

      </footer>
    </div>
  )
}

export default App
