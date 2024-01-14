import { Image } from "@nextui-org/react";


export default function Second() {
     return (
          <>
               <div className="px-32">
                    <div className="flex space-x-4 h-96">
                         <div className="w-1/2 bg-gray-300 p-1.5">
                              <Image
                                   // width={300}
                                   alt="NextUI hero Image"
                                   src=""
                                   className="w-full"
                              />
                         </div>
                         <div className="w-1/2 flex bg-gray-200 space-x-4">
                              <div className="w-1/2 bg-gray-300 p-1.5">
                                   <Image
                                        // width={300}
                                        alt="NextUI hero Image"
                                        src=""
                                        className="h-full"
                                   />
                              </div>
                              <div className="w-1/2 bg-gray-200 space-y-4 p-1.5">
                                   <div className="h-2/5 bg-gray-300">
                                        <Image
                                             // width={300}
                                             alt="NextUI hero Image"
                                             src=""
                                        />
                                   </div>
                                   <div className="h-2/5 bg-gray-300">
                                        <Image
                                             // width={300}
                                             alt="NextUI hero Image"
                                             src=""
                                        />
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="flex justify-between my-12">
                         <span className="text-xl font-semibold flex items-center w-1/5">
                              Used by big companies around the world
                         </span>
                         <i class="devicon-amazonwebservices-plain-wordmark text-9xl"></i>
                         <i class="devicon-amazonwebservices-plain-wordmark text-9xl"></i>
                         <i class="devicon-amazonwebservices-plain-wordmark text-9xl"></i>
                         <i class="devicon-amazonwebservices-plain-wordmark text-9xl"></i>
                         {/* <img src="" alt="" />
                         <img src="" alt="" />
                         <img src="" alt="" />
                         <img src="" alt="" />
                         <div className="bg-red-500 h-40">
                              Bonjour les amis
                         </div>
                         <div className="bg-red-500 h-40">Bonjour les amis</div>
                         <div className="bg-red-500 h-40">Bonjour les amis</div>
                         <div className="bg-red-500 h-40">Bonjour les amis</div>
                         <div className="bg-red-500 h-40">Bonjour les amis</div> */}
                    </div>
               </div>
          </>
     )
}