const images = import.meta.glob('/src/content/templates&img/img/*.{png,jpg,jpeg,svg,webp}', {
    eager: true,
    import: 'default',
});

export function getImage(filename) {
    return images[`/src/content/templates&img/img/${filename}`];
}



const blogMd = import.meta.glob('../content/blog/**/*.md', {
    eager: true,
    query: '?raw',
    import: 'default',
});

export function getBlogMd(filepath) {
    if (!filepath) return null;

    // Normalize path (JSON usually stores full /src/... paths)
    const normalized = filepath.replace(/^\/?src\//, '');

    const key = Object.keys(blogMd).find(k =>
        k.endsWith(normalized.replace('content/', ''))
    );

    if (!key) {
        console.warn('Markdown not found:', filepath);
        return null;
    }


    return blogMd[key];
}

const projectMd = import.meta.glob('../content/projects/**/*.md', {
    eager: true,
    query: '?raw',
    import: 'default',
});



export function getProjectMd(filepath) {
    if (!filepath) return null;

    // Normalize path (JSON usually stores full /src/... paths)
    const normalized = filepath.replace(/^\/?src\//, '');

    const key = Object.keys(projectMd).find(k =>
        k.endsWith(normalized.replace('content/', ''))
    );

    if (!key) {
        console.warn('Markdown not found:', filepath);
        return null;
    }

    return projectMd[key]; // ✅ raw markdown string
}


const coursesMd = import.meta.glob('../content/courses/**/*.md', {
    eager: true,
    query: '?raw',
    import: 'default',
});



export function getCoursesMd(filepath) {
    if (!filepath) return null;

    // Normalize path (JSON usually stores full /src/... paths)
    const normalized = filepath.replace(/^\/?src\//, '');

    const key = Object.keys(coursesMd).find(k =>
        k.endsWith(normalized.replace('content/', ''))
    );

    if (!key) {
        console.warn('Markdown not found:', filepath);
        return null;
    }

    return coursesMd[key]; // ✅ raw markdown string
}