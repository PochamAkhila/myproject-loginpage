import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "../Sample/styles.css";
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Autocomplete from '@mui/material/Autocomplete';

const index = () => {

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const countries = [
        { code: 'AD', label: 'Andorra', phone: '376' },
        {
            code: 'AE',
            label: 'United Arab Emirates',
            phone: '971',
        },
        { code: 'AF', label: 'Afghanistan', phone: '93' },
        {
            code: 'AG',
            label: 'Antigua and Barbuda',
            phone: '1-268',
        },
    ]

    const currencies = [
        {
            value: 'USD',
            label: '$',
        },
        {
            value: 'EUR',
            label: '€',
        },
        {
            value: 'BTC',
            label: '฿',
        },
        {
            value: 'JPY',
            label: '¥',
        },
    ];
    return (
        <>
            <Box className='box-styles'
                component="form"
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        className='childs'
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue="Username"
                    />
                </div>
                {/* <div>
                    <TextField
                        className='childs'
                        id="outlined-disabled"
                        label="Required"
                        defaultValue="Enter Email id"
                    />
                </div> */}
                <div>
                    <TextField
                        className='childs'
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />
                </div>
                <div>
                    <TextField
                        className='childs'
                        id="standard-read-only-input"
                        label="Read Only"
                        defaultValue="Hello World"
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="standard"
                    />
                </div>
                <Autocomplete
                    className='childs'
                    id="country-select-demo"
                    // sx={{ width: 300 }}
                    options={countries}
                    autoHighlight
                    getOptionLabel={(option) => option.label}
                    renderOption={(props, option) => (
                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                            <img
                                loading="lazy"
                                // width="20"
                                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                alt=""
                                className='childs'
                            />
                            {option.label} ({option.code}) +{option.phone}
                        </Box>
                    )}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Choose a country"
                            inputProps={{
                                ...params.inputProps,
                                autoComplete: 'new-password', // disable autocomplete and autofill
                            }}
                        />
                    )}
                />
                <div>
                    <TextField
                        className='childs'
                        id="outlined-textarea"
                        label="Multiline Placeholder"
                        placeholder="Placeholder"
                        multiline
                    />
                </div>
                <div>
                    <TextField
                        className='childs'
                        id="filled-select-currency"
                        select
                        label="Select"
                        defaultValue="EUR"
                        helperText="Please select your currency"
                        variant="filled"
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div>
                    <Checkbox {...label} defaultChecked />
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                            <FormControlLabel
                                value="disabled"
                                disabled
                                control={<Radio />}
                                label="other"
                            />
                        </RadioGroup>
                    </FormControl>
                </div>
                <Button variant="contained">Contained</Button>
            </Box>
        </>

    )
}

export default index
