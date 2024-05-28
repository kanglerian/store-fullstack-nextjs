import Link from "next/link";

export default function Page() {
  return(
    <main className="w-full max-w-md bg-white p-8 rounded-2xl">
      <form action="javascript.void(0)" method="POST" className="space-y-4">
        <div className="space-y-1">
          <label for="email">Email</label>
          <input type="email" placeholder="Email" className="w-full block border border-gray-200" />
        </div>
        <div className="space-y-1">
          <label for="password">Password</label>
          <input type="password" placeholder="Password" className="w-full block border border-gray-200" />
        </div>
        <div className="space-x-5">
          <button type="submit">Masuk</button>
          <Link href={`/auth/register`}>Belum punya akun?</Link>
        </div>
      </form>
    </main>
  )
}