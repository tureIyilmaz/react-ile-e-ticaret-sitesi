import { Backdrop } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import React, { useState } from 'react'
import { useSelector } from 'react-redux';

function Loading() {

    const { loading } = useSelector((store) => store.product);
    const [open, setOpen] = useState(loading);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Backdrop
            open={open}
            onClick={handleClose}
        >
            <CircularProgress />
        </Backdrop>
    )
}

export default Loading