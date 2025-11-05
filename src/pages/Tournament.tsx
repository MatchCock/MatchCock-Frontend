/*
* 1. 상위 폴더 alias 설정 변경하기 o 
* 2. 기본 폰트 Pretendard르 변경하기
*/

import Header from "@common/Header";
import FloatMenu from "@common/FloatMenu";
import TournamentCard from "@common/TournamentCard";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import NavigationBar from "@common/NavigationBar";
import Modal from "react-modal";
import TournamentThumbnail from "@assets/images/TournamentThumbnail.jpg"

function Tournament() {
    const optionRef = useRef<HTMLDivElement | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [isOptionOutScreen, setIsOptionOutScreen] = useState(false)

    useEffect(() => {
        if (optionRef.current === null)
            return;

        new IntersectionObserver(([entry]) => {
            if (optionRef.current) {
                if (entry.isIntersecting) {
                    setIsOptionOutScreen(false);
                } else {
                    setIsOptionOutScreen(true)
                }
            }
        }).observe(optionRef.current)
    }, [])

    return (
        <div className="w-full h-dvh flex flex-col" style={{ overflowY: isModalOpen ? "scroll" : "hidden" }}>
            <Modal
                isOpen={isModalOpen}
                className="w-full h-full outline-none flex justify-center items-center p-8"
            >
                <div className="max-w-full h-full bg-white border border-BlushPink/20 shadow-lg shadow-RoyalAmethyst/60 rounded-3xl flex gap-4 overflow-scroll">
                    <div className="max-w-1/2 h-full shirink-0">
                        <img src={TournamentThumbnail}
                            alt="배드민턴 경기 포스터"
                            className="w-full h-full object-fill"
                        />
                    </div>
                    <section className="mx-auto max-w-4xl p-6">
                        <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
                            <div className="flex items-center justify-between gap-4 bg-gradient-to-r from-indigo-500 to-sky-500 px-6 py-5 text-white">
                                <h2 className="text-lg font-semibold">대회 정보</h2>
                                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium tracking-wide">OFFICIAL</span>
                            </div>

                            <div className="p-6">
                                <dl className="divide-y">
                                    <div className="grid grid-cols-1 gap-2 py-4 sm:grid-cols-12 sm:gap-6">
                                        <dt className="sm:col-span-3 flex items-start gap-2 text-sm font-medium text-gray-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 flex-none" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M4 6h16v2H4zM4 11h16v2H4zM4 16h10v2H4z" />
                                            </svg>
                                            대회명
                                        </dt>
                                        <dd className="sm:col-span-9 text-base font-semibold text-gray-900">
                                            제 8회 중랑구협회장기 배드민턴 대회
                                        </dd>
                                    </div>

                                    <div className="grid grid-cols-1 gap-2 py-4 sm:grid-cols-12 sm:gap-6">
                                        <dt className="sm:col-span-3 flex items-start gap-2 text-sm font-medium text-gray-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 flex-none" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M7 2h2v2h6V2h2v2h3a2 2 0 0 1 2 2v3H2V6a2 2 0 0 1 2-2h3V2zm15 8v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8h20z" />
                                            </svg>
                                            대회일시
                                        </dt>
                                        <dd className="sm:col-span-9 text-gray-900">
                                            <p className="font-medium">2025년 11월 8일(토) ~ 9일(일) <span className="text-gray-500">/ 2일간</span></p>
                                            <p className="mt-1 text-sm text-gray-500">일정을 캘린더에 추가하세요.</p>
                                        </dd>
                                    </div>

                                    <div className="grid grid-cols-1 gap-2 py-4 sm:grid-cols-12 sm:gap-6">
                                        <dt className="sm:col-span-3 flex items-start gap-2 text-sm font-medium text-gray-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 flex-none" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm1-5h-2v2h2V2zM3 11H1v2h2v-2zm20 0h-2v2h2v-2zM12 20h-2v2h2v-2z" />
                                            </svg>
                                            개회식
                                        </dt>
                                        <dd className="sm:col-span-9 text-gray-900">
                                            <p className="font-medium">2025년 11월 8일(토) 11시</p>
                                            <p className="text-sm text-gray-500">묵동다목적체육관</p>
                                        </dd>
                                    </div>

                                    <div className="grid grid-cols-1 gap-2 py-4 sm:grid-cols-12 sm:gap-6">
                                        <dt className="sm:col-span-3 flex items-start gap-2 text-sm font-medium text-gray-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 flex-none" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7zm0 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                                            </svg>
                                            대회 장소
                                        </dt>
                                        <dd className="sm:col-span-9 text-gray-900">
                                            <ul className="list-inside list-disc space-y-1">
                                                <li>묵동다목적체육관</li>
                                                <li>신내다목적체육관</li>
                                            </ul>
                                        </dd>
                                    </div>

                                    <div className="grid grid-cols-1 gap-2 py-4 sm:grid-cols-12 sm:gap-6">
                                        <dt className="sm:col-span-3 flex items-start gap-2 text-sm font-medium text-gray-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 flex-none" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M3 3h18v2H3zM5 7h14v2H5zM7 11h10v2H7zM9 15h6v2H9z" />
                                            </svg>
                                            주최
                                        </dt>
                                        <dd className="sm:col-span-9 text-gray-900">중랑구 체육회</dd>
                                    </div>

                                    <div className="grid grid-cols-1 gap-2 py-4 sm:grid-cols-12 sm:gap-6">
                                        <dt className="sm:col-span-3 flex items-start gap-2 text-sm font-medium text-gray-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 flex-none" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm-9 9a9 9 0 0 1 18 0z" />
                                            </svg>
                                            주관
                                        </dt>
                                        <dd className="sm:col-span-9 text-gray-900">중랑구배드민턴협회</dd>
                                    </div>

                                    <div className="grid grid-cols-1 gap-2 py-4 sm:grid-cols-12 sm:gap-6">
                                        <dt className="sm:col-span-3 flex items-start gap-2 text-sm font-medium text-gray-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 flex-none" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M4 4h16v6H4zM4 12h7v8H4zM13 12h7v8h-7z" />
                                            </svg>
                                            후원
                                        </dt>
                                        <dd className="sm:col-span-9 text-gray-900">
                                            <span className="mr-2 inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">중랑구</span>
                                            <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">서울특별시체육회</span>
                                        </dd>
                                    </div>

                                    <div className="grid grid-cols-1 gap-2 py-4 sm:grid-cols-12 sm:gap-6">
                                        <dt className="sm:col-span-3 flex items-start gap-2 text-sm font-medium text-gray-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 flex-none" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M7 5h10v2H7zM5 9h14v2H5zM7 13h10v2H7zM9 17h6v2H9z" />
                                            </svg>
                                            경기 종목
                                        </dt>
                                        <dd className="sm:col-span-9">
                                            <div className="flex flex-wrap gap-2">
                                                <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700">혼합</span>
                                                <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">남자</span>
                                                <span className="inline-flex items-center rounded-full bg-pink-50 px-3 py-1 text-sm font-medium text-pink-700">여자</span>
                                            </div>
                                        </dd>
                                    </div>
                                </dl>
                            </div>

                            <div className="flex flex-col gap-3 border-t bg-gray-50 px-6 py-4 sm:flex-row sm:items-center sm:justify-end">
                                <a href="#" className="inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-white">
                                    안내문 다운로드
                                </a>
                                <a href="#" className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500">
                                    참가 신청하기
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </Modal>

            <Header />
            <main className="w-full flex flex-col md:items-center">
                <div id="container" className="w-full flex flex-col max-w-6xl px-6 md:px-2">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="w-full">
                            <div className="w-full flex justify-center md:justify-start mb-4">
                                <NavigationBar />
                            </div>
                            <h1 id="title" className="w-full text-3xl md:text-4xl  font-bold mb-4 text-center md:text-left">
                                <span className="text-BlushPink">대회</span>를 찾고 계신가요?
                            </h1>
                            <div id="tip" className="flex flex-col md:flex-row w-full justify-center md:justify-start items-start md:gap-4 mb-2 md:mb-8 text-center md:text-left">
                                <div className="font-semibold text-black hidden md:block">
                                    <span>Tip</span>
                                </div>
                                <div className="grow w-full font-semibold text-sx text-neutral-500">
                                    <p>찾는 배드민턴 대회가 있으신가요?</p>
                                    <p>검색이나 필터를 통해 더 쉽고 빠르게 찾아보세요!</p>
                                </div>

                                <div id="option" className="flex w-full md:w-auto mt-4 md:mt-0 justify-center gap-3 mb-2 md:mb-0" ref={optionRef}>
                                    <div className="flex">
                                        <button className="w-10 h-10 cursor-pointer rounded-sm text-xm font-medium text-neutral-500 hover:text-black hover:font-bold">
                                            정렬
                                        </button>
                                        <button className="w-10 h-10 cursor-pointer rounded-sm text-xm font-medium text-neutral-500 hover:text-black hover:font-bold">
                                            필터
                                        </button>
                                    </div>

                                    <div className="flex gap-4">
                                        <button className="w-10 h-10 cursor-pointer">
                                            <BsArrowLeftSquare className="w-full h-full opacity-40 hover:opacity-80" />
                                        </button>
                                        <button className="w-10 h-10 cursor-pointer">
                                            <BsArrowRightSquare className="w-full h-full opacity-40 hover:opacity-80" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <article className="w-full flex gap-4 flex-wrap justify-between">
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