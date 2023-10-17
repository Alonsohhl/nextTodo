import dynamic from 'next/dynamic'

// Server Component:
const ServerComponent = dynamic(() => import('./ServerComponent'))

export default function ServerComponentExample() {
  return (
    <div>
      <ServerComponent name='servercomponentxd'/>
    </div>
  )
}