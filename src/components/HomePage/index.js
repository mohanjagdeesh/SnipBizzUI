import TopContainer from "../TopContainer"
import ShipForwarding from "../ShipForwarding"
import YouAreInGoodHands from "../YouAreInGoodHands"
import OurPartners from "../OurPartners"
import DestinationsServed from "../DestinationsServed"
import Achivements from "../Achivements"
import FooterSection from "../FooterSection"
import { Fragment } from "react"


const HomePage = () => (
    <Fragment>
    <TopContainer/>
  <ShipForwarding/>
  <YouAreInGoodHands/>
  <OurPartners/>
  <DestinationsServed/>
  <Achivements/>
  <FooterSection/>
    </Fragment>
)


export default HomePage