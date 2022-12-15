import React from "react";
import { Flex, Spacer } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
function HomePage() {
  return (
    <div className="Home_Container">
      <div className="first_Img_section" style={{position:"relative",width:"100%",textAlign:"center",overflow:"hidden"}}>
        <div style={{display:"flex",}}>
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

      <Flex>
        <h1>Limited-Time Deals</h1>
        <Grid>
                <GridItem>
                    <div>
                        <img src="https://ak1.ostkcdn.com/img/mxc/11142022_HB_INTL-CAN_1.svg?imwidth=1920" alt="" />
                        <img src="https://ak1.ostkcdn.com/img/mxc/12032022_HB_INTL-CAN_1.jpg?imwidth=2048" alt="" />
                    </div>
                </GridItem>
        </Grid>
        
      </Flex>
    </div>
  );
}

export default HomePage;
