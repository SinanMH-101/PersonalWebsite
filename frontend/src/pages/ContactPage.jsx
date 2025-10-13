import Heading from "../componenets/Heading";

export default function ContactPage (){
    return(
        <div>
            <Heading></Heading>
            <div style={{padding : "20px", margin: "20px 5%"}}>
                <h2>You can reach me at:</h2>
                <div style={{marginLeft: "20px"}}>
                    <p><strong>Email : </strong>sinanmhaque.dev@gmail.com</p>
                    <p><strong>Phone : </strong>+61 0421372482</p>
                </div>
                
            </div>
            
        </div>
    );
}