import React from "react";
import Article from "./article";
import '../styling/articles.scss';
import '../styling/shorts.scss';
import { ShortStory } from "./shortStory";

export const AllText=()=>{
    return(
        <div className="flex__div">
        <section className="article__ctn">
        <Article title={"Goda nyheter för svensk rörelse"} text={"Ny databas byggd på svensk queerlitteratur."} byline={"Hanna Widell"} id={""}/>
        <Article title={"Queera evenemang samlade"} text={"Har du ungått appen där organisationer och evenemang för oss queers uppdateras? I så fall är det hög tid att scrolla in på din app-lednaddningstjänst, söka efter och ladda ner Queer Sweden."} byline={"Christoffer Garplind"} id={""}/>

        <Article title={"Queera evenemang samlade"} text={"Har du ungått appen där organisationer och evenemang för oss queers uppdateras? I så fall är det hög tid att scrolla in på din app-lednaddningstjänst, söka efter och ladda ner Queer Sweden."} byline={"Christoffer Garplind"} id={""}/>

        <Article title={"Lorem inpsum och ännu mer"} text={"Lorem sjdipfn"} byline={"Christoffer Garplind"} id={""}/>

        <Article title={"Personporträtt: Arvida Byström"} text={"Har du ungått appen där organisationer och evenemang för oss queers uppdateras? I så fall är det hög tid att scrolla in på din app-lednaddningstjänst, söka efter och ladda ner Queer Sweden."} byline={"Christoffer Garplind"} id={""}/>

        <Article title={"Vad du behöver veta om Stockholms lesbiska dejtingmarknad"} text={"Har du ungått appen där organisationer och evenemang för oss queers uppdateras? I så fall är det hög tid att scrolla in på din app-lednaddningstjänst, söka efter och ladda ner Queer Sweden."} byline={"Arvida Byström"} id={""}/>
        </section>
        <section className="container__shorts">
        <ShortStory title={"Liten notis"} text={"Lite lorem impsum ipsum pisum fncjanefijfipnknmlkz"} byline={"Josephine Seglert"} />
        <ShortStory title={"Liten notis"} text={"Lite lorem impsum ipsum pisum fncjanefijfipnknmlkz"} byline={"Josephine Seglert"} />
        <ShortStory title={"Liten notis"} text={"Har du ungått appen där organisationer och evenemang för oss queers uppdateras? I så fall är det hög tid att scrolla in på din app-lednaddningstjänst, söka efter och ladda ner Queer Sweden."} byline={"Josephine Seglert"} />
        <ShortStory title={"Liten notis"} text={"Lite lorem impsum ipsum pisum fncjanefijfipnknmlkz"} byline={"Josephine Seglert"} />
        <ShortStory title={"Liten notis"} text={"Har du ungått appen där organisationer och evenemang för oss queers uppdateras? I så fall är det hög tid att scrolla in på din app-lednaddningstjänst, söka efter och ladda ner Queer Sweden."} byline={"Josephine Seglert"} />
        </section>
        </div>
    )
}