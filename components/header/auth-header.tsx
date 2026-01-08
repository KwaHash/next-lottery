"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoArrowForward } from "react-icons/io5";
import { RiUserAddLine, RiLoginBoxLine } from "react-icons/ri";

const AuthHeader = () => {
  const pathName = usePathname();

  return (
    <header className="w-full bg-black">
      <div className="flex items-center justify-between w-full max-w-[1400px] px-8 mx-auto">
        <Link href="/" className="py-1">
          <Image src="/imgs/icons/logo.png" alt="ミリオンゲートロゴ" width={80} height={80} className="aspect-[1/1]" priority />
        </Link>
        {pathName === "/login" ? (
          <Link
            href="/sign-up"
            className="flex items-center justify-center group space-x-1.5 text-m-gold font-bold transition-all duration-500"
          >
            <RiUserAddLine className="text-2xl group-hover:text-white transition-colors duration-300" />
            <span className="group-hover:text-white transition-colors duration-300">サインアップ</span>
          </Link>
        ) : (
          <Link
            href="/login"
            className="flex items-center justify-center group space-x-1.5 text-m-gold font-bold transition-all duration-500"
          >
            <RiLoginBoxLine className="text-2xl group-hover:text-white transition-colors duration-300" />
            <span className="group-hover:text-white transition-colors duration-300">ログイン</span>
          </Link>
        )}
      </div>
    </header>
  );
};

export default AuthHeader;