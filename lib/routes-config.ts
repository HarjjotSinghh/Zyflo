import { RocketIcon, ComponentIcon } from "lucide-react";
// for page navigation & to sort on leftbar
export const ROUTES = [
    {
        title: "Getting Started",
        href: "getting-started",
        icon: RocketIcon,
        items: [
            { title: "Installation", href: "/installation", description: "Learn how to install Zyflo in your project." },
            { title: "CLI", href: "/command-line-interface", description: "Learn how to use the Zyflo CLI to create a new project." },
        ],
        description: "Learn how to get started with Zyflo and implement it in your project, within a few minutes.",
    },
    {
        title: "Components",
        href: "components",
        icon: ComponentIcon,
        items: [
            { title: "Navbar", href: "/navbar", description: "Learn how to use the Zyflo Navbar component to create a responsive and customizable navigation bar." },
            { title: "Alert", href: "/alert", description: "Learn how to use the Zyflo Alert component to create a visually appealing and informative alert box." },
            { title: "Badge", href: "/badge", description: "Learn how to use the Zyflo Badge component to create a customizable badge." },
        ],
        description: "Explore the various components available in Zyflo and learn how to use them in your project.",
    }
];

export const page_routes = ROUTES.map(({ href, items }) => {
    return items.map((link) => {
        return {
            title: link.title,
            href: href + link.href,
            descritpion: link.description,
        };
    });
}).flat();