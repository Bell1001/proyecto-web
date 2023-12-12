import EmpresasSeccion from "../components/EmpresasSeccion";
import ImagenSeccion from "../components/ImagenSeccion";

function InicioPage() {
  return (
    <main>
      <div className="portada">
        <div className="container ">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h1 className="fs-1" >Las 10 mejores empresas <br /> de tecnología</h1>
              <p>
                Descripción larga de las 10 mejores empresas de tecnología.
                Puedes agregar aquí información detallada sobre cada empresa.
              </p>
            </div>
            <div className="col-md-4 ">
              <img
                src="https://cdn-3.expansion.mx/dims4/default/f246240/2147483647/strip/true/crop/741x471+0+0/resize/1800x1144!/format/webp/quality/80/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F7b%2F19%2F3796194442559d405c3449338898%2Fempresas-tech.jpg"
                alt="Imagen de tecnología"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <EmpresasSeccion />
      <section className="container my-5">
        <div className="text-center">
          <h3 className="mb-4">Las Empresas Más Grandes De Cada País</h3>
          <div className="embed-responsive embed-responsive-16by9 showImage">
            <iframe
              className="embed-responsive-item"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/DvADc7kF88I?si=xH2d07cGXM_NII52"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
      <ImagenSeccion />
    </main>
  );
}

export default InicioPage;
