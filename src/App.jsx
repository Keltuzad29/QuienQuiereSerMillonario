import { useEffect, useMemo, useState } from "react";
import "./app.css";
import { Timer } from "./components/Timer";
import Trivia from "./components/Trivia";
import  Start  from "./components/Start";

function App() {

  const [userName, setUserName] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");
  const data = [
    {
      id: 1,  
      question: "Rolex es una compañia especializada en que tipo de productos?",
      answers: [
        {
          text: "Telefonos",
          correct: false,
        },
        {
          text: "Relojes",
          correct: true,
        },
        {
          text: "Comida",
          correct: false,
        },
        {
          text: "Cosmeticos",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Cuando fue lanzada al Mercado Facebook?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Que actor caracteriza a Harry Potter en las Peliculas?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Como se llamaba el dragon de Rubeus Hagrid en Harry Potter?",
      answers: [
        {
          text: "Alberto",
          correct: false,
        },
        {
          text: "Finnias",
          correct: false,
        },
        {
          text: "Norberto",
          correct: true,
        },
        {
          text: "Gilberto",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "En que Pais Se Origino el Coronavirus?",
      answers: [
        {
          text: "China",
          correct: true,
        },
        {
          text: "Colombia",
          correct: false,
        },
        {
          text: "España",
          correct: false,
        },
        {
          text: "Rusia",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Como se llamaba el Mejor Amigo de Naruto?",
      answers: [
        {
          text: "Kakashi",
          correct: false,
        },
        {
          text: "Gaara",
          correct: false,
        },
        {
          text: "Sasuke",
          correct: true,
        },
        {
          text: "Madara",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Cual es el Rio mas Largo del Mundo?",
      answers: [
        {
          text: "Nilo",
          correct: false,
        },
        {
          text: "Amazonas",
          correct: true,
        },
        {
          text: "Orinoco",
          correct: false,
        },
        {
          text: "Amazono",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Cual de las siguientes no es una de las 7 Maravillas del Mundo?",
      answers: [
        {
          text: "La Torre Eifel",
          correct: true,
        },
        {
          text: "El Cristo Redentor",
          correct: false,
        },
        {
          text: "La Muralla China",
          correct: false,
        },
        {
          text: "El Coliseo de Roma",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Cuantos Lados Tiene un Heptagono?",
      answers: [
        {
          text: "Cinco Lados",
          correct: false,
        },
        {
          text: "Ocho Lados",
          correct: false,
        },
        {
          text: "Siete Lados",
          correct: true,
        },
        {
          text: "Doce Lados",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Cual es el Planeta mas grande del Sistema Solar?",
      answers: [
        {
          text: "Urano",
          correct: false,
        },
        {
          text: "Mengano",
          correct: false,
        },
        {
          text: "Saturno",
          correct: false,
        },
        {
          text: "Júpiter",
          correct: true,
        },
      ],
    },
    {
      id: 11,
      question: "Cuales Son los Unicos Mamiferos que Pueden Volar?",
      answers: [
        {
          text: "Los Lemures",
          correct: false,
        },
        {
          text: "Los Murcielagos",
          correct: true,
        },
        {
          text: "Los Ornitorrincos",
          correct: false,
        },
        {
          text: "Los Cerdos",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Cuantas Esposas ha Tenido Homero Simpsons?",
      answers: [
        {
          text: "2 Esposas",
          correct: true,
        },
        {
          text: "3 Esposas",
          correct: false,
        },
        {
          text: "1 Esposa",
          correct: false,
        },
        {
          text: "4 Esposas",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Que Gas Liberan las Plantas al Hacer Fotosintesis?",
      answers: [
        {
          text: "Oxigeno",
          correct: true,
        },
        {
          text: "CO2",
          correct: false,
        },
        {
          text: "Hidrogeno",
          correct: false,
        },
        {
          text: "Pimienta",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Cuantos Dias tiene un Año Bisiesto?",
      answers: [
        {
          text: "364 Dias",
          correct: false,
        },
        {
          text: "367 Dias",
          correct: false,
        },
        {
          text: "366 Dias",
          correct: true,
        },
        {
          text: "365 Dias",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Quien es el Fundador de Facebook?",
      answers: [
        {
          text: "Albert Einstein",
          correct: false,
        },
        {
          text: "Mark Zuckerberg",
          correct: true,
        },
        {
          text: "Bill Gates",
          correct: false,
        },
        {
          text: "Stephen Hawking",
          correct: false,
        },
      ],
    },
    {
      id: 16,
      question: "Cuales son los tres colores primarios?",
      answers: [
        {
          text: "Amarillo, Azul y Rojo",
          correct: true,
        },
        {
          text: "Negro, Blanco y Gris",
          correct: false,
        },
        {
          text: "Verde, Naranja y Violeta",
          correct: false,
        },
        {
          text: "Cyan, Magenta, y Amarillo",
          correct: false,
        },
      ],
    },
    {
      id: 17,
      question: "Cual es el Libro mas vendido de la Historia",
      answers: [
        {
          text: "Cincuenta Sombras de Gray",
          correct: false,
        },
        {
          text: "Don Quijote de la Mancha",
          correct: false,
        },
        {
          text: "Cien Años de Soledad",
          correct: false,
        },
        {
          text: "La Biblia",
          correct: true,
        },
      ],
    },
    {
      id: 18,
      question: "Cual ha sido el Futbolista mas Caro de la Historia?",
      answers: [
        {
          text: "Neymar",
          correct: true,
        },
        {
          text: "Messi",
          correct: false,
        },
        {
          text: "Cristiano Ronaldo",
          correct: false,
        },
        {
          text: "Ronaldo",
          correct: false,
        },
      ],
    },
    {
      id: 19,
      question: "Cuantos Corazones Tiene un Pulpo?",
      answers: [
        {
          text: "Ocho Corazones",
          correct: false,
        },
        {
          text: "Tres Corazones",
          correct: true,
        },
        {
          text: "Un Corazon",
          correct: false,
        },
        {
          text: "Cuatro Corazones",
          correct: false,
        },
      ],
    },
    {
      id: 20,
      question: "Quien Postulo Las Leyes del Movimiento?",
      answers: [
        {
          text: "Isaac Newton",
          correct: true,
        },
        {
          text: "Albert Einstein",
          correct: false,
        },
        {
          text: "Leonardo Davinci",
          correct: false,
        },
        {
          text: "Nicolas Copernico",
          correct: false,
        },
      ],
    },
  ];
  
  const moneyPyramid = useMemo(() =>
    [
      { id: 1, amount: "$ 100.000" },
      { id: 2, amount: "$ 200.000" },
      { id: 3, amount: "$ 300.000" },
      { id: 4, amount: "$ 500.000" },
      { id: 5, amount: "$ 1.000.000" },
      { id: 6, amount: "$ 2.000.000" },
      { id: 7, amount: "$ 5.000.000" },
      { id: 8, amount: "$ 8.000.000" },
      { id: 9, amount: "$ 10.000.000" },
      { id: 10, amount: "$ 15.000.000" },
      { id: 11, amount: "$ 20.000.000" },
      { id: 12, amount: "$ 50.000.000" },
      { id: 13, amount: "$ 80.000.000" },
      { id: 14, amount: "$ 100.000.000" },
      { id: 15, amount: "$ 200.000.000" },
      { id: 16, amount: "$ 300.000.000" },
      { id: 17, amount: "$ 400.000.000" },
      { id: 18, amount: "$ 500.000.000" },
      { id: 19, amount: "$ 800.000.000" },
      { id: 20, amount: "$ 1.000.000.000" },
    ].reverse(),
    []
    );
   

  useEffect(()=>{
     questionNumber > 1 &&
      setEarned(moneyPyramid.find((m)=> m.id === questionNumber - 1).amount)
  }, [moneyPyramid, questionNumber]);
 
  const handleClick=()=>{
    window.location.href = window.location.href;
}

  return (
    <div className="app">
      {userName ? (
        <>
      <div className="main">
        {stop ? 
        <>
        <h1 className="endText">{userName} Has Ganado: {earned} </h1>
        <button className="returnButton" onClick={handleClick}>Volver a Intentarlo</button> 
        </>: (
<>
          <div className="top"><h2>
            Esta Jugando {userName}
            </h2>
          <div className="timer"><Timer setStop={setStop} questionNumber={questionNumber}/></div>
        </div>
        <div className="bottom">
          <Trivia
            data={data}
            setStop={setStop}
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
            />
        </div>
        </>
          )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((e) => (
            <li
            className={
                questionNumber === e.id
                  ? "moneyListItem active"
                  : "moneyListItem"
              }
            >
              <span className="moneyListItemNumber">{e.id}</span>
              <span className="moneyListItemAmount">{e.amount}</span>
            </li>
          ))}
        </ul>
      </div>
        </>
      ) : (<Start setUserName={setUserName}/>
      )}
    </div>
  );
}

export default App;
