import { db } from '@/db';
import { redirect } from 'next/navigation';

export default function SnippetCreate() {
  const createSnippet = async (formData: FormData) => {
    'use server';
    const title = formData.get('title') as string;
    const code = formData.get('code') as string;
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    console.log(snippet);
    redirect('/');
  };
  return (
    <div>
      <form className='' action={createSnippet}>
        <h3 className='font-bold m-3'>Create a snippet</h3>
        <div className='flex flex-col gap-4'>
          <div className='flex'>
            <label className='w-12' htmlFor='title'>
              Title
            </label>
            <input name='title' className='border rounded p-2 w-full' />
          </div>
          <div className='flex'>
            <label className='w-12' htmlFor='code'>
              Code
            </label>
            <textarea name='code' className='border rounded p-2 w-full' />
          </div>
          <button type='submit' className='rounded p-2 bg-blue-200'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
