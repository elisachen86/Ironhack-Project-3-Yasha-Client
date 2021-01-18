import React , { useState, useEffect } from "react";
import apiHandler from "../api/apiHandler";



import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "../styles/orders.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "none",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const useStepperStyles = makeStyles({
  paper: {
    backgroundColor: "transparent",
  },
});

function getSteps() {
  return [
    "submitted",
    // "confirmed",
    // "packed",
    // "ready to ship",
    "shipped",
    "received",
  ];
}




function getStepContent(stage) {
  switch (
    stage // stage c'est l'étape
  ) {
    case "submitted": // la partie de l'array qui change
      return <div>fejfeiafjaoifjaiofjaeiofjaoijfao</div>; // la partie jsx qui va être render dynamiquement
    case "completed":
      return "What is an ad group anyways?";
    case "ready_to_ship":
      return "This is the bit I really care about!";
    default:
      return "Unknown stepIndex";
  }
}

export default function HorizontalLabelPositionBelowStepper(props) {

  // const [arraySteps, setArray]= useState([0,0, 0, 0, 0, 0]);
  const [countSubmitted, setCount1] = useState(0);
  // const [countConfirmed, setCount2] = useState(0);
  // const [countPacked, setCount3] = useState(0);
  // const [countReadyToShip, setCount4] = useState(0);
  const [countShipped, setCount5] = useState(0);
  const [countReceived, setCount6] = useState(0);


  useEffect(async () => {

    try{
      const data  = await apiHandler.getAllOrders()
      console.log(data)

      // let [submitted, confirmed, packed, readyToShip, shipped, received] = arraySteps
      data.forEach((arr) => {

            const currentStep = arr.steps[arr.steps.length-1].stage
            console.log(currentStep)
            if (currentStep === "submitted") setCount1(countSubmitted+1)
            // else if(currentStep === "confirmed") setCount2(countConfirmed+1)
            // else if(currentStep === "packed") setCount3(countPacked+1)
            // else if(currentStep === "ready to ship") setCount4(countReadyToShip+1)
            else if(currentStep === "shipped") setCount5(countShipped+1)
            else if(currentStep === "countReceived") setCount6(countReceived+1)
        })

      }catch(error){

                console.log(error)
      }

  },[]);



// const countfinal = [countSubmitted, countConfirmed, countPacked,countReadyToShip, countShipped, countReceived ]
const countfinal = [countSubmitted, countShipped, countReceived ]

  const classes = useStyles();
  const activeStep = 0;
  const steps = getSteps();
  const stepperClasses = useStepperStyles();

  return (
    <div className={classes.root}>
      <Stepper
        activeStep={0}
        classes={{
          // active step c'est le stage en cours
          root: stepperClasses.paper, // cette ligne sert à override le css du component (pour le rendre transparent)
        }}
        alternativeLabel
      >
        {steps.map((
          label, index // ici on map l'array avec en dessous chaque label (inscription en dessous du point)
        ) => (
          <Step key={label}>
        
            <StepLabel>  
             {/* <p>{countfinal[index]}</p> */}
             {/* <br/> */}
             <p>{label}</p> 
             </StepLabel>

          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? ( // ici on a un ternary. en gros: si on arrive à la fin de l'array, on a "all steps completed" sinon on peut progresser
          <div className="container">
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button>Reset</Button>
          </div>
        ) : (
          <div>
            {/* <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography> */}
          </div>
        )}
      </div>
    </div>
  );
}
