// blogData.js

// ✅ Imports for thumbnails and blog images
import blog1Thumb from "../../Assets/Blogs/blog1-thumbnail.png";
import blog2Thumb from "../../Assets/Blogs/blog2-thumbnail.png";
import mcpN8nThumb from "../../Assets/Blogs/mcp-n8n-thumbnail.png";
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
    slug: "mcp-n8n-automation",
    title: "Using n8n-MCP to Supercharge Claude + n8n",
    description:
      "Documented how I use the open-source n8n-MCP server with Claude Desktop to explore n8n’s node library safely with full docs, guardrails, and quick-start config.",
    content: `
      <p>I wanted my AI automations to be conversational without giving them unrestricted access to n8n. Instead of rolling my own integration, I deploy the excellent open-source <code>n8n-mcp</code> project by <a href="https://github.com/czlonkowski/n8n-mcp" target="_blank" rel="noopener noreferrer">czlonkowski</a>. It’s an MIT-licensed <strong>Model Context Protocol (MCP)</strong> server that equips Claude Desktop and other assistants with deep knowledge of the platform while enforcing strict guardrails.</p>

      <h3>Overview</h3>
      <p>The <code>n8n-mcp</code> package bridges the n8n workflow automation engine with AI tooling in minutes. The maintainer ships a prebuilt dataset with structured coverage of the platform so assistants can answer node questions and suggest automations confidently.</p>
      <ul>
        <li><strong>License:</strong> MIT with public GitHub repository.</li>
        <li><strong>Node coverage:</strong> 536 nodes across <code>n8n-nodes-base</code> and <code>@n8n/n8n-nodes-langchain</code>.</li>
        <li><strong>Node properties:</strong> 99% schema coverage with validation-ready metadata.</li>
        <li><strong>Operations:</strong> 63.6% coverage of documented actions per node.</li>
        <li><strong>Documentation:</strong> 90% ingestion of official n8n docs, including AI-focused nodes.</li>
        <li><strong>AI tooling:</strong> 263 AI-capable nodes flagged with usage notes.</li>
        <li><strong>Examples:</strong> 2,646 real configurations captured from popular templates.</li>
        <li><strong>Template library:</strong> 2,500+ workflows indexed with smart filtering.</li>
      </ul>

      <h3>Safety First</h3>
      <p><strong>Never</strong> ship AI-driven edits straight to production. I ship the server with hard warnings everywhere because AI output always needs validation.</p>
      <ul>
        <li>Duplicate a workflow before letting an assistant modify it.</li>
        <li>Test changes inside a development workspace first.</li>
        <li>Export backups of critical automations.</li>
        <li>Validate and peer review changes before deployment.</li>
      </ul>

      <h3>Quick Start</h3>
      <p>Spin up the server in about five minutes—no install required.</p>
      <pre><code>npx n8n-mcp
</code></pre>
      <p>Claude Desktop picks it up through the MCP configuration file. I keep two presets ready to paste in:</p>
      <h4>Documentation-only tools</h4>
      <pre><code>{
  "mcpServers": {
    "n8n-mcp": {
      "command": "npx",
      "args": ["n8n-mcp"],
      "env": {
        "MCP_MODE": "stdio",
        "LOG_LEVEL": "error",
        "DISABLE_CONSOLE_OUTPUT": "true"
      }
    }
  }
}
</code></pre>
      <h4>Full management access</h4>
      <pre><code>{
  "mcpServers": {
    "n8n-mcp": {
      "command": "npx",
      "args": ["n8n-mcp"],
      "env": {
        "MCP_MODE": "stdio",
        "LOG_LEVEL": "error",
        "DISABLE_CONSOLE_OUTPUT": "true",
        "N8N_API_URL": "https://your-n8n-instance.com",
        "N8N_API_KEY": "your-api-key"
      }
    }
  }
}
</code></pre>
      <p>Configuration file paths:</p>
      <ul>
        <li><strong>macOS:</strong> <code>~/Library/Application Support/Claude/claude_desktop_config.json</code></li>
        <li><strong>Windows:</strong> <code>%APPDATA%\\Claude\\claude_desktop_config.json</code></li>
        <li><strong>Linux:</strong> <code>~/.config/Claude/claude_desktop_config.json</code></li>
      </ul>
      <p>After updating the file, restart Claude Desktop and the tools appear instantly. A quickstart video walkthrough is on the roadmap.</p>

      <h3>Architecture Overview</h3>
      <img src="${mcpN8nThumb}" alt="High level diagram of MCP server broker in front of n8n" />
      <ul>
        <li>MCP <strong>dispatcher server</strong> exposes tools such as <code>trigger_workflow</code> and <code>list_workflows</code>.</li>
        <li>A <strong>TypeScript broker</strong> signs JWTs, validates payloads, and hands the request to n8n via REST.</li>
        <li>n8n workflows emit webhook callbacks that my MCP server converts into streaming events for the AI client.</li>
      </ul>

      <h3>Server Manifest (excerpt)</h3>
      <pre><code>{
  "name": "n8n-dispatcher",
  "capabilities": [{
    "name": "trigger_workflow",
    "schema": {
      "type": "object",
      "properties": {
        "workflowId": { "type": "string" },
        "input": { "type": "object" }
      },
      "required": ["workflowId"]
    }
  }]
}</code></pre>

      <h3>Workflow Template in n8n</h3>
      <p>I keep workflows declarative: every automation starts with a <code>Webhook</code> node, processes the request through validation nodes, then fans out to tasks (Slack, Notion, Discord, internal APIs).</p>
      <pre><code>{
  "nodes": [
    { "name": "Webhook", "type": "n8n-nodes-base.webhook" },
    { "name": "Transform", "type": "n8n-nodes-base.function" },
    { "name": "Notify", "type": "n8n-nodes-base.slack" }
  ]
}</code></pre>

      <h3>Observability & Guardrails</h3>
      <ul>
        <li>Structured logs stream to Loki so I can correlate agent prompts with workflow runs.</li>
        <li>Rate limits per assistant prevent accidental workflow storms.</li>
        <li>Each run pushes a status card back to the chat UI with timing, outcome, and deep links to n8n.</li>
      </ul>

      <h3>What's Next</h3>
      <ul>
        <li>Add a secrets vault MCP server that rotates n8n credentials automatically.</li>
        <li>Expose run history search so agents can reference previous automations.</li>
        <li>Package the dispatcher as a Docker image for quick self-hosting.</li>
      </ul>
    `,
    date: "October 28, 2025",
    readTime: "8 min read",
    imgPath: mcpN8nThumb,
  },
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
