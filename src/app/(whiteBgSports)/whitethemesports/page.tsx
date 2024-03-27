import React from "react";
import Link from "next/link";
import Image from "next/image";
import imageone from "../../Imageone.jpg";
import imagetwo from "../../Imagetwo.jpg";
import imagethree from "../../Imagethree.jpg";
import imagefour from "../../Imagefour.jpg";

export default function Sports() {
  return (
    <main
      className="flex w-screen h-screen m-0 p-0 flex-col items-center "
      id="Whitemaintag"
    >
      {/* Navbar Section of the white theme start*/}
      <nav className="flex">
        <div className="m-4 relative right-[41%] top-5">
          <Link href="#" className="text-black m-4 relative top-4 font-bold">
            Sports
          </Link>
          <hr className=" relative top-4 left-4 border-1 border-blue-400 w-12" />
        </div>
        <div className="m-4 relative right-[41%] top-5">
          <Link
            href="./themelight"
            className="text-black m-4 relative top-4 font-bold"
          >
            Home
          </Link>
          <hr className=" relative top-4 left-4 border-1 border-blue-400 w-12" />
        </div>
      </nav>
      {/* Navbar section end */}

      {/* Images of the White theme section */}
      <div
        className="flex relative top-12  flex-wrap justify-center items-center"
        id="Whitesportdiv"
      >
        <div className=" p-2 m-4 bg-gray-700">
          <Image
            src={imageone}
            alt="Man with baseball bat"
            className="bg-cover bg-no-repeat "
          />
          <span className="relative top-1 left-2">
            <h1 className="text-white">Sacramento River Cats</h1>
          </span>
          <div className="flex m-2 justify-between bg-gray-600 p-2">
            <span className="flex flex-col">
              <h2 className="text-white opacity-40">Total Events</h2>
              <h3 className="text-white">48 Events</h3>
            </span>
            <span className="flex flex-col">
              <h2 className="text-white opacity-40">Sports</h2>
              <h3 className="text-white">Baseball</h3>
            </span>
          </div>
        </div>

        <div className=" p-2 m-4 bg-gray-700">
          <Image
            src={imagetwo}
            alt="Man with baseball bat"
            className="bg-cover bg-no-repeat "
          />
          <span className="relative top-1 left-2">
            <h1 className="text-white">Las Vegas Aviators</h1>
          </span>
          <div className="flex m-2 justify-between bg-gray-600 p-2">
            <span className="flex flex-col">
              <h2 className="text-white opacity-40">Total Events</h2>
              <h3 className="text-white">28 Events</h3>
            </span>
            <span className="flex flex-col">
              <h2 className="text-white opacity-40">Sports</h2>
              <h3 className="text-white">Baseball</h3>
            </span>
          </div>
        </div>

        <div className=" p-2 m-4 bg-gray-700">
          <Image
            src={imagethree}
            alt="Man with baseball bat"
            className="bg-cover bg-no-repeat "
          />
          <span className="relative top-1 left-2">
            <h1 className="text-white">Sacramento River Cats</h1>
          </span>
          <div className="flex m-2 justify-between bg-gray-600 p-2">
            <span className="flex flex-col">
              <h2 className="text-white opacity-40">Total Events</h2>
              <h3 className="text-white">15 Events</h3>
            </span>
            <span className="flex flex-col">
              <h2 className="text-white opacity-40">Sports</h2>
              <h3 className="text-white">Ice Hockey</h3>
            </span>
          </div>
        </div>

        <div className=" p-2 m-4 bg-gray-700">
          <Image
            src={imagefour}
            alt="Man with baseball bat"
            className="bg-cover bg-no-repeat "
          />
          <span className="relative top-1 left-2">
            <h1 className="text-white">Las Vegas Aviators</h1>
          </span>
          <div className="flex m-2 justify-between bg-gray-600 p-2">
            <span className="flex flex-col">
              <h2 className="text-white opacity-40">Total Events</h2>
              <h3 className="text-white">28 Events</h3>
            </span>
            <span className="flex flex-col">
              <h2 className="text-white opacity-40">Sports</h2>
              <h3 className="text-white">Baseball</h3>
            </span>
          </div>
        </div>

        <div className=" p-2 m-4 bg-gray-700">
          <Image
            src={imageone}
            alt="Man with baseball bat"
            className="bg-cover bg-no-repeat "
          />
          <span className="relative top-1 left-2">
            <h1 className="text-white">Sacramento River Cats</h1>
          </span>
          <div className="flex m-2 justify-between bg-gray-600 p-2">
            <span className="flex flex-col">
              <h2 className="text-white opacity-40">Total Events</h2>
              <h3 className="text-white">48 Events</h3>
            </span>
            <span className="flex flex-col">
              <h2 className="text-white opacity-40">Sports</h2>
              <h3 className="text-white">Baseball</h3>
            </span>
          </div>
        </div>

        <div className=" p-2 m-4 bg-gray-700">
          <Image
            src={imagetwo}
            alt="Man with baseball bat"
            className="bg-cover bg-no-repeat "
          />
          <span className="relative top-1 left-2">
            <h1 className="text-white">Las Vegas Aviators</h1>
          </span>
          <div className="flex m-2 justify-between bg-gray-600 p-2">
            <span className="flex flex-col">
              <h2 className="text-white opacity-40">Total Events</h2>
              <h3 className="text-white">28 Events</h3>
            </span>
            <span className="flex flex-col">
              <h2 className="text-white opacity-40">Sports</h2>
              <h3 className="text-white">Baseball</h3>
            </span>
          </div>
        </div>

        <div className=" p-2 m-4 bg-gray-700">
          <Image
            src={imagethree}
            alt="Man with baseball bat"
            className="bg-cover bg-no-repeat "
          />
          <span className="relative top-1 left-2">
            <h1 className="text-white">Sacramento River Cats</h1>
          </span>
          <div className="flex m-2 justify-between bg-gray-600 p-2">
            <span className="flex flex-col">
              <h2 className="text-white opacity-40">Total Events</h2>
              <h3 className="text-white">15 Events</h3>
            </span>
            <span className="flex flex-col">
              <h2 className="text-white opacity-40">Sports</h2>
              <h3 className="text-white">Ice Hockey</h3>
            </span>
          </div>
        </div>

        <div className=" p-2 m-4 bg-gray-700">
          <Image
            src={imagefour}
            alt="Man with baseball bat"
            className="bg-cover bg-no-repeat "
          />
          <span className="relative top-1 left-2">
            <h1 className="text-white">Las Vegas Aviators</h1>
          </span>
          <div className="flex m-2 justify-between bg-gray-600 p-2">
            <span className="flex flex-col">
              <h2 className="text-white opacity-40">Total Events</h2>
              <h3 className="text-white">28 Events</h3>
            </span>
            <span className="flex flex-col">
              <h2 className="text-white opacity-40">Sports</h2>
              <h3 className="text-white">Baseball</h3>
            </span>
          </div>
        </div>

        <div className=" p-2 m-4 bg-gray-700">
          <Image
            src={imageone}
            alt="Man with baseball bat"
            className="bg-cover bg-no-repeat "
          />
          <span className="relative top-1 left-2">
            <h1 className="text-white">Sacramento River Cats</h1>
          </span>
          <div className="flex m-2 justify-between bg-gray-600 p-2">
            <span className="flex flex-col">
              <h2 className="text-white opacity-40">Total Events</h2>
              <h3 className="text-white">48 Events</h3>
            </span>
            <span className="flex flex-col">
              <h2 className="text-white opacity-40">Sports</h2>
              <h3 className="text-white">Baseball</h3>
            </span>
          </div>
        </div>

        <div className=" p-2 m-4 bg-gray-700">
          <Image
            src={imagetwo}
            alt="Man with baseball bat"
            className="bg-cover bg-no-repeat "
          />
          <span className="relative top-1 left-2">
            <h1 className="text-white">Las Vegas Aviators</h1>
          </span>
          <div className="flex m-2 justify-between bg-gray-600 p-2">
            <span className="flex flex-col">
              <h2 className="text-white opacity-40">Total Events</h2>
              <h3 className="text-white">28 Events</h3>
            </span>
            <span className="flex flex-col">
              <h2 className="text-white opacity-40">Sports</h2>
              <h3 className="text-white">Baseball</h3>
            </span>
          </div>
        </div>

        <div className=" p-2 m-4 bg-gray-700">
          <Image
            src={imagethree}
            alt="Man with baseball bat"
            className="bg-cover bg-no-repeat "
          />
          <span className="relative top-1 left-2">
            <h1 className="text-white">Sacramento River Cats</h1>
          </span>
          <div className="flex m-2 justify-between bg-gray-600 p-2">
            <span className="flex flex-col">
              <h2 className="text-white opacity-40">Total Events</h2>
              <h3 className="text-white">15 Events</h3>
            </span>
            <span className="flex flex-col">
              <h2 className="text-white opacity-40">Sports</h2>
              <h3 className="text-white">Ice Hockey</h3>
            </span>
          </div>
        </div>

        <div className=" p-2 m-4 bg-gray-700">
          <Image
            src={imagefour}
            alt="Man with baseball bat"
            className="bg-cover bg-no-repeat "
          />
          <span className="relative top-1 left-2">
            <h1 className="text-white">Las Vegas Aviators</h1>
          </span>
          <div className="flex m-2 justify-between bg-gray-600 p-2">
            <span className="flex flex-col">
              <h2 className="text-white opacity-40">Total Events</h2>
              <h3 className="text-white">28 Events</h3>
            </span>
            <span className="flex flex-col">
              <h2 className="text-white opacity-40">Sports</h2>
              <h3 className="text-white">Baseball</h3>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
