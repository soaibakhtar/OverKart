import React from "react";
import { Flex,} from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Text } from "@chakra-ui/react";
import Carousel from "../Components/Carousel";
function HomePage() {
  let BrandImg = [
    "https://ak1.ostkcdn.com/img/mxc/111522-NinjaLogo.svg?imwidth=1920",
    "https://ak1.ostkcdn.com/img/mxc/111522-SharkLogo.svg?imwidth=1920",
    "https://ak1.ostkcdn.com/img/mxc/111522-KitchenAidLogo.svg?imwidth=1920",
    "https://ak1.ostkcdn.com/img/mxc/111522-DysonLogo.svg?imwidth=1920",
    "https://ak1.ostkcdn.com/img/mxc/111522-KeurigLogo.svg?imwidth=1920",
    "https://ak1.ostkcdn.com/img/mxc/111522-CuisinartLogo.svg?imwidth=1920",
    "https://ak1.ostkcdn.com/img/mxc/111522-CalphalonLogo.svg?imwidth=1920",
    "https://ak1.ostkcdn.com/img/mxc/111522-HamiltonBeachLogo.svg?imwidth=1920",
    "https://ak1.ostkcdn.com/img/mxc/111522-CasperLogo.svg?imwidth=1920"
  ];

  let BeautifulFindsCard = [
    {
      Image:"https://ak1.ostkcdn.com/img/mxc/11192021-CatSilo-Furniture.png?imwidth=1920",
      Title:"Furniture"
    },
    {
      Image:"https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-AreaRugs.png?imwidth=1920",
      Title:"Area Rugs"
    },
    {
      Image:"https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-BedBath.png?imwidth=1920",
      Title:"Bedding"
    },
    {
      Image:"https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Decor.png?imwidth=1920",
      Title:"Home Decor"
    },
    {
      Image:"https://ak1.ostkcdn.com/img/mxc/CatSilo-Window-040721.jpg?imwidth=1920",
      Title:"Window Treatments"
    },
    {
      Image:"https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Kitchen.png?imwidth=1920",
      Title:"Kitchen"
    },
    {
      Image:"https://ak1.ostkcdn.com/img/mxc/11152022-CatSilo-Outdoor.png?imwidth=1920",
      Title:"Outdoor"
    },
    {
      Image:"https://ak1.ostkcdn.com/img/mxc/01112021-CatSilo-HomeImp.jpg?imwidth=1920",
      Title:"Home Improvement"
    },
    {
      Image:"https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Storage.png?imwidth=1920",
      Title:"Storage"
    },
    {
      Image:"https://ak1.ostkcdn.com/img/mxc/01112021-CatSilo-Mattresses.jpg?imwidth=1920",
      Title:"Mattresses"
    },
    {
      Image:"https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Lighting.png?imwidth=1920",
      Title:"Lighting"
    },
    {
      Image:"https://ak1.ostkcdn.com/img/mxc/CatSilo-AllDeals-040721.jpg?imwidth=1920",
      Title:"Shop All Deals"
    }
  ]
  return (
    <div className="Home_Container"  style={{marginTop:"90px"}}>
      <div className="first_Img_section" style={{position:"relative",width:"95%",textAlign:"center",overflow:"hidden",margin:"auto"}}>
        <div style={{display:"flex",backgroundImage:`url("https://ak1.ostkcdn.com/img/mxc/12122022-HP-A1-INTL-V2-1400x550_DSK-INTL.jpg")`}}>
          <picture>
            <img
              src="https://ak1.ostkcdn.com/img/mxc/12122022-HP-A1-INTL-V2-1400x550_DSK-INTL-2.svg"
              alt="first_Img_section"
              style={{width:"100%",height:"auto",overflowClipMargin: "content-box",
              overflow: "clip"}}
            />
          </picture>
        </div>
      </div>

       <h1 style={{fontSize:"30px",fontWeight:"700",margin:"30px 0 30px 0"}}>Limited-Time Deals</h1>
      <Flex style={{width:"95%",margin:"auto auto 20px auto"}}>
        <Grid templateColumns='repeat(6, 1fr)' gap={4}>
                <GridItem>
                    <div style={{justifyContent:"center",border:"2px solid red",backgroundImage:`url("https://ak1.ostkcdn.com/img/mxc/12032022_HB_INTL-CAN_1.jpg?imwidth=1920")`}}>
                        <img src="https://ak1.ostkcdn.com/img/mxc/11142022_HB_INTL-CAN_1.svg?imwidth=1920" alt="" />
                    </div>
                </GridItem>
                <GridItem>
                    <div style={{justifyContent:"center",border:"2px solid red",backgroundImage:`url("https://ak1.ostkcdn.com/img/mxc/12032022_HB_INTL-CAN_2.jpg?imwidth=1920")`}}>
                        <img src="https://ak1.ostkcdn.com/img/mxc/11142022_HB_INTL-CAN_6.svg?imwidth=1920" alt="" />
                    </div>
                </GridItem>
                <GridItem>
                    <div style={{justifyContent:"center",border:"2px solid red",backgroundImage:`url("https://ak1.ostkcdn.com/img/mxc/12032022_HB_INTL-CAN_3.jpg?imwidth=1920")`}}>
                        <img src="https://ak1.ostkcdn.com/img/mxc/11142022_HB_INTL-CAN_6.svg?imwidth=1920" alt="" />
                    </div>
                </GridItem>
                <GridItem>
                    <div style={{justifyContent:"center",border:"2px solid red",backgroundImage:`url("https://ak1.ostkcdn.com/img/mxc/12032022_HB_INTL-CAN_4.jpg?imwidth=1920")`}}>
                        <img src="https://ak1.ostkcdn.com/img/mxc/11142022_HB_INTL-CAN_6.svg?imwidth=1920" alt="" />
                    </div>
                </GridItem>
                <GridItem>
                    <div style={{justifyContent:"center",border:"2px solid red",backgroundImage:`url("https://ak1.ostkcdn.com/img/mxc/12032022_HB_INTL-CAN_5.jpg?imwidth=1920")`}}>
                        <img src="https://ak1.ostkcdn.com/img/mxc/11142022_HB_INTL-CAN_6.svg?imwidth=1920" alt="" />
                    </div>
                </GridItem>
                <GridItem>
                    <div style={{justifyContent:"center",border:"2px solid red",backgroundImage:`url("https://ak1.ostkcdn.com/img/mxc/12032022_HB_INTL-CAN_6.jpg?imwidth=1920")`}}>
                        <img src="https://ak1.ostkcdn.com/img/mxc/11142022_HB_INTL-CAN_6.svg?imwidth=1920" alt="" />
                    </div>
                </GridItem>
        </Grid>
        
      </Flex>

      <h1 style={{fontSize:"30px",fontWeight:"700",margin:"30px 0 30px 0"}}>Brands We Love</h1>
      <Flex style={{width:"95%",margin:"auto auto 40px auto",border:"2px solid teal"}}>
        <Grid templateColumns='repeat(3, 1fr)' gap={1} style={{margin:"auto"}}>
        {
            BrandImg?.length > 0 && BrandImg.map((e) => {
                return (
                    <GridItem key={e.id}>
                      <img src={e} alt="" />
                    </GridItem>
                )
            })
        }
        </Grid>
      </Flex>

      <div className="first_Img_section" style={{position:"relative",width:"95%",textAlign:"center",overflow:"hidden",margin:"30px auto 30px auto"}}>
        <div style={{display:"flex",backgroundImage:`url("https://ak1.ostkcdn.com/img/mxc/12122022-SB-LivingRoomFurniture-1400x550_Promo1.jpg?imwidth=2048")`}}>
          <picture>
            <img
              src="https://ak1.ostkcdn.com/img/mxc/12122022-SB-LivingRoomFurniture-1400x550_Promo1.svg?imwidth=2048"
              alt="first_Img_section"
              style={{width:"100%",height:"auto",overflowClipMargin: "content-box",
              overflow: "clip"}}
            />
          </picture>
        </div>
      </div>

      <h1 style={{fontSize:"30px",fontWeight:"700",margin:"30px 0 30px 0"}}>Beautiful Finds for Every Room</h1>
      <Flex style={{width:"95%",margin:"auto auto 40px auto",border:"2px solid teal"}}>
        <Grid templateColumns='repeat(6, 1fr)' gap={7} style={{margin:"auto"}}>
        {
            BeautifulFindsCard?.length > 0 && BeautifulFindsCard.map((e) => {
                return (
                    <GridItem key={e.id}>
                      <div>
                        <img style={{width:"220px",height:"220px"}} src={e.Image} alt="" />
                        <Text style={{fontSize:"20px",color:"#545658"}}>{e.Title}</Text>
                      </div>
                    </GridItem>
                )
            })
        }
        </Grid>
      </Flex>

      {/* CaptionCarousel */}
      <div>
      {/* <Carousel/> */}
      </div>
    </div>
  );
}

export default HomePage;
