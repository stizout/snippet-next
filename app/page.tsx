import { db } from '@/db';

export default async function Home() {
  const snippets = await db.snippet.findMany();
  const rendered = snippets.map((s) => <div key={s.id}>{s.title}</div>);
  return <div>{rendered}</div>;
}
