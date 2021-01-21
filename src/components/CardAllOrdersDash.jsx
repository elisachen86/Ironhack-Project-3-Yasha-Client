import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const CardAllOrdersDash = ({ name, number, total}) => {
    return (
        <div>
            <Card className="card">
      <CardContent>
        {/* <Typography color="textSecondary" gutterBottom>
          Image
        </Typography> */}
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography color="textSecondary">
          {number} - ${total}k
        </Typography>
      </CardContent>
    </Card>
        </div>
    )
}

export default CardAllOrdersDash
