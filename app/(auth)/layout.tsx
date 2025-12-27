import '@/styles/globals.scss'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex w-full min-h-screen grow bg-[#eee]">
      {children}
    </main>
  )
}