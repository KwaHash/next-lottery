"use client";

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { GiTrophy } from "react-icons/gi"
import { FaListCheck } from "react-icons/fa6"
import { FaLine } from "react-icons/fa"
import { BiSolidPurchaseTag } from "react-icons/bi"

const MainHeader = () => {
  return (
    <header className="w-full bg-black">
      <div className="flex items-center justify-between w-full max-w-[1400px] px-8 mx-auto">
        <Link href="/" className="py-1">
          <Image src="/imgs/icons/logo.png" alt="ミリオンゲートロゴ" width={80} height={80} className="aspect-[1/1]" priority />
        </Link>
        <div className="flex items-center space-x-4">
          <Link
            href="#"
            className="flex items-center justify-center group space-x-1.5 text-m-gold font-bold transition-all duration-500"
          >
            <GiTrophy className="text-2xl group-hover:text-white transition-colors duration-300" />
            <span className="group-hover:text-white transition-colors duration-300">当選情報</span>
          </Link>
          <Link
            href="#"
            className="flex items-center justify-center group space-x-1.5 text-m-gold font-bold transition-all duration-500"
          >
            <BiSolidPurchaseTag className="text-2xl group-hover:text-white transition-colors duration-300" />
            <span className="group-hover:text-white transition-colors duration-300">ポイント購入</span>
          </Link>
          <Link
            href="#"
            className="flex items-center justify-center group space-x-1.5 text-m-gold font-bold transition-all duration-500"
          >
            <FaListCheck className="text-2xl group-hover:text-white transition-colors duration-300" />
            <span className="group-hover:text-white transition-colors duration-300">プラン一覧</span>
          </Link>
          <Link
            href="#"
            className="flex items-center justify-center group space-x-1.5 text-m-gold font-bold transition-all duration-500"
          >
            <FaLine className="text-2xl group-hover:text-white transition-colors duration-300" />
            <span className="group-hover:text-white transition-colors duration-300">お問合せ</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default MainHeader