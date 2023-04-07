import {
	BrowserRouter,
	NavLink,
	Routes,
	Route,
	useNavigate,
	NavigateFunction,
} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Ad from '../pages/Ad/Ad';
import Profil from '../pages/Profil/Profil';
import './router.css';

function AppRouter() {
	return (
		<BrowserRouter>
			<div className={'navigation'}>
				<h2 className="navigation-title">BONKWIN</h2>
				<NavLink to={'/'}>Ajouter annonce</NavLink>
				<NavLink to={'/ad'}>Les annonces</NavLink>
				<NavLink to={'/profil'}>Mon profil</NavLink>
			</div>
			<Routes>
				<Route path={'/'} element={<Home />} />
				<Route path={'/ad'} element={<Ad />} />
				<Route path={'/profil'} element={<Profil />} />
				<Route path={'*'} element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

function NotFound() {
	const navigate = useNavigate();

	// Fonction de redirection vers la page Home
	const handleRedirect = () => {
		navigate('/');
	};

	return (
		<div className="error404">
			<h1>404 - Page non trouvée</h1>
			<p>La page que vous recherchez n'existe pas.</p>
			<button onClick={handleRedirect}>
				Retourner à la page d'accueil
			</button>
		</div>
	);
}

export default AppRouter;
