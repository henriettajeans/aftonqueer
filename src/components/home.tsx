import { AllText } from "./allArticles"
import Header from "./header"

export const Home =()=>{
    return(
        <>
        <h2>This is home</h2>
        <Header established={'2023'} title={'AftonQueer'} dir={'Henrietta Jeansson'}/>
      <AllText/>
      </>
    )
}