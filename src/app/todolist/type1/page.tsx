import { Suspense } from "react"
import dynamic from 'next/dynamic'
import PokemonSeach from '../pokemon'


async function getData() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu', {cache: 'force-cache'})

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    return res.json()
  }


export default async function Page() {

    // const data = JSON.stringify(await getData())
    const data = null


    return(
    <>
        <h1>Hello, from page 1</h1>
        <Suspense fallback={<p>Loading...</p>}>
        {/* <Suspense fallback={()=> wait(1000).then(()=><p>Loading...</p>)}> */}
          {data}
        </Suspense>
        <PokemonSeach />

    </>)
  }


// const Loading = () => {
//     setTimeout(() => {}, 2000)
//     return <p>Loading...</p>
// }

function wait(time : number) {
    return new Promise((resolve) => {
      setTimeout(resolve, time)
    })
  }

// !! check te loading component
//  ? how suspense works