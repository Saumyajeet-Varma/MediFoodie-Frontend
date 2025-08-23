const Header = () => {
    return (
        <header className="flex justify-between items-center py-5 px-10">
            <div className="logo text-2xl font-bold">MediFoodie</div>
            <ul className="flex gap-4">
                <li>Home</li>
                <li>About</li>
                <li>Doctor</li>
                <li>Food</li>
            </ul>
        </header>
    )
}

export default Header
