import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';

const SearchBar = ({ placeholder }) => {
    return (
        <Box sx={{ width: '100%', m: '0 auto' }}>
            <TextField
                fullWidth
                variant="outlined"
                placeholder={placeholder}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '50px' } }}
            />
        </Box>
    );
};

export default SearchBar;
