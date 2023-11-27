import Back from '@/components/back';
import { db } from '@/db';
import TextArea from '@/components/customTextArea';

interface SnippetProps {
  params: {
    id: string;
  };
}

export default async function Edit({ params }: SnippetProps) {
  const snippet = await db.snippet.findFirst({
    where: {
      id: +params.id,
    },
  });

  return (
    <div className="px-10 w-full lg:px-0 lg:w-1/2 mx-auto pt-32">
      <div className="flex justify-start">
        <Back route="/" />
      </div>
      <h3 className="font-bold m-3">Editting Snippet</h3>
      <div className="flex flex-col gap-4">
        <h1>{snippet?.title}</h1>
        <TextArea snippet={snippet} />
      </div>
    </div>
  );
}
