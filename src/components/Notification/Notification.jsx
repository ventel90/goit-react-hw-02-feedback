import PropTypes from 'prop-types';
import { Notifi } from './Notification.styled';

export const Notification = ({ message }) => {
  return <Notifi>{message}</Notifi>;
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}