document.addEventListener("DOMContentLoaded", () => {
  const component = document.querySelector(".el-comp-tabs");
  const items = component.querySelectorAll(".el-item");
  const panes = component.querySelectorAll(".el-pane");

  function active(item) {
    const index = item.dataset.elIndex;
    items.forEach((item) => item.classList.remove("el-active"));
    panes.forEach((pane) => pane.classList.remove("el-active"));
    item.classList.add("el-active");
    document.querySelector(`.el-item[data-el-index="${index}"]`).classList.add("el-active");
    document.querySelector(`.el-pane[data-el-index="${index}"]`).classList.add("el-active");
  }

  items.forEach((item) => {
    item.addEventListener("click", () => {
      if (!item.classList.contains("el-active")) {
        active(item);
      }
    });
  });

  active(items[0]);
});
