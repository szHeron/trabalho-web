import Link from "next/link"

export default function Home() {
  return (
    <div>
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/signin">Entrar</Link>
      </li>
      <li>
        <Link href="/signup">Cadastrar</Link>
      </li>
    </ul>
    </div>
  )
}
