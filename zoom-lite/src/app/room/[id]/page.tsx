
export default function page({ params }: { params: { id: string } }) {
  return <div>ID: {params.id}</div>;
}
