import HeaderER from '../components/header'

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section className='bg-sky-500'>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>
      <HeaderER />

      <div>
        <h1>list 1</h1>

      </div>

      {children}
    </section>
  )
}