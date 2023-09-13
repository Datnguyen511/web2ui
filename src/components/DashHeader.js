import { Link } from 'react-router-dom'
const DashHeader = () => {
    const content = (
        <header className = "dash-header">
            <div className = "dash-headr__container">
                <Link to ="/dash/notes">
                    <h1 className="dash-header__title">techNotes</h1>
                </Link>
                <nav className="dash-header__nav">
                    {}
                </nav>
            </div>
        </header>
    )
    return content
}
export default DashHeader