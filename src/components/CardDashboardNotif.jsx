// import React, { Component } from 'react'
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { withUser } from "../components/Auth/withUser";
import OrderMessage from "./OrderMessage"

import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import WarningIcon from "@material-ui/icons/Warning";
import MessageIcon from "@material-ui/icons/Message";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


// PLUGINS REQUIRED TO FORMAT THE DATE
const dayjs = require("dayjs");
require("dayjs/locale/en");
var advancedFormat = require("dayjs/plugin/advancedFormat");
var LocalizedFormat = require("dayjs/plugin/localizedFormat");
var utc = require("dayjs/plugin/utc");
var timezone = require("dayjs/plugin/timezone");
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(advancedFormat);
dayjs.extend(LocalizedFormat);

var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);



const CardDashboardNotif = (props) => {

  // console.log('clicked', props)

  const [ChatsArray, setChatsArray] = useState([])
  const [NotifArray, setNotifArray] = useState([])

  const currentUser = props.context.user


  useEffect(() => {
    let commentsArray = []

    props.ordersWithMessages.forEach((array) => {

              const projectFields = {
                        brandCompany: array.brandCompany.name,
                        orderId: array._id,
                        orderNumber: array.number,
                        comments: array.comments.filter(arr => arr.user && arr.user._id!== currentUser._id)    
              }
              commentsArray.push(projectFields)
              
            })

    const res = commentsArray
                .filter(arr => arr.comments.length!==0)
                .reduce((acc, obj) => {
                    obj.comments.filter(arr => arr.user && arr.user._id!== currentUser._id)  
              
                    let key = obj["brandCompany"];
                    if (!acc[key]) {
                      acc[key] = [];
                    }
                    acc[key].push(obj);
                    return acc;
                  }, {});


    const result = Object.keys(res).map((key) => [
              key,
              res[key],
            ]);
            console.log(NotifArray)
            setNotifArray(result)
  }, []);

  const handleClick = (event) => {

              setChatsArray(NotifArray)

      }   
      
      
      const handleMessageIsRead = (arg) => {

            // console.log("cb funtion", arg)
            const updateCommentData = {
            }
      } 
  
      //this change the messages read status function is not completed
      //so as the the backend router is not tested yet

  if (!NotifArray) {
      return <div>Loading.....</div>;
    }

  return (
    
    
    <div>

        <Card className="card" >
                <Grid container alignItems="center" spacing={2}>
                  <Grid item>
                    <WarningIcon></WarningIcon>
                  </Grid>
                  <Grid item>
                    <Typography variant="h5">{props.text1}</Typography>
                    <Typography color="textSecondary">{props.text2} </Typography>
                  </Grid>
                </Grid>
              </Card>



              <Card className="card" onClick={handleClick}>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item>
                    <MessageIcon></MessageIcon>
                  </Grid>
                  <Grid item>
                               {/* {NotifArray[1] && <Typography variant="h5"> {NotifArray[1].length} new messages</Typography>} */}
                              <Typography variant="h5"> 3 New messages</Typography>
                              <Typography color="textSecondary"> from Danone </Typography>
                                </Grid>
      
                </Grid>
              </Card>


           
              {ChatsArray.length > 0 && ChatsArray.map((groupedMsgs) => {

              return <div>

                    <Typography color="textSecondary"> {groupedMsgs[0]} </Typography>

                      {groupedMsgs[1].map((arr) => {
                              
                        return <Link to={`/order/${arr.orderId}`} 

                              onClick={() => handleMessageIsRead(arr)}

                              key={arr.orderId} >
                                  
                                  <Typography color="textSecondary"> 
                                  {arr.orderNumber} {" "}
                                  <br/>
                                  {arr.comments[arr.comments.length -1].user.firstName} 
                                  {" "}
                                  {arr.comments[arr.comments.length -1].user.lastName} 
                                  {" "} at 
                                  {dayjs(`${arr.comments[arr.comments.length -1].timeStamp}`).format("DD/MM/YYYY")}
                                  {" : "}
                                  {arr.comments[arr.comments.length -1].message} 

                              </Typography>
                              </Link>

                        })}  
                  </div>

                  })}
              
    </div>
  )
}

export default withUser(CardDashboardNotif)
