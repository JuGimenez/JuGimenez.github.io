import Accordion from 'react-bootstrap/Accordion';
import '../../CContainer.css'

function AccordionEnglish() {
  return (
    <Accordion alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Presentation</Accordion.Header>
        <Accordion.Body>
            <p className='texts-language'>This Educational Product produced as an Interdisciplinary Didactic Sequence
        (SDI) entitled: “Cerrado: Ecological Trail – know to conserve” is linked to the research:
        Ecological Trail with the use of the Bicycle as an Interdisciplinary Pedagogical Practice
        for Integrated High School”, being a research product of the Master's Program in
        Professional and Technological Education (ProfEPT) under the guidance of Professor
        Cristiano Rocha da Cunha.</p>
        
        <p className='texts-language'>With the aim of presenting a proposal for teaching a didactic sequence, it
        addresses the importance of the educational role of field classes, with the use of
        bicycles, with a view to reflecting on Integrated Secondary Education (EMI) students
        for the development of behavior in conscious and ethical critical environmental
        education. The EAC defends, among other points, reflection on the consumer society,
        the capitalist mode of production and the political and economic aspects that influence
        the environmental issue.</p>

        <p className='texts-language'>In the conception of Zabala (1998) a DS consists of “a set of ordered, structured,
        articulated activities for the realization of certain educational objectives and which has a
        beginning and an end known both by the teacher and by the students.”</p>

        <p className='texts-language'>Field activities constitute a strategy to relate theory to practice, serving as
        support for teaching work and helping students to concretely perceive non-formal
        teaching spaces. In the observation of Krasilchik (2016, p. 134), “visits to markets,
        farms, treatment stations and factories can teach students things that would be very
        difficult for them to learn when confined to the school environment”.</p>

        <p className='texts-language'>This interdisciplinary didactic sequence (SDI), comprises the integrated high
        school course in Buildings in the subjects of the common core of: Chemistry,
        Geography and Biology at the IFMT campus Várzea Grande, and was designed with the
        aim of contributing to their integration, enabling a broad reading of reality and the
        development of attitudes of respect for the environment related to the Cerrado biome
        and within the context of urban growth, such as the technological complex in the city of
        Várzea Grande and several real estate projects in the region of Chapéu do Sol and its
        ills, such as pollution caused by the sewage system, destruction of the riparian forest of
        the Pari River and the environmental impacts caused by construction waste, improperly
        disposed of in the environment.</p>

        <p className='texts-language'>Therefore, environmental education is a dimension of education, which SDI
        dealt with in a historical perspective, articulating it with the dimensions of work,
        science, technology and culture, guiding axes of integrated secondary education. It is
        expected that this SDI will contribute to the educational practice of teachers who teach
        in basic education, and for those who wish to adapt it to apply in other teaching
        modalities.</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionEnglish;