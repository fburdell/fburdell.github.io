import logo from './logo.svg';
import './App.css';

function App() {
	const fs = require('fs')

	const dir = './blogs/'
	const files = fs.readdirSync(dir)

	for (const file of files) {
		return (file);
	}

}

export default App;
