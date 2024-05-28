import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="container mx-auto">
      <ul className="flex justify-center items-center gap-5 py-5">
        <li>
          <Link href={`/`}>Home</Link>
        </li>
        <li>
          <Link href={`/goods`}>Goods</Link>
        </li>
        <li>
          <Link href={`/about`}>About</Link>
        </li>
        <li>
          <Link href={`/auth/login`}>Login</Link>
        </li>
        <li>
          <Link href={`/auth/register`}>Register</Link>
        </li>
      </ul>
    </nav>
  )
}