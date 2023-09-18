import React from "react";
import logo from "../assets/images/logoecommerce.png";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <div className="bg-gray-300 dark:bg-gray-800">
      <h1 className="text-3xl uppercase font-thin text-center pt-12 dark:text-white">
        Compra hoy, sonríe mañana y no te preocupes más por los precios
      </h1>
      <section className="text-gray-600 body-font dark:text-gray-300">
        <div className="container px-5 pb-4 pt-8 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://vitals.co/blog/wp-content/uploads/2021/07/cover-img-product-photography.png"
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-40 h-40 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 dark:bg-gray-700 dark:text-gray-300">
                  <img src={logo} alt="logo" className="w-40" />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg dark:text-white">
                    Rotela Shopping
                  </h2>
                  <div className="w-12 h-1 bg-yellow-500 rounded mt-2 mb-4 dark:bg-yellow-400" />
                  <p className="text-base dark:text-gray-400">
                    Tu destino para productos de calidad a precios accesibles.
                    Bienvenido a la tienda en línea de la familia Rotela, donde
                    la tradición se encuentra con la modernidad para ofrecerte
                    lo mejor de ambos mundos.
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  En el corazón de Argentina, Nahuel Rotela, hijo de Carlos, vio
                  cómo su familia enfrentaba las dificultades económicas que la
                  inflación imponía en el negocio tradicional de su padre.
                  Creció entre estanterías repletas de historias familiares y
                  productos de calidad, pero también vivió las luchas constantes
                  por mantener los precios accesibles para la comunidad.
                  Determinado a preservar la herencia familiar y modernizarla
                  para afrontar los desafíos actuales, Nahuel decidió dar un
                  paso al frente. Así nació nuestra tienda en línea. Hoy, en
                  honor a la tradición que nos une, Nahuel lidera esta nueva era
                  de nuestro negocio, ofreciendo productos de calidad a precios
                  que desafían la inflación y llevando la esencia de la familia
                  Rotela a cada rincón de Argentina. Somos más que un eCommerce,
                  somos una historia de perseverancia y un compromiso con nuestro
                  país.
                </p>
                <a className="text-yellow-500 inline-flex items-center dark:text-yellow-400">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="dark:bg-gray-800 bg-gray-300">
        <div className="mx-auto max-w-screen-xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold sm:text-4xl dark:text-white">
              Carlos Rotela: Una Historia de Cambio y Confianza en la
              Modernización del Negocio Familiar
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <img
                alt="Carlos"
                src="https://media.puntal.com.ar/p/130bfbac16b7ff8e85520f0c7448ce74/adjuntos/270/imagenes/001/504/0001504476/1200x0/smart/la-argentina51jpg.jpg"
                className="absolute inset-0 h-full w-full object-right object-cover"
              />
            </div>

            <div className="lg:py-16">
              <article className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Al principio, cuando mi hijo Nahuel sugirió la idea de
                  modernizar nuestro negocio familiar y llevarlo al mundo en
                  línea, debo admitir que era un tanto escéptico. Después de
                  décadas de operar de manera tradicional, me preocupaba que
                  esta nueva dirección pudiera poner en riesgo lo que tanto
                  esfuerzo nos había costado construir. Sin embargo, el tiempo
                  me ha demostrado que la modernización no solo era necesaria,
                  sino que también nos ha brindado oportunidades que nunca
                  imaginé. Ahora ahorramos dinero en costos de empleados y en
                  almacenes para almacenar mercancía, y lo más valioso, ahorramos
                  tiempo. Este enfoque más eficiente nos ha permitido ofrecer
                  precios más amigables para todos, lo cual siempre fue uno de
                  nuestros objetivos más importantes.
                </p>

                <p>
                  A pesar de que aún no entiendo del todo las complejidades de
                  las redes y el mundo digital, estoy asombrado por las mejoras
                  que hemos experimentado. Hoy en día, me siento tranquilo
                  pensando en mi jubilación, sabiendo que el negocio está en
                  buenas manos y que nuestros productos llegan a personas en
                  todo el país, gracias a la visión y el esfuerzo de Nahuel y su
                  equipo. El cambio puede ser intimidante, pero a veces, como en
                  nuestro caso, también puede ser la clave para el crecimiento y
                  la sostenibilidad a largo plazo.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
      <div className=" text-center pb-10">

    <div className=" flex-1">
      <NavLink to="/" className= " flex justify-center object-center ">
            <img src={logo} alt="logo" className="w-24" />
            <h2 className="text-xl relative top-10 font-bold  dark:text-white ">
                Volver a Inicio
            </h2>
        </NavLink>

    </div>
      </div>
    </div>
  );
}

export default About;
