import Styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
import FilterDramaRoundedIcon from '@material-ui/icons/FilterDramaRounded';
import AcUnitIcon from '@material-ui/icons/AcUnit';

const TodayWeather = () => {
    
    return (
        <>
            <TodayWeatherWrap>
                
                    <p>오늘, 내 마음의 날씨</p>
                    <WbSunnyRoundedIcon style={FontSize} />
                    <FilterDramaRoundedIcon style={FontSize} />
                    <AcUnitIcon style={FontSize} />
                
            </TodayWeatherWrap>
        </>
    )
}

export default TodayWeather


const TodayWeatherWrap = Styled.div`
    height: 100%;
    width: 100%;
    text-align : right;
`

const FontSize = {
    'fontSize': '25'
}