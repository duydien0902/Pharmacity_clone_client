import { Container } from "@/components/ui/container"

import { TopNav } from "./_components/top-nav"
import { Navbar } from "./_components/navbar"

export const Header = () => {
    return (
        <header className="relative bg-[#0072bc]">
            <Container className="text-white pb-3 px-4 pt-4">
                <TopNav />
                <Navbar />
            </Container>
        </header>
    )
}