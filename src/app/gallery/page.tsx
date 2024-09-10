import { Flex } from "@/once-ui/components"; // Import necessary components
import { person } from "../resources"; // Import person if you still need it for author information

export default function ProjectsPage() {
    return (
        <Flex fillWidth>
            {/* If you need structured data for SEO purposes */}
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'CreativeWork', // Updated type to match project showcase
                        name: "My Projects", // Static or dynamic name
                        description: "A collection of my projects and work.",
                        author: {
                            '@type': 'Person',
                            name: person.name,
                            image: {
                                '@type': 'ImageObject',
                                url: `${person.avatar}`,
                            },
                        },
                    }),
                }}
            />
            {/* Content for the page */}
            <div>
                <h1>Welcome to My Projects</h1>
                <p>Here you&apos;ll find a collection of my work and projects.</p>
                {/* Add any other content here, such as a project listing */}
            </div>
        </Flex>
    );
}
