export default function copyClipboard(text: string) {
  navigator.clipboard.writeText(text).then(() => {
    window.alert("클립보드에 복사되었습니다.");
  });
}
