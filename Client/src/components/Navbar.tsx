import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="logo">
        ShampooApp
      </Link>
      <nav className="right-side">
        <ThemeToggle />
        <SignedOut >
          <SignInButton />
        </SignedOut>
        <SignedIn >
          <UserButton />
        </SignedIn>
      </nav>
    </header>
  );
}
