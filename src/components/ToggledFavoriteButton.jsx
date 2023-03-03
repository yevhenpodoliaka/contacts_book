import { useEffect } from 'react';
import toast from 'react-hot-toast';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useToggleFavoriteContactMutation } from '../redux/phoneBook/phoneBookApi';

const ToggledFavoriteButton = ({ id, name, favorite }) => {

  const [
    toggleFavoriteContact,
    {
      isSuccess: isSuccessToggledFavorite,
      error: isErrorToggledFavorite,
      isLoading: isToggledFavorite,
    },
  ] = useToggleFavoriteContactMutation();

  useEffect(() => {
    if (isSuccessToggledFavorite) {
      toast.success(`status contact ${name} "is favorite" changed`);
    }

    if (isErrorToggledFavorite) {
      toast.error(
        `an error occurred while changing the status of a contact${name}`
      );
    }
  }, [isErrorToggledFavorite, isSuccessToggledFavorite, name]);
  return (
    <IconButton
      size="small"
      aria-label="favorite"
      color="primary"
      disabled={isToggledFavorite}
      onClick={() =>
        toggleFavoriteContact({
          id,
          data: { favorite: !favorite },
        })
      }
    >
      {favorite ? (
        <FavoriteIcon fontSize="inherit" />
      ) : (
        <FavoriteBorderIcon fontSize="inherit" />
      )}
    </IconButton>
  );
};

export default ToggledFavoriteButton;
