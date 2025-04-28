import InputDesignAA from "@/componentsaa/InputDesign";
import InputDesignTwo from "@/componentsafter/InputDesign";
import TableStyles from "@/componentsBB/TableStyles";
import InputDesignCC from "@/componentsblg/InputDesign";
import ImageWithText from "@/componentschld/ImageWithText";
import CTABlock from "@/componentscta/CTABlock";
import Footer from "@/componentsfoot/Footer";
import DesignSystem from "@/componentshero/DesignSystem";
import InputDesign from "@/componentsimage/InputDesign";
import QuoteBlock from "@/componentsquote/QuoteBlock";
import ButtonStyles from "@/componentsstyl/ButtonStyles";


export default function Home() {
  return (
    <div>
       <DesignSystem />
       <InputDesign />
       <ImageWithText />
       <div className="p-5 md:p-0">
       <InputDesignTwo />
       <ButtonStyles />
       <CTABlock />
       <InputDesignAA />
       <TableStyles />
       <QuoteBlock />
       <InputDesignCC />
       </div>
       <Footer />
    </div>
  );
}
