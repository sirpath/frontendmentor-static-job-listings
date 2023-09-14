import CompanyCard from '@/components/CompanyCard'
import Filterbar from '@/components/Filterbar'
import Header from '@/components/Header'
import Status from '@/components/Status'
import { companies } from '../data/companies'

const Home = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center gap-10 bg-secondary-light px-16 pb-16">
        <Filterbar />
        {companies.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </main>
    </>
  )
}

export default Home
