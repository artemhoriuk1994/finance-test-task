import { AppBar, Box, Typography } from "@mui/material"

const Header = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <AppBar position='static'>
                <Box sx={{ padding: '15px' }}>
                    <Typography variant="h6" component="p">
                        Tickers App
                    </Typography>
                </Box>
            </AppBar>
        </Box>
    )
}

export default Header;