import path from "path";
import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import { MDXComponents } from "@/components/mdx/mdx-components";
import { ReactElement } from "react";

const PATH_T0_EVENTS = "src/contents/events";

export type EventData = {
  title: string;
  id: string;
  image: string;
  content: ReactElement;
  category?: string[];
};

export const getAllEvents = async (): Promise<Array<EventData>> => {
  try {
    const fullPath = path.join(process.cwd(), PATH_T0_EVENTS);
    const files = fs
      .readdirSync(fullPath)
      ?.filter((file) => file.endsWith(".mdx"));
    if (!files || files?.length === 0) {
      return [];
    }

    const events = await Promise.all(
      files.map(async (file) => {
        const source = fs.readFileSync(path.join(fullPath, file), "utf-8");
        const { frontmatter, content } = await compileMDX<EventData>({
          source: source,
          // @ts-expect-error error
          components: MDXComponents,
          options: {
            parseFrontmatter: true,
          },
        });

        return {
          image: frontmatter.image,
          title: frontmatter.title,
          id: frontmatter.id,
          content: content,
          category: frontmatter.category,
        };
      })
    );

    // sort events by name
    return events.sort((a, b) => a.title.localeCompare(b.title));
  } catch (error) {
    console.log(error);
    return [];
  }
};
