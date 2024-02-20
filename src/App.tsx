"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Hem???",
      "Chéc chưa?",
      "Iu quá cho thử lại nè 😢😢",
      "Đi mà đồ đáng iu",
      "Một chút socola có làm em búi rúi",
      "Thêm một ly trà sữa nữa nhé?",
      "NĂN NỈ ĐÓA 🥲🥲",
      "Khóc chừ :>",
      "Ôi tim tui như muốn dừng lại",
      "Yeah already dead",
      "Tim tui đau quá man",
      "Đi mà em iu dễ thương",
      ":((((",
      "Nàm ơn đi mòa",
      "Sắp khok tới nơi rồi",
      "Huhu :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            className="rounded-lg"
          />
          <div className="my-4 text-4xl font-bold">
            😗😗 Nhìn xem ai mà dễ thương quá vậy 😍😍
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px] rounded-lg"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">
            Em iu à... Em muốn làm va lung tung của anh hem? 💕💕💕
          </h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              💕 Dạ cóaa 💕
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "Hem" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
