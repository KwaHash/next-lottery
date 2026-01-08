"use client";

import Image from "next/image"
import Link from "next/link"

const TermsHeader = () => {
  return (
    <header className="w-full bg-black">
      <div className="flex items-center justify-between w-full max-w-[1400px] px-8 mx-auto">
        <Link href="/" className="py-1">
          <Image src="/imgs/icons/logo.png" alt="ミリオンゲートロゴ" width={80} height={80} className="aspect-[1/1]" priority />
        </Link>
      </div>
    </header>
  );
};

export default TermsHeader