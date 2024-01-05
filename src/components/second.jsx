import { Image } from "@nextui-org/react";


export default function Second() {
     return (
          <>
               <div className="px-32">
                    <div className="flex space-x-4">
                         <div className="w-1/2 bg-red-200 p-1.5">
                              <Image
                                   // width={300}
                                   alt="NextUI hero Image"
                                   src="https://fakeimg.pl/600x400"
                                   className="w-full"
                              />
                         </div>
                         <div className="w-1/2 flex bg-blue-200 space-x-4">
                              <div className="w-1/2 bg-red-700 p-1.5">
                                   <Image
                                        // width={300}
                                        alt="NextUI hero Image"
                                        src="https://fakeimg.pl/600x1000"
                                        className="h-full"
                                   />
                              </div>
                              <div className="w-1/2 bg-red-500 space-y-4 p-1.5">
                                   <div className="h-2/5 bg-gray-300">
                                        {/* <Image
                                             // width={300}
                                             alt="NextUI hero Image"
                                             src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                                        /> */}
                                   </div>
                                   <div className="h-2/5 bg-gray-300">
                                        {/* <Image
                                             // width={300}
                                             alt="NextUI hero Image"
                                             src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                                        /> */}
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}