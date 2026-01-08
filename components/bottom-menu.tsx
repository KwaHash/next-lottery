"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { GiTrophy } from "react-icons/gi"
import { FaListCheck } from "react-icons/fa6"
import { FaLine } from "react-icons/fa"
import { BiSolidPurchaseTag } from "react-icons/bi"

const BottomMenu = () => {
  const pathname = usePathname()
  const MenuItems = [
    { label: '当選情報', icon: GiTrophy, href: '/performance' },
    { label: 'ポイント購入', icon: BiSolidPurchaseTag, href: '/point-purchase' },
    { label: 'プラン一覧', icon: FaListCheck, href: '/' },
    { label: 'お問合せ', icon: FaLine, href: '/contact' },
  ];

  return (
    <div className="block md:hidden fixed bottom-0 left-0 right-0">
      <div className="flex items-center justify-around border-t border-gray-300 bg-gray-100 py-4">
        {MenuItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative flex flex-col gap-1 items-center justify-center"
            >
              <item.icon
                className="h-6 w-6"
                style={isActive ? { fill: "#997b35" } : { fill: "#6b7280" }}
              />
              <span className={`text-xs font-bold ${isActive ? "text-m-gold" : "text-gray-700"}`}>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  )
}

export default BottomMenu
