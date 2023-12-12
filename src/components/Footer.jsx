
function Footer() {
  return (
    <footer className="pie text-light p-5 ">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Redes Sociales</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.facebook.com" className="text-light" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" className="text-light" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com" className="text-light" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contacto</h5>
            <form>
              <div className="mb-3">
                <label htmlFor="correo" className="form-label">Correo electrónico</label>
                <input type="email" className="form-control" id="correo" />
              </div>
              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">Mensaje</label>
                <textarea className="form-control" id="mensaje" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
          </div>
          <div className="col-md-4">
            <h5>Enlaces Externos</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.example.com" className="text-light" target="_blank" rel="noopener noreferrer">
                  Empresas futuras
                </a>
              </li>
              <li>
                <a href="https://www.example2.com" className="text-light" target="_blank" rel="noopener noreferrer">
                  Pequeñas empresas
                </a>
              </li>
              <li>
                <a href="https://www.example3.com" className="text-light" target="_blank" rel="noopener noreferrer">
                  Mundo tecnologico
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
