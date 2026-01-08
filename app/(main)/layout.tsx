import MainHeader from "@/components/header/main-header"

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MainHeader />
      <main className="flex w-full grow bg-[#eee] min-h-[calc(100dvh_-_88px)]">
        {children}
      </main>
    </>
  )
}