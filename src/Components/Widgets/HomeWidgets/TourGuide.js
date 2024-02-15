import { ArrowForward } from '@mui/icons-material'
import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'

const TourGuide = () => {

    const [isKedarnath, setIsKedarnath] = useState(false)
    const [isVrindavan, setIsVrindavan] = useState(false)
    const [isSomnath, setIsSomnath] = useState(false)
    const [isBtn, setIsBtn] = useState(false)

    return (
        <Box style={{ backgroundImage: "url('/images/home/tour_background.png')", backgroundSize: 'cover' }}>
            { /* For larger screens than sm */}
            <Box display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }} justifyContent='center' marginLeft='30%' marginRight='30%' paddingTop='2%'>
                <Paper variant='outlined' style={{ background: 'transparent', marginTop: '1.4%', marginRight: '1.5%', border: 'none' }}>
                    <img src='/images/home/services_sign.png' width='13px' height='16px' />
                </Paper>
                <Typography color='white' fontSize='24px' marginTop='1%'>PLAN YOUR TRIP</Typography>
                <Paper variant='outlined' style={{ background: 'transparent', marginTop: '1.4%', marginLeft: '1.5%', border: 'none' }}>
                    <img src='/images/home/services_sign.png' width='13px' height='16px' />
                </Paper>
            </Box>
            { /* For sm and smaller screens */}
            <Box display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }} justifyContent='center' marginLeft='25%' marginRight='25%' paddingTop='5%'>
                <Paper variant='outlined' style={{ background: 'transparent', marginTop: '0.8%', marginRight: '1.5%', border: 'none' }}>
                    <img src='/images/home/services_sign.png' width='11px' height='13px' />
                </Paper>
                <Typography color='white' fontSize='18px' marginTop='1%'>PLAN YOUR TRIP</Typography>
                <Paper variant='outlined' style={{ background: 'transparent', marginTop: '0.8%', marginLeft: '1.5%', border: 'none' }}>
                    <img src='/images/home/services_sign.png' width='11px' height='13px' />
                </Paper>
            </Box>

            { /* For larger screens than md */}
            <Box display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }} justifyContent='center' marginLeft='32%' marginRight='32%'>
                <Typography color='#f8f7f4' fontSize='35px' marginTop='2.5%' textAlign='center'>Spiritual Tour Guide</Typography>
            </Box>
            { /* For sm and smaller screens */}
            <Box display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }} justifyContent='center' marginLeft='30%' marginRight='30%'>
                <Typography color='#f8f7f4' fontSize='15px' marginTop='2.5%' fontWeight='500' textAlign='center'>Spiritual Tour Guide</Typography>
            </Box>

            { /* For larger screens than sm */}
            <Box display={{ xs: 'none', sm: 'none', md: 'block' }} sx={{ width: '8%', border: 'none', borderTop: '5px solid #f24e1e', marginBottom: '5%' }} mx='auto' />
            { /* For sm and smaller screens */}
            <Box display={{ xs: 'block', sm: 'block', md: 'none' }} sx={{ width: '12%', border: 'none', borderTop: '3px solid #f24e1e', marginBottom: '5%' }} mx='auto' />

            <Grid container>
                { /* For larger screens than md */}
                <Grid item md={3} display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }} marginRight='4%' marginLeft='4%' >
                    <Box>
                        <Box>
                            <Paper variant='outlined' style={{ background: 'transparent', border: 'none' }}>
                                <img src={isKedarnath ? '/images/home/tour_kedarnath_hover.png' : '/images/home/tour_kedarnath.png'} width='100%' onMouseOver={() => setIsKedarnath(true)} onMouseOut={() => setIsKedarnath(false)} />
                            </Paper>
                        </Box>
                        <Box display='flex' justifyContent='center' >
                            <Typography color='white' fontSize='40px' marginTop='2.5%' textAlign='center'>Kedarnath</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={3} display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }} marginRight='4%' marginLeft='4%' marginTop='5%' >
                    <Box>
                        <Box>
                            <Paper variant='outlined' style={{ background: 'transparent', border: 'none' }}>
                                <img src={isVrindavan ? '/images/home/tour_vrindavan_hover.png' : '/images/home/tour_vrindavan.png'} width='100%' onMouseOver={() => setIsVrindavan(true)} onMouseOut={() => setIsVrindavan(false)} />
                            </Paper>
                        </Box>
                        <Box display='flex' justifyContent='center' >
                            <Typography color='white' fontSize='40px' marginTop='2.5%' textAlign='center'>Vrindavan</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={3} display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }} marginRight='4%' marginLeft='4%' >
                    <Box>
                        <Box>
                            <Paper variant='outlined' style={{ background: 'transparent', border: 'none' }}>
                                <img src={isSomnath ? '/images/home/tour_somnath_hover.png' : '/images/home/tour_somnath.png'} width='100%' onMouseOver={() => setIsSomnath(true)} onMouseOut={() => setIsSomnath(false)} />
                            </Paper>
                        </Box>
                        <Box display='flex' justifyContent='center' >
                            <Typography color='white' fontSize='40px' marginTop='2.5%' textAlign='center'>Som Nath</Typography>
                        </Box>
                    </Box>
                </Grid>

                { /* For sm and smaller screens */}
                <Grid item md={3} display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none' }} marginRight='5%' marginLeft='5%' marginBottom='8%' marginTop='5%' >
                    <Box>
                        <Box>
                            <Paper variant='outlined' style={{ background: 'transparent', border: 'none' }}>
                                <img src='/images/home/tour_kedarnath.png' width='100%' />
                            </Paper>
                        </Box>
                        <Box display='flex' justifyContent='center' >
                            <Typography color='white' fontSize='25px' marginTop='2.5%' textAlign='center'>Kedarnath</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={3} display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none' }} marginRight='5%' marginLeft='5%' marginBottom='8%' >
                    <Box>
                        <Box>
                            <Paper variant='outlined' style={{ background: 'transparent', border: 'none' }}>
                                <img src='/images/home/tour_vrindavan.png' width='100%' />
                            </Paper>
                        </Box>
                        <Box display='flex' justifyContent='center' >
                            <Typography color='white' fontSize='25px' marginTop='2.5%' textAlign='center'>Vrindavan</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={3} display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none' }} marginRight='5%' marginLeft='5%' marginBottom='8%' >
                    <Box>
                        <Box>
                            <Paper variant='outlined' style={{ background: 'transparent', border: 'none' }}>
                                <img src='/images/home/tour_somnath.png' width='100%' />
                            </Paper>
                        </Box>
                        <Box display='flex' justifyContent='center' >
                            <Typography color='white' fontSize='25px' marginTop='2.5%' textAlign='center'>Som Nath</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            { /* For larger screens than md */}
            <Box display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }} justifyContent='center' marginTop='3%' paddingBottom='2%'>
                <Button variant='outlined' endIcon={<ArrowForward />} style={{ backgroundColor: isBtn ? '#f24e1e' : 'transparent', color: 'white', border: isBtn ? '1px solid #f24e1e' : '1px solid white', borderRadius: '20px', marginRight: '10px', fontWeight: 'bold', textTransform: 'none', boxShadow: isBtn ? '0px 2px 2px 2px rgba(0,0,0,0.15)' : 'none' }} onMouseOver={() => setIsBtn(true)} onMouseOut={() => setIsBtn(false)}>Explore</Button>
            </Box>
            { /* For larger screens than md */}
            <Box display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }} justifyContent='center' marginTop='3%' paddingBottom='5%'>
                <Button variant='outlined' endIcon={<ArrowForward />} style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid white', borderRadius: '20px', marginRight: '10px', fontWeight: 'bold', textTransform: 'none' }}>Explore</Button>
            </Box>
        </Box>
    )
}

export default TourGuide