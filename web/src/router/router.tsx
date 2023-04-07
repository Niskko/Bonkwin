import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import './router.css';

function AppRouter() {
	return (
		<BrowserRouter>
			<div className={'navigation'}>
				<h3 className="navigation-title">Mon application TODO</h3>
				<NavLink to={'/'}>Mes annonces</NavLink>
				<NavLink to={'/ad'}>Les annonces</NavLink>
				<NavLink to={'/profil'}>Mon profil</NavLink>
			</div>
			<Routes>
				<Route path={'/'} element={<Home />} />
				<Route path={'/ad'} element={<Home />} />
				<Route path={'/profil'} element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default AppRouter;
