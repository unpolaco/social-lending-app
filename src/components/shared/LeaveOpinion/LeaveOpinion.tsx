import React from 'react';
import {Rating} from '@material-ui/lab';
import {Text} from './LeaveOpinion.styles';
import {Button, CircularProgress, TextField} from '@material-ui/core';
import {useLeaveOpinion} from '../../../hooks/api/investment/useLeaveOpinion';
import {Form, Formik} from 'formik';

export const LeaveOpinion: React.FC<any> = ({row}) => {
    const {isFetchingLeaveOpinion, isErrorLeaveOpinion, fetchLeaveOpinion} = useLeaveOpinion();
    const author = row.lenderName;
    const investmentId = row.investmentId;

    if (isFetchingLeaveOpinion) {
        return <CircularProgress />;
    }
    if (isErrorLeaveOpinion) {
        alert('Error');
    }

    function handleLeaveOpinion(values: any) {
        const opinionDetails = {
            author: author,
            opinionText: values.opinionText,
            opinionRating: +values.opinionRating,
        };
        fetchLeaveOpinion(investmentId, opinionDetails);
    }

    return (
        <div>
            <Text>Leave your opinion about transaction</Text>
            <Formik initialValues={{opinionRating: 5, opinionText: ''}} onSubmit={handleLeaveOpinion}>
                {({handleSubmit, values, handleChange}) => {
                    return (
                        <Form onSubmit={handleSubmit}>
                            <Text>Rate user</Text>
                            <Rating
                                name="opinionRating"
                                size="small"
                                precision={0.5}
                                value={values.opinionRating}
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
        </div>
    );
};
