const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

const globalList = document.querySelector(".gallery")
const img = images.map(listGal => {
  const item = document.createElement("li");
  globalList.append(item);
  const img = document.createElement("img");
  item.append(img);
  img.setAttribute("src", listGal.url);
  img.setAttribute("alt", listGal.alt);
  img.classList.add("img-gla");
  img.style.width = "360px";
  img.style.height = "300px";
  item.style.listStyleType = "none";
  globalList.style.whidth = "1128px";
  globalList.style.display = "flex";
  globalList.style.justifyContent = "center";
  globalList.style.flexWrap = "wrap";
  globalList.style.gap = "20px";
})