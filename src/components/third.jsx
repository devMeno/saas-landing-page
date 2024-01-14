import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

export default function Third() {
     return (
          <>
               <div className="text-center pt-40 pb-32">
                    <div className="justify-center m-auto w-2/5">
                         <span>|Email Builder</span><br />
                         <span className="text-4xl font-semibold w-3/12">Explore Our Email Builder for Optimal Newsletter Performance</span><br />
                    </div>
                    <span className="text-xl">We offer a set of features to help you achieve the best performance for your newsletters.</span>
               </div>
               <div className="flex w-full flex-col">
                    <Tabs aria-label="Options">
                         <Tab key="photos" title="Photos">
                              <Card>
                                   <CardBody>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                   </CardBody>
                              </Card>
                         </Tab>
                         <Tab key="music" title="Music">
                              <Card>
                                   <CardBody>
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                   </CardBody>
                              </Card>
                         </Tab>
                         <Tab key="videos" title="Videos">
                              <Card>
                                   <CardBody>
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                   </CardBody>
                              </Card>
                         </Tab>
                    </Tabs>
               </div>
          </>
     )
}