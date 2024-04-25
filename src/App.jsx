
// import './App.css'
import './home.scss'
import ContactForm from './ContactForm.jsx'
import logo from "./assets/logo-png.png"

function App() {

  return (
    <>
    <header>
    <img src={logo} className="logo-1" alt="logo" />
      <h1>Meteoben, Développeur Web</h1>
      </header>
      <main>
      <h2>Le site sera bientôt de retour, en attendant contactez moi:</h2>

      <h3>Veillez à bien attendre la confirmation de l'envoi du mail avant de quitter la page, le serveur peut être un peu long</h3>
   
    
     
      
      <ContactForm />
    </main>
    <footer>
      <h1>©Meteoben</h1>
    </footer> 
    </>
  )
}

export default App
