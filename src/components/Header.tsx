import Link from 'next/link'
import { PawPrint } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

type HeaderProps = {
  onServicesClick: () => void
}

export function Header({ onServicesClick }: HeaderProps) {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="#">
        <PawPrint className="h-6 w-6" />
        <span className="ml-2 text-2xl font-bold">A Bronx Tail</span>
      </Link>
      <nav className="ml-auto flex items-center gap-4 sm:gap-6">
        <button onClick={onServicesClick} className="text-sm font-medium hover:underline underline-offset-4">
          Services
        </button>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          About
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Contact
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  )
}