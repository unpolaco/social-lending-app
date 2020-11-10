import styled from '@emotion/styled';
import {Box} from '@material-ui/core/';

export const StyledMainBox = styled(Box)`
    height: calc(100vh - 80px);
    margin: 0 auto;
    background-color: #487eb0;
    padding: 30px;
`;
export const WelcomeBox = styled(Box)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    margin: 30px;
`;
export const StyledBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 50%;
    background-color: #40739e;
    border-radius: 5px;
`;
