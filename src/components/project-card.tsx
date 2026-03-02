import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
  projectPage?: string;
}

export function ProjectCard({ title, description, tags, link, projectPage }: Props) {
  const titleNode = projectPage ? (
    <Link
      href={projectPage}
      className="inline-flex items-center gap-1 hover:underline"
    >
      {title}{" "}
      <span className="size-1 rounded-full bg-teal-500"></span>
    </Link>
  ) : link ? (
    <a
      href={link}
      target="_blank"
      className="inline-flex items-center gap-1 hover:underline"
    >
      {title}{" "}
      <span className="size-1 rounded-full bg-green-500"></span>
    </a>
  ) : (
    title
  );

  return (
    <Card className="flex flex-col overflow-hidden border border-muted p-3 transition-shadow duration-200 hover:shadow-md">
      <CardHeader className="">
        <div className="space-y-1">
          <CardTitle className="text-base">{titleNode}</CardTitle>
          <div className="hidden font-mono text-xs underline print:visible">
            {(projectPage ?? link)
              ?.replace("https://", "")
              .replace("www.", "")
              .replace("/", "")}
          </div>
          <CardDescription className="font-mono text-xs">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col gap-2">
        <div className="mt-2 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              className="px-1 py-0 text-[10px]"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
        {projectPage && link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] text-muted-foreground hover:text-teal-600 hover:underline"
          >
            GitHub ↗
          </a>
        )}
      </CardContent>
    </Card>
  );
}
