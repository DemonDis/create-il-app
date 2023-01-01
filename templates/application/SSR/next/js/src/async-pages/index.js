// import dynamic from 'next/dynamic';
// const RemoteButton = dynamic(() => import('remote/Button'), {
//   ssr: false,
// });
export default function Home() {
  return (
    <div class="{{CONTAINER}}">
      <div>Name: {{ NAME }}</div>
      <div>Framework: {{ FRAMEWORK }}</div>
      <div>Language: {{ LANGUAGE }}</div>
      <div>CSS: {{ CSS }}</div>
      {/* <RemoteButton /> */}
    </div>
  );
}
