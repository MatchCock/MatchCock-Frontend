function NavigationBar() {
    return (
        <div className="flex items-center">
            <button className="font-semibold mr-2 cursor-pointer">대회</button>
            <span className="mr-2">/</span>
            <button className="font-light mr-2 opacity-50 cursor-pointer">클럽</button>
            <span className="mr-2">/</span>
            <button className="font-light mr-2 opacity-50 cursor-pointer">스케쥴표</button>
        </div>
    )
}

export default NavigationBar;