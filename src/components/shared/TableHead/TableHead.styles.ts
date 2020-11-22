import styled from '@emotion/styled';
import {TableCell} from '@material-ui/core';

export const HiddenSpan = styled.span`
    border: 0;
    clip: rect(0 0 0 0);
    height: 1;
    margin: -1;
    overflow: hidden;
    padding: 0;
    position: absolute;
    top: 20;
    width: 1;
`;
export const NarrowCell = styled(TableCell)`
    cursor: pointer;
    flex: 1;
`;
export const TextHead = styled.p`
    font-weight: 400;
    font-size: 13px;
`;
export const TextHeadCell = styled(TableCell)`
    && {
        border: none;
    }
`;
