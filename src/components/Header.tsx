import { Link } from '@tanstack/react-router'

export default function Header() {

  return (
    <>
      <header className="p-4 flex items-center bg-gray-800 text-white shadow-lg">
        <h1 className="ml-4 text-xl font-semibold">
          <Link to="/">
            <img
              src="/deepoLogo1.png"
              alt="TanStack Logo"
              className="h-10"
            />
          </Link>
        </h1>
      </header>
    </>
  )
}
