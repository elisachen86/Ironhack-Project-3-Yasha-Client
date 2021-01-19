import React, { Component } from 'react';

import Typography from "@material-ui/core/Typography";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

export default class Loading extends Component {
    render() {
        return (
            <div>
                <Typography component="h1" variant="h5">
                <CloudUploadIcon></CloudUploadIcon>
                Loading ...
                </Typography>
            </div>
        )
    }
}
