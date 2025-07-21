// components/blogData.js
const blogData = [
  {
    slug: "how-i-built-my-portfolio",
    title: "How I Built My Portfolio",
    description: "How I designed, developed, and deployed my portfolio website.",
    content: `
      <p>This is a sample blog post written in HTML format. You can replace this with your real content or markdown later.</p>
      <ul>
        <li>React & Bootstrap</li>
        <li>Routing with React Router</li>
        <li>Hosting on GitHub Pages</li>
      </ul>
    `,
    date: "July 20, 2025",
    readTime: "4 min read",
    imgPath: require("../../Assets/Blogs/blog1-thumbnail.png"),
  },
  {
    slug: "getting-started-with-react",
    title: "Getting Started with React.js",
    description: "A beginner-friendly intro to components, props, and state.",
    content: `
      <p>This blog covers the fundamentals of React for new developers.</p>
      <p>It includes components, props, JSX, and tips to build your first app.</p>
    `,
    date: "June 30, 2025",
    readTime: "6 min read",
    imgPath: require("../../Assets/Blogs/blog2-thumbnail.png"),
  },
];

export default blogData;
