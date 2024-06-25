export default function Stats() {
  return (
    <>
      <div className="bg-slate-50 px-5 py-10" id="Compétences">
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-4">
          <div className="flex flex-row justify-between overflow-hidden rounded-lg bg-red-50 px-4 py-5 shadow sm:p-6">
            <div>
              <dt className="truncate text-sm font-medium text-gray-500">
                HTML
              </dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                98%
              </dd>
            </div>
            <div
              className="radial-progress text-red-400"
              style={{ "--value": 93, "--thickness": "0.45rem" }}
              role="progressbar"
            ></div>
          </div>
          <div className="flex flex-row justify-between overflow-hidden rounded-lg bg-sky-50 px-4 py-5 shadow sm:p-6">
            <div>
              <dt className="truncate text-sm font-medium text-gray-500">
                CSS
              </dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                85%
              </dd>
            </div>
            <div
              className="radial-progress text-sky-400"
              style={{ "--value": 85, "--thickness": "0.45rem" }}
              role="progressbar"
            ></div>
          </div>
          <div className="flex flex-row justify-between overflow-hidden rounded-lg bg-yellow-50 px-4 py-5 shadow sm:p-6">
            <div>
              <dt className="truncate text-sm font-medium text-gray-500">
                JavaScript
              </dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                47%
              </dd>
            </div>
            <div
              className="radial-progress text-yellow-400"
              style={{ "--value": 47, "--thickness": "0.45rem" }}
              role="progressbar"
            ></div>
          </div>
          <div className="flex flex-row justify-between overflow-hidden rounded-lg bg-cyan-50 px-4 py-5 shadow sm:p-6">
            <div>
              <dt className="truncate text-sm font-medium text-gray-500">
                React
              </dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                37%
              </dd>
            </div>
            <div
              className="radial-progress text-cyan-400"
              style={{ "--value": 37, "--thickness": "0.45rem" }}
              role="progressbar"
            ></div>
          </div>
        </dl>
      </div>
      <div className="bg-white max-w-full text-center pt-5 pb-28">
        <h2 className="mb-6 text-4xl font-medium uppercase sm:text-4xl sm:uppercase text-gray-900">
          Quelques compétences
        </h2>
        <p className="mt-6 mx-auto max-w-4xl text-center text-lg leading-8 text-gray-400">
          Compétences en perpétuelle évolution, car la passion et la curiosité
          que j’éprouve pour ce métier transforment chaque jour en une occasion
          d’apprendre et de m’enrichir.
        </p>
      </div>
    </>
  );
}
