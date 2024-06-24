import projets from "../data/projets.json";

export default function Projets() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-full text-center">
          <h2 className="mb-6 text-4xl font-medium uppercase sm:text-4xl sm:uppercase">
            Quelques réalisations
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Réalisations de sites internet modernes et responsives pour une
            expérience utilisateur optimale.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {projets.map((sites) => (
            <li key={sites.title}>
              <img
                className="aspect-[3/2] w-full rounded-2xl object-cover"
                src={sites.imgPath}
                alt=""
              />
              <h3 className="mb-3 mt-6 text-lg font-medium text-gray-900">
                {sites.title}
              </h3>
              <p className="text-base leading-5 text-gray-600">
                {sites.description}
              </p>
              <div className="flex max-w-full flex-row justify-end">
                <button className="mt-4 rounded-full bg-black px-5 py-2 text-sm font-medium text-white">
                  {sites.btnSee}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
