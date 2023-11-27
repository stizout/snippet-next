'use server';

import { db } from '@/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function deleteSnippet(id: number) {
  await db.snippet.delete({ where: { id } });
  revalidatePath('/');
  redirect('/');
}

export const createSnippet = async (formData: FormData) => {
  const title = formData.get('title') as string;
  const code = formData.get('code') as string;
  await db.snippet.create({
    data: {
      title,
      code,
    },
  });
  revalidatePath('/');
  redirect('/');
};
