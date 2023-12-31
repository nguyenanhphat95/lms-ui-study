import isBrowser from '@App/utils/isBrowser';
const copyToClipboard = (text) => {
    if (!isBrowser()) {
        return;
    }
    if (typeof document === 'undefined') {
        return;
    }
    const el = document.createElement('textarea');
    el.value = text;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    const selected = document.getSelection().rangeCount > 0
        ? document.getSelection().getRangeAt(0)
        : false;
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
    }
};
export default copyToClipboard;
//# sourceMappingURL=copyToClipboard.js.map