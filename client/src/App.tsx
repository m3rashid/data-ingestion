import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from './componenst/globals/routes';

function App() {
	return (
		<Routes>
			{routes.map((route) => {
				return (
					<Fragment>
						<Route path={route.link} element={<route.Component {...route.props} />} />;
						{route.nestedLinks?.map((nestedRoute) => {
							return (
								<Route
									key={nestedRoute.link}
									path={route.link + nestedRoute.link}
									element={<nestedRoute.Component />}
								/>
							);
						})}
					</Fragment>
				);
			})}
		</Routes>
	);
}

export default App;
