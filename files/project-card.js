class ProjectCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                article {
                    font-family: var(--content-font);
                    color: var(--paragraph-color);
                    font-size: var(--base-font-size);
                    line-height: 1.5;
                    background-color: var(--card-color);
                    padding: 1rem; 
                    border-radius: 10px; 
                    margin-bottom: 1rem;
                    gap: 1rem;
                }

                article:has(header):hover, article:has(ul):hover {
                    transform: translateY(-5px) scale(1.02);
                    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
                    background-color: color-mix(in srgb, var(--card-color), white 10%);
                }
                header{
                    background-color: transparent;
                    display: flex;
                    padding: 0;
                    gap: 1rem;
                    justify-content: left;
                    align-items: center;
                }
                header h2{
                    margin: 0;
                }

                .logo img{
                    width: 40px;
                    height: 40px;
                }
                .demo img{
                    width: 100%;
                    height: auto;
                    margin-top: 1rem;
                    border-radius: 10px;
                }
            </style>
            <article>
                <header>
                    <h2>Video Streaming Platform with Live Comments</h2>
                    <picture class="logo">
                    <source srcset="images/go_logo.webp" type="image/webp" media="(max-width: 600px)">
                    <img src="images/go_logo.png" alt="Go Logo">
                    </picture>
                </header>
                <p>Apr 2025 - June 2025</p>
                <ul>
                    <li>Supported user video upload and playback with the <strong>MPEG-DASH</strong> standard; utilized <strong>FFmpeg</strong> for ~40% faster playback loading.</li>
                    <li>Designed scalable distributed storage servers with consistent hashing for dynamic node management, supporting 10x faster horizontal scaling and low-latency communication via <strong>gRPC + Protobuf</strong>.</li>
                    <li>Enabled high-concurrency live comments using <strong>Redis Pub/Sub</strong> for broadcasting and <strong>MongoDB</strong> for asynchronous history records.</li>
                    <li>Deployed the cluster remotely on <strong>AWS EC2</strong>. Utilized <strong>etcd</strong> for video metadata consistency and service registration and discovery.</li>
                </ul>
                <p>The overall workflow is shown below:</p>
                <picture class="demo">
                    <source srcset="images/go_demo.webp" type="image/webp" media="(max-width: 600px)">
                    <img src="images/go_demo.png" alt="Video Streaming Platform Workflow Demostration">
                </picture>
                <a href="https://github.com/Leullque/distributed_video_streaming" target="_blank">
                    Learn more →
                </a>
            </article>`;
    }
}

customElements.define("project-card", ProjectCard);