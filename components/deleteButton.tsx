'use client';

interface DeleteButtonProps {
  onClick: Function;
  id: string;
}

export default function DeleteButton({ onClick, id }: DeleteButtonProps) {
  const handleOnClick = async () => {
    return onClick(+id);
  };
  return (
    <div className='border rounded bg-red-100 hover:bg-red-300 px-4 py-2' onClick={() => handleOnClick()}>
      Delete
    </div>
  );
}
