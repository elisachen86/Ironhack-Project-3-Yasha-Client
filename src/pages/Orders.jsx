// // Corresponding Figma View for reference: "Area / Middle East"
// ( with Filter button, timeline and listing of all the orders for this area )

import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '../components/Stepper';
import '../styles/orders.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Orders = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>

                <div className="area-bar">
                    <h1 className="area-title">Middle East</h1>
                </div>
                
                <div className="btn-filter">
                    <Button  variant="contained"> Filters</Button>
                </div>

                <p className="order-recap-line"><span>34</span> orders, worth <span> 418,280€</span></p>

                <Stepper></Stepper>

                <div className="orders-container">
                    <div className="flex">
                        <div className="item">
                            <img className="orders-logo" src="/images/testImgOrder.jpg" alt="Testlogo"/>
                        </div>
                        <div className="item">
                            <h2>S020200001</h2>
                            <p className="orders-details">18,430€ - 482 units</p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="item">
                            <img className="orders-logo" src="/images/testImgOrder.jpg" alt="Testlogo"/>
                        </div>
                        <div className="item">   
                            <h2>S020200002</h2>
                            <p className="orders-details">18,430€ - 482 units</p>
                        </div> 
                    </div>
                </div>
        </div>
    )
}

export default Orders