export default function printFilteredUrl(
  key: string,
  expires_at: number
): string {
  const expire = new Date(expires_at * 1000).getTime();
  const current = new Date().getTime();
  const gap = expire - current;
  if (gap < 0) {
    return "만료됨";
  } else {
    return `localhost/${key}`;
  }
}
