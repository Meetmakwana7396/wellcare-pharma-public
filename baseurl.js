import axios from "axios";

export const URL = "http://localhost:3001/";
export const IMG_URL = "http://localhost:3001/pictures/";
export const auth_code = "wellcarepharma123";

export const uploadImage = (img) => {
  return new Promise((resolve, reject) => {
    let formData = new FormData();
    formData.append("picture", img);
    axios({
      method: "post",
      url: `${URL}api/upload-image`,
      data: formData,
    })
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

export const toIndianCurrency = (price) => {
  const formattedPrice = parseFloat(price.replace(/[^0-9.]/g, "")).toFixed(2);
  const formattedPriceWithCommas = formattedPrice.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ","
  );
  return `₹${formattedPriceWithCommas}`;
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date
  );
  const day = String(date.getDate()).padStart(2, "0");

  return `${year} - ${month.toLowerCase()} - ${day}`;
};

export const statusMap = [
  { key: "1", value: "pending" },
  { key: "2", value: "packed" },
  { key: "3", value: "shipped" },
  { key: "4", value: "delivered" },
];

export function getOrderStatus(key) {
  const statusObject = statusMap.find((status) => status.key == key);
  return statusObject ? statusObject.value : null;
}
