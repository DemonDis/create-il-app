import styles from "~/styles/index.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

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
