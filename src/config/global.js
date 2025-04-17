export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Fundamentos del diagnóstico empresarial',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Definición y objetivo del diagnóstico empresarial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Objetivos del diagnóstico empresarial',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Metodologías de diagnóstico',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Herramientas para el diagnóstico empresarial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Herramientas propias para el análisis interno',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Herramientas propias para el análisis externo',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Importancia de la información en el diagnóstico',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Prieto Herrera, J. E. (2011). <i>Gestión estratégica organizacional: guía práctica para el diagnóstico empresarial</i> (3a ed.). Ecoe Ediciones. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/69160?page=36',
    },
    {
      referencia:
        'Ramírez, M. & Tejada Betancourt, L. (Il.). (2020). <i>Gerencia estratégica</i>. Universidad Abierta para Adultos (UAPA). ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/175881?page=7 ',
    },
    {
      referencia:
        'Luna González, A. C. (2015). <i>Administración estratégica</i>. Grupo Editorial Patria. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/39421?page=6',
    },
    {
      referencia:
        'Torres Hernández, Z. (2015). <i>Administración estratégica</i>. Grupo Editorial Patria. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/39403?page=4 ',
    },
    {
      referencia:
        'Ramírez, M. & Tejada Betancourt, L. (Il.). (2020). <i>Gerencia estratégica</i>. Universidad Abierta para Adultos (UAPA). ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/175881?page=7 ',
    },
    {
      referencia:
        'Torres Hernández, Z. (2015). <i>Administración estratégica</i>. Grupo Editorial Patria. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/39403?page=4 ',
    },
    {
      referencia:
        'Luna González, A. C. (2015). <i>Administración estratégica</i>. Grupo Editorial Patria. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/39421?page=6 ',
    },
  ],
  glosario: [
    {
      termino: 'Análisis PESTEL',
      significado:
        'Herramienta que evalúa los factores políticos, económicos, sociales, tecnológicos, ecológicos y legales, que influyen en el entorno de la empresa, ayudando a identificar oportunidades y amenazas externas.',
    },
    {
      termino: '<i>Balanced Scorecard</i> (BSC)',
      significado:
        'Método de gestión que mide el desempeño de una empresa a través de cuatro perspectivas: financiera, clientes, procesos internos y aprendizaje y crecimiento, permitiendo alinear la estrategia con los resultados.',
    },
    {
      termino: '<i>Benchmarking</i>',
      significado:
        'Proceso de comparación del desempeño de una empresa con el de sus competidores o líderes de la industria, con el fin de identificar y adaptar buenas prácticas para mejorar el rendimiento.',
    },
    {
      termino: 'Curaduría de información',
      significado:
        'Proceso de selección, organización y filtrado de los datos recopilados durante el diagnóstico, con el propósito de quedarse solo con la información más relevante y útil para el análisis.',
    },
    {
      termino: 'Diagnóstico empresarial',
      significado:
        'Proceso estructurado que permite evaluar la situación actual de una empresa, identificando sus fortalezas, debilidades, oportunidades y amenazas, para facilitar la toma de decisiones estratégicas.',
    },
    {
      termino: 'Matriz BCG',
      significado:
        'Herramienta que clasifica los productos o unidades de negocio de una empresa, según su crecimiento y participación en el mercado, dividiéndolos en “Estrellas, Vacas lecheras, Interrogantes y Perros”.',
    },
    {
      termino: 'Matriz DOFA',
      significado:
        'Análisis que identifica las Debilidades, Oportunidades, Fortalezas y Amenazas de una empresa, facilitando el diseño de estrategias que aprovechen los puntos fuertes y minimicen los riesgos.',
    },
    {
      termino: 'Matriz EFI',
      significado:
        'Herramienta que evalúa los factores internos de la empresa (fortalezas y debilidades), asignando pesos y calificaciones, para medir la situación interna de la organización.',
    },
    {
      termino: 'Matriz EFE',
      significado:
        'Instrumento que evalúa los factores externos, midiendo la respuesta de la empresa frente a las oportunidades y amenazas presentes en su entorno. ',
    },
    {
      termino: 'Fuerzas de Porter',
      significado:
        'Modelo que analiza la competencia de una industria a través de cinco factores: “Rivalidad entre competidores, Poder de los proveedores, Poder de los clientes, Amenaza de nuevos entrantes y Amenaza de productos sustitutos”, permitiendo entender la dinámica competitiva del sector.',
    },
  ],
}
