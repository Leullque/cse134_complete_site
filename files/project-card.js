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
                    font-size: calc(0.75 * var(--base-font-size));
                    line-height: 1.5;
                    background-color: var(--card-color);
                    padding: 1rem; 
                    border: 2px solid var(--text-color);
                    border-radius: 10px; 
                    gap: 1rem;
                    margin: 10px;
                }

                article:hover, article:hover {
                    transform: translateY(-5px) scale(1.02);
                    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
                    background-color: color-mix(in srgb, var(--card-color), white 10%);
                }
                hgroup{
                    display: flex;
                    padding: 0;
                    flex-direction: column;
                    align-items: left;
                    justify-content: left;
                }
                hgroup h2{
                    margin: 0;
                }
                .tags{
                    color: var(--text-color);
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
                <hgroup>
                    <h2>Video Streaming Platform with Live Comments</h2>
                    <p class="tags"> Go, grpc, AWS</p>
                </hgroup>
                
                <picture class="demo">
                    <source srcset="images/go_demo.webp" type="image/webp" media="(max-width: 600px)">
                    <img src="images/go_demo.png" alt="Video Streaming Platform Workflow Demostration">
                </picture>
                <p>A Go scalable video streaming platform with FFmpeg integration and Redis Pub/Sub for live comments.</p>
                <p>Apr 2025 - June 2025</p>
                <a href="#go-details">Learn more →</a>
            </article>
            `;
    }
}

customElements.define("project-card", ProjectCard);