export default function inputClipBoard(text: string) {
  navigator.clipboard.writeText(text).then(() => {
    // console.log("클립보드에 복사되었습니다.");
    window.alert("클립보드에 복사되었습니다.");
  });
}
