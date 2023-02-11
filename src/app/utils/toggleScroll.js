export function toggleScroll(isScroll) {
  !isScroll
    ? document.body.classList.add("no_scroll")
    : document.body.classList.remove("no_scroll");
}
