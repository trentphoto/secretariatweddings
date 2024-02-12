import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const portfolioDirectory = path.join(process.cwd(), 'content/portfolio');

export function getSortedPortfolioData() {
  // Get file names under /portfolio
  const fileNames = fs.readdirSync(portfolioDirectory);

  const portfolioItems = fileNames
    .map((fileName) => {
      // Read markdown file as string
      const markdownWithMeta = fs.readFileSync(
        path.join(portfolioDirectory, fileName),
        'utf8'
      );

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(markdownWithMeta);

      const portfolios = {
        content: matterResult.content,
        date: matterResult.data.date,
        slug: matterResult.data.slug,
        name: matterResult.data.name,
        location: matterResult.data.location,
        image: matterResult.data.image,
        category: matterResult.data.category,
        // ...matterResult.data
      };

      return portfolios;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return portfolioItems;
}
