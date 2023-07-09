export default function capitalize(input) {
    if (typeof input !== 'string') {
        return input;
    }
    return input.charAt(0).toUpperCase() + input.slice(1);
}
//# sourceMappingURL=capitalize.js.map