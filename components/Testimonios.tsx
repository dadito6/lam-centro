import React from 'react';

const Testimonios = () => {
  const testimonios = [
    {
      nombre: 'Roberto Osvaldo Mauriño',
      opinion:
        'Muy buen trato con los pacientes y muy eficaz en el tratamiento del dolor. Muy satisfecho con las kinesiólogas, muy humanas y dedicadas.',
      estrellas: 5,
    },
    {
      nombre: 'Sofia Do Santos',
      opinion:
        'Las chicas son re amables y te transmiten una energía re linda. Están pendientes de cada uno de sus pacientes tratando de brindarles la mejor atención posible. Y sobra decir que el establecimiento se encuentra en perfectas condiciones. Si haces rehabilitación acá te volves parte de una nueva familia.',
      estrellas: 5,
    },
    {
      nombre: 'Adriana Tricerri',
      opinion:
        'Muy buena atención por los kinesiólogos y profes de Ed. Lugar muy agradable para entrenar o rehabilitación. Bien climatizado tanto en verano como invierno.',
      estrellas: 4,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Testimonios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonios.map((testimonio, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Nombre del usuario */}
              <h3 className="text-xl font-semibold mb-2">{testimonio.nombre}</h3>

              {/* Calificación con estrellas */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-2xl ${
                      i < testimonio.estrellas ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Texto del testimonio */}
              <p className="text-gray-600">{testimonio.opinion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;