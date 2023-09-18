import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/images/logoecommerce.png";

function Faqs() {
  const [open, setOpen] = useState(Array(10).fill(false)); // Inicializa un array de estados para cada pregunta

  const toggleCollapse = (index) => {
    const updatedOpen = [...open]; // Copia el array de estados
    updatedOpen[index] = !updatedOpen[index]; // Cambia el estado de la pregunta en el índice dado
    setOpen(updatedOpen); // Actualiza el estado
  };

  const faqsData = [
    {
      question: '¿Qué tipo de productos venden en su tienda en línea?',
      answer: 'Vendemos una amplia variedad de productos, con un enfoque especial en muebles de alta calidad. Nuestra selección incluye otros artículos también, y estamos constantemente ampliando nuestro catálogo para satisfacer tus necesidades.',
    },
    {
      question: '¿Cómo puedo ver los productos disponibles y sus precios?',
      answer: 'Puedes encontrar todos nuestros productos en la página principal de nuestra tienda en línea. Cada producto está acompañado de su precio actual, un descuento en porcentaje (si corresponde), el precio anterior y una foto representativa.',
    },
    {
      question: '¿Qué información se muestra en la página principal de un producto?',
      answer: 'En la página principal de un producto, verás el nombre del artículo, su precio actual, cualquier descuento aplicado, el precio anterior para comparación y una imagen que muestra el producto en detalle.',
    },
    {
      question: '¿Cómo puedo obtener más detalles sobre un producto en particular?',
      answer: 'Para obtener más detalles sobre un producto en particular, simplemente haz clic en la tarjeta del producto en la página principal. Esto te llevará a la página de detalles del producto, donde encontrarás información adicional, especificaciones y opciones de compra.',
    },
    {
      question: '¿Cómo agrego productos a mi carrito de compras?',
      answer: 'Desde la página de detalles del producto, puedes seleccionar la cantidad que deseas comprar y luego hacer clic en el botón "Agregar al carrito". El producto se agregará a tu carrito de compras.',
    },
    {
      question: '¿Necesito una cuenta para realizar una compra en su tienda?',
      answer: 'Sí, para realizar una compra, necesitas tener una cuenta en nuestra tienda en línea. Esto nos ayuda a gestionar mejor tus pedidos y garantizar una experiencia de compra segura.',
    },
    {
      question: '¿Cómo funcionan los descuentos y promociones en su tienda?',
      answer: 'Ofrecemos descuentos y promociones en algunos productos. Estos descuentos se reflejan en la página de detalles del producto y se aplican automáticamente al agregar el producto al carrito.',
    },
    {
      question: '¿Cuál es el proceso de pago?',
      answer: 'Una vez que hayas seleccionado los productos que deseas comprar y los hayas agregado a tu carrito de compras, puedes finalizar la compra. Te redireccionaremos a un chat de WhatsApp donde discutiremos los métodos de pago disponibles y otros detalles para completar la transacción.',
    },
    {
      question: '¿Qué métodos de pago aceptan?',
      answer: 'Aceptamos varios métodos de pago, que se discutirán en el chat de WhatsApp durante el proceso de compra. Esto incluye opciones como transferencias bancarias y otras formas de pago en línea.',
    },
    {
      question: '¿Cómo se maneja el proceso de entrega y envío de productos?',
      answer: 'La entrega y el envío se coordinarán a través del chat de WhatsApp. Discutiremos contigo los detalles de la entrega, los costos (si corresponde) y el tiempo estimado de llegada.',
    },
    {
      question: '¿Qué hago si tengo preguntas adicionales o necesito asistencia personalizada?',
      answer: 'Estamos aquí para ayudarte. Si tienes preguntas adicionales o necesitas asistencia personalizada, simplemente envíanos un mensaje a través del chat de WhatsApp o contáctanos a través de los datos de contacto proporcionados en la página.',
    },
  ];

  return (
    <section className="px-20 pt-4 pb-24 mx-auto   w-full h-full dark:bg-gray-800">
        <NavLink to="/" className= "  ">
            <img src={logo} alt="logo" className="w-24" />
            <h2 className="text-xl font-bold  dark:text-white pb-8">
                Volver a Inicio
            </h2>
        </NavLink>
      <h1 className="mb-8 text-xl font-bold md:text-3xl text-white dark:text-gray-300">Preguntas frecuentes</h1>
      <div className="grid grid-cols-1 gap-0 text-sm md:grid-cols-2 md:gap-5">
        {faqsData.map((faq, index) => (
          <div key={index}>
            <div className="px-4 mb-4 bg-gray-100 dark:bg-gray-700 rounded">
              <button
                className="flex items-center justify-start w-full py-4 pr-1 font-bold text-left text-gray-800 dark:text-white outline-none hover:text-primary focus:text-primary focus:outline-none"
                onClick={() => toggleCollapse(index)} // Llama a toggleCollapse con el índice correspondiente
                aria-expanded={open[index]}
                aria-controls={`faq${index + 1}`}
              >
                <svg
                  className={`flex-none w-4 h-4 mr-2 transition transform ${open[index] ? 'rotate-90' : ''}`}
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                {faq.question}
              </button>
              <div className={`pb-5 ml-6 text-gray-700 dark:text-gray-300 ${open[index] ? '' : 'hidden'}`} id={`faq${index + 1}`}>
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faqs;
