import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { colorPicker } from '../../../utils/colorPicker';
import FavItemContext from '../../../context/favItemContext/favItemContext';
import {
  Container,
  Info,
  InfoName,
  InfoData,
  Button,
  Label,
  ReactTooltipStyled
} from './FavItemCardStyled';
import localization from './localization';

const FavItemCard = ({ favItem }) => {
  const { removeFavItem, edit_FavItem, clearEdit, toggle_Form, toggleForm } = useContext(
    FavItemContext
  );
  const { _id, author, title, category, description } = favItem;
  const { formatMessage } = useIntl();

  const handleRemove = () => {
    removeFavItem(_id);
    clearEdit();
  };

  const toggle = () => {
    edit_FavItem(favItem);
    toggle_Form(!toggleForm);
  };

  return (
    <Container>
      <Info>
        <InfoName>{formatMessage(localization.author)}:</InfoName>
        <InfoData data-tip={author} data-arrow-color="cadetblue" data-background-color="cadetblue">
          {author}
        </InfoData>
        <Label color={colorPicker(category)}>{category.charAt(0)}</Label>
      </Info>
      <Info>
        <InfoName>{formatMessage(localization.title)}:</InfoName>
        <InfoData data-tip={title} data-arrow-color="cadetblue" data-background-color="cadetblue">
          {title}
        </InfoData>
      </Info>
      <Info>
        <InfoName>{formatMessage(localization.category)}:</InfoName>
        <InfoData>{category}</InfoData>
      </Info>
      <Info>
        <InfoName>{formatMessage(localization.description)}:</InfoName>
        <InfoData
          data-tip={description}
          data-arrow-color="cadetblue"
          data-background-color="cadetblue"
        >
          {description}
        </InfoData>
      </Info>
      <ReactTooltipStyled place="left" effect="solid" />
      <Button onClick={toggle}>{formatMessage(localization.editCard)}</Button>
      <Button onClick={handleRemove}>{formatMessage(localization.removeCard)}</Button>
    </Container>
  );
};

FavItemCard.propTypes = {
  favItem: PropTypes.object.isRequired
};

export default FavItemCard;
