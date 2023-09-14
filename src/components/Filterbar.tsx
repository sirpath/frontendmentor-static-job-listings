const Filterbar = () => (
  <div className="-mt-10 flex w-full max-w-7xl justify-between rounded-md bg-white px-8 py-4 shadow-xl">
    <div>
      <div className="inline-flex">
        <p className="rounded-l-md bg-secondary-light px-2 py-1.5 font-semibold text-primary ">
          Frontend
        </p>
        <button
          type="button"
          className="rounded-md rounded-l-none bg-primary px-2 py-1.5 text-lg font-extrabold text-secondary-light hover:bg-secondary-dark "
        >
          x
        </button>
      </div>
    </div>
    <div className="flex items-center">
      <button type="button" className="text-primary hover:underline">
        Clear
      </button>
    </div>
  </div>
)

export default Filterbar
