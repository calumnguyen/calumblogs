import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";

export const revalidate = 60;
export const dynamic = 'force-dynamic';

interface Props {
	params: Promise<{
		slug: string;
	}>;
}

export function generateStaticParams(): { slug: string }[] {
	return allProjects
		.filter((p) => p.published)
		.map((p) => ({
			slug: p.slug,
		}));
}

export default async function PostPage({ params }: Props): Promise<React.JSX.Element> {
	const { slug } = await params;
	const project = allProjects.find((project) => project.slug === slug);

	if (!project) {
		notFound();
	}

	// For now, we'll use 0 views since we don't have Redis set up
	const views = 0;

	return (
		<div className="min-h-screen" style={{ backgroundColor: '#fafafa' }}>
			<Header project={project} views={views} />
			<ReportView slug={project.slug} />

			<article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless max-w-2xl prose-headings:text-black prose-p:text-black prose-li:text-black prose-strong:text-black prose-a:text-black">
				<Mdx code={project.body.code} />
			</article>
		</div>
	);
}

