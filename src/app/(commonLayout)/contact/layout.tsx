export default function ContactPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>
    <h1 className="text-red-300">This is contact page layout</h1>
    {children}</div>;
}
