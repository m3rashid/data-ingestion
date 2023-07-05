import RootLayout from './components/rootLayout';
import InitialForm from './components/initialForm';
import FileParserForm from './components/fileParserForm';

const App = () => {
	return (
		<RootLayout>
			<div className="p-2 md:p-4">
				<InitialForm />

				<FileParserForm />
			</div>
		</RootLayout>
	);
};

export default App;
