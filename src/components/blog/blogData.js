// blogData.js

// ✅ Imports for thumbnails and blog images
import blog1Thumb from "../../Assets/Blogs/blog1-thumbnail.png";
import blog2Thumb from "../../Assets/Blogs/blog2-thumbnail.png";
import homeLabThumb from "../../Assets/Blogs/home-lab-thumbnail.png";

// Home Lab screenshots
import homeLabSetup from "../../Assets/Blogs/home-lab-setup.jpg";
import homeLabSetup1 from "../../Assets/Blogs/home-lab-setup1.jpg";
import proxmoxDashboard from "../../Assets/Blogs/proxmox-dashboard.png";

// Portfolio screenshots
import pfReadme from "../../Assets/Blogs/readme-img.png";
import pfResponsive from "../../Assets/Blogs/Untitled design (11).png";

const blogData = [
  {
    slug: "how-i-built-my-portfolio",
    title: "How I Built My Portfolio",
    description:
      "Design → React → GitHub Pages: how I planned, built, and deployed my portfolio site with a blog system.",
    content: `
      <p>I wanted a portfolio that looks clean, loads fast, and is easy to extend. 
    This post covers the stack I chose (React + React Bootstrap + React Router), 
    how I structured components, how the blog system works with <code>blogData.js</code>, 
    and how I self-hosted it on my <strong>Proxmox</strong> server with PM2 and Nginx Proxy Manager.</p>

    <h3>Responsive Design</h3>
    <p>The site had to work across devices — from phones to desktops.</p>
    <img src="${pfResponsive}" alt="Responsive mockup of portfolio" />

    <h3>Homepage Layout</h3>
    <p>I kept the homepage simple: an intro, role, navigation, and a hero illustration. 
    This balances personality and professionalism.</p>
    <img src="${pfReadme}" alt="Portfolio homepage screenshot" />

    <h3>Stack & Features</h3>
    <ul>
      <li><strong>React</strong> for components and routing</li>
      <li><strong>React Bootstrap</strong> for responsive UI</li>
      <li><strong>React Router</strong> for pages (Home, Projects, Blog)</li>
      <li><strong>Blog system</strong> powered by <code>blogData.js</code> with image imports</li>
    </ul>

    <h3>Self-Hosting on Proxmox</h3>
    <p>Instead of deploying to GitHub Pages, I run the portfolio inside my Proxmox cluster. 
    I used a lightweight VM with Node.js and PM2 to keep the process alive. 
    Traffic is routed through Nginx Proxy Manager + Cloudflare Tunnel for HTTPS.</p>

    <h4>Deployment Steps</h4>
    <pre><code># Navigate to project folder
cd ~/Personal-Portfolio-Website

# Install dependencies (if needed)
npm install

# Build the React app
npm run build

# Serve on port 3000 using PM2
pm2 start npx --name portfolio -- serve -s build -l 3000

# Save PM2 process list
pm2 save

# Enable PM2 auto-start on reboot
pm2 startup
</code></pre>

    <p>This ensures the portfolio survives reboots and is always running. 
    Updating is as simple as:</p>

    <pre><code>git pull
npm run build
pm2 restart portfolio</code></pre>

    <h3>Reverse Proxy + SSL</h3>
    <p>I mapped <code>portfolio.mydomain.com</code> through Nginx Proxy Manager 
    to the VM’s port 3000. Cloudflare Tunnel provides a secure path without exposing my home IP. 
    SSL certificates are handled automatically by Cloudflare.</p>

    <h3>What I’d Add Next</h3>
    <ul>
      <li>CI/CD script for one-click deploy</li>
      <li>MD/MDX pipeline for blog posts</li>
      <li>Light/dark theme toggle</li>
    </ul>

    <p>End result: a fast, secure portfolio hosted entirely on my own Proxmox infrastructure, 
    with reverse proxy, HTTPS, and PM2 keeping it online.</p>
    `,
    date: "July 20, 2025",
    readTime: "6 min read",
    imgPath: blog1Thumb,
  },
 
  {
    slug: "my-student-home-lab",
    title: "Building My Home Lab as a Student",
    description:
      "How I set up Proxmox, OPNsense, and self-hosted services to learn real-world computing as a Computer Science student.",
    content: `
      <p>As a 4th semester Computer Science student, I wanted to go beyond textbooks and assignments. 
      That’s when I started building my own <strong>Home Lab</strong> — a dedicated space to experiment with servers, networking, and virtualization. 
      This blog shares the journey, tools, and lessons I’ve learned along the way.</p>

      <h3>The Hardware Setup</h3>
      <p>I didn’t buy shiny enterprise gear. Instead, I repurposed old desktops and parts to assemble my lab. 
      Here’s what I currently run:</p>
      <ul>
        <li>Multiple desktops repurposed as servers</li>
        <li>Extra hard drives for storage experiments</li>
        <li>Network switch + power strips for connectivity</li>
        <li>Plenty of cables (yes, cable management is still on my TODO list 😅)</li>
      </ul>
      <img src="${homeLabSetup}" alt="My Home Lab Setup" />
      <img src="${homeLabSetup1}" alt="My Home Lab Setup 2" />

      <h3>Virtualization with Proxmox</h3>
      <p>At the core of my home lab is <strong>Proxmox Virtual Environment</strong>. 
      It lets me manage virtual machines (VMs) and LXC containers across nodes in a cluster. 
      Here’s a look at my dashboard:</p>
      <img src="${proxmoxDashboard}" alt="Proxmox Dashboard" />

      <h3>Skills I’m Building</h3>
      <ul>
        <li>Linux server administration and package management</li>
        <li>Virtualization and resource allocation</li>
        <li>Networking protocols, VPNs, and firewalls</li>
        <li>Deploying and maintaining self-hosted services</li>
        <li>Troubleshooting real-world failures (failed VMs, storage issues, misconfigured firewalls)</li>
      </ul>

      <h3>What’s Next?</h3>
      <ul>
        <li>Container orchestration with Kubernetes or Docker Swarm</li>
        <li>Infrastructure automation with Ansible</li>
        <li>Setting up RAID for redundancy</li>
        <li>Improving cable management</li>
      </ul>

      <p>My home lab may look messy, but it’s the best classroom I could have built for myself. 
      For students or beginners in tech, I strongly recommend starting small. 
      Even one old PC and open-source software like Proxmox is enough to open the door to real-world computing.</p>
    `,
    date: "August 30, 2025",
    readTime: "10 min read",
    imgPath: homeLabThumb,
  },
];

export default blogData;
