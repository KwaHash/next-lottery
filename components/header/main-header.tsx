"use client";

import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { GiTrophy } from "react-icons/gi"
import { FaListCheck } from "react-icons/fa6"
import { FaLine } from "react-icons/fa"
import { BiSolidPurchaseTag } from "react-icons/bi"

const MainHeader = () => {
  const pathname = usePathname()
  const MenuItems = [
    { label: '当選情報', icon: GiTrophy, href: '/performance' },
    { label: 'ポイント購入', icon: BiSolidPurchaseTag, href: '/point-purchase' },
    { label: 'プラン一覧', icon: FaListCheck, href: '/' },
    { label: 'お問合せ', icon: FaLine, href: '/contact' },
  ]

  return (
    <header className="w-full bg-black">
      <div className="flex items-center justify-between w-full max-w-[1400px] px-8 mx-auto">
        <Link href="/" className="py-1">
          <Image src="/imgs/icons/logo.png" alt="ミリオンゲートロゴ" width={80} height={80} className="aspect-[1/1]" priority />
        </Link>
        <div className="items-center space-x-4 hidden sm:flex">
          {MenuItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-center group space-x-1.5 text-m-gold font-bold transition-all duration-500"
              >
                <item.icon
                  className="text-2xl group-hover:text-white transition-colors duration-300"
                  style={isActive ? { fill: "#fff" } : { fill: "m-gold" }}
                />
                <span className={`group-hover:text-white transition-colors duration-300 ${isActive ? "text-white" : "text-m-gold"}`}>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default MainHeader