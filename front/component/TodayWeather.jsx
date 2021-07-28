import Styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
import FilterDramaRoundedIcon from '@material-ui/icons/FilterDramaRounded';
import AcUnitIcon from '@material-ui/icons/AcUnit';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > svg, p' : {
            margin: theme.spacing(1.5),
        },
        
    },
}));

const TodayWeather = () => {
    const classes = useStyles();
    return (
        <>
            <TodayWeatherWrap>
                <div className={classes.root}>
                    <p>오늘, 내 마음의 날씨</p>
                    <WbSunnyRoundedIcon style={FontSize} />
                    <FilterDramaRoundedIcon style={FontSize} />
                    <AcUnitIcon style={FontSize} />
                </div>
            </TodayWeatherWrap>
        </>
    )
}

export default TodayWeather


const TodayWeatherWrap = Styled.div`
    height: auto;
    width: 100%;
    text-align : right;
`

const FontSize = {
    'font-size': '25'
}