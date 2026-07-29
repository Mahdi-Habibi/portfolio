export function projectImageUrl(imagePath) {
    if (!imagePath) return "";
    const base = import.meta.env.BASE_URL || "/";
    return `${base}${imagePath.replace(/^\//, "")}`;
}

export function assetUrl(path) {
    const base = import.meta.env.BASE_URL || "/";
    return `${base}${path.replace(/^\//, "")}`;
}

export function splitLocation(location) {
    const [city, rest] = location.split(",");
    return { city: city?.trim() || location, region: rest?.trim() || "" };
}
