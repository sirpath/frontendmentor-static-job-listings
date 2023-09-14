import Languages from '@/components/Languages'
import { dataCompany } from '../data/companies'
import Status from '@/components/Status'
import Tools from '@/components/Tools'

const Home = () => {
  const borderL = (featured: boolean) =>
    featured ? 'border-l-8 border-l-primary' : ''

  return (
    <>
      <header className="flex items-center justify-center bg-primary">
        <picture>
          <img
            className="w-screen md:hidden"
            alt="bannerMobile"
            src="./images/bg-header-mobile.svg"
          />
          <img
            className="hidden w-screen md:block"
            alt="bannerMobile"
            src="./images/bg-header-desktop.svg"
          />
        </picture>
      </header>

      <main className="flex flex-col items-center justify-center gap-10 bg-slate-100 px-16 pb-16">
        <div className="-mt-10 flex w-96 justify-between rounded-md bg-white px-8 py-4 shadow-xl md:w-3/5">
          <div>
            <div className="inline-flex">
              <p className="rounded-l-md bg-secondary-light px-2 py-1.5 font-semibold text-primary ">
                Frontend
              </p>
              <button className="rounded-md rounded-l-none bg-primary px-2 py-1.5 text-lg font-extrabold text-white md:hover:bg-black ">
                x
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <button className="text-primary hover:underline">Clear</button>
          </div>
        </div>
        {dataCompany.map(
          ({
            company,
            contract,
            featured,
            languages,
            level,
            location,
            logo,
            statusNew,
            position,
            postedAt,
            role,
            tools,
          }) => (
            <>
              <div
                className={`flex ${borderL(
                  featured,
                )} h-auto w-96 flex-col justify-center  rounded-md bg-white p-4 pt-12 shadow-xl md:w-3/5 md:min-w-fit md:flex-row md:justify-between md:pt-4`}
              >
                <div className="md:flex md:items-center">
                  <div className="-mt-20 h-14 w-14 md:mt-0 md:flex md:h-28 md:w-28 md:items-center">
                    <picture>
                      <img
                        className="rounded-full"
                        alt="iconphotosnap"
                        src={logo}
                      />
                    </picture>
                  </div>
                  <div className="md:min-w-[300px]">
                    <div className="md:max-w-auto md:flex md:flex-col">
                      <div className="p-2 font-semibold text-primary">
                        {company} &ensp;&emsp;
                        <Status statusNew={statusNew} featured={featured} />
                      </div>
                    </div>
                    <div className="p-2 font-bold hover:cursor-pointer hover:text-primary md:text-xl md:font-extrabold">
                      {position}
                    </div>
                    <div className="p-2 text-secondary">
                      {postedAt}&ensp;•&ensp;{contract}&ensp;•&ensp;
                      {location}
                    </div>
                  </div>
                </div>
                <hr className="border-gray-400 px-2 md:px-0" />
                <div className="flex flex-wrap items-start justify-start gap-3 px-2 py-4">
                  <Languages role={role} level={level} languages={languages} />
                  <Tools tools={tools} />
                </div>
              </div>
            </>
          ),
        )}
      </main>
    </>
  )
}

export default Home
