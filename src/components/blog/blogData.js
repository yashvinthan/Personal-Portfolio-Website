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
  {
    slug: "my-student-home-lab",
    title: "Building My Home Lab as a Student",
    description: "How I set up Proxmox, OPNsense, and self-hosted services for hands-on learning.",
    content: `
      <p>As a 4th semester Computer Science student, I wanted to go beyond textbooks and assignments. 
      That’s when I started building my own <strong>Home Lab</strong> — a space to experiment with servers, networking, and virtualization.</p>
      
      <h3>The Hardware Setup</h3>
      <p>I used recycled desktops, extra hard drives, a switch, and plenty of cables. It’s not the prettiest, 
      but it works and teaches me real-world system admin skills.</p>
      <img src="/Assets/Blogs/home-lab-setup.jpg" alt="Home Lab Setup" />

      <h3>Virtualization with Proxmox</h3>
      <p>At the heart of my lab is <strong>Proxmox</strong>. I run multiple virtual machines and LXC containers across nodes. 
      For example:</p>
      <ul>
        <li>OPNsense Firewall – for routing and VPNs</li>
        <li>TrueNAS SCALE – for storage</li>
        <li>Nextcloud & Vaultwarden – for cloud & password management</li>
        <li>Grafana & Uptime Kuma – for monitoring</li>
      </ul>
      <img src="/Assets/Blogs/proxmox-dashboard.png" alt="Proxmox Dashboard" />

      <h3>Skills I’m Building</h3>
      <p>Through this lab I’ve learned:</p>
      <ul>
        <li>System Administration with Linux</li>
        <li>Networking & Security (firewalls, VPNs, proxies)</li>
        <li>Self-Hosting services</li>
        <li>Troubleshooting real-world failures</li>
      </ul>

      <h3>What’s Next?</h3>
      <p>I plan to expand my lab with Kubernetes, Ansible automation, and better storage redundancy.</p>
      
      <p>My Home Lab might look messy, but it’s the best classroom I’ve built for myself. 
      If you’re in tech, I highly recommend starting your own!</p>
    `,
    date: "August 30, 2025",
    readTime: "8 min read",
    imgPath: require("../../Assets/Blogs/home-lab-thumbnail.png"),
  },
];

export default blogData;
