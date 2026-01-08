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
      <MainHeader />
      <main className="flex flex-col w-full grow bg-[#eee] mb-[78px] sm:mb-0">
        {children}
      </main>
      <CommonFooter />
      <BottomMenu />
    </Providers>
  )
}