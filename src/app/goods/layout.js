import Navigation from "@/components/navigation"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function GoodLayout({ children }) {
  return (
    <section>
      <Navigation />
      {children}
    </section>
  )
}
