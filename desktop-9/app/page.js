import Header from '../components/Header'
import DealVolume from '../components/DealVolume'
import DealCard from '../components/DealCard'

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex-1 bg-[#121212] p-8">
        <DealVolume />
        <DealCard />
      </div>
    </>
  )
}
