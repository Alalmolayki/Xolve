import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-primary-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center text-2xl font-bold space-x-2">
          <img 
            src="/logo.jpeg" // Replace this with your actual logo path
            alt="Logo"
            className="h-8 w-8"
          />
          <span>Xolve Geomatik</span>
        </Link>
        
        <div className="flex items-center gap-4">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg"
            alt="Turkish Flag"
            className="h-8 w-12 object-cover shadow-md rounded"
          />
        </div>
      </div>
      <nav className="bg-primary-800">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap space-x-6 py-3">
            <li>
              <Link to="/" className="text-white hover:text-primary-200 transition-colors">
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Link to="/test" className="text-white hover:text-primary-200 transition-colors">
                Testler
              </Link>
            </li>
            <li>
              <Link to="/shapes" className="text-white hover:text-primary-200 transition-colors">
                Geometrik Şekiller
              </Link>
            </li>
            <li>
              <Link to="/calculator" className="text-white hover:text-primary-200 transition-colors">
                Hesap Makinesi
              </Link>
            </li>
            <li>
              <Link to="/formulas" className="text-white hover:text-primary-200 transition-colors">
                Formül Listesi
              </Link>
            </li>
            <li>
              <Link to="/study-tools" className="text-white hover:text-primary-200 transition-colors">
                Çalışma Araçları
              </Link>
            </li>
            <li>
              <Link to="/articles" className="text-white hover:text-primary-200 transition-colors">
                Makaleler
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
