import { DataCompanies } from '@/data/companies'

const Status: React.FC<Pick<DataCompanies, 'statusNew' | 'featured'>> = ({
  statusNew,
  featured,
}) => {
  return (
    <>
      {statusNew ? (
        <>
          <span className="rounded-2xl bg-primary p-2 text-white"> NEW! </span>
          <span>&emsp;</span>
        </>
      ) : (
        ''
      )}
      {featured ? (
        <span className="rounded-2xl bg-black p-2 text-white"> FEATURED </span>
      ) : (
        ''
      )}
    </>
  )
}

export default Status
