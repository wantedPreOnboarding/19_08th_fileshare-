import commaNumber from "./commaNumber";
import formatFileSize from "./formatFileSize";

export default function printFilesize(bytes: number): string {
  const formatSize = formatFileSize(bytes);
  const commaSize = commaNumber(formatSize.volumNum);
  return `${commaSize} ${formatSize.unit}`;
}
