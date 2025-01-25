import Select from 'react-select';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useState } from 'react';
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
const FormElements = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="flex items-center justify-between p-3">
              <h3 className="font-medium text-black dark:text-white">
                Order Items
              </h3>
              <div className="App mt-2">
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  placeholder="Bill to"
                />
              </div>
            </div>
            <ul className="flex flex-col pt-4 space-y-2">
              <li className="flex items-start justify-between">
                <h3 className="flex items-center justify-center gap-2">
                  <button>
                    <RiDeleteBin6Line />
                  </button>
                  Hard taco, chicken
                  <span className="text-sm dark:text-violet-600">x3</span>
                </h3>
                <div className="text-right">
                  <span className="block">$7.50</span>
                  <span className="text-sm dark:text-gray-600">à $2.50</span>
                </div>
              </li>
              <li className="flex items-start justify-between">
                <h3 className="flex items-center justify-center gap-2">
                  <button>
                    <RiDeleteBin6Line />
                  </button>
                  Hard taco, beef
                  <span className="text-sm dark:text-violet-600">x3</span>
                </h3>
                <div className="text-right">
                  <span className="block">$8.25</span>
                  <span className="text-sm dark:text-gray-600">à $2.75</span>
                </div>
              </li>
              <li className="flex items-start justify-between">
                <h3 className="flex items-center justify-center gap-2">
                  <button>
                    <RiDeleteBin6Line />
                  </button>
                  Curly fries
                  <span className="text-sm dark:text-violet-600">x1</span>
                </h3>
                <div className="text-right">
                  <span className="block">$1.75</span>
                  <span className="text-sm dark:text-gray-600">à $1.75</span>
                </div>
              </li>
              <li className="flex items-start justify-between">
                <h3 className="flex items-center justify-center gap-2">
                  <button>
                    <RiDeleteBin6Line />
                  </button>
                  Large soda
                  <span className="text-sm dark:text-violet-600">x2</span>
                </h3>
                <div className="text-right">
                  <span className="block">$4.00</span>
                  <span className="text-sm dark:text-gray-600">à $2.00</span>
                </div>
              </li>
            </ul>
            <div className="pt-4 space-y-2">
              <div>
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>$21.50</span>
                </div>
                <div className="flex items-center space-x-2 text-xs">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-3 h-3 mt-1 fill-current dark:text-violet-600"
                  >
                    <path d="M485.887,263.261,248,25.373A31.791,31.791,0,0,0,225.373,16H64A48.055,48.055,0,0,0,16,64V225.078A32.115,32.115,0,0,0,26.091,248.4L279.152,486.125a23.815,23.815,0,0,0,16.41,6.51q.447,0,.9-.017a23.828,23.828,0,0,0,16.79-7.734L486.581,296.479A23.941,23.941,0,0,0,485.887,263.261ZM295.171,457.269,48,225.078V64A16.019,16.019,0,0,1,64,48H225.373L457.834,280.462Z"></path>
                    <path d="M148,96a52,52,0,1,0,52,52A52.059,52.059,0,0,0,148,96Zm0,72a20,20,0,1,1,20-20A20.023,20.023,0,0,1,148,168Z"></path>
                  </svg>
                  <span className="dark:text-gray-600">
                    Spend $20.00, get 20% off
                  </span>
                </div>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span>-$4.30</span>
              </div>
            </div>
            <div className="pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Service fee</span>
                <span>$0.50</span>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <span>Delivery fee</span>
                  <span>$4.00</span>
                </div>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline dark:text-violet-600"
                >
                  How do our fees work?
                </a>
              </div>
              <div className="space-y-6">
                <div className="flex justify-between">
                  <span>Total</span>
                  <span className="font-semibold">$22.70</span>
                </div>
                <button
                  type="button"
                  className="w-full py-2 font-semibold border rounded dark:bg-violet-600 dark:text-gray-50 dark:border-violet-600"
                >
                  Go to kitchen
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9">
          <div
            data-hs-carousel='{
    "loadingClasses": "opacity-0"
  }'
            className="relative"
          >
            <div className="hs-carousel flex space-x-2">
              <div className="flex-none">
                <div className="hs-carousel-pagination max-h-180 flex flex-col gap-y-2 overflow-y-auto">
                  <div className="hs-carousel-pagination-item shrink-0 border rounded-md overflow-hidden cursor-pointer w-[150px] h-[150px] hs-carousel-active:border-blue-400">
                    <div className="flex justify-center h-full bg-gray-100 p-2 dark:bg-neutral-900">
                      <span className="self-center text-xs text-gray-800 transition duration-700 dark:text-white">
                        First slide
                      </span>
                    </div>
                  </div>
                  <div className="hs-carousel-pagination-item shrink-0 border rounded-md overflow-hidden cursor-pointer w-[150px] h-[150px] hs-carousel-active:border-blue-400">
                    <div className="flex justify-center h-full bg-gray-200 p-2 dark:bg-neutral-800">
                      <span className="self-center text-xs text-gray-800 transition duration-700 dark:text-white">
                        Second slide
                      </span>
                    </div>
                  </div>
                  <div className="hs-carousel-pagination-item shrink-0 border rounded-md overflow-hidden cursor-pointer w-[150px] h-[150px] hs-carousel-active:border-blue-400">
                    <div className="flex justify-center h-full bg-gray-300 p-2 dark:bg-neutral-700">
                      <span className="self-center text-xs text-gray-800 transition duration-700 dark:text-white">
                        Third slide
                      </span>
                    </div>
                  </div>
                  <div className="hs-carousel-pagination-item shrink-0 border rounded-md overflow-hidden cursor-pointer w-[150px] h-[150px] hs-carousel-active:border-blue-400">
                    <div className="flex justify-center h-full bg-gray-100 p-2 dark:bg-neutral-900">
                      <span className="self-center text-xs text-gray-800 transition duration-700 dark:text-white">
                        Fourth slide
                      </span>
                    </div>
                  </div>
                  <div className="hs-carousel-pagination-item shrink-0 border rounded-md overflow-hidden cursor-pointer w-[150px] h-[150px] hs-carousel-active:border-blue-400">
                    <div className="flex justify-center h-full bg-gray-200 p-2 dark:bg-neutral-800">
                      <span className="self-center text-xs text-gray-800 transition duration-700 dark:text-white">
                        Fifth slide
                      </span>
                    </div>
                  </div>
                  <div className="hs-carousel-pagination-item shrink-0 border rounded-md overflow-hidden cursor-pointer w-[150px] h-[150px] hs-carousel-active:border-blue-400">
                    <div className="flex justify-center h-full bg-gray-300 p-2 dark:bg-neutral-700">
                      <span className="self-center text-xs text-gray-800 transition duration-700 dark:text-white">
                        Sixth slide
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative grow overflow-hidden min-h-96 bg-white dark:bg-gray-800 rounded-lg">
                <h3 className="font-medium flex items-center justify-center text-black dark:text-white">
                  Select Item
                </h3>
                <div className="App mt-2">
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                  />
                </div>
                <div className="mt-3 hs-carousel-pagination max-h-150 flex flex-col gap-y-2 overflow-y-auto">
                  <div className="grid gap-4">
                    <div className="grid grid-cols-5 gap-4">
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="relative flex flex-col w-full h-full text-gray-700 dark:text-white bg-white dark:bg-boxdark shadow-md rounded-xl bg-clip-border">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 dark:text-white bg-white dark:bg-boxdark rounded-none bg-clip-border">
              <div className="flex items-center justify-between gap-8 mb-8">
                <div>
                  <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Pre Order list
                  </h5>
                </div>
              </div>
            </div>
            <div className="p-6 px-0 overflow-scroll">
              <table className="w-full text-left table-auto min-w-max">
                <thead>
                  <tr>
                    <th className="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
                      <p className="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                        Bill To
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="w-4 h-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                          ></path>
                        </svg>
                      </p>
                    </th>
                    <th className="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
                      <p className="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                        Food Items
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="w-4 h-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                          ></path>
                        </svg>
                      </p>
                    </th>
                    <th className="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
                      <p className="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                        Amount
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="w-4 h-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                          ></path>
                        </svg>
                      </p>
                    </th>
                    <th className="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
                      <p className="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                        Confirm
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="w-4 h-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                          ></path>
                        </svg>
                      </p>
                    </th>

                    <th className="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
                      <p className="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border-b border-blue-gray-50">
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col">
                          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                            John Michael
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        4 Items
                      </p>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        2300
                      </p>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <div className="flex flex-col">
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                          Bill
                        </p>
                      </div>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <button
                        className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 dark:text-gray-2 transition-all hover:bg-gray-900/10 dark:hover:bg-blue-200 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                      >
                        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            className="w-4 h-4"
                          >
                            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                          </svg>
                        </span>
                      </button>
                      <button
                        className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 dark:text-gray-2 transition-all hover:bg-gray-900/10 dark:hover:bg-blue-200 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                      >
                        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                          <svg
                            fill="currentColor"
                            height="20px"
                            width="20px"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 64 64"
                          >
                            <g id="Printer">
                              <path
                                d="M57.7881012,14.03125H52.5v-8.0625c0-2.2091999-1.7909012-4-4-4h-33c-2.2091999,0-4,1.7908001-4,4v8.0625H6.2119002
		C2.7871001,14.03125,0,16.8183498,0,20.2431507V46.513649c0,3.4248009,2.7871001,6.2119026,6.2119002,6.2119026h2.3798995
		c0.5527,0,1-0.4472008,1-1c0-0.5527-0.4473-1-1-1H6.2119002C3.8896,50.7255516,2,48.8359489,2,46.513649V20.2431507
		c0-2.3223,1.8896-4.2119007,4.2119002-4.2119007h51.5762024C60.1102982,16.03125,62,17.9208508,62,20.2431507V46.513649
		c0,2.3223-1.8897018,4.2119026-4.2118988,4.2119026H56c-0.5527992,0-1,0.4473-1,1c0,0.5527992,0.4472008,1,1,1h1.7881012
		C61.2128983,52.7255516,64,49.9384499,64,46.513649V20.2431507C64,16.8183498,61.2128983,14.03125,57.7881012,14.03125z
		 M13.5,5.96875c0-1.1027999,0.8971996-2,2-2h33c1.1027985,0,2,0.8972001,2,2v8h-37V5.96875z"
                              />
                              <path
                                d="M44,45.0322495H20c-0.5517998,0-0.9990005,0.4472008-0.9990005,0.9990005S19.4482002,47.0302505,20,47.0302505h24
		c0.5517006,0,0.9990005-0.4472008,0.9990005-0.9990005S44.5517006,45.0322495,44,45.0322495z"
                              />
                              <path
                                d="M44,52.0322495H20c-0.5517998,0-0.9990005,0.4472008-0.9990005,0.9990005S19.4482002,54.0302505,20,54.0302505h24
		c0.5517006,0,0.9990005-0.4472008,0.9990005-0.9990005S44.5517006,52.0322495,44,52.0322495z"
                              />
                              <circle cx="7.9590998" cy="21.8405495" r="2" />
                              <circle cx="14.2856998" cy="21.8405495" r="2" />
                              <circle cx="20.6121998" cy="21.8405495" r="2" />
                              <path d="M11,62.03125h42v-26H11V62.03125z M13.4036999,38.4349518h37.1925964v21.1925964H13.4036999V38.4349518z" />
                            </g>
                          </svg>
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormElements;
