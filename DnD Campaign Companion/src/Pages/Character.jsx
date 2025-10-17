import CharacterGenerator from "../Components/CharectarGenerator.jsx";

export default function Characters() {
  return (
    <section className="page">
      <h1 className="page-title">Character Creator</h1>
      <p className="lead">
        Describe your hero and generate their portrait using AI.
      </p>

      <CharacterGenerator />
    </section>
  );
}
