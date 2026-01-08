import MainHeader from "@/components/header/main-header"
import BottomMenu from "@/components/bottom-menu"

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MainHeader />
      <main className="flex w-full grow bg-[#eee] min-h-[calc(100dvh_-_88px)] mb-[78px] sm:mb-0">
        {children}
      </main>
      <BottomMenu />
    </>
  )
}