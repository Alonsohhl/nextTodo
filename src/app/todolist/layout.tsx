import HeaderER from '../_components/header'

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section className='bg-gray-500 '>
      <HeaderER />


      <div className='m-4 w-full'>
        {children}
      </div>
    </section>
  )
}