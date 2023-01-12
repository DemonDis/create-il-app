import styles from "../../src/styles/index.css";

export default function Index() {
  return (
    <div className="{{CONTAINER}}">
      <div>Name: {{ NAME }}</div>
      <div>Tools build: {{ TOOLSBUILD }}</div>
      <div>Type: {{ TYPEWEB }}</div>
      <div>Framework: {{ FRAMEWORK }}</div>
      <div>Language: {{ LANGUAGE }}</div>
      <div>CSS: {{ CSS }}</div>
    </div>
  );
}
