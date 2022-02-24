export default function exportValidity(expires_at: number) {
  const expire = new Date(expires_at * 1000);
  const current = new Date();
  const gap = expire.getTime() - current.getTime();
  const gapDays = Math.floor(gap / (1000 * 60 * 60 * 24));
  const gapHours = Math.floor(gap / (1000 * 60 * 60));
  const gapMinutes = Math.floor(gap / (1000 * 60)) - gapHours * 60;

  if (gap < 0) {
    return "만료됨";
  } else if (gapHours < 24) {
    return `${gapMinutes}분`;
  } else if (gapHours < 48) {
    return `${gapHours}시간 ${gapMinutes}분`;
  } else {
    return `${gapDays}일`;
  }
}
