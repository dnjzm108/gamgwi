import Button from '@material-ui/core/Button';
import Styled from 'styled-components';

const TextArea = () => {
    return (
        <>
            <WriteWrap>
                <div>
                    <InputTitle type="text" />
                    <InputContent name="" id="" cols="30" rows="10"></InputContent>
                </div>

                <ButtonBox>
                    <Button variant="contained" style={ButtonDetail}>취소</Button>
                    <Button variant="contained">저장</Button>
                </ButtonBox>
            </WriteWrap>
        </>
    )
}

export default TextArea

const WriteWrap = Styled.div`
    width : 100%;
    height : 70vh;
    margin : 0;
`


const InputTitle = Styled.input`
    width : 98%;
    height : 35px;
    border : 1px solid lightgray;
    border-radius: 5px;
    font-size : 20px;
    
    :focus {
        outline:none;
    }
    @media only screen and (min-width:768px){
        width: 99.5%;
    }

`
const InputContent = Styled.textarea`
    //margin: 0px;
    width: 98%;
    height: 340px;
    margin-top: 30px;
    border : 1px solid lightgray;
    border-radius: 5px;
    font-size : 20px;

    :focus {
        outline:none;
    }

    @media only screen and (min-width:768px){
        width: 99.5%;
        height: 15vw;
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
    'marginRight': '10px',
}