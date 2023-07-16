export const TabItem = ({ title, index, active, setActive }) => {
    const className = active ? 'border-b-yellow-400' : 'border-none text-slate-400';
    var name;
    switch (title) {
        case 2:
            name = "Appetizer";
            break;
        case 3:
            name = "Entree";
            break;
        case 4:
            name = "Dessert";
            break;
        case 5:
            name = "Drinks";
            break;
        case 6:
            name = "Breakfast";
            break;
        case 7:
            name = "Sandwiches";
            break;
        default:
            name = title;
    }

    return (
        <div className="nav-item px-2">
            <button onClick={() => setActive(title)} className="pt-7 pb-3">
                <span className={`hover:text-yellow transition-colors border-b-2 ${className}`}>
                    {name}
                </span>
            </button>
        </div>
    )
}