import React from 'react'
import Status from '@/components/Status'
import { CompanyType } from '@/data/companies'

type Props = {
  company: CompanyType
}

const CompanyCard: React.FC<Props> = ({ company }) => {
  const {
    id,
    company: companyName,
    contract,
    featured: isFeatured,
    languages,
    level,
    location,
    logo,
    statusNew,
    position,
    postedAt,
    role,
    tools,
  } = company

  const tags = [role, level, ...languages, ...tools]

  return (
    <div
      key={id}
      className={`${
        isFeatured ? 'border-l-8 border-l-primary' : ''
      } flex h-auto w-full max-w-7xl flex-col justify-center rounded-md bg-white p-4 pt-12 shadow-xl md:flex-row md:justify-between md:pt-4`}
    >
      <div className="md:flex md:items-center">
        <div className="-mt-20 h-14 w-14 md:mt-0 md:flex md:h-28 md:w-28 md:items-center">
          <picture>
            <img
              className="rounded-full"
              alt={`icon ${companyName}`}
              src={logo}
            />
          </picture>
        </div>
        <div className="md:min-w-[300px]">
          <div className="md:max-w-auto md:flex md:flex-col">
            <div className="p-2 font-semibold text-primary">
              <span className="pr-8">{companyName}</span>
              <Status statusNew={statusNew} featured={isFeatured} />
            </div>
          </div>
          <div className="p-2 font-bold hover:cursor-pointer hover:text-primary md:text-xl md:font-extrabold">
            {position}
          </div>
          <div className="p-2 text-secondary">
            {postedAt}&nbsp;•&nbsp;{contract}&nbsp;•&nbsp;
            {location}
          </div>
        </div>
      </div>
      <hr className="border-gray-400 px-2 md:px-0" />
      <div className="flex flex-wrap items-start justify-start gap-3 px-2 py-4">
        {tags.map((tag) => (
          <button
            type="button"
            key={tag}
            className="rounded-md bg-secondary-light p-1.5 font-semibold text-primary duration-200 hover:bg-primary hover:text-white"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  )
}
export default CompanyCard
