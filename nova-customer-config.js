window.NOVA_VERIFY_API_URL = "https://briancheatmenu.nguyenphananhthu989.workers.dev/verify";
window.NOVA_SITE_TITLE = "NOVA Verify";
window.NOVA_DEFAULT_DEVICE_ID = navigator.userAgent;
async function verifyKey(key) {
  const device = window.NOVA_DEFAULT_DEVICE_ID;

  const res = await fetch(
    window.NOVA_VERIFY_API_URL +
    "?key=" + encodeURIComponent(key) +
    "&device=" + encodeURIComponent(device)
  );

  const text = await res.text();

  if (text === "OK" || text === "Registered") {
    alert("Thành công ✅");
  } else {
    alert("Lỗi ❌: " + text);
  }
}