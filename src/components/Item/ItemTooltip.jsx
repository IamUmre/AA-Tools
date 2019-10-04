import React from 'react';
import ReactHintFactory from 'react-hint';
import { Typography } from '@material-ui/core';
import ITEMS from 'constants/items';
import Currency from 'components/Currency';

const ReactHint = ReactHintFactory(React);

const renderItemTooltip = (target) => {
  const { itemName, count } = target.dataset;

  const item = Object.values(ITEMS).find((item) => item.name === itemName);
  // validate item exists
  if (!item) {
    return;
  }

  const { name, icon, type, description, quality, bindsOnPickup, price } = item;

  return (
    <div>
      <section className="header" data-quality={quality}>
        <div className="item-icon">
          <img src={icon} alt={name} />
          <Typography className="count">{count > 1 && count}</Typography>
        </div>
        <div className="item-name">
          <Typography variant="h5" component="h5">{type}</Typography>
          <Typography variant="h4" component="h4" className="quality-color">{name}</Typography>
        </div>
      </section>
      {bindsOnPickup && <section>
        <p>Binds on Pickup</p>
      </section>}
      <section>
        <p>{description}</p>
      </section>
      <section>
        {price > 0 ?
          <p><Currency type={REWARD.COIN} count={price} /></p> :
          <p className="no-sell">Cannot Sell</p>}
      </section>
    </div>
  );
};

const ItemTooltip = () => (
  <ReactHint
    attribute="data-item"
    className="archeage-tooltip"
    events
    onRenderContent={renderItemTooltip}
    // position="left"
    autoPosition
  />
);

export default ItemTooltip;