export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60961527280e71ac51d5f100",
                  title: "Sanity Studio",
                  name: "prunedge-gatsby-blog-studio",
                  apiId: "ace8eab5-585a-4a61-ad5f-d2b72777305e",
                },
                {
                  buildHookId: "609615277148d39fcf8a37ae",
                  title: "Blog Website",
                  name: "prunedge-gatsby-blog",
                  apiId: "ff477d0a-cd58-430c-a3f6-ea0fe5686dcb",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/profmcdan/prunedge-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://prunedge-gatsby-blog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
