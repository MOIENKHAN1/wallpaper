const wallpapers = [
    { id: 1, title: "Anime", category: "Anime", url: "wallpapers/Anime.jpg" },
    { id: 2, title: "Nature", category: "Nature", url: "wallpapers/sunset-7133867.jpg" },
    { id: 3, title: "Anime Girl", category: "Anime", url: "wallpapers/anime girl.jpg" },
    { id: 4, title: "Pop Landscape", category: "Anime", url: "wallpapers/bright-pop-landscape-design.jpg" },
    { id: 5, title: "Beautiful Anime", category: "Anime", url: "wallpapers/beautiful-anime-character-cartoon-scene.jpg" },
    { id: 6, title: "Cityscape Anime", category: "Anime", url: "wallpapers/cityscape-anime-inspired-urban-area.jpg" },
    { id: 7, title: "Athletic Girl", category: "Girl", url: "wallpapers/athletic-korean-girl-h2md2eo7q2jf8gev.jpg" },
    { id: 8, title: "Korean Girl Roses", category: "Girl", url: "wallpapers/korean-girl-in-white-with-roses-6vpptlgwdgu2z8dh.jpg" },
    { id: 9, title: "Stylish Boy", category: "Boy", url: "wallpapers/10001.jpg" },
    { id: 10, title: "Cool Boy", category: "Boy", url: "wallpapers/10000.jpg" },
    { id: 11, title: "Korean Girl Lee", category: "Girl", url: "wallpapers/korean-girl-lee-sung-kyung-n5e6sguc5ynxpdfm.jpg" },
    { id: 12, title: "Korean Girl Nana", category: "Girl", url: "wallpapers/korean-girl-nana-9jbmfpoqlxe559bp.jpg" },
    { id: 13, title: "Girl on Grass", category: "Girl", url: "wallpapers/korean-girl-posing-on-the-grass-b5dxput51vo85n40.jpg" },
    { id: 14, title: "Gaming World", category: "Gaming", url: "wallpapers/pexels.jpg" }
];

const wallpaperGrid = document.querySelector('.wallpaper-grid');
const categoryItems = document.querySelectorAll('nav ul li');
const searchInput = document.querySelector('.search-bar input');

function loadWallpapers(filteredWallpapers) {
    wallpaperGrid.innerHTML = '';
    filteredWallpapers.forEach(wallpaper => {
        const wallpaperItem = document.createElement('div');
        wallpaperItem.classList.add('wallpaper-item');

        wallpaperItem.innerHTML = `
            <img src="${wallpaper.url}" alt="${wallpaper.title}">
            <button class="download-btn" onclick="downloadWallpaper('${wallpaper.url}')">Download</button>
        `;

        wallpaperGrid.appendChild(wallpaperItem);
    });
}

function filterWallpapers(category) {
    if (category === 'All') {
        loadWallpapers(wallpapers);
    } else {
        const filtered = wallpapers.filter(w => w.category.toLowerCase() === category.toLowerCase());
        loadWallpapers(filtered);
    }
}

categoryItems.forEach(item => {
    item.addEventListener('click', () => filterWallpapers(item.textContent));
});

function searchWallpapers() {
    const query = searchInput.value.toLowerCase();
    const filtered = wallpapers.filter(w => w.title.toLowerCase().includes(query));
    loadWallpapers(filtered);
}

// Search bar event listener
searchInput.addEventListener('input', searchWallpapers);

function downloadWallpaper(url) {
    const link = document.createElement('a');
    link.href = url;
    link.download = url.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Initial load
loadWallpapers(wallpapers);
