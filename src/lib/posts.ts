import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';


const postsDirectory = path.join(process.cwd(), 'content/posts');

export function getSortedPostsData() {

  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames.map((fileName) => {

    // Read markdown file as string
    const markdownWithMeta = fs.readFileSync(
      path.join(postsDirectory, fileName),
      'utf8'
      );

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(markdownWithMeta);

    const posts = {
      content: matterResult.content,
      date: matterResult.data.date,
      slug: matterResult.data.slug,
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      image: matterResult.data.image,
      // ...matterResult.data
    }
    
    return posts;

  }).sort((a, b) => (
    new Date(b.date).getTime() - new Date(a.date).getTime()
  ));

  return posts;
}