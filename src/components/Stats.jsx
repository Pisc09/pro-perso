import stats from "../data/stats.json";

export default function Stats() {
  return (
    <>
      <div className="bg-slate-50 px-5 py-10">
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.name}
              className={`flex flex-row justify-between overflow-hidden rounded-lg ${item.bg} px-4 py-5 shadow sm:p-6`}
            >
              <div>
                <dt className="truncate text-sm font-medium text-gray-500">
                  {item.name}
                </dt>
                <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                  {item.pourcent}
                </dd>
              </div>
              <div
                className={`radial-progress ${item.color}`}
                style={{ "--value": `${item.stat}`, "--thickness": "0.45rem" }}
                role="progressbar"
              ></div>
            </div>
          ))}
        </dl>
      </div>
      <div className="bg-white max-w-full text-center pt-5 pb-28">
        <h2 className="mb-6 text-4xl font-medium uppercase sm:text-4xl sm:uppercase">
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
