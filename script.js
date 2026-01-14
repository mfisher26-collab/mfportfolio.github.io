// Load profile bio on home page
if (document.getElementById('profileBio')) {
    const bioElement = document.getElementById('profileBio');
    const bioText = profileConfig.bio.trim();

    // Split bio by line breaks and create paragraphs
    const paragraphs = bioText.split('\n').filter(p => p.trim() !== '');
    bioElement.innerHTML = paragraphs.map(p => `<p>${p.trim()}</p>`).join('');
}

// Load articles on work page
if (document.getElementById('articlesContainer')) {
    const container = document.getElementById('articlesContainer');

    if (articles.length === 0) {
        container.innerHTML = '<p style="color: #666;">No articles added yet. Edit config.js to add your work.</p>';
    } else {
        container.innerHTML = articles.map(article => `
            <div class="article-card">
                <h3 class="article-title">
                    <a href="${article.url}" target="_blank" rel="noopener noreferrer" class="article-link">
                        ${article.title}
                    </a>
                </h3>
                ${article.publication ? `<p class="article-publication">${article.publication}</p>` : ''}
                <p class="article-description">${article.description}</p>
            </div>
        `).join('');
    }
}
