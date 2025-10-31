import reactImg from "../assets/react-core-concepts.png"

// Alternar texto entre Fundamental, Crucial e Core
const reactDescriptions = ["Fundamental", "Crucial", "Core"]

function gerarRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

function ComponenteHeader() {
  const description = reactDescriptions[gerarRandomInt(2)]

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}

export default ComponenteHeader