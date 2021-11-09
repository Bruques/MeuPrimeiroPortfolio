/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#welcome-section .welcome-section, #projects .projects-section,
  #projects .projects-grid, #contact .contact-section
  `,
  { interval: 100 }
)
