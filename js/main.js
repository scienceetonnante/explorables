// Explorables - Auto-discovery and Gallery Management
// ====================================================

class ExplorablesGallery {
    constructor() {
        this.simulations = [];
        this.currentFilter = 'all';
        this.manifestPath = 'manifest.json';

        this.elements = {
            gallery: document.getElementById('gallery'),
            loading: document.getElementById('loading'),
            emptyState: document.getElementById('empty-state'),
            filterButtons: document.querySelectorAll('.filter-btn')
        };

        this.init();
    }

    async init() {
        this.setupEventListeners();
        await this.loadSimulations();
        this.renderGallery();
    }

    setupEventListeners() {
        // Filter button clicks
        this.elements.filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.handleFilterChange(e.target.dataset.filter);
            });
        });
    }

    handleFilterChange(filter) {
        this.currentFilter = filter;

        // Update active button
        this.elements.filterButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === filter);
        });

        this.renderGallery();
    }

    async loadSimulations() {
        try {
            const response = await fetch(this.manifestPath);

            if (!response.ok) {
                throw new Error(`Failed to load manifest: ${response.statusText}`);
            }

            const data = await response.json();
            this.simulations = data.simulations || [];

        } catch (error) {
            console.error('Error loading simulations:', error);
            this.showError('Unable to load simulations. Please check the manifest.json file.');
        }
    }

    renderGallery() {
        this.elements.loading.style.display = 'none';

        // Filter simulations
        const filtered = this.filterSimulations();

        if (filtered.length === 0) {
            this.elements.gallery.style.display = 'none';
            this.elements.emptyState.style.display = 'block';
            return;
        }

        this.elements.emptyState.style.display = 'none';
        this.elements.gallery.style.display = 'grid';

        // Clear and render
        this.elements.gallery.innerHTML = filtered
            .map(sim => this.createSimulationCard(sim))
            .join('');
    }

    filterSimulations() {
        if (this.currentFilter === 'all') {
            return this.simulations;
        }

        return this.simulations.filter(sim =>
            sim.tags && sim.tags.includes(this.currentFilter)
        );
    }

    createSimulationCard(sim) {
        const thumbnailPath = `${sim.id}/${sim.thumbnail}`;
        const simulationUrl = `${sim.id}/`;
        const formattedDate = this.formatDate(sim.date);

        // Get primary tag for styling
        const primaryTag = sim.tags && sim.tags.length > 0 ? sim.tags[0] : '';

        const tagsHtml = sim.tags
            ? sim.tags.map(tag => `<span class="sim-tag ${tag}">${this.translateTag(tag)}</span>`).join('')
            : '';

        return `
            <a href="${simulationUrl}" class="sim-card" data-id="${sim.id}">
                <div class="sim-thumbnail-wrapper">
                    <img
                        src="${thumbnailPath}"
                        alt="${sim.title}"
                        class="sim-thumbnail"
                        onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22%3E%3Crect fill=%22%23f3f4f6%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%239ca3af%22 font-family=%22system-ui%22 font-size=%2220%22%3EImage unavailable%3C/text%3E%3C/svg%3E'"
                    >
                </div>
                <div class="sim-content">
                    <h3 class="sim-title">${this.escapeHtml(sim.title)}</h3>
                    <p class="sim-description">${this.escapeHtml(sim.description)}</p>
                    ${tagsHtml ? `<div class="sim-tags">${tagsHtml}</div>` : ''}
                    <div class="sim-footer">
                        <span class="sim-date">${formattedDate}</span>
                        <span class="sim-cta">Explore</span>
                    </div>
                </div>
            </a>
        `;
    }

    translateTag(tag) {
        const translations = {
            'physics': 'Physics',
            'biology': 'Biology',
            'mathematics': 'Mathematics',
            'chemistry': 'Chemistry',
            'astronomy': 'Astronomy',
            'mechanics': 'Mechanics',
            'optics': 'Optics',
            'thermodynamics': 'Thermodynamics'
        };
        return translations[tag] || tag;
    }

    formatDate(dateString) {
        if (!dateString) return '';

        try {
            const date = new Date(dateString);
            return new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'long'
            }).format(date);
        } catch (e) {
            return dateString;
        }
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    showError(message) {
        this.elements.loading.style.display = 'none';
        this.elements.gallery.style.display = 'none';
        this.elements.emptyState.style.display = 'block';
        this.elements.emptyState.innerHTML = `
            <p style="color: #ef4444;">⚠️ ${message}</p>
        `;
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ExplorablesGallery();
});
