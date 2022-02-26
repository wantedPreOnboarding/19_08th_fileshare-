export default function copyClipboard(text: string) {
  navigator.clipboard.writeText(text);
}
