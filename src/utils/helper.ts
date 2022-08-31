export const convertToXlsx = (arr) => {
  const array = [Object.keys(arr[0])].concat(arr);
  return array
    .map((it) => {
      return Object.values(it).toString();
    })
    .join("\n");
};

export const bulkDownload = (data) => {
  if (data.length) {
    const url = window.URL.createObjectURL(new Blob([convertToXlsx(data)]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "view.xlsx"); //or any other extension
    document.body.appendChild(link);
    link.click();
  }
};

export const capitalize = (label) =>
  label.charAt(0).toUpperCase() + label.slice(1);
