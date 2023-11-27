import { createSnippet } from '@/actions';
import Back from '@/components/back';

export default function SnippetCreate() {
  return (
    <div className="px-10 w-full lg:px-0 lg:w-1/2 mx-auto pt-32">
      <div className="flex justify-start">
        <Back route="/" />
      </div>
      <form className="" action={createSnippet}>
        <h3 className="font-bold m-3">Create a snippet</h3>
        <div className="flex flex-col gap-4">
          <div className="flex">
            <label className="w-12" htmlFor="title">
              Title
            </label>
            <input name="title" className="border rounded p-2 w-full" />
          </div>
          <div className="flex">
            <label className="w-12" htmlFor="code">
              Code
            </label>
            <textarea name="code" className="border rounded p-2 w-full" />
          </div>
          <button type="submit" className="rounded p-2 bg-blue-200">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
