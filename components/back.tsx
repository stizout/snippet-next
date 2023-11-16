import Link from 'next/link';

interface BackProps {
  route: string;
}

export default function Back({ route }: BackProps) {
  return (
    <Link className='rounded px-3 py-2 bg-blue-200 hover:bg-blue-700 cursor-pointer' href={route}>
      Back
    </Link>
  );
}
