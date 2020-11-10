import styled from '@emotion/styled';
import {Paper} from '@material-ui/core/';

export const NavigationBox = styled.div`
    background-color: #487eb0;
    color: white;
    padding: 0 30px;
    border-top: 1px solid white;
    margin-bottom: 8px;
    height: 40px;
`;
export const StyledBackgroundPaper = styled(Paper)`
    height: calc(100vh - 136px);
    margin: 8px;
    padding: 8px;
    overflow: scroll;
    text-align: center;
`;
