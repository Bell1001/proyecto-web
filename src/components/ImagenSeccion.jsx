import { empresas } from '../data/empresas';

function ImagenSeccion() {
  return (
    <section className='bg-dark'>
      <div>
        <div id='carouselExampleControlsNoTouching' className='carousel slide' data-bs-ride='carousel'>
          <div className='carousel-inner'>
            {empresas.map((item, index) => (
              <div key={item.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <img src={item.urlImg} className='d-block w-100' alt='...' />
              </div>
            ))}
          </div>
          <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleControlsNoTouching' data-bs-slide='prev'>
            <span className='carousel-control-prev-icon' aria-hidden='true'></span>
            <span className='visually-hidden'>Previous</span>
          </button>
          <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleControlsNoTouching' data-bs-slide='next'>
            <span className='carousel-control-next-icon' aria-hidden='true'></span>
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ImagenSeccion;
