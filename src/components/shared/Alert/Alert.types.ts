export interface AlertTypeProps {
    handleCloseAlert?: any;
    alertType?: 'success' | 'info' | 'warning' | 'error';
    alertText?: string | boolean;
}
