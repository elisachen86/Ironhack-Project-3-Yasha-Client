import React, { useState } from "react";
import { withUser } from "./Auth/withUser";
import apiHandler from "../api/apiHandler";
import OrderMessage from "./OrderMessage";

import { makeStyles } from "@material-ui/core/styles";
// eslint-disable-next-line
import Input from "@material-ui/core/Input";
// eslint-disable-next-line
import InputLabel from "@material-ui/core/InputLabel";
// eslint-disable-next-line
import InputAdornment from "@material-ui/core/InputAdornment";
// eslint-disable-next-line
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
// eslint-disable-next-line
import Grid from "@material-ui/core/Grid";
// eslint-disable-next-line
import AccountCircle from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
{
  /* <FormControl className={classes.margin} >
          <InputLabel htmlFor="input-with-icon-adornment">Write your comments : </InputLabel>
          <Input
            id="comment"
            name="comment"
            label="comment"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          /> */
}

const OrderComment = (props) => {
  const currentUser = props.context.user;
  const currentOrder = props.order;

  // console.log("here at comment", currentOrder)

  const classes = useStyles();
  const [Comment, setComment] = useState("");
  const [CommentLists, setCommentLists] = useState(currentOrder.comments);

  const handleChange = (event) => {
    setComment(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const commentData = {
      message: Comment,
      user: currentUser._id,
      //  currentOrder: currentOrder._id,
      timeStamp: new Date(),
    };

    apiHandler
      .createOneComment(currentOrder._id, commentData)
      .then((result) => setCommentLists(result["comments"]))
      .then(setComment(""))
      .catch((error) => console.log(error));
  };

  // const updateComment = (newComment) => {
  //     setCommentLists(CommentLists.concat(newComment))
  // }

  return (
    <div>
      {CommentLists.map((arr) => (
        <OrderMessage messages={arr}></OrderMessage>
      ))}

      <form onSubmit={handleSubmit}>
        <TextField
          id="comment"
          name="comment"
          fullWidth
          label="Write your comments here"
          onChange={handleChange}
          value={Comment}
          placeholder="Write your comments here"
          style={{
            backgroundColor: "#F4EEED",
            fontStyle: "italic",
            color: "#252A36",
            borderRadius: "0.8em",
            border: "none",
          }}
        />

        <Button
          variant="contained"
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
        >
          <SendIcon style={{ marginRight: "0.5em" }}></SendIcon> send my comment
        </Button>

        {/* <label htmlFor="comment"></label>
                  <input name="comment" id="comment" onChange={handleChange}></input>
                  <button>Submit</button> */}

        {/* </FormControl> */}
      </form>
    </div>
  );
};

export default withUser(OrderComment);
