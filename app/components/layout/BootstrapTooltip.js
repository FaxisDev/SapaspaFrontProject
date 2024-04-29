'use client'
import { Tooltip, tooltipClasses } from "@mui/material";
import { styled } from "@mui/material"
import Zoom from '@mui/material/Zoom';

export const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} TransitionComponent={Zoom} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.black,
    },
}));
