import React from "react";
import Article from "./article";
import '../styling/articles.scss'

export const AllText=()=>{
    return(
        <section className="article__ctn">
        <Article title={"Goda nyheter för svensk rörelse"} text={"Ny databas byggd på svensk queerlitteratur."} byline={"Hanna Widell"}/>
        <Article title={"Queera evenemang samlade"} text={"Har du ungått appen där organisationer och evenemang för oss queers uppdateras? I så fall är det hög tid att scrolla in på din app-lednaddningstjänst, söka efter och ladda ner Queer Sweden."} byline={"Christoffer Garplind"}/>

        <Article title={"Queera evenemang samlade"} text={"Har du ungått appen där organisationer och evenemang för oss queers uppdateras? I så fall är det hög tid att scrolla in på din app-lednaddningstjänst, söka efter och ladda ner Queer Sweden."} byline={"Christoffer Garplind"}/>

        <Article title={"Lorem inpsum och ännu mer"} text={"Lorem sjdipfn"} byline={"Christoffer Garplind"}/>

        <Article title={"Personporträtt: Arvida Byström"} text={"Har du ungått appen där organisationer och evenemang för oss queers uppdateras? I så fall är det hög tid att scrolla in på din app-lednaddningstjänst, söka efter och ladda ner Queer Sweden."} byline={"Christoffer Garplind"}/>

        <Article title={"Vad du behöver veta om Stockholms lesbiska dejtingmarknad"} text={"Har du ungått appen där organisationer och evenemang för oss queers uppdateras? I så fall är det hög tid att scrolla in på din app-lednaddningstjänst, söka efter och ladda ner Queer Sweden."} byline={"Arvida Byström"}/>
        </section>
    )
}