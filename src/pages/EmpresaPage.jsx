import { empresas } from '../data/empresas';
import { useParams } from 'react-router-dom';

function EmpresaPage() {
  const { id } = useParams();
  const empresa = empresas.find((item) => item.id === id);

  if (!empresa) {
    // Manejar el caso en que la empresa no se encuentre
    return <div>Empresa no encontrada</div>;
  }

  return (
    <section className="bg-orange p-5 ">
      <div className='container' >
        <div className="row">
          <div className="col-md-8 mb-4">
            <h2 className="mb-3 text-light fs-1">{empresa.name}</h2>
            <img src={empresa.urlImg} alt={empresa.name} className="img-fluid mb-3" />
            <p className="fs-4 text-light">{empresa.description}</p>
            <a href={empresa.urlEmpresa} className='btn btn-info' >
              Pagina Oficial
            </a>
          </div>
          <div className="col-md-4">
            <h3 className="text-success">Fundadores</h3>
            <ul className="list-group">
              {empresa.fundadores.map((item, index) => (
                <li key={index} className="list-group-item">{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h3>Presencia Global</h3>
          </div>
          <div className="card-body">
            <p className="card-text">
              {empresa.presenciaGlobal}
            </p>
          </div>
          <div className="card-header">
            <h3>Nro de empleados</h3>
          </div>
          <div className="card-body">
            <p className="card-text">
              {empresa.empleados}
            </p>
          </div>
          <div className="card-header">
            <h3>Premios</h3>
          </div>
          <div className="card-body">
            <ul>
              {empresa.premios.map((item, index) => (
                <li key={index} >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-header">
            <h3>Productos</h3>
          </div>
          <div className="card-body">
            <ul>
              {empresa.productos.map((item, index) => (
                <li key={index} >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <h3 className="text-light">Historia</h3>
            <p>{empresa.historia}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EmpresaPage;
