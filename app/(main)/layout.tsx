import Providers from "@/app/providers"
import MainHeader from "@/components/header/main-header"
import BottomMenu from "@/components/bottom-menu"
import CommonFooter from "@/components/footer/common-footer"

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <div className=" mb-[78px] md:mb-0">
        <MainHeader />
        <main className="flex flex-col w-full grow bg-[#eee]">
          {children}
        </main>
        <CommonFooter />
        <BottomMenu />
      </div>
    </Providers>
  )
}