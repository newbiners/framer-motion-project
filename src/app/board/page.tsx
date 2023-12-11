import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <main className='h-[10000vh] bg-orange-400 flex flex-col justify-between'>
    <Link href={"/board#bawah"} scroll={false}>hallo</Link>
    <p id='bawah'>bagian bawah</p>
    </main>
  )
}
