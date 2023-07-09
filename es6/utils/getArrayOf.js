export function getArrayOf(data) {
    if (!data) {
        return [];
    }
    if (Array.isArray(data)) {
        return data;
    }
    return [data];
}
//# sourceMappingURL=getArrayOf.js.map