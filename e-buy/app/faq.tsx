import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"



const FAQS = () => {
    return (
      <div
        className=" mt-10 md:py-10 bg-[#f6f5f4] w-full
        rounded-3xl
        
        "
      >
        <div className=" p-10 md:p-4 md:px-20">
          <div className="text-3xl md:text-7xl font-bold text-black">
            Have questions ?
          </div>
          <div className="  font-semibold text-3xl md:text-6xl text-gradient bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-transparent">
            Get answers.
          </div>
          <Accordion type="single" collapsible className="md:text-xl mt-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is a marketing platform?</AccordionTrigger>
              <AccordionContent>
                A marketing platform is a comprehensive tool or software
                solution designed to help businesses streamline their marketing
                efforts. It typically includes features such as campaign
                management, analytics, customer segmentation, email marketing,
                social media management, and more.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How can a marketing platform benefit my business?
              </AccordionTrigger>
              <AccordionContent>
                A marketing platform can benefit your business in numerous ways,
                including: Centralizing your marketing efforts for improved
                efficiency. Providing valuable insights through analytics to
                help optimize campaigns. Automating repetitive tasks, saving
                time and resources.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Is a marketing platform suitable for small businesses?
              </AccordionTrigger>
              <AccordionContent>
                Yes, many marketing platforms offer scalable solutions that
                cater to the needs and budgets of small businesses. These
                platforms often provide flexible pricing plans and features
                tailored to smaller-scale operations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Support ?</AccordionTrigger>
              <AccordionContent>
                We offer Monday-Friday support for all our clients.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    );
}
 
export default FAQS;