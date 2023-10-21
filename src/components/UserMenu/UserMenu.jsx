import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Container, Par, Button } from './UserMenu.styled';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <Container>
      <Par>Welcome to Phonebook {user.name} </Par>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Container>
  );
};
