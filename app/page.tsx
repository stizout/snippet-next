import { db } from '@/db';
import Link from 'next/link';

export default async function Home() {
  const snippets = await db.snippet.findMany();
  const rendered = snippets.map((s) => (
    <Link key={s.id} href={`/snippets/${s.id}`} className='flex justify-between items-center border rounded py-4 px-8'>
      <span className='font-bold'>{s.title}</span>
      <span className='text-xl hover:text-blue-500'> View</span>
    </Link>
  ));
  return (
    <div className='h-full w-full container mx-auto'>
      <div className='flex flex-col gap-4'>
        <div className='flex justify-between pt-16'>
          <h1>Snippets</h1>
          <Link className='border rounded px-4 py-2 bg-blue-200 hover:bg-blue-400' href='/snippets/new'>
            Create
          </Link>
        </div>
        {rendered}
      </div>
    </div>
  );
}
