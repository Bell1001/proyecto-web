/* eslint-disable react/prop-types */
import imagen from '../assets/foto.jpeg';

function UserPage({ info }) {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-4">
          <img
            src={imagen}
            alt={info.name}
            className="img-fluid rounded-circle"
          />
        </div>
        <div className="col-md-8">
          <h2>{info.name}</h2>
          <p className='fs-5' >{info.description}</p>
          <p>
            <strong>Edad:</strong> {info.edad} años
          </p>
          <p>
            <strong>Habilidades:</strong> {info.habilidades.join(', ')}
          </p>
          <p>
            <strong>Conocimientos:</strong> {info.conocimientos.join(', ')}
          </p>
          <div className="list-unstyled bg-info p-3" >
            <h3>Redes Sociales</h3>
            <ul>
              <li>
                <a rel="noopener noreferrer" href={info.redesSociales.facebook} target="_blank" >
                  Facebook
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href={info.redesSociales.github} target="_blank" >
                  GitHub
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href={info.redesSociales.linkedin} target="_blank" >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
