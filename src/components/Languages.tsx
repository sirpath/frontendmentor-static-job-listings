import { dataCompany } from '@/data/companies'
import { DataCompanies } from '@/data/companies'

const Languages: React.FC<
  Pick<DataCompanies, 'languages' | 'role' | 'level'>
> = ({ languages, role, level }) => (
  <>
    <button className="rounded-md bg-secondary-light p-1.5 font-semibold text-primary hover:bg-primary hover:text-white">
      {role}{' '}
    </button>
    <button className="rounded-md bg-secondary-light p-1.5 font-semibold text-primary hover:bg-primary hover:text-white">
      {level}{' '}
    </button>

    {languages.map((language) => (
      <button
        key={language}
        className="rounded-md bg-secondary-light p-1.5 font-semibold text-primary hover:bg-primary hover:text-white"
      >
        {language}{' '}
      </button>
    ))}
  </>
)

export default Languages
