import Accordion from 'react-bootstrap/Accordion';

function AccordionSpanish() {
  return (
    <Accordion alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Presentación</Accordion.Header>
        <Accordion.Body>
            <p className='texts-language'>Este Producto Educativo elaborado como Secuencia Didáctica Interdisciplinar
            (SDI) titulado: “Cerrado: Sendero Ecológico saber para conservar” está vinculado a la
            investigación: Sendero Ecológico con el uso de la Bicicleta como Práctica Pedagógica
            Interdisciplinar para la Enseñanza Media Integrada”, siendo un producto de
            investigación del Programa de Maestría en Educación Profesional y Tecnológica
            (ProfEPT) bajo la dirección del profesor Cristiano Rocha da Cunha.</p>
            
            <p className='texts-language'>Con el objetivo de presentar una propuesta de enseñanza de una secuencia
            didáctica, se aborda la importancia del rol educativo de las clases de campo, con el uso
            de la bicicleta, con miras a reflexionar en los estudiantes de Educación Secundaria
            Integrada (EMI) para el desarrollo del comportamiento en educación ambiental crítica
            consciente y ética. La EAC defiende, entre otros puntos, la reflexión sobre la sociedad
            de consumo, el modo de producción capitalista y los aspectos políticos y económicos
            que inciden en la cuestión ambiental.</p>

            <p className='texts-language'>En la concepción de Zabala (1998) un SD consiste en “un conjunto de
            actividades ordenadas, estructuradas, articuladas para la realización de determinados
            objetivos educativos y que tiene un principio y un final conocidos tanto por el docente
            como por los alumnos”.</p>

            <p className='texts-language'>Las actividades de campo constituyen una estrategia para relacionar la teoría con
            la práctica, sirviendo de apoyo al trabajo docente y ayudando a los estudiantes a percibir
            concretamente los espacios de enseñanza no formal. En la observación de Krasilchik
            (2016, p. 134), “las visitas a mercados, granjas, estaciones de tratamiento y fábricas
            pueden enseñar a los estudiantes cosas que les resultaría muy difícil aprender si
            estuvieran confinados en el entorno escolar”.</p>

            <p className='texts-language'>Esta secuencia didáctica interdisciplinaria (SDI), comprende el curso de
            bachillerato integrado en Edificaciones en las asignaturas del tronco común de:
            Química, Geografía y Biología del IFMT campus Várzea Grande, y fue diseñada con el
            objetivo de contribuir a su integración, posibilitando una lectura amplia de la realidad y
            el desarrollo de actitudes de respeto por el medio ambiente relacionadas con el bioma
            Cerrado y en el contexto de crecimiento urbano, como el complejo tecnológico en la
            ciudad de Várzea Grande y varios proyectos inmobiliarios en la región de Chapéu do El
            Sol y sus males, como la contaminación causada por el sistema de alcantarillado, la
            destrucción del bosque ribereño del río Pari y los impactos ambientales causados por los
            residuos de construcción, desechados indebidamente en el medio ambiente.</p>

            <p className='texts-language'>Por lo tanto, la educación ambiental es una dimensión de la educación, que SDI
            abordó en una perspectiva histórica, articulándola con las dimensiones de trabajo,
            ciencia, tecnología y cultura, ejes rectores de la educación secundaria integrada. Se
            espera que este SDI contribuya a la práctica educativa de los docentes que imparten
            docencia en educación básica, y de quienes deseen adaptarlo para aplicarlo en otras
            modalidades de enseñanza.</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionSpanish;