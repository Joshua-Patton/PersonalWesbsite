const images = import.meta.glob('/src/content/templates&img/img/*.{png,jpg,jpeg,svg,webp}', {
    eager: true,
    import: 'default',
});

export function getImage(filename) {
    return images[`/src/content/templates&img/img/${filename}`];
}

const projectMd = import.meta.glob('/src/content/projects/**/*.{md}', {
    eager: true,
    import: 'default',
});

export function getProjectMd(filepath) {
    return projectMd[`/src/content/templates&img/img/${filepath}`];
}


const blogMd = import.meta.glob('/src/content/blog/**/*.{md}', {
    eager: true,
    import: 'default',
});

export function getBlogMd(filepath) {
    return blogMd[filepath];
}
