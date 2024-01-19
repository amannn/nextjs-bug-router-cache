import Link from 'next/link';

export default function Index({params: {locale}}: {params: {locale: string}}) {
  const otherLocale = locale === 'en' ? 'de' : 'en';

  return (
    <>
      <p>Index ({locale})</p>
      <p>
        <Link href="/a">Go to /a</Link>
      </p>
      <p>
        <Link prefetch={false} href={`/?locale=${otherLocale}`}>
          Change locale to "{otherLocale}"
        </Link>
      </p>
    </>
  );
}
