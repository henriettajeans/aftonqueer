interface IShort{
    title: string,
    text: string,
    byline: string
}

export const ShortStory=(props: IShort)=>{
    return(
        <section className="shorts">
            <h4 className="shorts__title">{props.title}</h4>
            <h5 className="shorts__text">{props.text}</h5>
            <h6 className="shorts__byline">{props.byline}</h6>
        </section>
    )
}