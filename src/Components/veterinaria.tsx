import img1 from "../assets/photo-1560184897-ae75f418493e.avif";
import img2 from "../assets/premium_photo-1682361002186-c5593b88ebfe.avif";
import img3 from "../assets/premium_photo-1677645995792-8e5de8aada6a.avif";
import img4 from "../assets/photo-1618275340450-a684fa3d7743.avif";
import img5 from "../assets/photo-1709881070774-63ac21f2123a.avif";
import img6 from "../assets/R.jpg";
import img7 from "../assets/358_main.jpg";
import img8 from "../assets/sinteplast-logo-34B8E40DE0-seeklogo.com.png";
import img9 from "../assets/photo-1560866724-e748e3147a8d.avif";
//import img10 from "../assets/photo-1754329710466-2ea40aca1be0.avif";
import img11 from "../assets/photo-1537984210493-712fb063865e.avif";



import { FaWhatsapp } from "react-icons/fa";



export default function VetLanding() {
  const colors = {
    beige50: "#f9f7f3",
    beige100: "#f3eee6",
    beige200: "#e9dfd0",
    beige300: "#dfcdb7",
    beige700: "#212842",
    beige800: "#7f5d46",
    beige900: "#674b39",
  };

  return (
    <div style={{ backgroundColor: colors.beige50, color: colors.beige900, fontFamily: "sans-serif" }}>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 shadow-sm" style={{ backgroundColor: colors.beige100 }}>
        <h1 style={{ color: colors.beige800 }} className="text-2xl font-bold">Pinturería Beige</h1>
        <ul className="hidden md:flex space-x-6" style={{ color: colors.beige700 }}>
          <li><a href="#productos" className="hover:underline">Productos</a></li>
          <li><a href="#servicios" className="hover:underline">Servicios</a></li>
          <li><a href="#proyectos" className="hover:underline">Proyectos</a></li>
          <li><a href="#marcas" className="hover:underline">Marcas</a></li>
          <li><a href="#faq" className="hover:underline">FAQ</a></li>
          <li><a href="#contacto" className="hover:underline">Contacto</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(127,93,70,0.6), rgba(127,93,70,0.3)), url(${img1})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: colors.beige50 }}>Dale color a tus espacios</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl" style={{ color: colors.beige100 }}>
          En <strong>Pinturería Beige</strong> te ayudamos a renovar tus ambientes con las mejores pinturas, herramientas y asesoramiento personalizado.
        </p>
        <div className="flex space-x-4">
          
         <a
  href="https://wa.me/2645769084"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-6 py-3 rounded-lg transition font-medium hover:scale-105"
  style={{
    backgroundColor: colors.beige800,
    color: "white",
  }}
>
  <FaWhatsapp className="text-2xl text-green-400" />
  Pedir presupuesto
</a>
        </div>
      </section>

      {/* Productos */}
      <section id="productos" className="py-20 px-8">
        <h3 className="text-3xl font-semibold text-center mb-12" style={{ color: colors.beige800 }}>Nuestros Productos</h3>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { title: "Pinturas para interiores", desc: "Variedad de tonos y acabados que combinan con tu estilo.", img: img2 },
            { title: "Pinturas para exteriores", desc: "Resistentes al clima, ideales para fachadas y muros.", img: img3 },
            { title: "Herramientas y accesorios", desc: "Brochas, rodillos, cintas y todo lo que necesitás para pintar.", img: img4 },
          ].map((item, idx) => (
            <div key={idx} className="rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300" style={{ backgroundColor: colors.beige100 }}>
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6 text-center">
                <h4 className="text-xl font-semibold mb-3" style={{ color: colors.beige900 }}>{item.title}</h4>
                <p style={{ color: colors.beige700 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 text-center px-8" style={{ backgroundColor: colors.beige100 }}>
        <h3 className="text-3xl font-semibold mb-12" style={{ color: colors.beige800 }}>Nuestros Servicios</h3>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { title: "Asesoramiento en color", desc: "Te ayudamos a elegir la paleta perfecta para tu hogar o negocio.", img: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=600&q=80" },
            { title: "Entrega a domicilio", desc: "Recibí tus productos sin moverte de casa.", img: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&w=600&q=80" },
            { title: "Cálculo de materiales", desc: "Te indicamos cuánta pintura necesitás para tu proyecto.", img: img5 },
          ].map((srv, idx) => (
            <div key={idx} className="rounded-lg shadow-sm overflow-hidden">
              <img src={srv.img} alt={srv.title} className="w-full h-44 object-cover" />
              <div className="p-6 bg-white">
                <h4 className="text-xl font-semibold mb-3" style={{ color: colors.beige900 }}>{srv.title}</h4>
                <p style={{ color: colors.beige700 }}>{srv.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inspiración */}
      <section id="proyectos" className="py-20 px-8 bg-white text-center">
        <h3 className="text-3xl font-semibold mb-12" style={{ color: colors.beige800 }}>Inspirate con nuestros proyectos</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[img9, img3, img11].map((img, i) => (
            <img key={i} src={img} className="rounded-lg shadow-lg hover:scale-105 transition" />
          ))}
        </div>
      </section>

      {/* Marcas */}
    <section id="marcas" className="py-20 px-8 text-center" style={{ backgroundColor: colors.beige100 }}>
  <h3 className="text-3xl font-semibold mb-12" style={{ color: colors.beige800 }}>
    Trabajamos con las mejores marcas
  </h3>

  <div className="flex flex-wrap justify-center items-center gap-12 max-w-5xl mx-auto">
    {[img6, img7, img8].map((logo, i) => (
      <div
        key={i}
        className="bg-white rounded-xl shadow-sm p-4 flex justify-center items-center w-40 h-24 hover:scale-105 transition-transform duration-300"
      >
        <img
          src={logo}
          alt={`Logo ${i + 1}`}
          className="object-contain max-h-16"
        />
      </div>
    ))}
  </div>
</section>


      {/* Blog */}
      <section id="blog" className="py-20 px-8 bg-white text-center">
        <h3 className="text-3xl font-semibold mb-12" style={{ color: colors.beige800 }}>Consejos y Tendencias</h3>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { title: "Cómo elegir el color ideal para tu living", desc: "Aprendé a combinar tonos que generen armonía y amplitud." },
            { title: "5 tips para pintar sin manchas", desc: "Consejos prácticos para lograr un acabado profesional." },
            { title: "Tendencias 2025 en decoración", desc: "Colores cálidos, texturas naturales y contrastes modernos." },
          ].map((post, idx) => (
            <div key={idx} className="p-6 bg-[#f3eee6] rounded-lg shadow-sm text-left hover:shadow-md transition">
              <h4 className="text-xl font-semibold mb-3" style={{ color: colors.beige900 }}>{post.title}</h4>
              <p style={{ color: colors.beige700 }}>{post.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-8 text-center" style={{ backgroundColor: colors.beige100 }}>
        <h3 className="text-3xl font-semibold mb-12" style={{ color: colors.beige800 }}>Preguntas Frecuentes</h3>
        <div className="max-w-3xl mx-auto text-left space-y-6">
          {[
            { q: "¿Hacen envíos a domicilio?", a: "Sí, realizamos envíos en todo el país. Consultá por costos y tiempos según tu zona." },
            { q: "¿Cómo calculo cuánta pintura necesito?", a: "Te ayudamos con una estimación según el tamaño de la superficie y el tipo de pintura." },
            { q: "¿Qué medios de pago aceptan?", a: "Podés abonar con tarjeta, transferencia o efectivo en tienda." },
          ].map((faq, idx) => (
            <details key={idx} className="bg-white p-4 rounded-lg shadow-sm">
              <summary className="font-semibold cursor-pointer" style={{ color: colors.beige900 }}>{faq.q}</summary>
              <p className="mt-2 text-sm" style={{ color: colors.beige700 }}>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section id="contacto" className="py-20 px-8 bg-[#e9dfd0] text-center">
        <h3 className="text-3xl font-semibold mb-6" style={{ color: colors.beige800 }}>¿Listo para transformar tus espacios?</h3>
        <p className="mb-8 max-w-xl mx-auto" style={{ color: colors.beige700 }}>Completá el formulario y te responderemos a la brevedad.</p>
        <form className="max-w-2xl mx-auto grid md:grid-cols-2 gap-6 text-left">
          <input type="text" placeholder="Nombre" className="p-3 rounded border border-gray-300" />
          <input type="email" placeholder="Email" className="p-3 rounded border border-gray-300" />
          <input type="text" placeholder="Teléfono" className="p-3 rounded border border-gray-300 md:col-span-2" />
          <textarea placeholder="Mensaje" rows={4} className="p-3 rounded border border-gray-300 md:col-span-2" />
          <button type="submit" className="md:col-span-2 px-6 py-3 rounded-lg text-white" style={{ backgroundColor: colors.beige800 }}>Enviar mensaje</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-6" style={{ backgroundColor: colors.beige100, color: colors.beige700 }}>
        <p>© 2025 Pinturería Beige — Color que inspira.</p>
        <p className="mt-2">📍 Av. del Color 123, Ciudad del Sol · ☎️ (123) 456-7890</p>
      </footer>
    </div>
  );
}
