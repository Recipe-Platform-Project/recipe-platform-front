export const cutString = (str: string | undefined, size: number) => {
    if (!str) return '';
    return str.length > size ? str.substring(0, size) + '...' : str;
};