import { ChangeEvent, useEffect, useState } from "react";

function Dashboard() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [tab, setTab] = useState([]);

  const nomComplet = nom + "Rakoto";

  function handleName(e: ChangeEvent<HTMLInputElement>) {
    setNom(e.target.value);
    handleTab()
  }

  function handleFirstName(e: ChangeEvent<HTMLInputElement>) {
    setPrenom(e.target.value);
    handleTab()
  }

  function handleTab() {
    // setTab(currentValue => [...currentValue, nom, prenom]);
  }

  useEffect(() =>{
    // setNomComplet(nom + prenom)
  }, [nom, prenom])

  console.log("Dashboard");

  return (
    <div>
      <input type="text" placeholder="nom" onChange={handleName} />
      <input type="text" placeholder="prénom" onChange={handleFirstName} />
      <h1>{nom}</h1>
      <h1>{nomComplet}</h1>
    </div>
  );
}

export default Dashboard;
