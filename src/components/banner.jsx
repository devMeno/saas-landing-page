import { Button } from "@nextui-org/react";

export default function Banner() {
     return (
          <>
               <div className="mt-24 px-32">
                    <p className="text-7xl font-medium space-y-4 leading-normal mt-40 mb-10">Simply Elevate your Newsletter Growth Success with <span className="text-green-500 bg-green-100 p-3 rounded-lg -ml-4 ">Letterflow</span></p>
                    <p className="w-3/5 text-xl">Discover a smarter way to boost your newsletter growth and achieve unparalleled growth and success with Letterflow's powerful tools and insights.</p>
                    <div className="flex space-x-6 my-12">
                         <Button className="justify-center py-8 w-44 bg-green-400 text-medium font-semibold">
                              Book all book
                         </Button>
                         <Button variant="bordered" className="justify-center py-8 w-44 border-gray-200 text-medium font-semibold">
                              Learn more
                         </Button>
                    </div>
               </div>
          </>
     )
}