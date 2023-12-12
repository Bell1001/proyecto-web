import { Routes, Route } from 'react-router-dom'
import InicioPage from './pages/InicioPage'
import Menu from './components/Menu'
import EmpresaPage from './pages/EmpresaPage'
import Footer from './components/Footer'
import UserPage from './pages/UserPage'

function App() {

  const armando = {
    name: 'Armando Huanca Caceres',
    edad: 21,
    description: 'Soy estudiante de segundo semestre en la universidad y apasionado por el mundo deportivo, especialmente el fútbol. Como atleta, disfruto participando y siguiendo eventos deportivos. También me interesa el desarrollo web y la programación, buscando siempre aprender nuevas tecnologías y mejorar mis habilidades.',
    habilidades: ['Atleta'],
    conocimientos: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'Python'],
    intereses: ['Desarrollo web', 'Programación', 'Deportes'],
    redesSociales: {
      twitter: 'https://twitter.com/armando123',
      linkedin: 'https://www.linkedin.com/in/armandohc/',
      github: 'https://github.com/armando123',
    },
  };
  

  return (
    <main>
      <Menu />
      <Routes>
        <Route index element={<InicioPage />} />
        <Route path='empresa/:id' element={<EmpresaPage />} />
        <Route path='/user' element={<UserPage info={armando} />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App