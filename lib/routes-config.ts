// for page navigation & to sort on leftbar
export const ROUTES = [
    {
        title: "Getting Started",
        href: "getting-started",
        items: [
            { title: "Introduction", href: "/introduction" },
            { title: "Installation", href: "/installation" },
            { title: "CLI", href: "/command-line-interface" },
        ],
    },
    {
        title: "Components",
        href: "components",
        items: [
            { title: "Navbar", href: "/navbar" },
            { title: "Drawer", href: "/drawer" },
            { title: "Alert", href: "/alert" },
        ],
    }
];

export const page_routes = ROUTES.map(({ href, items }) => {
    return items.map((link) => {
        return {
            title: link.title,
            href: href + link.href,
        };
    });
}).flat();