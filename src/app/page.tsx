import Link from "next/link";
import Image from "next/image";
import imageone from "./Imageone.jpg";
import imagetwo from "./Imagetwo.jpg";
import imagethree from "./Imagethree.jpg";
import imagefour from "./Imagefour.jpg";
import advertisement from "./Advertisement.jpg";
import ticketone from "./Ticketone.jpg";
import tickettwo from "./Tickettwo.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";

/* Also created a custom not-found url page which will be redirected if wrong url path is entered */

export default function Home() {
  return (
    <main
      className="flex w-screen h-[100vh] m-0 p-0 flex-col items-center overflow-visible overflow-x-hidden"
      id="maintag"
    >
      {/* Theme Button to toggle to the light mode */}
      <Link
        href={"./themelight"}
        className="relative left-[35%] md:left-[40%] top-4"
      >
        <i className="fa fa-sun bg-white text-black p-2 text-3xl w-20 h-fit rounded-md text-center"></i>
      </Link>
      {/* Toggle section end */}

      {/* Main section of the  Dark mode with details about sports*/}
      <div className="m-4 relative left-0 right-[1%] top-5  lg:content-start lg:w-screen lg:left-[7%]">
        <Link
          href="#"
          className="text-white m-4 relative top-4 font-bold text-2xl"
        >
          Sports
        </Link>
        <hr className=" relative top-4 left-4 border-1 border-blue-400 w-20" />
      </div>

      <div className="flex flex-wrap relative top-12 justify-center items-center">
        <div className=" p-2 m-4 bg-gray-700 ">
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

        <div className=" p-2 m-4 bg-gray-700 ">
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

        <div className=" p-2 m-4 bg-gray-700 flex flex-col  items-center ">
          <Image
            src={advertisement}
            alt="Man with baseball bat"
            className="bg-cover bg-no-repeat "
          />
          <span className="bg-black text-white font-bold sticky bottom-full left-full ">
            Ad
          </span>
          <span className="text-white flex flex-col  justify-center mt-2 ">
            <h2>Advertisement title</h2>
          </span>
          <span className="w-1/4 ">
            <p className="w-[183px] text-sm text-white opacity-50 relative right-16 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </span>
        </div>
      </div>

      <div className="relative top-16 ">
        <Link href="./sports">
          <button className="text-white bg-blue-500 rounded-md p-2 ">
            Show More
          </button>
        </Link>
      </div>
      {/* The section with the details about sports end here */}

      {/* The Collection Spotlight section starts here */}
      <div
        className="flex flex-col  relative top-24 text-white w-screen h-screen p-10"
        id="collection"
      >
        <div className="flex flex-col items-center justify-center relative left-1 p-4  w-full bg-gray-800">
          <h1 className="font-bold relative top-12 text-2xl sm:text-3xl">
            Collection Spotlight
          </h1>
          <p className="relative top-16 text-center opacity-70">
            Discover extraordinary moments with our Spotlight Collection
            metatickets—exclusive access to premium events for an unforgettable
            experience. Grab yours today!
          </p>

          {/* Section containing the ticket */}
          <div className="flex flex-wrap justify-center items-center  relative right-20 bottom-8 ">
            <div>
              <button className="Collectionbtnone hidden xl:inline-block xl:relative xl:right-40">
                <i className="fa fa-less-than border-blue-800 border-2 text-blue-800 text-3xl p-2"></i>
              </button>
            </div>
            <div className="CollectionContainer m-2 xl:mr-12">
              <div className="collectionbg h-[300px] w-[200px] rounded-b-3xl p-4 relative top-28 left-20 ">
                <Image
                  src={ticketone}
                  alt="Ticket one"
                  className="h-[270px] w-[180px]"
                />
              </div>
              <div className="collectionbg h-[150px] w-[200px] pt-4  rounded-t-3xl flex flex-col items-center text-md relative top-28 left-20 mb-20">
                <h3 className="p-2 relative bottom-4">Las Vegas Aviators</h3>
                <h4 className="relative bottom-4 opacity-70 text-[11px]">
                  OCT 15 | SUN | 4:30 PM
                </h4>
                <h4 className="text-[11px] text-center relative bottom-4 opacity-70">
                  Las Vegas Ballpark, Las Vegas, Nevada
                </h4>
                <button className="bg-black text-white text-sm p-2 relative bottom-2">
                  Take Flight Collection
                </button>
              </div>
              <hr className=" border-dashed border-gray-400 relative left-[108px] bottom-[120px] border-2 w-36" />
            </div>

            <div className="CollectionContainer m-2">
              <div className="collectionbg h-[300px] w-[200px] p-4 rounded-b-3xl  relative top-28 left-20">
                <Image
                  src={tickettwo}
                  alt="Ticket two"
                  className="h-[270px] w-[180px]"
                />
              </div>
              <div className="collectionbg h-[150px] w-[200px] rounded-t-3xl flex flex-col  items-center relative top-28 left-20 mb-20">
                <h3 className="p-2">Sacramento River Cats</h3>
                <h4 className="opacity-70 text-[11px]">
                  OCT 15 | SUN | 4:30 PM
                </h4>
                <h4 className="text-[11px] text-center opacity-70">
                  Sutter Health Park, Sacramento, California
                </h4>
                <button className="bg-black text-white text-sm p-2 relative top-2">
                  Orange Collection
                </button>
              </div>
              <hr className=" border-dashed border-gray-400 relative left-[108px] bottom-[120px] border-2 w-36" />
            </div>

            <div className="CollectionContainer m-2 xl:ml-12">
              <div className="collectionbg h-[300px] w-[200px] p-4 rounded-b-3xl  relative top-28 left-20">
                <Image
                  src={ticketone}
                  alt="Ticket three"
                  className="h-[270px] w-[180px]"
                />
              </div>
              <div className="collectionbg h-[150px] w-[200px] rounded-t-3xl flex flex-col pt-4 items-center relative top-28 left-20 mb-20">
                <h3 className="p-2 relative bottom-4">Las Vegas Aviators</h3>
                <h4 className="relative bottom-4 opacity-70 text-[11px]">
                  OCT 15 | SUN | 4:30 PM
                </h4>
                <h4 className=" text-center relative bottom-4 opacity-70 text-[11px]">
                  Las Vegas Ballpark, Las Vegas, Nevada
                </h4>
                <button className="bg-black text-white text-sm p-2 relative bottom-2">
                  Take Flight Collection
                </button>
              </div>
              <hr className=" border-dashed border-gray-400 relative left-[108px] bottom-[120px] border-2 w-36 " />
            </div>
            <div>
              <button className="Collectionbtntwo  hidden xl:inline-block xl:relative xl:left-[300px]">
                <i className="fa fa-greater-than border-blue-800 border-2 text-blue-800  text-3xl p-2"></i>
              </button>
            </div>
          </div>
        </div>
        {/* The end of the ticket section */}
      </div>
      {/* End of the Collection Spotlight Section */}
    </main>
  );
}
