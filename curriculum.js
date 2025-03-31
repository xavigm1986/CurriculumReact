import React from "react";

const CV = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      {/* Sección de Presentación */}
      <header className="text-center mb-6">
        <img
          src="https://via.placeholder.com/150"
          alt="Perfil"
          className="mx-auto rounded-full border-4 border-blue-500"
        />
        <h1 className="text-2xl font-bold mt-4">Tu Nombre</h1>
        <p className="text-gray-600">Desarrollador Web | React | Frontend</p>
      </header>

      {/* Experiencia Laboral */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b pb-2 mb-4">Experiencia</h2>
        <div>
          <h3 className="font-semibold">Empresa XYZ</h3>
          <p className="text-gray-600">Desarrollador Frontend (2020 - Presente)</p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Desarrollo de interfaces responsivas con React y Tailwind.</li>
            <li>Optimización de rendimiento y accesibilidad.</li>
          </ul>
        </div>
      </section>

      {/* Educación */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b pb-2 mb-4">Educación</h2>
        <div>
          <h3 className="font-semibold">Universidad ABC</h3>
          <p className="text-gray-600">Ingeniería en Software (2015 - 2020)</p>
        </div>
      </section>

      {/* Habilidades */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b pb-2 mb-4">Habilidades</h2>
        <div className="flex flex-wrap gap-2">
          {['React', 'JavaScript', 'CSS', 'HTML', 'Git'].map((skill) => (
            <span key={skill} className="bg-blue-500 text-white px-3 py-1 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section>
        <h2 className="text-xl font-semibold border-b pb-2 mb-4">Contacto</h2>
        <p className="text-gray-600">Correo: tuemail@example.com</p>
        <p className="text-gray-600">LinkedIn: linkedin.com/in/tuperfil</p>
      </section>
    </div>
  );
};

export default CV;
