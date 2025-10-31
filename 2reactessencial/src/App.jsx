
import componentsImg from "./assets/components.png"
import { CORE_CONCEPTS } from "./data.js"
import CoreConcept from "./components/CoreConcept.jsx"
import ComponenteHeader from "./components/ComponenteHeader.jsx";

function App() {
  return (
    <div>
      <ComponenteHeader />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}/>
            <CoreConcept title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image}/>
            <CoreConcept title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image}/>
            <CoreConcept title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} image={CORE_CONCEPTS[3].image}/>
          </ul>
        </section>

      </main>
    </div>
  );
}

export default App;

// Entender isso depois
// {... CORE_CONCEPTS[0]}
// {... CORE_CONCEPTS[1]}
// {... CORE_CONCEPTS[2]}
// {... CORE_CONCEPTS[3]}
