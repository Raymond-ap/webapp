import { useState } from "react";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [ShowMessage, setShow] = useState(false);

  const onSubmit = () => {
    setLoading(true);

    setTimeout(() => {
      setShow(true);
      setLoading(!loading);
    }, 2000);
  };

  return (
    <div className="bg-gray-100 h-full">
      <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <a href="#" className="text-lg lg:text-xl font-bold text-gray-800">
          Check out
        </a>
      </div>

      {!ShowMessage ? (
        <div className="mx-2">
          <div className=" mt-5 w-full max-w-lg mx-auto bg-white">
            <div className="bg-yellow-100 w-full p-4">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="w-8 h-8 rounded-full bg-white"> </div>
                <p className="mt-3 mb-2 font-bold text-xs">Fortune Synergy</p>
                {/* <p className="font-meduim text-gray-500 text-xs">0244544545</p> */}
              </div>
              <div className="h-0.5 w-full bg-gray-300 my-2" />
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-gray-900">
                  Youe will be charged
                </p>
                <p className="font-semibold text-gray-900 font-sm">
                  <span className="text-xs font-light">GHS</span>399.00
                </p>
              </div>
            </div>
            <div className=" mt-10 w-full p-5">
              <p className="text-md md:text-lg lg:text-xl font-medium">
                Payment with
              </p>

              <div className="">
                <div>
                  <form className="mt-5 grid gap-6">
                    <div className="relative">
                      <div className="p-4 peer-checked:border-2 peer-checked:border-gray-100  rounded-lg border border-gray-300 ">
                        <input
                          className="peer hidden mb-3"
                          id="radio_1"
                          type="radio"
                          name="radio"
                          checked
                        />
                        <span className="peer-checked:border-gray-100 peer-checked:bg-green-500 absolute left-4 top-9 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-2 border-gray-100 bg-white"></span>
                        <label
                          className="flex cursor-pointer select-nonep-4 items-center"
                          htmlFor="radio_1"
                        >
                          <div className="w-full flex items-center ">
                            <div className="ml-7 flex-1">
                              <span className="mt-2 font-normal text-base ">
                                Mobile Money
                              </span>
                            </div>
                            <div className="flex flex-row items-end justify-end">
                              <div className="w-8 h-8">
                                <img
                                  className="h-full w-full object-contain"
                                  src="https://play-lh.googleusercontent.com/dhCF7DNax5n9y1Twn2fJi5w5e2hntmpy4savqt8IcjTv5TAQYHLobv_3N3wgKvmAon0"
                                  alt=""
                                />
                              </div>
                              <div className="w-8 h-8 mx-3">
                                <img
                                  className="h-full w-full object-contain"
                                  src="https://tpaymobile.com/app/uploads/2021/01/Wallets-Show-more-400x200-2.png"
                                  alt=""
                                />{" "}
                              </div>
                              <div className="w-8 h-8">
                                <img
                                  className="h-full w-full object-contain"
                                  src="https://infinityfordesign.com/wp-content/uploads/2021/07/VodafoneCashD3.png"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </label>
                        <div className="peer-checked:block hidden h-0.5 w-full bg-gray-100 my-3 transition-all delay-200" />
                        <div className="peer-checked:block hidden transition-all delay-200 mt-5">
                          <span className="mt-2 font-normal text-base text-gray-600">
                            Provider <span className="text-red-400">*</span>
                          </span>

                          <div className="relative flex-shrink-0 w-full my-3">
                            <select
                              name="provider"
                              className="w-full text-sm rounded-md border border-gray-200 px-4 py-3 shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-gray-100"
                            >
                              <option disabled className="text-sm font-bold">
                                Select Provider
                              </option>
                              <option value="MTN">MTN</option>
                              <option value="VODAFONE">VODAFONE</option>
                              <option value="AIRTELTIGO">AIRTELTIGO</option>
                            </select>
                          </div>

                          <div className="relative flex-shrink-0 w-full">
                            <input
                              type="text"
                              id="billing-address"
                              name="billing-address"
                              className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-gray-100 focus:ring-gray-100"
                              placeholder="Street Address"
                            />
                            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                              <img
                                className="h-4 w-4 object-contain"
                                src="https://img.icons8.com/color/48/ghana.png"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <input
                        className="peer hidden"
                        id="radio_2"
                        type="radio"
                        name="radio"
                        checked
                      />
                      <span className="peer-checked:border-gray-100 peer-checked:bg-green-500 absolute left-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-2 border-gray-100 bg-white"></span>
                      <label
                        className="peer-checked:border-2 peer-checked:border-gray-100  flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                        htmlFor="radio_2"
                      >
                        <div className="ml-7">
                          <span className="mt-2 font-normal text-base ">
                            Hubtel Balance
                          </span>
                        </div>
                        <img
                          className="w-14 object-contain"
                          src="/images/oG8xsl3xsOkwkMsrLGKM4.png"
                          alt=""
                        />
                      </label>
                    </div>
                  </form>
                </div>

                <div className="my-10"></div>
              </div>
              <button
                disabled={loading}
                onClick={() => onSubmit()}
                className="mt-4 mb-8 w-full rounded-md hover:bg-green-500 bg-green-300 px-6 py-3 font-medium text-white"
              >
                {loading ? "Please wait" : "Pay"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <SuccessWrapper />
      )}
    </div>
  );
};

const SuccessWrapper = () => (
  <div className="mx-2">
    <div className=" mt-5 w-full max-w-lg mx-auto bg-white">
      <div className=" mt-10 w-full p-5 flex flex-col items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-green-600 mb-4"></div>
        <p className="text-md md:text-lg lg:text-xl font-medium text-center">
          You have successfully initiated payment
        </p>
        <p className="mt-3 text-base font-normal text-center">
          Check your phone for the confirmation
        </p>

        <button
          onClick={() => {
            window.location.reload();
          }}
          className="mt-10 w-full rounded-md hover:bg-green-500 bg-green-300 px-6 py-2 font-medium text-white"
        >
          Back home
        </button>
      </div>
    </div>
  </div>
);

export default Checkout;
