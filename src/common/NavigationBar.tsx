import clsx from "clsx";
import { Link } from "react-router";

interface INavigationBar {
    current: "tournament" | "club" | "schedule"
}
function NavigationBar({
    current
}: INavigationBar) {
    return (
        <div className="flex items-center">
            <Link to="/MatchCock/Tournament" className={clsx(
                "mr-2 cursor-pointer block",
                current === "tournament" ? "font-semibold" : "font-light"
            )}>대회</Link>
            <span className="mr-2">/</span>
            <Link to="/MatchCock/Club" className={clsx(
                "mr-2 cursor-pointer block",
                current === "club" ? "font-semibold" : "font-light"
            )}>클럽</Link>
            <span className="mr-2">/</span>
            <Link to="/MatchCock/Schedule" className={clsx(
                "mr-2 cursor-pointer block",
                current === "schedule" ? "font-semibold" : "font-light"
            )}>스케쥴표</Link>
        </div>
    )
}

export default NavigationBar;