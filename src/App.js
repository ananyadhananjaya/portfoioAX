import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Helmet } from 'react-helmet';

const TITLE = 'AX';

function App() {
  return (
    <div>
      <Helmet>
      <title> { TITLE}</title>
    </Helmet>
    <div className="Container">
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="row">
        <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
          <div className="hello h4">Hello, world</div>
          <div className="name h2">I'm Ananya. Nice to meet you.</div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
