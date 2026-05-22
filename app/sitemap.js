export const dynamic = 'force-static';

export default function sitemap() {
    return [
        {
            url: "https://www.linq-corporate.com/",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: "https://www.linq-corporate.com/about-us",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.linq-corporate.com/view-our-team",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: "https://www.linq-corporate.com/career-growth",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
    ];
}