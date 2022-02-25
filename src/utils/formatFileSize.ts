export default function formatFileSize(
  bytes: number,
  decimals = 2
): { unit: string; volumNum: number } {
  if (bytes === 0) {
    return { volumNum: 0, unit: "Bytes" };
  }
  const k = 1000;
  const dm = decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return {
    volumNum: parseFloat((bytes / Math.pow(k, i)).toFixed(dm)),
    unit: sizes[i],
  };
}
