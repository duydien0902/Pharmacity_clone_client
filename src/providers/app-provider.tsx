import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
                <main className="flex flex-col min-h-screen relative bg-white">{children}</main>
            <Footer />
        </>
    )
}

