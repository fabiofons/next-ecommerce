import { SideMenu, TopMenu } from "@/components"

export default function Layout({ children }: {
    children: React.ReactNode
}) {
    return (
        <main className="min-h-screen">
            <TopMenu />
            <SideMenu />
            <div className='px-0 sm:px-5'>
                {children}
            </div>
        </main>
    )
}