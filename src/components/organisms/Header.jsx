export default function Header () {
    return (
        <header className="bg-alice-blue py-2">
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between py-4">
                    <div>
                        <h1 className="text-2xl font-bold">Doctor +</h1>
                    </div>
                    <div className="hidden space-x-4 md:flex">
                        <a href="#" className="hover:text-primary-blue">Home</a>
                        <a href="#" className="hover:text-primary-blue">About</a>
                        <a href="#" className="hover:text-primary-blue">Services</a>
                        <a href="#" className="hover:text-primary-blue">Contact</a>
                    </div>
                    <button className="md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </nav>
            </div>
        </header>
    )
} 