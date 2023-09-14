import { CompanyType } from '@/data/companies'

const Status: React.FC<Pick<CompanyType, 'statusNew' | 'featured'>> = ({
  statusNew: isNew,
  featured: isFeatured,
}) => {
  return (
    <span className="space-x-3">
      {isNew && (
        <span className="rounded-2xl bg-primary p-2 text-secondary-light">
          {' '}
          NEW!{' '}
        </span>
      )}
      {isFeatured && (
        <span className="rounded-2xl bg-secondary-dark p-2 text-secondary-light">
          {' '}
          FEATURED{' '}
        </span>
      )}
    </span>
  )
}

export default Status
