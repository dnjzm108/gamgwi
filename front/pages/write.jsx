import MobileMenuBar from "../component/MobileMenuBar"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import WebLayout from "../component/layout/webLayout";
import TodayWeather from "../component/TodayWeather";
import Styled from "styled-components";


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));


const Write = () => {
    const classes = useStyles();
    return (
        <>
            <WebLayout>
                <WebTitle>오늘의 글귀</WebTitle>
                <div className={classes.root}>
                    
                    <TodayWeather />

                    <div>
                        <InputTitle type="text" />
                        <InputContent name="" id="" cols="30" rows="10"></InputContent>
                    </div>

                    <ButtonBox>
                        <Button variant="contained" style={ButtonDetail}>취소</Button>
                        <Button variant="contained">저장</Button>
                    </ButtonBox>
                </div>
                <MobileMenuBar />
            </WebLayout>
        </>
    )
}

export default Write



const InputTitle = Styled.input`
    width : 100%;
    height : 35px;
    border : 1px solid lightgray;
    border-radius: 5px;
    font-size : 20px;
    
    :focus {
        outline:none;
    }

`

const InputContent = Styled.textarea`
    margin: 0px;
    width: 100%;
    height: 340px;
    margin-top: 30px;
    border : 1px solid lightgray;
    border-radius: 5px;
    font-size : 20px;

    :focus {
        outline:none;
    }

    @media only screen and (min-width:768px){
        height: 30vw;
    }
`

const ButtonBox = Styled.div`
    text-align : right;
    @media only screen and (min-width:768px){
        height : auto;
        padding: 100px 0 0 0;
    }
`

const ButtonDetail = {
    'margin-right': '10px',
}

const WebTitle = Styled.div`
    display :none;
    @media only screen and (min-width:768px){
            display : block;
            font-size : 30px;
            text-align : center;
            font-weight : bold;
    }
`