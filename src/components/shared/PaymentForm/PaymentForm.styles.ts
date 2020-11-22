import styled from '@emotion/styled';
import {paletteColors} from '../../../helpers/constants-colors';

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 200px;
    width: 300px;
    justify-content: space-between;
    padding: 20px;
    border: 1px solid ${paletteColors.palette.form.border};
    border-radius: 5px;
    background-color: ${paletteColors.palette.form.background};
`;
