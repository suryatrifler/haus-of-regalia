import Image from "next/image";
import Link from "next/link";

type Props = {
  id: string;
  title: string;
  image: string;
};

export default function SelectedProjectCard({ id, title, image }: Props) {
  return (
    <Link href={`/portfolio/${id}`} className="block">
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="object-cover"
      />

      <p className="mt-4 text-sm">{title}</p>
    </Link>
  );
}
