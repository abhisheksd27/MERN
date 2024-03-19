import React from "react";
import MobileList from "./MobileList";
import books from "./books.json";
// const books = [
//   {
//     image:
//       "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/b/i/o/14-mzb0gfcin-xiaomi-original-imagyrget5qy3gqw.jpeg?q=70&crop=false",
//     title: "Xiaomi 14",
//     price: "100",
//   },
//   {
//     image:
//       "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/b/i/o/14-mzb0gfcin-xiaomi-original-imagyrget5qy3gqw.jpeg?q=70&crop=false",
//     title: "Xiaomi 20",
//     price: "300",
//   },
// ];

const Mobile = () => {
  return (
    <div>
      {books.map((ele) => {
        return (
          <MobileList image={ele.image} title={ele.title} price={ele.price} />
        );
      })}
    </div>
  );
};

export default Mobile;
