const images = import.meta.glob('/src/content/templates&img/img/*.{png,jpg,jpeg,svg,webp}', {
    eager: true,
    import: 'default',
});

export function getImage(filename) {
    return images[`/src/content/templates&img/img/${filename}`];
}