import React from 'react';
import {Rating} from '@material-ui/lab';
import {Text} from './LeaveOpinion.styles';
import {Button, CircularProgress, TextField} from '@material-ui/core';
import {useLeaveOpinion} from '../../../hooks/api/investment/useLeaveOpinion';
import {Form, Formik} from 'formik';
import {AlertSnackBar} from '../Alert/AlertSnackbar';
import {LeaveOpinionProps} from './LeaveOpinion.types';
import {prepareAlertDetails} from './../../shared/Alert/Alert.helpers';

export const LeaveOpinion: React.FC<LeaveOpinionProps> = ({row, currentInvestmentOpinion, handleGetPublicProfile}) => {
    const {isErrorLeaveOpinion, fetchLeaveOpinion, setIsErrorLeaveOpinion, isResponse, setIsResponse} = useLeaveOpinion();
    const author = row.lenderName;
    const investmentId = row.investmentId;
    const initialValues = currentInvestmentOpinion
        ? {opinionRating: currentInvestmentOpinion.opinionRating, opinionText: currentInvestmentOpinion.opinionText}
        : {opinionRating: 0, opinionText: ''};

    async function handleLeaveOpinion(values: any) {
        const opinionDetails = {
            author: author,
            opinionText: values.opinionText,
            opinionRating: +values.opinionRating,
            investmentId: investmentId,
        };
        await fetchLeaveOpinion(investmentId, opinionDetails);
        handleGetPublicProfile();
    }

    let alertDetails: any = {};
    if (isErrorLeaveOpinion) {
        alertDetails = prepareAlertDetails(setIsErrorLeaveOpinion, 'error', 'Your opinion can not be submitted');
    } else if (isResponse) {
        alertDetails = prepareAlertDetails(setIsResponse, 'success', 'Your opinion was submitted');
    }

    return (
        <div>
            <Text>Leave your opinion about transaction</Text>
            <Formik initialValues={initialValues} onSubmit={handleLeaveOpinion}>
                {({handleSubmit, values, handleChange}) => {
                    return (
                        <Form onSubmit={handleSubmit}>
                            <Text>Rate user</Text>
                            <Rating
                                name="opinionRating"
                                size="small"
                                precision={0.5}
                                value={+values.opinionRating}
                                onChange={handleChange}
                            />
                            <TextField
                                name="opinionText"
                                type="textarea"
                                multiline
                                rows={4}
                                variant="outlined"
                                label={'Leave your opinion'}
                                value={values.opinionText}
                                onChange={handleChange}
                            />
                            <Button type="submit" variant="outlined">
                                Submit
                            </Button>
                        </Form>
                    );
                }}
            </Formik>
            {alertDetails.alertType && (
                <AlertSnackBar
                    alertType={alertDetails.alertType}
                    alertText={alertDetails.alertText}
                    handleCloseAlert={alertDetails.handleCloseAlert}
                ></AlertSnackBar>
            )}
        </div>
    );
};
