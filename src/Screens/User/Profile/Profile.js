import {
  FlexBox,
  FlexColumn,
  FlexRow,
  InnerSection,
  Typography,
} from "../../../App.Styles";
import { ProfileImg } from "./Profile.Styles";
import ProImg from "../../../Assets/profile.jpg";
import Button from "../../../Components/Button/Button";
import { Line } from "../../Gust/HomeScreen/HomeScreen.Styles";

export default function Profile(props) {
  return (
    <FlexColumn color="#fff">
      <InnerSection style={{ marginTop: "120px" }}>
        <FlexRow style={{ justifyContent: "start" }}>
          <FlexBox
            style={{
              width: "398px",
              height: " 528px",
              background: "red",
              alignItems: "start",
              borderRadius: " 16px",
              background: "#F2F2F2",
            }}
          >
            <FlexColumn style={{ alignItems: "start" }}>
              <FlexRow style={{ marginBottom: "25px" }}>
                <ProfileImg
                  src={ProImg}
                  width="137"
                  height="137"
                  border="2px solid #FCDD06"
                />
                <Typography fontSize={32} fontWeight={"bold"}>
                  {" "}
                  {props.username} Amy Mayer{" "}
                </Typography>
              </FlexRow>

              <FlexColumn style={{ alignItems: "start", margin: "16px 20px" }}>
                <Typography fontSize={24} style={{ marginBottom: "25px" }}>
                  My Orders
                </Typography>
                <Typography fontSize={24} style={{ marginBottom: "25px" }}>
                  Wishlist
                </Typography>
                <Typography fontSize={24} style={{ marginBottom: "25px" }}>
                  Notifcations
                </Typography>
                <Typography fontSize={24} style={{ marginBottom: "35px" }}>
                  Settings
                </Typography>

                <Line style={{ marginLeft: "-20px" }} />
                <Typography fontSize={24} style={{ marginTop: "10px" }}>
                  Logout
                </Typography>
              </FlexColumn>
            </FlexColumn>
          </FlexBox>

          <FlexBox
            style={{
              width: "950px",
              height: "528px",
              background: "#F2F2F2",
              alignItems: "start",
              borderRadius: " 16px",
              marginLeft: "37px",
              paddingLeft: "37px",
            }}
          >
            <FlexColumn style={{ alignItems: "start" }}>
              <Typography
                fontSize={32}
                fontWeight={"bold"}
                style={{ margin: "45px 0" }}
              >
                My Profile
              </Typography>

              <FlexRow>
                <FlexColumn style={{ alignItems: "start" }}>
                  <Typography
                    fontSize={24}
                    fontWeight={"bold"}
                    style={{ paddingBottom: "35px" }}
                  >
                    First Name
                  </Typography>
                  <Typography
                    fontSize={24}
                    fontWeight={"bold"}
                    style={{ paddingBottom: "30px" }}
                  >
                    Last Name
                  </Typography>
                  <Typography
                    fontSize={24}
                    fontWeight={"bold"}
                    style={{ paddingBottom: "30px" }}
                  >
                    {" "}
                    Email
                  </Typography>
                  <Typography
                    fontSize={24}
                    fontWeight={"bold"}
                    style={{ paddingBottom: "30px" }}
                  >
                    {" "}
                    Birthday
                  </Typography>

                  <Button
                    text="Change Password"
                    onClick={() => {}}
                    isGray={false}
                    width={"153px"}
                    //  borderRadius={"16px"}
                    style={{ margin: "40px 0", height: "40px", fontSize:"13px" }}
                  />
                </FlexColumn>

                <FlexColumn
                  style={{ alignItems: "start", marginBottom: "125px" }}
                >
                  <Typography fontSize={24} style={{ paddingBottom: "26px" }}>
                    {props.firstName}000
                  </Typography>
                  <Typography fontSize={24} style={{ paddingBottom: "26px" }}>
                    {props.lastName}000
                  </Typography>
                  <Typography fontSize={24} style={{ paddingBottom: "26px" }}>
                    {props.email}000
                  </Typography>
                  <Typography fontSize={24} style={{ paddingBottom: "26px" }}>
                    {props.Adress}000
                  </Typography>
                </FlexColumn>
              </FlexRow>
            </FlexColumn>

            <FlexColumn style={{ marginTop: "40px" }}>
              <ProfileImg src={ProImg} width="198" height="198" />

              <Button
                text="Upload new photo"
                onClick={() => {}}
                isGray={false}
                width={"153px"}
                //    borderRadius={"16px"}
                style={{ margin: "20px 0", height: "40px",fontSize:"13px" }}
              />
            </FlexColumn>
          </FlexBox>
        </FlexRow>
      </InnerSection>
    </FlexColumn>
  );
}
