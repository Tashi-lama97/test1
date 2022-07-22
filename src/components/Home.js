import React, { useState } from "react";
import Axios from "axios";
import { useParams } from "react-router";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { Box } from "@mui/system";
import {
  Badge,
  Button,
  CircularProgress,
  Grid,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { green } from "@mui/material/colors";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircularProgressWithLabel from "./CircleProgressWithLabel";
import { useEffect } from "react";
import { myArr } from "./MYARR";

const Home = () => {
  // const { username } = useParams();
  const [questionCount, setQuestionCount] = useState(0);
  const [userName, setUserName] = useState("");
  const [ansCount, setAnsCount] = useState(0);
  const [replyCount, setReplyCount] = useState(0);
  const [banLoading, setBanLoading] = useState(false);
  const [banSuccess, setBanSuccess] = useState(false);
  const [ipBanLoading, setIpBanLoading] = useState(false);
  const [ipBanSuccess, setIpBanSuccess] = useState(false);
  const [quesLoading, setQuesLoading] = useState(false);
  const [quesSuccess, setQuesSuccess] = useState(false);
  const [ansLoading, setAnsLoading] = useState(false);
  const [ansSuccess, setAnsSuccess] = useState(false);
  const [replyLoading, setReplyLoading] = useState(false);
  const [replySuccess, setReplySuccess] = useState(false);
  const [deleteActionLoading, setDeleteActionLoading] = useState(false);
  const [deleteActionSuccess, setDeleteActionSuccess] = useState(false);
  const [isDisable, setIsDisable] = useState(false);
  const [isDisableUserAction, setIsDisableUserAction] = useState(false);
  const [qProgress, setQprogress] = useState(0);
  const [aProgress, setAprogress] = useState(0);
  const [rProgress, setRprogress] = useState(0);
  const [totalQ, setTotalQ] = useState(0);
  const [totalA, setTotalA] = useState(0);
  const [totalR, setTotalR] = useState(0);
  const [arryNumber, setArrayNumber] = useState(0);

  const [errors, setErrors] = useState("");

  const token = process.env.REACT_APP_TOKEN;
  let baseUrl;
  if (process.env.REACT_APP_STAGE === "PROD") {
    baseUrl = process.env.REACT_APP_BASE_URL;
  } else {
    baseUrl = "http://localhost:3002";
  }

  // const unPublishReply = async (ansId) => {
  //   try {
  //     setReplyLoading(true);
  //     let arr = await Axios.get(
  //       `${baseUrl}/reply/fetchReplies/${ansId}?skip=0&limit=100`
  //     );
  //     let resp = arr.data.data.replies;
  //     console.log(resp);
  //     return;
  //     if (resp.length <= 0) {
  //       setReplyLoading(false);
  //       setReplySuccess(true);
  //       return;
  //     }
  //     let i = 0;
  //     setTotalR(resp.length);
  //     for (let r of resp) {
  //       try {
  //         await Axios.delete(
  //           `${baseUrl}/adminApp/unpublishReply/${r._id}/unpublished?token=${token}`
  //         );
  //         i++;
  //         setQuestionCount(i);
  //         let per = (i / resp.length) * 100;
  //         console.log("PER", per);
  //         setRprogress(per);
  //         // console.log("Question Success");
  //         if (i === resp.length) {
  //           setReplyLoading(false);
  //           setReplySuccess(true);
  //           return;
  //         }
  //       } catch (error) {
  //         setReplyLoading(false);
  //         setErrors(error);
  //         console.log(error);
  //       }
  //     }
  //   } catch (error) {
  //     setReplyLoading(false);
  //     setErrors(error);
  //     console.log(error);
  //   }
  // };

  const deleteUserActions = async (username) => {
    try {
      setIsDisableUserAction(true);
      if (username.trim() === "") {
        window.alert("Please provide the username");
        return;
      }
      setDeleteActionLoading(true);
      const response = await Axios.delete(
        `${baseUrl}/adminApp/deleteUserActionAndAnswer?token=${token}&username=${username}`
      );
      if (response.data.success === true) {
        setDeleteActionLoading(false);
        setDeleteActionSuccess(true);
        setArrayNumber(arryNumber + 1);
      } else {
        setDeleteActionLoading(false);
      }
    } catch (error) {
      setDeleteActionLoading(false);
      setErrors(error);
      console.log(error);
    }
  };

  const unPublishAnswers = async (username) => {
    if (username.trim() === "") {
      window.alert("Please provide the username");
      return;
    }
    try {
      setAnsLoading(true);
      const respo = await Axios.get(
        `${baseUrl}/adminApp/getAnswers?token=${token}&answeredBy=${username}&limit=1000`
      );

      let ans = respo.data.data;
      if (ans.length <= 0) {
        setAnsLoading(false);
        setAnsSuccess(true);
        deleteUserActions(username);
        return;
      }
      let i = 0;
      setTotalA(ans.length);
      for (let a of ans) {
        try {
          await Axios.delete(
            `${baseUrl}/adminApp/unpublishAnswer/${a._id}/unpublished?token=${token}`
          );
          i++;

          setAnsCount(i);
          let per = (i / ans.length) * 100;
          setAprogress(per);
          //   console.log("Answers Success");
          if (i === ans.length) {
            setAnsLoading(false);
            setAnsSuccess(true);
            deleteUserActions(username);
            return;
          }
        } catch (error) {
          setAnsLoading(false);
          setErrors(error);
          console.log(error);
        }
      }
    } catch (error) {
      setAnsLoading(false);
      setErrors(error);
      console.log(error);
    }
  };

  const unPublishQuestion = async (username) => {
    if (username.trim() === "") {
      window.alert("Please provide the username");
      return;
    }
    try {
      setQuesLoading(true);
      let arr = await Axios.get(
        `${baseUrl}/adminApp/getQuestions?token=${token}&username=${username}&limit=1000`
      );
      let resp = arr.data.data;

      if (resp.length <= 0) {
        setQuesLoading(false);
        setQuesSuccess(true);
        unPublishAnswers(username);
        return;
      }
      let i = 0;
      setTotalQ(resp.length);
      for (let a of resp) {
        try {
          await Axios.delete(
            `${baseUrl}/adminApp/unpublishQuestion/${a._id}/unpublished?token=${token}`
          );
          i++;
          setQuestionCount(i);
          let per = (i / resp.length) * 100;
          console.log("PER", per);
          setQprogress(per);
          // console.log("Question Success");
          if (i === resp.length) {
            setQuesLoading(false);
            setQuesSuccess(true);
            unPublishAnswers(username);
            return;
          }
        } catch (error) {
          setQuesLoading(false);
          setErrors(error);
          console.log(error);
        }
      }
    } catch (error) {
      setQuesLoading(false);
      setErrors(error);
      console.log(error);
    }
  };

  const banIpAddress = async (isBanIP = false, username) => {
    try {
      if (username.trim() === "") {
        window.alert("Please provide the username");
        return;
      }
      setIpBanLoading(true);
      const response = await Axios.patch(
        `${baseUrl}/adminApp/banIpAddress?token=${token}&username=${username}`
      );
      if (response.data.success === true) {
        setIpBanLoading(false);
        setIpBanSuccess(true);
        if (!isBanIP) unPublishQuestion(username);
      }
    } catch (error) {
      setIpBanLoading(false);
      setErrors(error);
      console.log(error);
    }
  };

  const banUser = async (username) => {
    try {
      setIsDisable(true);
      if (username.trim() === "") {
        window.alert("Please provide the username");
        return;
      }
      setBanLoading(true);
      const response = await Axios.put(
        `${baseUrl}/adminApp/banUser?token=${token}`,
        {
          username: username,
          isPermanentBan: true,
        }
      );
      if (response.data.success === true) {
        setBanLoading(false);
        setBanSuccess(true);
        banIpAddress(false, username);
      } else {
        setBanLoading(false);
      }
    } catch (error) {
      setBanLoading(false);
      setErrors(error);
      console.log(error);
    }
  };

  useEffect(() => {
    if (arryNumber < myArr.length) {
      setUserName(myArr[arryNumber].username);
      banUser(myArr[arryNumber].username);
    }
  }, [arryNumber]);

  return (
    <div style={{ height: "100vh" }}>
      {userName}
      <Box
        sx={{
          mx: "auto",
          pt: 20,
          width: "90vw",
          height: "90vh",
          borderRadius: 1,
          textAlign: "center",
        }}
      >
        <Stack spacing={2} direction="column">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <ListItem>
                Total Questions
                <Typography color="primary" ml={3}>
                  {totalQ}
                </Typography>
              </ListItem>
            </Grid>
            <Grid item xs={6}>
              <ListItem>
                Total Answers
                <Typography color="primary" ml={3}>
                  {totalA}
                </Typography>
              </ListItem>
            </Grid>
            <Grid item xs={6}>
              <ListItem>Banning User</ListItem>
            </Grid>
            <Grid item xs={6}>
              <ListItem>
                {banLoading ? (
                  <CircularProgress size={20} />
                ) : banSuccess ? (
                  <CheckCircleIcon sx={{ color: green[500] }} />
                ) : null}
              </ListItem>
            </Grid>
            <Grid item xs={6}>
              <ListItem>Banning IP</ListItem>
            </Grid>
            <Grid item xs={6}>
              <ListItem>
                {ipBanLoading ? (
                  <CircularProgress size={20} />
                ) : ipBanSuccess ? (
                  <CheckCircleIcon sx={{ color: green[500] }} />
                ) : null}
              </ListItem>
            </Grid>
            <Grid item xs={6}>
              <ListItem>
                <Badge color="secondary" badgeContent={questionCount}>
                  Questions
                </Badge>
              </ListItem>
            </Grid>
            <Grid item xs={6}>
              <ListItem>
                {quesLoading ? (
                  <CircularProgressWithLabel size={30} value={qProgress} />
                ) : quesSuccess ? (
                  <CheckCircleIcon sx={{ color: green[500] }} />
                ) : null}
              </ListItem>
            </Grid>
            <Grid item xs={6}>
              <ListItem>
                <Badge color="secondary" badgeContent={ansCount}>
                  Answers
                </Badge>
              </ListItem>
            </Grid>
            <Grid item xs={6}>
              <ListItem>
                {ansLoading ? (
                  <CircularProgressWithLabel size={30} value={aProgress} />
                ) : ansSuccess ? (
                  <CheckCircleIcon sx={{ color: green[500] }} />
                ) : null}
              </ListItem>
            </Grid>
            <Grid item xs={6}>
              <ListItem>User Action Delete</ListItem>
            </Grid>
            <Grid item xs={6}>
              <ListItem>
                {deleteActionLoading ? (
                  <CircularProgress size={20} />
                ) : deleteActionSuccess ? (
                  <CheckCircleIcon sx={{ color: green[500] }} />
                ) : null}
              </ListItem>
            </Grid>
          </Grid>

          <Button variant="contained" onClick={banUser} disabled={isDisable}>
            Take Action
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              banIpAddress(true);
            }}
          >
            Ban IP Only
          </Button>
          <Button
            variant="contained"
            onClick={deleteUserActions}
            disabled={isDisableUserAction}
          >
            Delete User Actions
          </Button>

          {errors ? (
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              This is an error alert — <strong>{errors}</strong>
            </Alert>
          ) : null}
        </Stack>
      </Box>
    </div>
  );
};

export default Home;
