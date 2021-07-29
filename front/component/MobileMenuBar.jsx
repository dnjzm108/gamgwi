import { makeStyles } from '@material-ui/core/styles';
import Styled from 'styled-components';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import FormatListBulletedRoundedIcon from '@material-ui/icons/FormatListBulletedRounded';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import PermIdentityRoundedIcon from '@material-ui/icons/PermIdentityRounded';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > svg': {
            //margin: theme.spacing(2),
            margin : '20px',
        },
    },
}));

const MenuBarWrap = Styled.div`
    width : 100%;
    height : 70px;
    border-top: 1px solid #e4e4e4;
    margin-top: 30px;
    @media only screen and (min-width:768px){
        display : none;
    }
`
const MenuFontSize = {
    'font-size' : '39'
}

const MobileMenuBar = () => {
    const classes = useStyles();
    return (
        <>
            <MenuBarWrap>
                <div className={classes.root}>
                    <FormatListBulletedRoundedIcon style={MenuFontSize} />
                    <FavoriteRoundedIcon style={MenuFontSize} />
                    <HomeRoundedIcon style={MenuFontSize} />
                    <CreateRoundedIcon style={MenuFontSize} />
                    <PermIdentityRoundedIcon style={MenuFontSize} />
                </div>
            </MenuBarWrap>
        </>
    )
}

export default MobileMenuBar