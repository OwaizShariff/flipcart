import Carousel from "react-material-ui-carousel";
import { bannerData } from "./Data";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
    image: {
        width:'100%',
    }
})

const Banner = () => {
    const classes = useStyle();
    return(
        <Carousel
        autoPlay={true}
        animation="slide"
        indicators={false}
        navButtonsAlwaysVisible={true}
        >
            {
                bannerData.map(image => (
                    <img src={image} className={classes.image}/>
                ))
            }
        </Carousel>
    )
    
}
export default Banner;