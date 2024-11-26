import {Link} from 'react-router-dom';
function Home() {
    return (
        <div>
            <h1>Home</h1>
            <nav>
                <ul>
                    <li><Link to="/">Trang chủ</Link></li>
                    <li><Link to="/Users">Users</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Home;