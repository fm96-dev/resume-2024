export default {
  downloadResume: 'Scarica CV',
  experience: 'Esperienza',
  education: 'Educazione',
  personalProjects: 'Progetti personali e Open Source',

  summary: `Web Developer con una forte passione per la creazione di siti web e web applications di alta qualità.

  Oltre cinque anni di esperienza nello sviluppo di soluzioni digitali affidabili e scalabili,
  aderendo costantemente ai standard moderni e alle best practices.

  Impegnato a fornire esperienze utente di qualità e a promuovere il successo dei progetti attraverso lo sviluppo web innovativo.`,

  experienceEvents: {
    0: {
      time: 'FEBBRAIO 2022 - ATTUALE',
      description: `Creazione e manutenzione di applicazioni web realizzate con tecnologie quali: PHP, Laravel, MySQL, JavaScript, TailwindCSS e Vue.
      Deploy tramite AWS (Amazon Web Services) e il servizio Laravel Vapor.`
    },
    1: {
      time: 'GIUGNO 2018 - FEBBRAIO 2022',
      description: [
        '- Creazione e manuntenzione di Single Page Applications e Landing Page orientate alla Lead Generation',
        `- Creazione di un toolkit/framework basato su Vue per la semplificazione dello sviluppo delle Landing Pages.
           Composto da una libreria di componenti custom, una libreria javascript e un template vue realizzato con vue-cli/vite.js`,
        '- Formazione e gestione del team'
      ].join('\n')
    }
  },

  projects: {
    vueInsane: 'Un plugin Vue.js per la sanitizzazione di stringhe HTML chiamato vue-insane.',
    jsFactory: 'Una libreria JavaScript per la generazione dinamica di dati fasulli (utile in fase di test).',
    openSourceTitle: 'Ho anche contributo a due progetti open source:',
    vueSheppherd: 'Implementato il supporto per Vue 3.',
    bootstrapVueCliPlugin: 'Aggiunto lo scaffolding per l\'utilizzo con SCSS'
  },

  educationEvents: {
    0: {
      description: [
        'Gli argomenti studiati sono:',
        '',
        '- Fondamenti di Informatica',
        '- Sistemi e Reti',
        '- Object oriented programming',
        '- Web programming'
      ].join('\n')
    }
  }

}
