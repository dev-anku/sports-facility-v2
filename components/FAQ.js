import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ({faqData}) {
    return(

        <Accordion type="single" collapsible>
            {faqData.map((item, index)=>(
                <AccordionItem key={index} value={`item-${index}`}>
                   <AccordionTrigger className="font-bold text-xl">{item.question}</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance text-lg">
                        {item.answer}
                    </AccordionContent> 
                </AccordionItem>
            ))}
        </Accordion>

    )
}


