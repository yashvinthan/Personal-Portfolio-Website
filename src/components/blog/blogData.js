// blogData.js

// ✅ Imports for thumbnails and blog images
import blog1Thumb from "../../Assets/Blogs/blog1-thumbnail.png";
import mcpN8nThumb from "../../Assets/Blogs/mcp-n8n-thumbnail.png";
import homeLabThumb from "../../Assets/Blogs/home-lab-thumbnail.png";

// Home Lab screenshots
import proxmoxDashboard from "../../Assets/Blogs/proxmox-dashboard.png";
import homeLabRack from "../../Assets/Blogs/home-lab-rack.jpg";
import homeLabSwitches from "../../Assets/Blogs/home-lab-switches.jpg";
import homeLabNetgear from "../../Assets/Blogs/home-lab-netgear.jpg";
import homeLabSophos from "../../Assets/Blogs/home-lab-sophos.jpg";
import homeLabMaster from "../../Assets/Blogs/home-lab-master.png";
import homeLabCiscoModule from "../../Assets/Blogs/home-lab-cisco-module.jpg";
import homeLabUpsStack from "../../Assets/Blogs/home-lab-ups-stack.jpg";
import homeLabUpsPro from "../../Assets/Blogs/home-lab-ups-pro.png";

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
    date: "October 04, 2025",
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
    title: "Building an Enterprise-Grade Multi-Node Homelab Infrastructure",
    description:
      "A deep-dive technical blueprint of my 6-node virtualization cluster, segmented VLAN network architecture, and dedicated security operations center (SOC) lab.",
    content: `
      <img src="${homeLabMaster}" alt="My Complete Enterprise Homelab Overview showing Dell PowerEdge T440, HP Z800, APC UPS units, and Cisco/D-Link Switch Stacks" />

      <p>As an aspiring systems, networks, and security engineer, I wanted to go beyond classroom textbooks and simple virtual environments. That’s when I started architecting my own <strong>Enterprise-Grade Homelab</strong>—a production-style, multi-node lab designed to simulate real-world computing, virtualization clustering, high-availability, and proactive threat operations.</p>
      
      <p>This article details the node-by-node hardware specification, physical switching and routing topologies, granular network segmentation rules, and key systems administration capabilities I run in my lab environment.</p>

      <h3>1. The Multi-Node Compute Cluster</h3>
      <p>My environment features a balanced mix of enterprise server hardware, high-end workstations, and recovery nodes to support diverse virtualized workloads:</p>
      <ul>
        <li>🖥️ <strong>Dell PowerEdge T440 (Production Infrastructure Host):</strong> Powered by Intel Xeon and high-capacity ECC RAM, this is my primary virtualization host running Proxmox VE. It hosts active core infrastructure servers, databases, and enterprise services.</li>
        <li>💾 <strong>HP Z800 (Storage & Backup Platform):</strong> Configured as a high-capacity Network Attached Storage (NAS) node and dedicated <strong>Proxmox Backup Server (PBS)</strong>, executing automated backup verification, differential storage, and recovery services. The backup infrastructure is protected by <strong>five APC Back-UPS BX1100C-IN (1100VA)</strong> units to provide stable power backup and ensure high availability during power fluctuations.</li>
        <li>⚡ <strong>Ryzen 5 3600 (Application Hosting Node):</strong> A fast multi-threaded node dedicated to hosting microservices, self-hosted web platforms, API endpoints, and dynamic development environments.</li>
        <li>🛡️ <strong>AMD 5700G (Cybersecurity & SOC Lab):</strong> An isolated compute node hosting my Security Operations Center (SOC) testbed, used for executing log aggregation setups, threat detection simulation, and active incident response practice.</li>
        <li>💻 <strong>Laptop Node (Witness & Recovery):</strong> Configured as a third quorum voting node in my Proxmox cluster to maintain high-availability split-brain protection and disaster recovery testing.</li>
      </ul>
      <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin: 25px 0;">
        <div style="flex: 1; min-width: 280px; max-width: 380px;">
          <img src="${homeLabRack}" alt="My Primary Homelab Rack featuring Dell T440, switches, and APC UPS" style="width: 100% !important; margin: 0 !important; border-radius: 12px; height: 320px !important; object-fit: cover !important;" />
          <p style="text-align: center; font-size: 0.85rem; color: #bbb; margin-top: 8px; margin-bottom: 0;">Physical Dell PowerEdge T440 & switch rack enclosure</p>
        </div>
        <div style="flex: 1; min-width: 280px; max-width: 380px;">
          <img src="${homeLabSwitches}" alt="My core D-Link DGS-1210-28P and Cisco Catalyst 3850 Switch Stack" style="width: 100% !important; margin: 0 !important; border-radius: 12px; height: 320px !important; object-fit: cover !important;" />
          <p style="text-align: center; font-size: 0.85rem; color: #bbb; margin-top: 8px; margin-bottom: 0;">D-Link DGS-1210-28P & Cisco Catalyst 3850 switch stack</p>
        </div>
      </div>

      <h3>2. Switching, Routing & Wireless Topologies</h3>
      <p>A resilient virtualization cluster demands solid networking. I structured my network around robust routing, switching, and firewall appliances to protect and route traffic securely:</p>
      <ul>
        <li>🛡️ <strong>Sophos XG210 (Edge Firewall):</strong> My primary gateway and perimeter security appliance, running <strong>OPNsense</strong> to handle inter-VLAN routing, traffic filtering, and intrusion prevention.</li>
        <li>🛡️ <strong>Cisco Catalyst 3850 (Enterprise Lab):</strong> My main networking lab environment, used for advanced CCNA/CCNP routing, switching, and access control testing.</li>
      <div style="display: flex; justify-content: center; margin: 25px 0;">
        <div style="max-width: 600px; width: 100%;">
          <img src="${homeLabCiscoModule}" alt="Cisco Catalyst 3850 with C3850-NM-2-10G SFP+ Network Module close-up" style="width: 100% !important; margin: 0 !important; border-radius: 12px;" />
          <p style="text-align: center; font-size: 0.85rem; color: #bbb; margin-top: 8px; margin-bottom: 0;">C3850-NM-2-10G SFP+ Network Module close-up details</p>
        </div>
      </div>
        <li>🔌 <strong>Netgear GS110TP & GS108T (Core Switching):</strong> Managed switches handling my main VLAN trunk distribution, core storage network links, and virtualization transport lanes.</li>
        <li>🔌 <b>D-Link DGS-1210-28P:</b> A 28-port managed PoE switch powering all physical CCTV cameras and wireless Access Points.</li>
        <li>🔌 <b>Netgear GS108E & TP-Link TL-SG108E:</b> Low-latency access switches providing down-link extensions for home devices and downstairs access nodes.</li>
        <li>📡 <b>Enterprise Wireless Coverage:</b> Managed through a high-performance **Aruba APIN0315 Wave 2 Access Point** alongside TP-Link Archer C1200 & C20 dual-band routers configured for optimal coverage boundary separation.</li>
      </ul>
      <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin: 25px 0;">
        <div style="flex: 1; min-width: 280px; max-width: 380px;">
          <img src="${homeLabSophos}" alt="Sophos XG210 Edge Firewall running OPNsense and TP-Link AP" style="width: 100% !important; margin: 0 !important; border-radius: 12px; height: 280px !important; object-fit: cover !important;" />
          <p style="text-align: center; font-size: 0.85rem; color: #bbb; margin-top: 8px; margin-bottom: 0;">Sophos XG210 perimeter gateway running OPNsense firewall</p>
        </div>
        <div style="flex: 1; min-width: 280px; max-width: 380px;">
          <img src="${homeLabNetgear}" alt="Netgear Managed Switch Stack and TP-Link Access Node connectivity" style="width: 100% !important; margin: 0 !important; border-radius: 12px; height: 280px !important; object-fit: cover !important;" />
          <p style="text-align: center; font-size: 0.85rem; color: #bbb; margin-top: 8px; margin-bottom: 0;">Core Netgear switches & access node distribution</p>
        </div>
      </div>
      
      <h3>3. Symmetrical Network Segmentation (VLAN Mapping)</h3>
      <p>To secure my environment, I implemented a strict multi-VLAN architecture routed through my <strong>Sophos XG210 firewall running OPNsense</strong>, separating networks based on trust layers:</p>
      <ul>
        <li>🛡️ <strong>VLAN 10 (Management):</strong> Uniquely reserved for hypervisor administration, firewall configs, and managed switch control consoles.</li>
        <li>🖥️ <strong>VLAN 20 (Servers):</strong> Dedicated zone hosting active internal applications and directory services.</li>
        <li>💾 <strong>VLAN 30 (Storage):</strong> High-throughput storage traffic (NFS/iSCSI) connecting hypervisors to my HP Z800 NAS.</li>
        <li>📡 <strong>VLAN 40 & 50 (IoT & CCTV):</strong> Highly restricted, non-internet-facing zones isolating cameras and smart appliances.</li>
        <li>🏠 <strong>VLAN 60 & 70 (Home & Guest Net):</strong> Separate client pools separating personal devices from guest traffic.</li>
        <li>🔬 <strong>VLAN 80 (SOC & Threat Lab):</strong> A sandbox network designed to execute threat emulations without endangering other local systems.</li>
        <li>🌐 <strong>VLAN 90 (DMZ):</strong> Isolates public-facing reverse proxies and Cloudflare tunnels.</li>
      </ul>
      
      <h3>4. Hypervisor Orchestration with Proxmox</h3>
      <p>At the center of my virtualization platform is <strong>Proxmox Virtual Environment</strong>. It lets me orchestrate virtual machines (VMs) and lightweight LXC containers dynamically, managing resources, high-availability, and storage replication on a unified dashboard:</p>
      <div style="margin: 25px 0;">
        <img src="${proxmoxDashboard}" alt="Proxmox VE Virtualization Cluster Dashboard" style="width: 100% !important; margin: 0 !important; border-radius: 12px;" />
        <p style="text-align: center; font-size: 0.85rem; color: #bbb; margin-top: 8px; margin-bottom: 0;">Centralized Proxmox Virtual Environment hypervisor administration panel</p>
      </div>

      <h3>5. Power & Resiliency Infrastructure</h3>
      <p>High availability and hypervisor uptime mean nothing if the physical deployment is vulnerable to power fluctuations. To simulate enterprise-grade business continuity and disaster readiness, I designed a multi-UPS power redundancy tier:</p>
      <ul>
        <li>🔋 <strong>APC Back-UPS BX1100C-IN (5 Units):</strong> Distribute power protection across hypervisor clusters, primary server workloads, and core network switches. This provides critical service protection, switch redundancy, and supports automated graceful shutdown scripts.</li>
        <li>🔋 <strong>APC Back-UPS Pro BR1000G-IN:</strong> Offers dedicated power conditioning, surge protection, and Automatic Voltage Regulation (AVR) for my primary workstation and management console.</li>
        <li>🔋 <strong>APC Back-UPS Pro External Battery Pack:</strong> Delivers extended runtime capabilities and long-duration backup to maintain core internet and network availability during extended utility failures.</li>
      </ul>
      <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin: 25px 0;">
        <div style="flex: 1; min-width: 280px; max-width: 380px;">
          <img src="${homeLabUpsStack}" alt="Stack of five APC Back-UPS BX1100C-IN 1100VA uninterruptible power supply units" style="width: 100% !important; margin: 0 !important; border-radius: 12px; height: 350px !important; object-fit: cover !important;" />
          <p style="text-align: center; font-size: 0.85rem; color: #bbb; margin-top: 8px; margin-bottom: 0;">Five Stacked APC BX1100C-IN 1100VA Units</p>
        </div>
        <div style="flex: 1; min-width: 280px; max-width: 380px;">
          <img src="${homeLabUpsPro}" alt="APC Back-UPS Pro BR1000G-IN 1000VA uninterruptible power supply and external backup battery pack close-up showing active display" style="width: 100% !important; margin: 0 !important; border-radius: 12px; height: 350px !important; object-fit: cover !important;" />
          <p style="text-align: center; font-size: 0.85rem; color: #bbb; margin-top: 8px; margin-bottom: 0;">APC Back-UPS Pro BR1000G-IN with External Battery Pack</p>
        </div>
      </div>

      <h3>6. Engineering Lessons & Technical Takeaways</h3>
      <p>Building this multi-node environment has provided me with real-world, hands-on engineering competencies that go far beyond standard coursework:</p>
      <ul>
        <li><strong>Enterprise Firewall Administration:</strong> Deploying and tuning OPNsense policies, NAT translations, site-to-site VPN trunks, and secure reverse proxies.</li>
        <li><strong>Infrastructure Observability:</strong> Configuring metrics pipelines and dashboard reporting utilizing Grafana and Loki logs aggregation.</li>
        <li><strong>Disaster Recovery Planning:</strong> Configuring Proxmox Backup Server schedules, verifying backup integrity, and testing quorum failovers.</li>
        <li><strong>Advanced Switching:</strong> Designing and implementing 802.1Q VLAN trunking, link aggregation, and Access Control Lists (ACLs) on managed switches.</li>
      </ul>

      <p>My home lab is the ultimate engineering sandbox. For students or IT enthusiasts, starting small—even with a single node and open-source systems like Proxmox and OPNsense—is the best way to develop the practical skills demanded in production enterprise systems.</p>
    `,
    date: "August 30, 2025",
    readTime: "12 min read",
    imgPath: homeLabThumb,
  },
];

export default blogData;
