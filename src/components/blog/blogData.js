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
  description: "How I set up Proxmox, OPNsense, and self-hosted services to learn real-world computing as a Computer Science student.",
  content: `
    <p>As a 4th semester Computer Science student, I wanted to go beyond textbooks and assignments. 
    That’s when I started building my own <strong>Home Lab</strong> — a dedicated space to experiment with servers, networking, and virtualization. 
    This blog shares the journey, tools, and lessons I’ve learned along the way.</p>

    <h3>Why Build a Home Lab?</h3>
    <p>A home lab is more than just a pile of hardware — it’s a personal playground where you can learn skills 
    that universities often don’t cover deeply:</p>
    <ul>
      <li><strong>Virtualization</strong> – Run multiple servers on limited hardware.</li>
      <li><strong>Networking & Security</strong> – Play with firewalls, VPNs, VLANs, and reverse proxies.</li>
      <li><strong>System Administration</strong> – Configure Linux/Windows, manage storage, and troubleshoot issues.</li>
      <li><strong>Self-Hosting</strong> – Deploy apps you normally rely on cloud providers for.</li>
    </ul>

    <h3>The Hardware Setup</h3>
    <p>I didn’t buy shiny enterprise gear. Instead, I repurposed old desktops and parts to assemble my lab. 
    Here’s what I currently run:</p>
    <ul>
      <li>Multiple desktops repurposed as servers.</li>
      <li>Extra hard drives for storage experiments.</li>
      <li>Network switch + power strips for connectivity.</li>
      <li>Plenty of cables (yes, cable management is still on my TODO list 😅).</li>
    </ul>
    <img src="/Assets/Blogs/home-lab-setup.jpg" alt="My Home Lab Setup" />

    <h3>Virtualization with Proxmox</h3>
    <p>At the core of my home lab is <strong>Proxmox Virtual Environment</strong>. 
    It lets me manage virtual machines (VMs) and LXC containers across nodes in a cluster. 
    Here’s a look at my dashboard:</p>
    <img src="/Assets/Blogs/proxmox-dashboard.png" alt="Proxmox Dashboard" />

    <p>Currently, my Proxmox cluster runs across four nodes: <em>fino</em>, <em>lex</em>, <em>luffy</em>, and <em>nuts</em>. 
    Together they host a variety of services:</p>
    <ul>
      <li><strong>OPNsense Firewall</strong> – routing, VPN tunneling, VLANs.</li>
      <li><strong>TrueNAS SCALE</strong> – network-attached storage.</li>
      <li><strong>Nextcloud & Vaultwarden</strong> – personal cloud + password manager.</li>
      <li><strong>Grafana & Uptime Kuma</strong> – monitoring + uptime tracking.</li>
      <li><strong>Nginx Proxy Manager & Cloudflared</strong> – secure exposure of apps.</li>
      <li><strong>UmbrelOS & qBittorrent</strong> – extra apps and personal projects.</li>
    </ul>

    <h3>Networking & Security</h3>
    <p>One of the most valuable parts of my lab has been learning networking hands-on. 
    I configured OPNsense for firewall rules, experimented with VPNs, 
    and used reverse proxies to securely route traffic. 
    By connecting everything through <strong>Cloudflare Tunnels</strong>, I can expose apps safely without a static IP.</p>

    <h3>Skills I’m Building</h3>
    <p>This lab is my best teacher. So far, I’ve gained experience with:</p>
    <ul>
      <li>Linux server administration and package management.</li>
      <li>Virtualization and resource allocation.</li>
      <li>Networking protocols, VPNs, and firewalls.</li>
      <li>Deploying and maintaining self-hosted services.</li>
      <li>Troubleshooting real-world failures (failed VMs, storage issues, misconfigured firewalls).</li>
    </ul>

    <h3>Projects I’ve Deployed</h3>
    <ul>
      <li>A self-hosted <strong>portfolio website</strong> accessible via custom domain.</li>
      <li><strong>IoT device integrations</strong> tested against local APIs.</li>
      <li><strong>Monitoring dashboards</strong> with Grafana.</li>
      <li><strong>Secure storage & backups</strong> using TrueNAS.</li>
    </ul>

    <h3>What’s Next?</h3>
    <p>This setup is just the beginning. My roadmap includes:</p>
    <ul>
      <li>Container orchestration with Kubernetes or Docker Swarm.</li>
      <li>Infrastructure automation with Ansible.</li>
      <li>Setting up RAID for redundancy and improved storage performance.</li>
      <li>Improving cable management (seriously, it needs it).</li>
    </ul>

    <h3>Final Thoughts</h3>
    <p>My home lab may look messy, but it’s the best classroom I could have built for myself. 
    Every VM, container, and firewall rule teaches me something new. 
    For students or beginners in tech, I strongly recommend starting small. 
    Even one old PC and open-source software like Proxmox is enough to open the door to real-world computing.</p>
  `,
  date: "August 30, 2025",
  readTime: "10 min read",
  imgPath: require("../../Assets/Blogs/home-lab-thumbnail.png"),
},
];

export default blogData;
