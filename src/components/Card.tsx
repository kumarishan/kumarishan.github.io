import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";

export interface CardFrontmatter {
  title: string;
  pubDatetime: Date;
  modDatetime?: Date | null;
  description: string;
}

export interface Props {
  href: string;
  frontmatter: CardFrontmatter;
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, modDatetime, description } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-medium decoration-dashed hover:underline",
  };

  return (
    <li className="my-6 rounded-lg border border-skin-line bg-skin-card/40 px-5 py-5 transition-colors hover:bg-skin-card/70">
      <a
        href={href}
        className="inline-block decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        {secHeading ? (
          <h2 {...headerProps}>{title}</h2>
        ) : (
          <h3 {...headerProps}>{title}</h3>
        )}
      </a>
      <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} />
      <p className="mt-3 text-[0.98rem] leading-7 text-skin-base/80">
        {description}
      </p>
    </li>
  );
}
