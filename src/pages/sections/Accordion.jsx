import AccordionItem from '../../components/AccordionItem'
import { faq } from '../../data/FAQ'
import Faq from '../../assets/faq-logo.svg'


export default function Accordion() {
    return (
        <section className="w-full flex flex-col items-center py-12 px-4">
            <img src={Faq} alt="faq" className='h-13 w-13'/>
            <h1 className="section-title mb-8 text-center">Частые вопросы</h1>

            <div className="w-full max-w-5xl space-y-4">
                {faq.map((item) => (
                    <AccordionItem key={item.id} title={item.question}>
                        {item.answer}
                    </AccordionItem>
                ))}
            </div>
        </section>
    )
}