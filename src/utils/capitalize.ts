export default function capitalize(input: string) {
  if (typeof input !== 'string') {
    return input;
  }
  return input.charAt(0).toUpperCase() + input.slice(1);
}
