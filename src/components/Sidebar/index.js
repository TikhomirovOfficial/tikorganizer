import './sidebar.scss'

const SideBar = () => {
    return (
        <div className="sidebar flex-col-betw al-center">
            <h1 className="fw-3 sidebar__title">TikOrganizer</h1>
            <nav className="navbar w-100p">
                <div className="navbar__item navbar__item-active al-center flex-column gap-15">
                    <img src="img/sidebar_forecast.svg" alt=""/>
                    <h3 className="fw-6">Прогноз погоды</h3>
                </div>
                <div className="navbar__item al-center flex-column gap-15">
                    <img src="img/sidebar_todo.svg" alt=""/>
                    <h3 className="fw-6">Список задач</h3>
                </div>
                <div className="navbar__item al-center flex-column gap-15">
                    <img src="img/sidebar_currency.svg" alt=""/>
                    <h3 className="fw-6">Прогноз погоды</h3>
                </div>
            </nav>
            <p className="sidebar__created">Created by Tikhomirov 2022</p>
        </div>
    );
};

export default SideBar;