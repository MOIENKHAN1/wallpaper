const wallpapers = [
    {
        id: 1,
        title: "Sex",
        category: "sex",
        url: "wallpaper/Sex.jpg"
    },
    {
        id: 2,
        title: "Anal Sex",
        category: "anal sex",
        url: "wallpaper/AnalSex.jpg"
    },
    {
        id: 3,
        title: "Naked Girl",
        category: "naked",
        url: "wallpaper/NakedGirl.jpg"
    },
    {
        id: 4,
        title: "Naked Girl",
        category: "naked",
        url: "wallpaper/Naked1.jpg"
    },
    {
        id: 5,
        title: "Sexy Girl",
        category: "sexy girl",
        url: "wallpaper/Sexy Girl.jpg"

    },
    // Add more wallpapers here
];

const container = document.getElementById('wallpaperContainer');
const searchInput = document.getElementById('searchInput');
const categoryButtons = document.querySelectorAll('.category-btn');

// Initial render
renderWallpapers(wallpapers);

// Search functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = wallpapers.filter(wp => 
        wp.title.toLowerCase().includes(searchTerm) || 
        wp.category.toLowerCase().includes(searchTerm)
    );
    renderWallpapers(filtered);
});

// Category filter
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filtered = category === 'all' 
            ? wallpapers 
            : wallpapers.filter(wp => wp.category === category);
        
        renderWallpapers(filtered);
    });
});

function renderWallpapers(items) {
    container.innerHTML = items.map(wp => `
        <div class="wallpaper-item" data-category="${wp.category}">
            <img src="${wp.url}" alt="${wp.title}">
            <button class="download-btn" onclick="downloadWallpaper('${wp.url}')">
                Download
            </button>
        </div>
    `).join('');
}

function downloadWallpaper(url) {
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = url.split('/').pop();
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}