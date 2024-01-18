import Link from 'next/link';

export default function A({params: {locale}}: {params: {locale: string}}) {
  return (
    <>
      <p>A ({locale})</p>
      <p>
        <Link href="/">Go to /</Link>
      </p>
    </>
  );
}
