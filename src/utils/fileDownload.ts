const fileDownload = (imageURL: string, fileName: string) => {
  const a = document.createElement("a");
  a.href = imageURL;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export default fileDownload;
