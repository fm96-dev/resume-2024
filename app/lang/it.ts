export default {
  downloadResume: "Scarica CV",
  experience: "Esperienza",
  education: "Educazione",
  personalProjects: "Progetti personali e Open Source",

  summary: `Web Developer con una forte passione per la creazione di siti web e web applications di alta qualità.

  Oltre cinque anni di esperienza nello sviluppo di soluzioni digitali affidabili e scalabili,
  aderendo costantemente agli standard moderni e alle best practices.

  Impegnato a fornire esperienze utente di qualità e a promuovere il successo dei progetti attraverso lo sviluppo web innovativo.`,

  experienceEvents: {
    0: {
      time: "FEBBRAIO 2022 - LUGLIO 2024",
      description: [
        `- Sviluppo e manutenzione di applicazioni web utilizzando PHP, Laravel, MySQL, Vue e TypeScript.`,
        `- Implementazione di nuove feature, refactoring di codice, integrazione con servizi terzi e scrittura di test automatici.`,
        `- Gestione dell’infrastruttura e deploy su AWS, con utilizzo principale di Elastic Beanstalk, RDS e Laravel Vapor.`,
        `- Workflow gestito con Docker (DevContainer per sviluppo), Git/GitHub, CI/CD e Linux.`,
      ].join("\n"),
    },
    1: {
      time: "GIUGNO 2018 - FEBBRAIO 2022",
      description: [
        "- Creazione e manuntenzione di Single Page Applications e Landing Page orientate alla Lead Generation",
        `- Creazione di un toolkit/framework basato su Vue per la semplificazione dello sviluppo delle Landing Pages.
           Composto da una libreria di componenti custom, una libreria javascript e un template vue realizzato con vue-cli/vite.js`,
        `- Gestione del codice tramite Git e GitHub`,
        "- Formazione e gestione del team",
      ].join("\n"),
    },
  },

  projects: {
    vueInsane:
      "Un plugin Vue.js per la sanitizzazione di stringhe HTML chiamato vue-insane.",
    jsFactory:
      "Una libreria JavaScript per la generazione dinamica di dati fasulli (utile in fase di test).",
    openSourceTitle: "Ho anche contributo a due progetti open source:",
    vueShepherd: "Implementato il supporto per Vue 3.",
    bootstrapVueCliPlugin: "Aggiunto lo scaffolding per l'utilizzo con SCSS",
  },

  educationEvents: {
    0: {
      description: [
        "Gli argomenti studiati sono:",
        "",
        "- Fondamenti di Informatica",
        "- Sistemi e Reti",
        "- Object oriented programming",
        "- Web programming",
      ].join("\n"),
    },
  },
};
