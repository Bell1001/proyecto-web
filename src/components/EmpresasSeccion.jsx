import { Link } from 'react-router-dom'
import { empresas } from '../data/empresas'

function EmpresasSeccion() {
  return (
    <section className='p-5 bg-dark' >
      <div className='container seccionEmpresa gap-4' >
        {
          empresas.map((item, index) => (
            <div key={index} className="card mb-2 bg-black text-light">
              <div className="card-header">
                {item.name}
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  Descripcion
                </h5>
                <p className="card-text">
                  {item.description}
                </p>
                <Link className="btn btn-primary" to={`/empresa/${item.id}`} >
                  Ver Mas
                </Link>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default EmpresasSeccion