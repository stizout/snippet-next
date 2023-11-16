import Back from '@/components/back';
import { db } from '@/db';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import DeleteButton from '@/components/deleteButton';
import { deleteSnippet } from '@/actions';

interface SnippetProps {
  params: {
    id: string;
  };
}

export default async function Snippet({ params }: SnippetProps) {
  const snippet = await db.snippet.findFirst({
    where: {
      id: +params.id,
    },
  });

  if (!snippet) return notFound();
  return (
    <div className='h-full container flex flex-col items-center pt-40 mx-auto'>
      <div className='w-full flex justify-start'>
        <Back route='/' />
      </div>
      <div className='flex justify-between w-1/2 mb-4'>
        <h1>{snippet?.title}</h1>
        <div className='flex items-center gap-4'>
          <Link href={`/edit/${snippet.id}`} className='border rounded bg-green-100 hover:bg-green-300 px-4 py-2'>
            Edit
          </Link>
          <DeleteButton onClick={deleteSnippet} id={params.id} />
        </div>
      </div>
      <pre className='rounded bg-gray-200 p-4 w-1/2'>
        <code>{snippet?.code}</code>
      </pre>
    </div>
  );
}
