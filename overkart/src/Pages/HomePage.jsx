import React from "react";
import { Flex } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
// import Slider from "../Components/Carousel";
import Carousel from "../Components/Carousel";
import Footer from "../Components/Footer";
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
    "https://ak1.ostkcdn.com/img/mxc/111522-CasperLogo.svg?imwidth=1920",
  ];

  let BeautifulFindsCard = [
    {
      Image:
        "https://ak1.ostkcdn.com/img/mxc/11192021-CatSilo-Furniture.png?imwidth=1920",
      Title: "Furniture",
    },
    {
      Image:
        "https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-AreaRugs.png?imwidth=1920",
      Title: "Area Rugs",
    },
    {
      Image:
        "https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-BedBath.png?imwidth=1920",
      Title: "Bedding",
    },
    {
      Image:
        "https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Decor.png?imwidth=1920",
      Title: "Home Decor",
    },
    {
      Image:
        "https://ak1.ostkcdn.com/img/mxc/CatSilo-Window-040721.jpg?imwidth=1920",
      Title: "Window Treatments",
    },
    {
      Image:
        "https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Kitchen.png?imwidth=1920",
      Title: "Kitchen",
    },
    {
      Image:
        "https://ak1.ostkcdn.com/img/mxc/11152022-CatSilo-Outdoor.png?imwidth=1920",
      Title: "Outdoor",
    },
    {
      Image:
        "https://ak1.ostkcdn.com/img/mxc/01112021-CatSilo-HomeImp.jpg?imwidth=1920",
      Title: "Home Improvement",
    },
    {
      Image:
        "https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Storage.png?imwidth=1920",
      Title: "Storage",
    },
    {
      Image:
        "https://ak1.ostkcdn.com/img/mxc/01112021-CatSilo-Mattresses.jpg?imwidth=1920",
      Title: "Mattresses",
    },
    {
      Image:
        "https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Lighting.png?imwidth=1920",
      Title: "Lighting",
    },
    {
      Image:
        "https://ak1.ostkcdn.com/img/mxc/CatSilo-AllDeals-040721.jpg?imwidth=1920",
      Title: "Shop All Deals",
    },
  ];

  let TrendingText = [
    "Mugs",
    "Blankets",
    "Cookie Cutters",
    "Air Fryers",
    "Kitchen Mixers",
    "Lamps",
    "Towels",
    "Tree Skirts",
    "Garland",
    "Fall Wreaths",
    "Christmas Trees",
    "Fireplaces"
  ];
  return (
    <div className="Home_Container" style={{ marginTop: "90px" }}>
      {/* First Section Image */}
      <div
        className="first_Img_section"
        style={{
          position: "relative",
          width: "95%",
          textAlign: "center",
          overflow: "hidden",
          margin: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            backgroundImage: `url("https://ak1.ostkcdn.com/img/mxc/12122022-HP-A1-INTL-V2-1400x550_DSK-INTL.jpg")`,
          }}
        >
          <picture>
            <img
              src="https://ak1.ostkcdn.com/img/mxc/12122022-HP-A1-INTL-V2-1400x550_DSK-INTL-2.svg"
              alt="first_Img_section"
              style={{
                width: "100%",
                height: "auto",
                overflowClipMargin: "content-box",
                overflow: "clip",
              }}
            />
          </picture>
        </div>
      </div>

      {/* Limited-Time Deals */}
      <h1
        style={{ fontSize: "30px", fontWeight: "700", margin: "30px 0 30px 0" }}
      >
        Limited-Time Deals
      </h1>
      <Flex style={{ width: "95%", margin: "auto auto 20px auto" }}>
        <Grid templateColumns="repeat(6, 1fr)" gap={4}>
          <GridItem>
            <div
              style={{
                justifyContent: "center",
                backgroundImage: `url("https://ak1.ostkcdn.com/img/mxc/12032022_HB_INTL-CAN_1.jpg?imwidth=1920")`,
              }}
            >
              <img
                src="https://ak1.ostkcdn.com/img/mxc/11142022_HB_INTL-CAN_1.svg?imwidth=1920"
                alt=""
              />
            </div>
          </GridItem>
          <GridItem>
            <div
              style={{
                justifyContent: "center",
                backgroundImage: `url("https://ak1.ostkcdn.com/img/mxc/12032022_HB_INTL-CAN_2.jpg?imwidth=1920")`,
              }}
            >
              <img
                src="https://ak1.ostkcdn.com/img/mxc/11142022_HB_INTL-CAN_6.svg?imwidth=1920"
                alt=""
              />
            </div>
          </GridItem>
          <GridItem>
            <div
              style={{
                justifyContent: "center",
                backgroundImage: `url("https://ak1.ostkcdn.com/img/mxc/12032022_HB_INTL-CAN_3.jpg?imwidth=1920")`,
              }}
            >
              <img
                src="https://ak1.ostkcdn.com/img/mxc/11142022_HB_INTL-CAN_6.svg?imwidth=1920"
                alt=""
              />
            </div>
          </GridItem>
          <GridItem>
            <div
              style={{
                justifyContent: "center",
                backgroundImage: `url("https://ak1.ostkcdn.com/img/mxc/12032022_HB_INTL-CAN_4.jpg?imwidth=1920")`,
              }}
            >
              <img
                src="https://ak1.ostkcdn.com/img/mxc/11142022_HB_INTL-CAN_6.svg?imwidth=1920"
                alt=""
              />
            </div>
          </GridItem>
          <GridItem>
            <div
              style={{
                justifyContent: "center",
                backgroundImage: `url("https://ak1.ostkcdn.com/img/mxc/12032022_HB_INTL-CAN_5.jpg?imwidth=1920")`,
              }}
            >
              <img
                src="https://ak1.ostkcdn.com/img/mxc/11142022_HB_INTL-CAN_6.svg?imwidth=1920"
                alt=""
              />
            </div>
          </GridItem>
          <GridItem>
            <div
              style={{
                justifyContent: "center",
                backgroundImage: `url("https://ak1.ostkcdn.com/img/mxc/12032022_HB_INTL-CAN_6.jpg?imwidth=1920")`,
              }}
            >
              <img
                src="https://ak1.ostkcdn.com/img/mxc/11142022_HB_INTL-CAN_6.svg?imwidth=1920"
                alt=""
              />
            </div>
          </GridItem>
        </Grid>
      </Flex>

      {/* Brands We Love */}
      <h1
        style={{ fontSize: "30px", fontWeight: "700", margin: "30px 0 30px 0" }}
      >
        Brands We Love
      </h1>
      <Flex
        style={{
          width: "95%",
          margin: "auto auto 40px auto",
        }}
      >
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={1}
          style={{ margin: "auto" }}
        >
          {BrandImg?.length > 0 &&
            BrandImg.map((e) => {
              return (
                <GridItem key={e.id}>
                  <img src={e} alt="" />
                </GridItem>
              );
            })}
        </Grid>
      </Flex>

      {/* Second Section Image */}
      <div
        className="first_Img_section"
        style={{
          position: "relative",
          width: "95%",
          textAlign: "center",
          overflow: "hidden",
          margin: "30px auto 30px auto",
        }}
      >
        <div
          style={{
            display: "flex",
            backgroundImage: `url("https://ak1.ostkcdn.com/img/mxc/12122022-SB-LivingRoomFurniture-1400x550_Promo1.jpg?imwidth=2048")`,
          }}
        >
          <picture>
            <img
              src="https://ak1.ostkcdn.com/img/mxc/12122022-SB-LivingRoomFurniture-1400x550_Promo1.svg?imwidth=2048"
              alt="first_Img_section"
              style={{
                width: "100%",
                height: "auto",
                overflowClipMargin: "content-box",
                overflow: "clip",
              }}
            />
          </picture>
        </div>
      </div>

      {/* Beautiful Finds for Every Room */}
      <h1
        style={{ fontSize: "30px", fontWeight: "700", margin: "30px 0 30px 0" }}
      >
        Beautiful Finds for Every Room
      </h1>
      <Flex
        style={{
          width: "95%",
          margin: "auto auto 40px auto",
        }}
      >
        <Grid
          templateColumns="repeat(6, 1fr)"
          gap={7}
          style={{ margin: "auto" }}
        >
          {BeautifulFindsCard?.length > 0 &&
            BeautifulFindsCard.map((e) => {
              return (
                <GridItem key={e.id}>
                  <div>
                    <img
                      style={{ width: "220px", height: "220px" }}
                      src={e.Image}
                      alt=""
                    />
                    <Text style={{ fontSize: "20px", color: "#545658" }}>
                      {e.Title}
                    </Text>
                  </div>
                </GridItem>
              );
            })}
        </Grid>
      </Flex>

      {/* Trending This Season */}

      {/* <div>
      <Carousel/>
      </div> */}

      {/* Third Section Image */}

      <div
        className="first_Img_section"
        style={{
          position: "relative",
          width: "95%",
          textAlign: "center",
          overflow: "hidden",
          margin: "30px auto 60px auto",
        }}
      >
        <div
          style={{
            display: "flex",
            backgroundImage: `url("https://ak1.ostkcdn.com/img/mxc/12122022-SB-BedroomFurniture-1400x550_Promo2.jpg?imwidth=1920")`,
          }}
        >
          <picture>
            <img
              src="https://ak1.ostkcdn.com/img/mxc/12122022-SB-BedroomFurniture-1400x550_Promo2.svg?imwidth=1920"
              alt="first_Img_section"
              style={{
                width: "100%",
                height: "auto",
                overflowClipMargin: "content-box",
                overflow: "clip",
              }}
            />
          </picture>
        </div>
      </div>

      {/* #OverStockStyle */}
      <div style={{ width: "95%", margin: "auto" }}>
        <div
          style={{
            backgroundImage: `url("https://ak1.ostkcdn.com/img/mxc/030822-RIUpdate-Dsk.jpg")`,
            margin: "40px auto 60px auto",
            position: "relative",
            top: "0",
            bottom: "0",
            right: "0",
            lift: "0",
          }}
        >
          <img
            src="https://ak1.ostkcdn.com/img/mxc/030822-RIUpdate-Dsk.svg?imwidth=1920"
            alt=""
            style={{
              width: "100%",
              overflow: "clip",
              overflowClipMargin: "content-box",
              position: "relative",
              top: "0",
              bottom: "0",
              right: "0",
              lift: "0",
            }}
          />
        </div>
      </div>

      {/* Overstock Featured Brands */}
      <div style={{ margin: "auto auto 30px auto", width: "95%" }}>
        <h1 style={{ fontSize: "35px", fontWeight: "700" }}>
          OverKart Featured Brands
        </h1>
        <div
          style={{ display: "flex", margin: "30px auto auto auto", gap: "5px" }}
        >
          <div style={{ margin: "auto", backgroundColor: "#f5f6f7" }}>
            <img
              src="https://ak1.ostkcdn.com/img/mxc/HP_C_Mod_33581952.jpg?imwidth=1920"
              alt=""
            />
            <div>
              <h3 style={{ fontWeight: "600" }}>extra 20% off</h3>
              <p>select rugs by artistic weavers</p>
            </div>
          </div>

          <div style={{ margin: "auto", backgroundColor: "#f5f6f7" }}>
            <img
              src="https://ak1.ostkcdn.com/img/mxc/HP_C_Mod_16543020.jpg?imwidth=1920"
              alt=""
            />
            <div>
              <h3 style={{ fontWeight: "600" }}>extra 15% off</h3>
              <p>select rugs by artistic weavers</p>
            </div>
          </div>

          <div style={{ margin: "auto", backgroundColor: "#f5f6f7" }}>
            <img
              src="https://ak1.ostkcdn.com/img/mxc/HP_C_Mod_30923284.jpg?imwidth=1920"
              alt=""
            />
            <div>
              <h3 style={{ fontWeight: "600" }}>extra 15% off</h3>
              <p>select rugs by artistic weavers</p>
            </div>
          </div>

          <div style={{ margin: "auto", backgroundColor: "#f5f6f7" }}>
            <img
              src="https://ak1.ostkcdn.com/img/mxc/HP_C_Mod_33639553.jpg?imwidth=1920"
              alt=""
            />
            <div>
              <h3 style={{ fontWeight: "600" }}>extra 15% off</h3>
              <p>select rugs by artistic weavers</p>
            </div>
          </div>
        </div>
      </div>

      {/* We've Got Your Style */}
      <div style={{ margin: "auto auto 30px auto", width: "95%" }}>
        <h1 style={{ fontSize: "35px", fontWeight: "700" }}>
          We've Got Your Style
        </h1>
        <div
          style={{ display: "flex", margin: "30px auto auto auto", gap: "10px" }}
        >
          <div style={{ margin: "auto", backgroundColor: "#f5f6f7" }}>
            <img
              src="https://ak1.ostkcdn.com/img/mxc/030822-SBS-Traditional.jpg?imwidth=1920"
              alt=""
            />
            <div>
              <h3 style={{ fontWeight: "600",textAlign:"left",margin:"10px auto auto 10px",fontSize:"30px" }}>Traditional</h3>
              <p style={{display:"block",textAlign:"left",margin:"10px auto 10px 10px"}}>
                Cozy designs, clean and classic, give this style it's 
              </p>
            </div>
          </div>

          <div style={{ margin: "auto", backgroundColor: "#f5f6f7" }}>
            <img
              src="https://ak1.ostkcdn.com/img/mxc/030822-SBS-MidCenMod.jpg?imwidth=1920"
              alt=""
            />
            <div>
              <h3 style={{ fontWeight: "600",textAlign:"left",margin:"10px auto auto 10px",fontSize:"30px" }}>Mid-Century Modern</h3>
              <p style={{display:"block",textAlign:"left",margin:"10px auto 10px 10px"}}>
                Retro meets modern chic in these clean lines and vibrant tones.
              </p>
            </div>
          </div>

          <div style={{ margin: "auto", backgroundColor: "#f5f6f7" }}>
            <img
              src="https://ak1.ostkcdn.com/img/mxc/030822-SBS-Farmhouse.jpg?imwidth=1920"
              alt=""
            />
            <div>
              <h3 style={{ fontWeight: "600",textAlign:"left",margin:"10px auto auto 10px",fontSize:"30px" }}>Farmhouse</h3>
              <p style={{display:"block",textAlign:"left",margin:"10px auto 10px 10px"}}>
                Country comforts abound in this fresh take on rustic home decor.
              </p>
            </div>
          </div>
        </div>
        <button style={{backgroundColor:"black",color:"white",padding:"10px 30px 10px 30px",fontSize:"16px",margin:"60px auto 20px auto",borderRadius:"5px"}}>See All Style</button>
      </div>

      
      {/* Trending Searches */}
      <h1
        style={{ fontSize: "30px", fontWeight: "700", margin: "30px 0 30px 0" }}
      >
        Trending Searches
      </h1>
      <Flex
        style={{
          width: "95%",
          margin: "auto auto 40px auto",
        }}
      >
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={4}
          style={{ margin: "auto" }}
        >
          {TrendingText?.length > 0 &&
            TrendingText.map((e) => {
              return (
                <GridItem key={e.id}>
                  <div style={{width:"470px",padding:"10px 20px 10px 20px",gap:"10px",backgroundColor:"#F5F6F7"}}>
                  <h3 style={{fontSize:"28px",color:"#545658",fontWeight:"600"}}>{e}</h3>
                  </div>
                </GridItem>
              );
            })}
        </Grid>
      </Flex>

            {/* Hr line */}

            <div style={{borderTop:"2px solid #e1e3e1",hight:"5px",margin:"auto atuo 10px auto",padding:"20px"}}>
              <div></div>
              <div></div>
              <div></div>
            </div>

            {/* Footer */}
            <Footer/>
    </div>
  );
}

export default HomePage;
