<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Herramientas para el diagnóstico empresarial'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .row.mb-5       
      .col-lg-8
        .bg-color-3.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/22.svg")
            .col-lg
              p.mb-0 Como bien se ha mencionado, el diagnóstico empresarial, es la herramienta que permite conocer la situación actual de la organización de una manera detallada, desde las perspectivas de debilidades, fortalezas, amenazas y oportunidades. Para realizar este análisis profundo, se requiere la aplicación de diferentes herramientas que, de acuerdo con su definición y estructura, permiten recopilar la información, darle el tratamiento necesario y generar el análisis respectivo, para llegar a puntos o conclusiones específicas y claras.  
        p(data-aos="fade-down") Es relevante destacar que el diagnóstico empresarial debe abordarse desde dos enfoques:                
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/23.png", data-aos="zoom-in")   

    TabsC(data-aos="fade-right").color-primario.mb-5
      .bg-color-10.border.px-4.p-md-5.py-3(titulo="Interno" :icon="require('@/assets/curso/temas/24.svg')")
        .row.justify-content-center
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img.img-a.img-t(src='@/assets/curso/temas/23.png', alt='')          
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Interno 
            p Implica examinar detalladamente cada área de la organización, considerando aspectos como los recursos, potenciales, cualidades y ventajas competitivas. Al mismo tiempo, se deben identificar las necesidades, problemas, carencias, falencias y desventajas que puedan afectar el desempeño de la empresa.

      .bg-color-10.border.px-4.p-md-5.py-3(titulo="Externo" :icon="require('@/assets/curso/temas/24.svg')")
        .row.justify-content-center
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img.img-a.img-t(src='@/assets/curso/temas/23.png', alt='')        
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Externo 
            p Se refiere a las variables del entorno que la empresa no puede controlar, pero cuyo comportamiento puede influir en su funcionamiento y resultados. Este análisis debe considerar factores económicos, sociales, políticos, ambientales, tecnológicos y legales, puesto que cualquier cambio en estos elementos puede impactar, de manera positiva o negativa, a la organización.

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Herramientas propias para el análisis interno

    .row.mb-5              
      .col-lg-8
        .bg-color-2.p-4.mb-4(data-aos="fade-left")
          p El análisis interno se enfoca en identificar los recursos, habilidades y competencias que posee una empresa y el objetivo principal es reconocer tanto sus fortalezas, como sus debilidades. Para ello se deben analizar los recursos tanto tangibles como intangibles, junto con las capacidades organizacionales; esto representa una estrategia para evaluar los activos competitivos de la empresa y determinar si estos pueden contribuir a mantener una ventaja competitiva duradera, frente a sus competidores. 
            
        p(data-aos="fade-down") Teniendo como base a Ramírez & Tejada Betancourt (2020), a continuación, se identifican y clasifican los recursos tangibles e intangibles. 
 
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/27.png", data-aos="zoom-in")    


    .titulo-figura(data-aos="fade-right")
      h5 Tabla 1. 
      span Tipos de indeterminaciones en límites

    .tabla-a-1.mb-1(data-aos="fade-left") 
      table
        thead.text-center
          tr
            th Activos intangibles
            th Activos tangibles
        tbody
          tr
            td.td-align
              p #[b Activos humanos y capital intelectual.] Experiencia, aprendizaje acumulado y conocimientos tácitos de los empleados; educación, capital intelectual y conocimientos técnicos de equipos especializados y grupos de trabajo; conocimientos de personal clave respecto a funciones importantes del negocio (habilidad para mantener bajo los costos operativos, mejorar la calidad del producto y ofrecer servicio al cliente); talento directivo, creatividad e innovación de algunos miembros de la empresa. 
              p #[b Marcas, imagen de la empresa y activos de reputación.] Nombres de marca, imagen de producto, lealtad y disposición del cliente; imagen de la empresa, reputación en cuanto a calidad, servicio y confiabilidad; reputación con proveedores y socios respecto a tratos justos. 
              p #[b Relaciones.] Alianzas o sociedades en coinversión que den acceso a tecnologías, técnicas especializadas o mercados geográficos; asociaciones con proveedores que reduzcan costos y/o mejoren la calidad y desempeño del producto; redes de distribuidores y confianza establecida con socios diversos.
              p #[b Cultura y sistema de incentivos de la empresa.] Normas de conducta, principios del negocio y convicciones arraigadas en la empresa; apego personal a los ideales de la empresa; sistema de compensaciones y grado de motivación personal.              
            td.td-align
              p #[b Recursos físicos.] Derechos de propiedad o acceso a recursos naturales (depósitos minerales); plantas de manufactura, equipos o instalaciones de distribución muy avanzados; predios y terrenos; ubicaciones de tiendas, fábricas o centros de distribución, como el modelo general de sus ubicaciones físicas. 
              p #[b Recursos financieros.] Efectivo y equivalente de efectivo; valores negociables, otros activos financieros, como la capacidad de endeudamiento de la organización (como se indique en sus estados financieros y calificación crediticia). 
              p #[b Activos tecnológicos.] Patentes, derechos de autor y secretos comerciales; tecnología de producción, inventario de otras tecnologías y procesos tecnológicos. 
              p #[b Recursos organizacionales.] Sistemas de tecnología de la información y comunicación (servidores, estaciones de trabajo); otros sistemas de planeación, coordinación y control, diseño organizacional y estructura de presentación de informe de la empresa.
    figcaption.bg-color-6.mb-5(data-aos="fade-down") Nota: tomado y adaptado de Ramírez & Tejada Betancourt (2020).

    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5.py-2
        .row.align-items-center
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/28.svg")
          .col-lg
            p.mb-0 Todas estas variables y recursos, se analizan aplicando las herramientas que se presentan a continuación.     

    .row.mb-5     
      .col.order-md-2.order-lg-1
        h3(data-aos="fade-down") Matriz EFI (Evaluación de Factores Internos)       
        p(data-aos="fade-down") La evaluación de los factores internos, es un paso esencial en el análisis estratégico de cualquier organización, dado que permite identificar con claridad sus principales fortalezas y debilidades.

      .col-lg-auto.mb-3.mb-lg-0.order-md-1.order-lg-2 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/29.svg", data-aos="zoom-in") 

    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center 
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/30.png', alt='')                  
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Matriz EFI (Evaluación de Factores Internos)
            p.mb-4(data-aos="fade-right") En el PDF Matriz EFI, se explica cómo construir esta herramienta paso a paso, asignando pesos y calificaciones a los factores más relevantes. A través de este análisis, los líderes empresariales pueden tomar decisiones fundamentadas que fortalezcan la competitividad y mejoren el desempeño general de la empresa.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Matriz EFI (Evaluación de Factores Internos)
          
    h3(data-aos="fade-down") La Matriz BCG (Boston Consulting Group) 
    p(data-aos="fade-down") Es una herramienta estratégica que ayuda a las empresas a analizar su cartera de productos o unidades de negocio. Su propósito es identificar en qué productos o servicios vale la pena invertir, cuáles deben mantenerse y cuáles se deben descontinuar. 

    .row.mb-5              
      .col-lg-8
        .bg-color-6.p-4.mb-4(data-aos="fade-left")
          p(data-aos="fade-down") La Matriz BCG se basa en dos factores principales: la tasa de crecimiento del mercado y la participación relativa de mercado. Con esta combinación, la empresa puede visualizar cómo se desempeñan sus productos en el mercado y decidir cómo distribuir recursos para maximizar la rentabilidad.

          p.mb-0(data-aos="fade-down") Esta matriz es valiosa porque proporciona una visión gráfica de la cartera de negocios, facilitando la toma de decisiones sobre inversión, expansión o retiro de productos. Al clasificar los productos, según su rendimiento y el crecimiento del mercado, las empresas pueden optimizar sus recursos y enfocarse en las oportunidades más prometedoras. 
        p(data-aos="fade-down") La Matriz BCG se construye con el siguiente paso a paso:
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/31.png", data-aos="zoom-in")        


    h3(data-aos="fade-down") Paso 1 - Identificar los productos o unidades de negocio que se van a analizar

    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg.order-lg-2
          .p-4
            p.mb-0(data-aos="fade-up") Primero, se seleccionan los productos, servicios o divisiones que forman parte de la cartera de la empresa y se quieren evaluar. Si la empresa desea conocer cual es el nivel de participación de determinado producto en el mercado, se deben incluir tanto productos que considere potenciales, como aquellos que considere de baja participación y/o rentabilidad.    
        .col-lg-auto.mb-3.mb-lg-0.order-lg-1
          figure
            img.img-a.img-t(src='@/assets/curso/temas/32.png', alt='')        

    h3(data-aos="fade-down") Paso 2 - Definir las dos variables claves

    .bg-full-width-3.bg-fondo-1.py-4
      .px-4.px-md-5
        .row.justify-content-center.align-items-stretch.text-center.mb-4
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100.br-1
              img.custom-image-card__image(src="@/assets/curso/temas/33.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Tasa de crecimiento del mercado
                p.mb-0 Mide qué tan rápido está creciendo el mercado en el que compite el producto. Generalmente, una tasa superior al 10 %, se considera alta.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100.br-1
              img.custom-image-card__image(src="@/assets/curso/temas/34.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Participación relativa de mercado	
                p.mb-0 Compara la participación de mercado del producto, con la participación de su mayor competidor. Si el producto tiene más participación que sus rivales, tendrá un valor mayor a 1; si tiene menos, será menor a 1.
                
    h3(data-aos="fade-down") Paso 3 - Construcción de la matriz
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8
            p(data-aos="fade-down") Se dibuja una cuadrícula dividida en cuatro cuadrantes:
            ul.lista-ul--color
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 #[b Estrella.] Alta participación de mercado y alto crecimiento. Son productos que generan ingresos y requieren inversión continua, para mantener su posición.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 #[b Vaca lechera.] Alta participación de mercado, pero en un mercado de crecimiento bajo. Son productos consolidados que generan más ingresos de los que requieren, para mantenerse.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 #[b Interrogante.] Baja participación de mercado en un mercado de alto crecimiento. Pueden convertirse en estrellas, o fracasar. Requieren mucha inversión para aumentar su participación.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 #[b Perro.] Baja participación de mercado y bajo crecimiento. Son productos con poco potencial y suelen ser candidatos para ser retirados.
          .col-lg-4
            figure
              img(src="@/assets/curso/temas/35.png" alt="" style="max-width: 400px;").mx-auto.mb-4.mb-lg-0

    .titulo-figura.mb-4(data-aos="fade-up")
      h5 Figura 2. 
      span Modelo Matriz BCG

    .bg-color-5.p-4.mb-5(data-aos="fade-left")
      figure
        img.img-a.img-t(src="@/assets/curso/temas/36.svg", alt="")

    .bg-full-width-4.bg-fondo-2.py-4
      .px-4.px-md-5
        .row.mb-5 
          .col-lg-8
            h3(data-aos="fade-left") Paso 4 - Colocar los productos en la matriz
            p(data-aos="fade-down") Cada producto se ubica en el cuadrante correspondiente, según sus valores de crecimiento y participación de mercado.

            h3(data-aos="fade-left") Paso 5 - Análisis y toma de decisiones
            p(data-aos="fade-down") Una vez que los productos están posicionados, se definen estrategias:            

          .col-lg-4.mb-3.mb-lg-0 
            figure
              img.img-a.img-t(src="@/assets/curso/temas/37.png", data-aos="zoom-in")   

        div.row.justify-content-center.align-items-stretch
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/38.svg" alt="" style="width: 90px")
              h5.text-center Estrellas
              p.mb-0.text-center Invertir para mantener el crecimiento y liderazgo.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/39.svg" alt="" style="width: 90px")
              h5.text-center Vacas lecheras
              p.mb-0.text-center Mantener y aprovechar las ganancias para financiar otros productos.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/40.svg" alt="" style="width: 90px")
              h5.text-center Interrogantes
              p.mb-0.text-center Decidir si invertir para convertirlos en estrellas o retirarlos si no muestran potencial.

          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/41.svg" alt="" style="width: 90px")
              h5.text-center Perros
              p.mb-0.text-center Analizar si pueden mantenerse con pocos recursos o si conviene descontinuarlos.

    h3(data-aos="fade-left") El Balanced Scorecard (BSC)
    p(data-aos="fade-down") La alineación entre la estrategia y la ejecución, es fundamental para el éxito organizacional en entornos dinámicos y competitivos. 

    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center 
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/42.png', alt='')                  
          .col-lg-8
            h2.mb-4(data-aos="flip-up") El Balanced Scorecard (BSC)
            p.mb-4(data-aos="fade-right") En el PDF El Balanced Scorecard, se presenta esta herramienta de gestión como un modelo integral que permite traducir la visión y estrategia de una empresa en objetivos claros y medibles, distribuidos en cuatro perspectivas claves. A través de un enfoque estructurado, se explica paso a paso, cómo construir e implementar el BSC, facilitando el seguimiento del desempeño y la toma de decisiones estratégicas, basadas en datos.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> El Balanced Scorecard (BSC)

    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Herramientas propias para el análisis interno
    .row.mb-5       
      .col-lg-8
        p(data-aos="fade-down") Una organización debe ajustarse constantemente al entorno en el que opera para anticiparse y reaccionar, de manera estratégica, frente a los movimientos de sus competidores, las transformaciones en el mercado y los cambios sociales. 
        .bg-color-2.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/43.svg")
            .col-lg
              p.mb-0 Es fundamental que identifique las posibles amenazas para mitigarlas o convertirlas en ventajas, al mismo tiempo que detecta y aprovecha las oportunidades existentes o, incluso, genera nuevas posibilidades. De no hacerlo, la empresa podría enfrentar dificultades que comprometan su permanencia y crecimiento. 
        p(data-aos="fade-down") El análisis del entorno externo funciona como una herramienta valiosa que permite interpretar los cambios del mercado y convertir esa información en acciones estratégicas. Este análisis ayuda a:   
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/44.png", data-aos="zoom-in")  

    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/45.png", alt="")
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Establecer y monitorear indicadores del entorno")
            p Permite seguir de cerca las variaciones del mercado, la competencia y otros factores externos, que influyen en la empresa.  

          .div(titulo="Obtener una comprensión amplia y específica del entorno")
            p Facilita la identificación de los eventos y tendencias que impactan directa o indirectamente a la organización.   

          .div(titulo="Aplicar la información de manera creativa y estratégica")
            p Impulsa a la empresa a transformar los datos recopilados en decisiones que potencien su desarrollo y competitividad.                                     

    p(data-aos="fade-down") La finalidad del análisis externo es determinar las amenazas y oportunidades, como lo establece el siguiente esquema:

    .titulo-figura.mb-4(data-aos="fade-up")
      h5 Figura 3. 
      span Análisis externo

    .bg-color-5.p-4.mb-1(data-aos="fade-left")
      figure
        img.img-a.img-t(src="@/assets/curso/temas/46.svg", alt="")

    figcaption.bg-color-6.mb-5(data-aos="fade-down") Nota: tomado y adaptado de Ramírez & Tejada Betancourt (2020).

    p(data-aos="fade-down") Todos estos elementos se analizan aplicando las herramientas que se presentan a continuación.

    h3(data-aos="fade-down") Las cinco fuerzas de Porter
    p(data-aos="fade-down") Comprender el entorno competitivo es fundamental para diseñar estrategias empresariales efectivas y sostenibles.
    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center 
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/47.png', alt='')                  
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Las cinco fuerzas de Porter
            p.mb-4(data-aos="fade-right") En el PDF Las cinco fuerzas de Porter, se presenta un modelo de análisis estratégico que permite evaluar la estructura de una industria mediante cinco fuerzas claves: la rivalidad entre competidores, la amenaza de nuevos entrantes, el poder de negociación de clientes y proveedores, y la amenaza de productos sustitutos. Este enfoque permite a las organizaciones identificar oportunidades, anticiparse a riesgos y tomar decisiones informadas, para fortalecer su posición en el mercado.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Las cinco fuerzas de Porter

    .row.mb-5       
      .col-lg-8
        h3(data-aos="fade-down") Análisis PESTEL 
        p(data-aos="fade-down") El análisis PESTEL, es una herramienta estratégica que permite examinar el entorno externo de una empresa o industria. Su enfoque se fundamenta en identificar los factores macroeconómicos que pueden influir en las decisiones, el rendimiento y el crecimiento de una organización.     
        .bg-color-3.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/49.svg")
            .col-lg
              p.mb-0 La importancia de este análisis radica en que ayuda a comprender mejor el entorno global, anticiparse a posibles cambios y ajustar las estrategias para mantenerse competitivo. Además, permite descubrir oportunidades y detectar amenazas que podrían afectar a la empresa a largo plazo.  
        p(data-aos="fade-down") Cada letra representa una categoría de factores que afectan el entorno de la empresa:               
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/48.png", data-aos="zoom-in")   

    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.my-5
          .col-lg-10
            ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/temas/50.svg', alt='', style="max-width: 1106px;").mx-auto

                .bg-color-white.box-shadow.p-3(x="6.8%" y="0%" numero="+")
                  h5 P                  
                  p.mb-0 P (Políticos). Incluye las leyes, regulaciones y la estabilidad del gobierno que pueden influir en la operación del negocio. Ejemplo. Políticas fiscales, tratados comerciales, regulaciones laborales. 

                .bg-color-white.box-shadow.p-3(x="24.1%" y="0%" numero="+")
                  h5 E                  
                  p.mb-0 E (Económicos). Evalúa los elementos que impactan la economía y, por lo tanto, el mercado en el que opera la empresa. Ejemplo. Tasa de inflación, tipo de cambio, nivel de desempleo, crecimiento económico.

                .bg-color-white.box-shadow.p-3(x="41.5%" y="0%" numero="+")
                  h5 S                   
                  p.mb-0 S (Sociales). Analiza las tendencias sociales, culturales y demográficas que pueden afectar la demanda de productos o servicios. Ejemplo. Cambios en el estilo de vida, hábitos de consumo, envejecimiento de la población. 

                .bg-color-white.box-shadow.p-3(x="58.7%" y="0%" numero="+")
                  h5 T                   
                  p.mb-0 T (Tecnológicos). Revisa los avances tecnológicos y la velocidad de innovación que pueden transformar la industria. Ejemplo. Automatización, inteligencia artificial, nuevas plataformas digitales. 
                  
                .bg-color-white.box-shadow.p-3(x="76%" y="0%" numero="+")
                  h5 E                   
                  p.mb-0 E (Ecológicos). Considera los factores ambientales que podrían afectar la empresa directa o indirectamente. Ejemplo. Regulaciones medioambientales, cambio climático, disponibilidad de recursos naturales. 

                .bg-color-white.box-shadow.p-3(x="93.5%" y="0%" numero="+")
                  h5 L                   
                  p.mb-0 L (Legales). Incluye las leyes y normativas que regulan la industria y las operaciones del negocio. Ejemplo. Normas de seguridad, leyes de protección de datos, derechos laborales.  

    p(data-aos="fade-down") Para la aplicación de este análisis, se debe recopilar información sobre cada categoría del modelo. Es importante centrarse en los factores que realmente pueden afectar a la empresa, dejando de lado los menos relevantes.

    .row.mb-5              
      .col-lg-8
        p(data-aos="fade-down") Después de identificar los factores, se analiza cómo podrían afectar a la empresa, ya sea de manera positiva o negativa. (Oportunidades y/o Amenazas).

        .bg-color-2.p-4.mb-4(data-aos="fade-left")
          p Algunas categorías del análisis pueden influirse entre sí. Por ejemplo, un cambio tecnológico (T) podría llevar a una nueva regulación legal (L), o un cambio social (S) podría impulsar el desarrollo de nuevas tecnologías (T).
            
        p(data-aos="fade-down") Es importante reconocer estas interacciones, para anticipar escenarios más complejos.
        La información obtenida se organiza de manera clara para facilitar la interpretación. Esto puede hacerse en una tabla, lista o diagrama. 
 
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/51.png", data-aos="zoom-in")    

    .titulo-figura(data-aos="fade-right")
      h5 Tabla 2. 
      span Ejemplo análisis PESTEL

    .tabla-a-1.mb-5(data-aos="fade-left") 
      table
        thead.text-center
          tr
            th Oportunidad
            th Oportunidad
            th Oportunidad
        tbody
          tr
            td Político.
            td Nueva regulación de emisiones.
            td Amenaza.
          tr
            td Económico.
            td Crecimiento del mercado eléctrico.
            td Oportunidad.
          tr
            td Tecnológico.
            td Innovación en baterías más duraderas.
            td Oportunidad.    


    p(data-aos="fade-down") Una vez recopilada la información y analizado los resultados, dicha información puede permitir:

    .bg-full-width.bg-color-7.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8
            p(data-aos="fade-down") Se dibuja una cuadrícula dividida en cuatro cuadrantes:
            ul.lista-ul--color
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Si el análisis revela amenazas potenciales, la empresa puede adaptar sus planes para minimizar el impacto. Por ejemplo, si se prevé una nueva ley que encarezca ciertos insumos, se podrían buscar proveedores alternativos.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Si hay una tendencia social que favorece un producto o servicio, la empresa puede ampliar su oferta para aprovechar esa demanda emergente.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 El análisis PESTEL ayuda a desarrollar planes de contingencia, reduciendo la incertidumbre ante posibles cambios externos.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Al combinar el PESTEL con herramientas como la Matriz FODA o las Cinco Fuerzas de Porter, la empresa obtiene una visión más completa y equilibrada de su situación estratégica. 
          .col-lg-4
            figure
              img(src="@/assets/curso/temas/52.png" alt="" style="max-width: 400px;").mx-auto.mb-4.mb-lg-0 


    h3(data-aos="fade-down") Matriz EFE
    p(data-aos="fade-down") El análisis del entorno externo, es esencial para anticiparse a los cambios del mercado y fortalecer la posición estratégica de una organización.
    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center 
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/53.png', alt='')                  
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Matriz EFE
            p.mb-4(data-aos="fade-right") En el PDF Matriz EFE, se estudia una herramienta que permite identificar, valorar y calificar las oportunidades y amenazas que afectan a una empresa, desde el exterior. A través de un proceso estructurado, esta matriz convierte información del entorno en datos cuantificables, facilitando la toma de decisiones y la formulación de estrategias más efectivas y proactivas.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_5.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Matriz EFE 

    h3(data-aos="fade-down") El #[i bechmarking]
    .row.mb-5       
      .col-lg-8
        p(data-aos="fade-down") El #[i benchmarking] es una metodología que consiste en comparar los procesos, productos o servicios de una empresa, con los de otras organizaciones líderes o competidores. Su enfoque está en identificar prácticas destacadas y encontrar oportunidades para mejorar el desempeño.
        .bg-color-2.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/54.svg")
            .col-lg
              p.mb-0 La importancia de esta herramienta radica en que permite aprender de quienes logran resultados superiores, promoviendo la innovación y la eficiencia. No se trata solo de copiar lo que hacen otros, sino de adaptar esas prácticas a la realidad de la propia empresa, para optimizar sus operaciones.
        p(data-aos="fade-down") Los tipos de #[i bechmarking], son:  
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/55.png", data-aos="zoom-in")

    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/56.png", alt="")
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="<i>Benchmarking</i> interno")
            p Este tipo de comparación se realiza dentro de la misma empresa, entre diferentes departamentos, áreas o sucursales. Su objetivo es identificar cuáles de esas partes obtienen mejores resultados y entender qué prácticas contribuyen a ese rendimiento superior. Es una opción práctica y accesible, dado que la información está disponible internamente. Por ejemplo, una cadena de restaurantes puede comparar la eficiencia operativa entre sus distintos locales para identificar qué estrategias generan tiempos de atención más rápidos o una mayor satisfacción del cliente.  

          .div(titulo="<i>Benchmarking</i> competitivo")
            p Se centra en analizar directamente a los competidores más cercanos para comprender sus estrategias y resultados. El propósito es detectar diferencias significativas que permitan mejorar la posición de la empresa frente al mercado. Esta comparación es más desafiante, debido a la dificultad de acceder a datos detallados de los rivales. Un ejemplo sería una compañía de telecomunicaciones que estudia cómo sus competidores logran reducir los tiempos de espera en la atención al cliente, o qué promociones utilizan para atraer más usuarios. 

          .div(titulo="<i>Benchmarking</i> funcional")
            p Consiste en comparar los procesos específicos de la empresa con los de organizaciones que no son competidores directos, pero que destacan en esas mismas actividades. El objetivo es aprender de las mejores prácticas, sin importar la industria de origen. Por ejemplo, una empresa de transporte podría estudiar cómo una cadena de supermercados optimiza la logística de sus entregas para reducir costos y tiempos. Este enfoque fomenta la adopción de métodos innovadores provenientes de sectores completamente distintos.                                                       
    p(data-aos="fade-down") A continuación, conozcamos cómo aplicar el #[i benchmarking]:

    .bg-full-width.bg-fondo-slider.mb-5(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Primero 
              p Lo primero es identificar las áreas, procesos o indicadores específicos que se desean optimizar. Es fundamental ser concreto para obtener resultados útiles.          
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/57.png")  

          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Segundo 
              p Elegir las empresas o sectores a analizar. Pueden ser competidores directos, líderes del mercado o compañías de otras industrias con procesos sobresalientes.           
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/58.png") 

          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Tercero 
              p Obtener la información necesaria sobre los procesos, prácticas y resultados de las empresas seleccionadas. Se puede lograr mediante: 
              ul.lista-ul--color
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Informes, sitios web, publicaciones especializadas.
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Empresas que aceptan compartir datos para beneficio mutuo.
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Consultorías o bases de datos especializadas.                         
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/59.png") 

          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Cuarto 
              p Examinar los procesos y resultados propios frente a los de las organizaciones estudiadas. Es esencial identificar tanto las diferencias como las similitudes.

              p #[b Aspectos a analizar.] Costos y tiempos, calidad del producto o servicio, satisfacción del cliente, innovación en los procesos.           
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/60.png") 

          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Quinto 
              p Destacar aquellas prácticas que generan mejores resultados. Estas deben ser realistas y viables de adaptar a la empresa.           
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/61.png") 

          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Sexto 
              p Una vez identificadas las prácticas sobresalientes, se elabora un plan para adaptar e integrar esos aprendizajes. El plan debe incluir: 
              ul.lista-ul--color
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Objetivos específicos de mejora, acciones concretas para implementar los cambios, responsables y plazos definidos.                          
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/62.png")

    h3(data-aos="fade-down") Matriz DOFA
    p(data-aos="fade-down") El reconocimiento de los factores internos y externos que afectan a una organización, es clave para construir estrategias sólidas y sostenibles.
    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center 
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/63.png', alt='')                  
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Matriz DOFA
            p.mb-4(data-aos="fade-right") En el PDF Matriz DOFA, se presenta una herramienta de análisis que permite identificar fortalezas, debilidades, oportunidades y amenazas, integrando la información obtenida a través de otros instrumentos diagnósticos como las matrices EFI y EFE. Este enfoque facilita la transformación del diagnóstico empresarial en acciones estratégicas concretas, orientadas a potenciar las capacidades de la organización, minimizar riesgos y aprovechar al máximo las condiciones del entorno.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_6.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Matriz DOFA 
                
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/39415?page=10" target="_blank" rel="noopener noreferrer") Luna González, A. C. (2015). Proceso administrativo. Grupo Editorial Patria. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://publicaciones.unaula.edu.co/index.php/VisionContable/article/view/396" target="_blank" rel="noopener noreferrer") Jaramillo López, P. (2010). El proceso de diagnóstico. Revista Visión Contable, (8), 71–96.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/8ihm7QUr2KQ?si=8SwkM4jvI9Riwzoe" target="_blank" rel="noopener noreferrer") Montero, J. (2018). Matriz BCG Boston Consulting Group con Ejercicio Práctico en Excel.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/6cNawrmqkqc?si=xtFRK5os1nNOL7Fe" target="_blank" rel="noopener noreferrer") Viajero Mayor (Kdussan y Albita). (2021) Cómo construir la matriz DOFA.              

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

         
  
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
