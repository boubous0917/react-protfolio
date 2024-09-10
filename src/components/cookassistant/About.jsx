import React from "react";
import FIVE from "../../assets/five_util.jpg";
import chart from "../../assets/ca_chart.jpg";
import system from "../../assets/ca_system.jpg";
import video from "../../assets/projects/videos/ca_video.mp4";
import { BsLaptopFill } from "react-icons/bs";
import { FaTablet } from "react-icons/fa6";
import { IoPhonePortrait } from "react-icons/io5";
import { GiKnifeFork } from "react-icons/gi";
import { BsPeopleFill } from "react-icons/bs";
import { FaChartBar } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { IoStorefrontSharp } from "react-icons/io5";

const About = () => {
  return (
    <section id="about" className="p-12 bg-white">
      <h1 className="my-20 text-4xl font-bold text-center">專案介紹</h1>
      {/* 影片介紹 */}
      <div className="text-2xl font-semibold text-center">影片介紹</div>
      <hr />
      <div className=" container h-[50vh] flex items-center justify-center py-2 mb-6">
        <div className="flex items-center justify-center p-5">
          <video
            className="border-4 shadow-lg rounded-2xl border-slate-600"
            width={480}
            height={350}
            controls
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
      {/* 三大系統 */}
      <h2 className="mt-6 text-2xl font-semibold text-center">三大系統</h2>
      <hr />
      <div className="h-[50vh] flex flex-row items-center justify-center gap-6 py-2 mt-6 mb-6">
        <div className="flex-col items-center justify-center w-1/3">
          <div className="flex items-center justify-center text-center">
            <BsLaptopFill className="mb-4 text-8xl text-sky-600" />
          </div>
          <p className="text-sm font-semibold text-center md:text-3xl">
            後台管理系統
          </p>
        </div>
        <div className="flex-col items-center justify-center w-1/3">
          <div className="flex items-center justify-center text-center">
            <FaTablet className="mb-4 text-gray-400 text-8xl" />
          </div>
          <p className="text-sm font-semibold text-center md:text-3xl">
            員工使用系統
          </p>
        </div>
        <div className="flex-col items-center justify-center w-1/3">
          <div className="flex items-center justify-center text-center">
            <IoPhonePortrait className="mb-4 text-green-600 text-8xl" />
          </div>
          <p className="text-sm font-semibold text-center md:text-3xl">
            自助點餐系統
          </p>
        </div>
      </div>
      {/* 五大架構 */}
      <h2 className="text-2xl font-semibold text-center">五大功能架構</h2>
      <hr />
      <div className="h-[25vh] flex flex-row items-center justify-center gap-6 py-2 mt-6 mb-6">
        <div className="flex-col items-center justify-center w-1/3">
          <div className="flex items-center justify-center text-center">
            <GiKnifeFork className="mb-4 text-7xl md:text-8xl text-amber-500" />
          </div>
          <p className="font-semibold tracking-widest text-center text-md md:text-2xl">
            自助點餐
          </p>
          <p className="text-sm font-semibold text-center md:text-xl">
            商品管理
          </p>
          <p className="text-sm font-semibold text-center md:text-xl">
            點餐介面
          </p>
          <p className="text-sm font-semibold text-center md:text-xl">
            訂單管理
          </p>
        </div>
        <div className="flex-col items-center justify-center w-1/3">
          <div className="flex items-center justify-center text-center">
            <BsPeopleFill className="mb-4 text-blue-400 text-7xl md:text-8xl" />
          </div>
          <p className="font-semibold tracking-widest text-center text-md md:text-2xl">
            人事管理
          </p>
          <p className="text-sm font-semibold text-center md:text-xl">
            員工管理
          </p>
          <p className="text-sm font-semibold text-center md:text-xl">
            權限管理
          </p>
          <p className="text-sm font-semibold text-center md:text-xl">
            班表功能
          </p>
          <p className="text-sm font-semibold text-center md:text-xl">
            打卡功能
          </p>
        </div>
        <div className="flex-col items-center justify-center w-1/3">
          <div className="flex items-center justify-center text-center">
            <FaChartBar className="mb-4 text-orange-500 text-7xl md:text-8xl" />
          </div>
          <p className="font-semibold tracking-widest text-center text-md md:text-2xl">
            銷售視覺化
          </p>
          <p className="text-sm font-semibold text-center md:text-2xl">
            營收紀錄
          </p>
          <p className="text-sm font-semibold text-center md:text-2xl">
            營收查詢
          </p>
          <p className="text-sm font-semibold text-center md:text-2xl">
            銷售查詢
          </p>
        </div>
      </div>
      <div className="h-[25vh] flex flex-row items-center justify-center gap-1 py-2 mt-6 mb-6">
        <div className="flex-col items-center justify-center w-1/2">
          <div className="flex items-center justify-center text-center">
            <AiFillProduct className="mb-4 text-green-600 text-7xl md:text-8xl" />
          </div>
          <p className="font-semibold tracking-widest text-center text-md md:text-2xl">
            進銷存控管
          </p>
          <p className="text-sm font-semibold text-center md:text-2xl">
            原物料管理
          </p>
          <p className="text-sm font-semibold text-center md:text-2xl">
            庫存管理
          </p>
          <p className="text-sm font-semibold text-center md:text-2xl">
            供應商管理
          </p>
        </div>
        <div className="flex-col items-center justify-center w-1/2">
          <div className="flex items-center justify-center text-center">
            <IoStorefrontSharp className="mb-4 text-blue-700 text-7xl md:text-8xl" />
          </div>
          <p className="font-semibold tracking-widest text-center text-md md:text-2xl">
            店面管理系統
          </p>
          <p className="text-sm font-semibold text-center md:text-2xl">
            開閉店流程表單
          </p>
          <p className="text-sm font-semibold text-center md:text-2xl">
            新進員工指南
          </p>
        </div>
      </div>
      {/* 五大架構 */}
    </section>
  );
};

{
  /* 左側區塊*/
}
<div className="flex flex-col items-center justify-center p-4 mx-4 md:w-1/2">
  {/* 右上側區塊*/}
  <div className="flex-1 p-4 mb-4 border-4 border-black border-opacity-50 rounded-2xl">
    <h4 className="mb-2 text-2xl font-bold text-center ">五大架構</h4>
    <p className="tracking-tighter text-md">
      運用chart.js製作用於後台管理的圖表分析，可將各種銷售的商品顯示於畫面中便於查看結果並做有效分析
    </p>
    <img
      className="flex items-center justify-center w-full mt-4 border border-opacity-50 border-slate-400 rounded-xl"
      src={FIVE}
      width={350}
      alt="system"
    />
  </div>
  {/* 右下側區塊*/}
  <div className="flex-1 p-4 border-4 border-black border-opacity-50 rounded-2xl">
    <h4 className="mb-2 text-2xl font-bold text-center">三大系統</h4>
    <p className="tracking-tighter text-md">
      面對此我們設計出一套擁有後臺管理、員工使用、以及自助點餐的系統
    </p>
    <img
      className="flex items-center justify-center mt-4 border border-opacity-50 border-slate-400 rounded-xl"
      src={system}
      width={350}
      alt="system"
    />
  </div>
</div>;
{
  /* 右側區塊*/
}
<div className="flex flex-col items-center justify-center p-4 mx-4 md:w-1/2">
  {/* 右上側區塊*/}
  <div className="flex-1 p-4 mb-4 border-4 border-black border-opacity-50 rounded-2xl">
    <h4 className="mb-2 text-2xl font-bold text-center ">五大架構</h4>
    <p className="tracking-tighter text-md">
      分成自助點餐方便消費者使用、人事管理能有效控管員工情形、店面功能紀錄開店閉店所需更像提醒、進銷存控管更能有效告知產品及物料的數量，並能提供供應商查詢，最後視覺化銷售分析整個店面的金流情形，得知熱銷商品的同時也能知道各項指標性數值
    </p>
    <img
      className="flex items-center justify-center w-full mt-4 border border-opacity-50 border-slate-400 rounded-xl"
      src={FIVE}
      width={350}
      alt="system"
    />
  </div>
  {/* 右下側區塊*/}
  <div className="flex-1 p-4 border-4 border-black border-opacity-50 rounded-2xl">
    <h4 className="mb-2 text-2xl font-bold text-center">三大系統</h4>
    <p className="tracking-tighter text-md">
      面對此我們設計出一套擁有後臺管理、員工使用、以及自助點餐的系統
    </p>
    <img
      className="flex items-center justify-center mt-4 border border-opacity-50 border-slate-400 rounded-xl"
      src={system}
      width={350}
      alt="system"
    />
  </div>
</div>;

export default About;
