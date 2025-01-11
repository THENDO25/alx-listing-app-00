import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white py-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-lg font-bold">Alx Listing App</a>
        </Link>
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/about">
              <a className="text-sm hover:text-gray-600">About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="text-sm hover:text-gray-600">Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
