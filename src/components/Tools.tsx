import { DataCompanies } from '@/data/companies'

const Tools: React.FC<Pick<DataCompanies, 'tools'>> = ({ tools }) => (
  <>
    {tools.length >= 1
      ? tools.map((tool) => (
          <button
            key={tool}
            className="rounded-md bg-secondary-light p-1.5 font-semibold text-primary hover:bg-primary hover:text-white"
          >
            {tool}{' '}
          </button>
        ))
      : ''}
  </>
)

export default Tools
