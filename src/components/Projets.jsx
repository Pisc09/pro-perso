// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import projets from "../data/projets.json";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function Projets() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentSite, setCurrentSite] = useState({});

  const openModal = (site) => {
    setCurrentSite(site);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="bg-white py-24 sm:py-32" id="Réalisations">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-full text-center">
          <h2 className="mb-6 text-4xl font-medium uppercase sm:text-4xl sm:uppercase text-gray-900">
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
                <button
                  className="mt-4 rounded-full bg-black px-5 py-2 text-sm font-medium text-white"
                  onClick={() => openModal(sites)}
                >
                  {sites.btnSee}
                </button>
              </div>
            </li>
          ))}
        </ul>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Site Details"
          className="flex items-center justify-center outline-none border-0"
        >
          <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            <div className="bg-gray-200 p-4">
              <h2 className="text-2xl font-bold text-gray-900">
                {currentSite.title}
              </h2>
              <p className="text-gray-600">{currentSite.description}</p>
            </div>
            <img
              src={currentSite.imgPath}
              alt={currentSite.title}
              className="w-full object-cover h-48"
            />
            <div className="bg-white sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-base font-semibold leading-6 text-gray-900">
                  Tâches principales :
                </h3>
                <ul className="mt-4">
                  {currentSite.taches &&
                    currentSite.taches.map((tache, tacheIndex) => (
                      <li key={tacheIndex}>{tache}</li>
                    ))}
                </ul>
                <h3 className="text-base font-semibold leading-6 text-gray-900">
                  Outils à utiliser :
                </h3>
                <ul>
                  {currentSite.outils &&
                    currentSite.outils.map((outil, outilIndex) => (
                      <li key={outilIndex}>{outil}</li>
                    ))}
                </ul>
                <h3 className="text-base font-semibold leading-6 text-gray-900">
                  Objectifs pédagogiques :
                </h3>
                <ul>
                  {currentSite.objectifs &&
                    currentSite.objectifs.map((objectif, objectifIndex) => (
                      <li key={objectifIndex}>{objectif}</li>
                    ))}
                </ul>
                <div className="mt-3 text-sm leading-6">
                  <a
                    href={currentSite.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Pour en savoir plus sur le site {currentSite.title}
                    <span aria-hidden="true"> →</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4">
              <button
                onClick={closeModal}
                className="mt-4 rounded-full bg-black px-5 py-2 text-sm font-medium text-white"
              >
                Fermer
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
