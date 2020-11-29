export const prepareAlertDetails = (
    handleCloseAlert: any,
    alertType: string = 'error',
    alertText: string | boolean = 'Error loading data',
) => {
    const data: any = {};
    data.alertType = alertType;
    data.alertText = alertText;
    data.handleCloseAlert = handleCloseAlert;
    return data;
};
