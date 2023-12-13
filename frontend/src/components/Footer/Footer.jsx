import React from 'react'
import './Footer.css'


export default function Footer() {
  return (
    <>
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Kazimierz Kiper</p>
        <p>Adres: ul. Przykładowa 123, 00-000 Miasto</p>
        <p>Email: kontakt@example.com</p>
      </div>
    </footer>
    </>
  )
}


