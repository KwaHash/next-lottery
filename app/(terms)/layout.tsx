import TermsHeader from "@/components/header/terms-header"
import CommonFooter from "@/components/footer/common-footer";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TermsHeader />
      <main className="flex w-full grow bg-[#eee] min-h-[calc(100dvh_-_88px)]">
        {children}
      </main>
      <CommonFooter />
    </>
  )
}