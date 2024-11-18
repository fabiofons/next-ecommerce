export default function AuthLayout({children}: {
  children: React.ReactNode
}) {
    return (
        <main className="min-h-screen bg-gray-500">
            <h1>Auth Layout</h1>
            {children}
        </main>
    )
}