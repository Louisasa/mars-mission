import "./FunFact.scss";

export default function FunFactEnv(props: any) {
  return (
    <body>
      {props.env.facts.map((fact: any) => (
        <div className="card-container">
          <div className="fact-container">
            <p className="title">{fact.title} </p>
            <img src={fact.image} alt="fact image" />
            <p className="content">{fact.content} </p>
          </div>
        </div>
      ))}
    </body>
  );
}
